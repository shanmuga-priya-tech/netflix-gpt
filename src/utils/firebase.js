// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbCaVXqqQDkQRH0Ar7-3_EKW2gUkgKbdA",
  authDomain: "netflixgpt-e0fdd.firebaseapp.com",
  projectId: "netflixgpt-e0fdd",
  storageBucket: "netflixgpt-e0fdd.appspot.com",
  messagingSenderId: "743666820349",
  appId: "1:743666820349:web:74ec5b8f030859b8194a94",
  measurementId: "G-MRWRS0V71L",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
