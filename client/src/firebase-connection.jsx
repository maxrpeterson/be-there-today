import { config } from './firebase-config.jsx';
import firebase from 'firebase/app';
import 'firebase/database';

console.log(config);
firebase.initializeApp(config);
export const db = firebase.database();
