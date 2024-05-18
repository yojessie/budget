import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCOZX3Qh9c99voZzxo5Z09WRzyNRkMoAh8",
  authDomain: "mybudget-7c7ca.firebaseapp.com",
  projectId: "mybudget-7c7ca",
  storageBucket: "mybudget-7c7ca.appspot.com",
  messagingSenderId: "630581586889",
  appId: "1:630581586889:web:0e39fa4fd6a199c3a7d618",
  measurementId: "G-KJSRB52ELP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = getAuth(app);
const firestore = getFirestore(app);

// Google Auth Provider
const googleProvider = new GoogleAuthProvider();

export { auth, firestore, googleProvider };
