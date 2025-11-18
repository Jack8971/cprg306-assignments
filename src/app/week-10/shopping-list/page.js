// // 'use client';

// // import { useState, useEffect } from 'react';
// // // import { useUserAuth } from '../_utils/auth-context';
// // const user = { uid: "7x8kKzZu7lSGw5sg22AGrIYXmX92" };

// // import { useRouter } from 'next/navigation';
// // import NewItem from './new-item';
// // import ItemList from './item-list';
// // import MealIdeas from './meal-ideas';
// // import itemsData from './items.json';

// // export default function Page() {
// //   const { user } = useUserAuth();
// //   const router = useRouter();
// //   const [items, setItems] = useState(itemsData);
// //   const [selectedItemName, setSelectedItemName] = useState('');

// //   // Redirect to landing page if not logged in
// //   useEffect(() => {
// //     if (!user) {
// //       router.push('/week-9');
// //     }
// //   }, [user, router]);

// //   // Prevent rendering before redirect
// //   if (!user) {
// //     return null;
// //   }

// //   function handleAddItem(newItem) {
// //     setItems(prevItems => [...prevItems, newItem]);
// //   }

// //   function cleanItemName(name) {
// //     let cleaned = name.split(',')[0].trim();
// //     cleaned = cleaned.replace(
// //       /([\u2700-\u27BF]|[\uE000-\uF8FF]|[\uD83C-\uDBFF\uDC00-\uDFFF])+/g,
// //       ''
// //     );
// //     return cleaned.trim();
// //   }

// //   function handleItemSelect(name) {
// //     const cleanedName = cleanItemName(name);
// //     setSelectedItemName(cleanedName);
// //   }

// //   return (
// //     <main className="min-h-screen bg-black py-6 px-4">
// //       <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
// //         <div className="space-y-8">
// //           <h1 className="text-2xl font-bold mb-6 text-white">Week 9 - Shopping List + Meal Ideas</h1>
// //           <NewItem onAddItem={handleAddItem} />
// //           <ItemList items={items} onItemSelect={handleItemSelect} />
// //         </div>
// //         <div className="space-y-4">
// //           <MealIdeas ingredient={selectedItemName} />
// //         </div>
// //       </div>
// //     </main>
// //   );
// // }
// 'use client';

// import { useState, useEffect } from 'react';
// import { useRouter } from 'next/navigation';
// import { useUserAuth } from '../_utils/auth-context';
// import NewItem from './new-item';
// import ItemList from './item-list';
// import MealIdeas from './meal-ideas';
// import { getItems, addItem, deleteItem } from './-services';

// export default function Page() {
//   const { user } = useUserAuth();
//   const router = useRouter();
//   const [items, setItems] = useState([]);
//   const [selectedItemName, setSelectedItemName] = useState('');

//   useEffect(() => {
//     async function loadItems() {
//       if (user) {
//         const data = await getItems(user.uid);
//         setItems(data);
//       } else {
//         router.push('/week-9');
//       }
//     }
//     loadItems();
//   }, [user, router]);

//   if (!user) return null;

//   async function handleAddItem(item) {
//     const added = await addItem(user.uid, item);
//     setItems(prev => [...prev, added]);
//   }

//   async function handleDeleteItem(id) {
//     await deleteItem(user.uid, id);
//     setItems(prev => prev.filter(item => item.id !== id));
//   }

//   function cleanItemName(name) {
//     let cleaned = name.split(',')[0].trim();
//     cleaned = cleaned.replace(
//       /([\u2700-\u27BF]|[\uE000-\uF8FF]|[\uD83C-\uDBFF\uDC00-\uDFFF])+/g,
//       ''
//     );
//     return cleaned.trim();
//   }

//   function handleItemSelect(name) {
//     setSelectedItemName(cleanItemName(name));
//   }

//   return (
//     <main className="min-h-screen bg-black py-6 px-4">
//       <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
//         <div className="space-y-8">
//           <h1 className="text-2xl font-bold mb-6 text-white">
//             Week 10 - Shopping List + Meal Ideas
//           </h1>
//           <NewItem onAddItem={handleAddItem} />
//           <ItemList
//             items={items}
//             onItemSelect={handleItemSelect}
//             onDeleteItem={handleDeleteItem}
//           />
//         </div>
//         <div className="space-y-4">
//           <MealIdeas ingredient={selectedItemName} />
//         </div>
//       </div>
//     </main>
//   );
// }
"use client";
import { auth } from "../_utils/firebase";
import { GithubAuthProvider, signInWithPopup } from "firebase/auth";

export default function LoginPage() {
  async function handleGitHubLogin() {
    const provider = new GithubAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      // Redirect or reload after login
      window.location.href = "/week-10";
    } catch (error) {
      console.error("GitHub login failed:", error);
    }
  }

  return (
    <main className="min-h-screen bg-black flex flex-col items-center justify-center text-white">
      <h1 className="text-3xl font-bold mb-4">
        Welcome to the <span className="text-blue-500">Shopping</span> List App
      </h1>
      <p className="mb-6">Please log in to continue.</p>
      <button
        onClick={handleGitHubLogin}
        className="bg-white text-black px-6 py-3 rounded shadow hover:bg-gray-200"
      >
        Login with GitHub
      </button>
    </main>
  );
}
