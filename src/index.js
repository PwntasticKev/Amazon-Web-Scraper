import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
	apiKey: process.env.FIREBASE_KEY,
	authDomain: "scrape-a4e2c.firebaseapp.com",
	databaseURL: "https://scrape-a4e2c.firebaseio.com",
	projectId: "scrape-a4e2c",
	storageBucket: "scrape-a4e2c.appspot.com",
	messagingSenderId: "279807376626",
	appId: "1:279807376626:web:f71eedd8317a43aa7c246b",
	measurementId: "G-CSXZJVB4R5"
  };

  firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
