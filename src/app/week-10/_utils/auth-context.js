"use client";

import { useContext, createContext, useState, useEffect } from "react";
import {
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  GithubAuthProvider,
} from "firebase/auth";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc
} from "firebase/firestore";
import { auth, db } from "./firebase";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  //  GitHub login
  const gitHubSignIn = () => {
    const provider = new GithubAuthProvider();
    return signInWithPopup(auth, provider);
  };

  //  Firebase logout
  const firebaseSignOut = () => {
    return signOut(auth);
  };

  //  Firestore: get items
  const getItems = async (userId) => {
    const itemsRef = collection(db, "users", userId, "items");
    const snapshot = await getDocs(itemsRef);
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  };

  //  Firestore: add item
  const addItem = async (userId, item) => {
    const itemsRef = collection(db, "users", userId, "items");
    const docRef = await addDoc(itemsRef, item);
    return { id: docRef.id, ...item };
  };

  //  Firestore: delete item
  const deleteItem = async (userId, itemId) => {
    const itemRef = doc(db, "users", userId, "items", itemId);
    await deleteDoc(itemRef);
  };

  //  Track auth state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{
      user,
      gitHubSignIn,
      firebaseSignOut,
      getItems,
      addItem,
      deleteItem
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useUserAuth = () => useContext(AuthContext);
