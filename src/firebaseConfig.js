// // src/firebaseConfig.js
// import firebase from 'firebase/app';
// import 'firebase/firestore';


// Import Firebase app and any specific Firebase services needed
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Example for Firestore
// Import other services as needed, e.g., `auth` for Firebase Authentication

const firebaseConfig = {
    apiKey: "AIzaSyCTraQHEZmkN2Q0OEo9Gap22yoKEFBaNfM",
  authDomain: "learnarabicwithmagpie-b5010.firebaseapp.com",
  projectId: "learnarabicwithmagpie-b5010",
  storageBucket: "learnarabicwithmagpie-b5010.firebasestorage.app",
  messagingSenderId: "37807782229",
  appId: "1:37807782229:web:6de6747ea1e43a5c5c17dc",
  measurementId: "G-88MH8SVM2Q"
};

// firebase.initializeApp(firebaseConfig);
// const db = firebase.firestore();

// export { db };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore (if using Firestore, replace with any other service as needed)
const db = getFirestore(app);

// Export the app and other initialized services if needed
export { app, db };