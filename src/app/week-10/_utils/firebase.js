// week-10/_utils/firebase.js
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCH1aIGhQcS9MCCGadu8Oy7QMDK7z9u_l0",
  authDomain: "cprg306-assignments-648a0.firebaseapp.com",
  projectId: "cprg306-assignments-648a0",
  storageBucket: "cprg306-assignments-648a0.firebasestorage.app",
  messagingSenderId: "1038711238777",
  appId: "1:1038711238777:web:a50f217166d894bea1e4a8"
};

// ✅ Prevent duplicate initialization
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
