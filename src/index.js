import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from "firebase";

// const firebase = require ('firebase');
// require ('firebase/firestore');


firebase.initializeApp({
  apiKey: "AIzaSyBrA-F4mHsxt-zq3PWfHup3L0CaWow0-qk",
  authDomain: "evernote-app-4e166.firebaseapp.com",
  projectId: "evernote-app-4e166",
  storageBucket: "evernote-app-4e166.appspot.com",
  messagingSenderId: "896255595579",
  appId: "1:896255595579:web:39d56b46838cfba770f81e",
  measurementId: "G-J5B5E8G1ET"
});



ReactDOM.render( <App />, document.getElementById('evernote-container'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
