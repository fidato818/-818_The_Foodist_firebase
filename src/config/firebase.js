import * as firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBe30BeWVTiG0SsWulSJ1zz0LCJhhNPQJA",
  authDomain: "la-nourriture.firebaseapp.com",
  databaseURL: "https://la-nourriture.firebaseio.com",
  projectId: "la-nourriture",
  storageBucket: "la-nourriture.appspot.com",
  messagingSenderId: "108676779284",
  appId: "1:108676779284:web:43a10e4073100d42"
})

// Initialize Firebase
const db = firebaseApp.firestore();

export {db};
