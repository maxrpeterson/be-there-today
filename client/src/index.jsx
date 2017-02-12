import React from 'react';
import ReactDOM from 'react-dom';
import Firebase from 'firebase';
import config from './firebase-config.jsx';

console.log(config);

const db = Firebase.initializeApp(config);

let stuff = () => {
  console.log('what?');
}

window.addEventListener('DOMContentLoaded', stuff);

ReactDOM.render(
  <h1>lolwut?</h1>,
  document.querySelector('#app-root')
);
