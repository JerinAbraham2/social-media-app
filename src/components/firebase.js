import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAqTapYJ3I7K-mVgqHEVPfeEkJWPctpZKI",
  authDomain: "social-media-app-e3965.firebaseapp.com",
  projectId: "social-media-app-e3965",
  storageBucket: "social-media-app-e3965.appspot.com",
  messagingSenderId: "597191939809",
  appId: "1:597191939809:web:a8d4d0363d343180d5c9a0",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };