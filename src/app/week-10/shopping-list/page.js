'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useUserAuth } from '../_utils/auth-context';
import NewItem from './new-item';
import ItemList from './item-list';
import MealIdeas from './meal-ideas';
import { getItems, addItem, deleteItem } from "../shopping-list-services";


export default function Page() {
  const { user, getItems, addItem, deleteItem } = useUserAuth(); // use context instead of -services
  const router = useRouter();
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState('');

  // Assignment requirement: useEffect to load items
  useEffect(() => {
    async function loadItems() {
      if (user) {
        const data = await getItems(user.uid);
        setItems(data);
      } else {
        router.push('/week-10'); // redirect if not logged in
      }
    }
    loadItems();
  }, [user, router]);

  if (!user) return null;

  async function handleAddItem(item) {
    const added = await addItem(user.uid, item);
    setItems(prev => [...prev, added]);
  }

  async function handleDeleteItem(id) {
    await deleteItem(user.uid, id);
    setItems(prev => prev.filter(item => item.id !== id));
  }

  function cleanItemName(name) {
    let cleaned = name.split(',')[0].trim();
    cleaned = cleaned.replace(
      /([\u2700-\u27BF]|[\uE000-\uF8FF]|[\uD83C-\uDBFF\uDC00-\uDFFF])+/g,
      ''
    );
    return cleaned.trim();
  }

  function handleItemSelect(name) {
    setSelectedItemName(cleanItemName(name));
  }

  return (
    <main className="min-h-screen bg-black py-6 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-8">
          <h1 className="text-2xl font-bold mb-6 text-white">
            Week 10 - Shopping List + Meal Ideas
          </h1>
          <NewItem onAddItem={handleAddItem} />
          <ItemList
            items={items}
            onItemSelect={handleItemSelect}
            onDeleteItem={handleDeleteItem}
          />
        </div>
        <div className="space-y-4">
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
}
