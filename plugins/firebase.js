// import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import firebase from "firebase";
require("firebase/auth");

const firebaseConfig = {
  apiKey: "AIzaSyALWZdoQh1e0BZwCzVbyuiF1gVgzUTlfB8",
  authDomain: "vancung-7fd88.firebaseapp.com",
  projectId: "vancung-7fd88",
  storageBucket: "vancung-7fd88.appspot.com",
  messagingSenderId: "404039471408",
  appId: "1:404039471408:web:09658f85c027adca9678f5",
  measurementId: "G-QY4REF6FRR",
};

const app = firebase.initializeApp(firebaseConfig);

export const auth = app.auth();
export const db = app.firestore();
export const storage = app.storage();
