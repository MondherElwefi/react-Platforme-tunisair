// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNk5jLHYpYCMtsdcPfd5TI_YMA0UoFly4",
  authDomain: "tunisair-74368.firebaseapp.com",
  projectId: "tunisair-74368",
  storageBucket: "tunisair-74368.appspot.com",
  messagingSenderId: "264251873702",
  appId: "1:264251873702:web:7559517016e2e45447d767"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
