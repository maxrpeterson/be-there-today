import React from 'react';
import ReactDOM from 'react-dom';
import db from './firebase-config.jsx';
import ProtestList from './components/protest-list.jsx';
import Protest from './components/protest.jsx';

console.log(db);
window.db = db;

let stuff = () => {
  console.log('what?');
}

window.addEventListener('DOMContentLoaded', stuff);

const someProps = {
  name: 'stevey',
  location: 'what?'
};
window.someProps = someProps;

ReactDOM.render(
  <div>
    <h1>Be There Today</h1>
    <ProtestList />
  </div>,
  document.querySelector('#app-root')
);
