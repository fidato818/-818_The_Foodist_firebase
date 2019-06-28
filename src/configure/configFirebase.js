import React from "react";
import firebase from "firebase";

const config = {
  apiKey: "AIzaSyBe30BeWVTiG0SsWulSJ1zz0LCJhhNPQJA",
  authDomain: "la-nourriture.firebaseapp.com",
  databaseURL: "https://la-nourriture.firebaseio.com",
  projectId: "la-nourriture",
  storageBucket: "la-nourriture.appspot.com",
  messagingSenderId: "108676779284",
  appId: "1:108676779284:web:43a10e4073100d42"
};

var configFirebase = firebase.initializeApp(config);

// Initialize Firebase
export default configFirebase;
