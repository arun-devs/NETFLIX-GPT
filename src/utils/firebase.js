// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2RUGVEfVzoNY1Bsh8rk2NjRRpAKEPNso",
  authDomain: "netflixgpt-bda24.firebaseapp.com",
  projectId: "netflixgpt-bda24",
  storageBucket: "netflixgpt-bda24.firebasestorage.app",
  messagingSenderId: "219985528699",
  appId: "1:219985528699:web:90e7779225f1c9a4459fde",
  measurementId: "G-9V0FB5EHCL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);