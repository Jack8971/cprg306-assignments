import { db } from "./_utils/firebase";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc
} from "firebase/firestore";

// Get all items for a specific user
export async function getItems(userId) {
  const itemsRef = collection(db, "users", userId, "items");
  const snapshot = await getDocs(itemsRef);
  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
}

//  Add a new item for a specific user
export async function addItem(userId, item) {
  const itemsRef = collection(db, "users", userId, "items");
  const docRef = await addDoc(itemsRef, item);
  return { id: docRef.id, ...item };
}

//  Delete an item for a specific user
export async function deleteItem(userId, itemId) {
  const itemRef = doc(db, "users", userId, "items", itemId);
  await deleteDoc(itemRef);
}
