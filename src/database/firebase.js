// src/firebaseConfig.js
import firebase from "firebase";

// Your web app's Firebase configuration
var config = {
  apiKey: "AIzaSyDxEvg0HrI7DGYaqhEwWQflrmMuCPKJal4",
  authDomain: "aru-1234.firebaseapp.com",
  databaseURL: "https://aru-1234.firebaseio.com",
  projectId: "aru-1234",
  storageBucket: "aru-1234.appspot.com",
  messagingSenderId: "824983978258",
  appId: "1:824983978258:web:556151dc07e0639b7bb3cb",
  measurementId: "G-Z6KZ304RE9"
};

// Initialize Firebase
export default firebase.initializeApp(config);
