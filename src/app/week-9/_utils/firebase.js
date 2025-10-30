// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCH1aIGhQcS9MCCGadu8Oy7QMDK7z9u_l0",
  authDomain: "cprg306-assignments-648a0.firebaseapp.com",
  projectId: "cprg306-assignments-648a0",
  storageBucket: "cprg306-assignments-648a0.firebasestorage.app",
  messagingSenderId: "1038711238777",
  appId: "1:1038711238777:web:a50f217166d894bea1e4a8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);