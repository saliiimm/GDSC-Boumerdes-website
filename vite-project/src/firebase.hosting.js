// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkNpFZFBPS1IvHVVX4Pd8JSrqvfpDq9cA",
  authDomain: "gdsc-umbb-website.firebaseapp.com",
  projectId: "gdsc-umbb-website",
  storageBucket: "gdsc-umbb-website.appspot.com",
  messagingSenderId: "521214084712",
  appId: "1:521214084712:web:bd5b53bbbec28395031ddd",
  measurementId: "G-CYQZQQ8NMC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
