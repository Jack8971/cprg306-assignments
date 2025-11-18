// week-10/shopping-list/-services.js
import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, deleteDoc, doc } from "firebase/firestore";

// Hardcoded UID for testing
const userId = "7x8kKzZu7lSGw5sg22AGrIYXmX92";

// Fetch all items for the user
export async function getItems() {
  const itemsRef = collection(db, "users", userId, "items");
  const snapshot = await getDocs(itemsRef);
  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
}

// Add a new item to Firestore
export async function addItem(item) {
  const itemsRef = collection(db, "users", userId, "items");
  const docRef = await addDoc(itemsRef, item);
  return { id: docRef.id, ...item };
}

// Delete an item from Firestore
export async function deleteItem(itemId) {
  const itemRef = doc(db, "users", userId, "items", itemId);
  await deleteDoc(itemRef);
}
