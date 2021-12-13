// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD195diF8YwOhvvK2T5H73x9dMDZ8BVTeg",
  authDomain: "nft-challenge.firebaseapp.com",
  projectId: "nft-challenge",
  storageBucket: "nft-challenge.appspot.com",
  messagingSenderId: "481734222735",
  appId: "1:481734222735:web:c716a1c04e4af07219a1fa",
  measurementId: "G-YFGYV2J1RZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);