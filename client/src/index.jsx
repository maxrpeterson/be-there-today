import * as React from 'react';
import * as ReactDom from 'react-dom';
import * as Firebase from 'firebase';

const db = Firebase.initialize;

let stuff = () => {
  console.log('what?');
  console.log(React);
  console.log(ReactDom);
}

ReactDom.render(
  <h1>lolwut?</h1>,
  document.querySelector('#app-root')
);

window.addEventListener('DOMContentLoaded', stuff);
