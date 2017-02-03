const FB = require('fb');
const https = require('https');
const fs = require('fs');
const appId = process.env.FB_APP_ID;
const appSecret = process.env.FB_APP_SECRET;
const accessToken = process.env.FB_ACCESS_TOKEN;
const searchTerms =  process.argv[2] || 'protest';
const origEventsUrl = `https://graph.facebook.com/v2.8/search?q=${encodeURIComponent(searchTerms)}&type=event&limit=10&access_token=${accessToken}`;

let fbEvents = [];

function parseEventsData(rawData) {
  let parsed;
  try {
    parsed = JSON.parse(rawData);
  } catch(e) {
    return Promise.reject(e);
  }
  return Promise.resolve(parsed);
}

function getRawEventsData(url) {
  return new Promise((resolve, reject) => {
    https.get(url, response => {
      let rawData = '';
      response.on('data', d => rawData += d);
      response.on('end', () => {
        resolve(rawData);
      });
    }).on('error', e => {
      reject(e);
    });
  });
}

function recursivelyGetEventsData(url = origEventsUrl) {
  return new Promise((resolve, reject) => {
    getRawEventsData(url)
      .then(parseEventsData)
      .then(json => {
        if (json.error) return Promise.reject(json.error);
        console.log('paging: ', json.paging);
        fbEvents = fbEvents.concat(json.data);
        if (json.paging && json.paging.next) {
          return Promise.resolve(recursivelyGetEventsData(json.paging.next));
        } else {
          return Promise.resolve(fbEvents);
        }
      })
      .then(events => {
        return resolve(events);
      }).catch(e => {
        return reject(e);
      });
    });
}

function writeDataToDisk(data) {
  return new Promise((resolve, reject) => {
    fs.writeFile('fb-events.json', JSON.stringify(data), 'utf8', err => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
}

recursivelyGetEventsData().then(events => {
  console.log(events.length);
  writeDataToDisk(events).then(() => {
    console.log('written');
  }).catch(error => console.error(error));
}).catch(e => console.error(e));
