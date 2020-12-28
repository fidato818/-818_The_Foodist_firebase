import * as firebase from "firebase";

const firebaseApp = firebase.initializeApp({

})

// Initialize Firebase
const db = firebaseApp.firestore();

export {db};
