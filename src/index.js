import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "../.firebaserc";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
	apiKey: "api-key",
	authDomain: "project-id.firebaseapp.com",
	databaseURL: "https://project-id.firebaseio.com",
	projectId: "project-id",
	storageBucket: "project-id.appspot.com",
	messagingSenderId: "sender-id",
	appId: "app-id",
	measurementId: "G-measurement-id",
  };

  firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
