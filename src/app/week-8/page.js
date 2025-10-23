'use client';

import { useState } from 'react';
import NewItem from './new-item';
import ItemList from './item-list';
import MealIdeas from './meal-ideas';
import itemsData from './items.json';

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState('');

  function handleAddItem(newItem) {
    setItems(prevItems => [...prevItems, newItem]);
  }

  // Clean up item name for API compatibility
  function cleanItemName(name) {
    let cleaned = name.split(',')[0].trim();
    cleaned = cleaned.replace(
      /([\u2700-\u27BF]|[\uE000-\uF8FF]|[\uD83C-\uDBFF\uDC00-\uDFFF])+/g,
      ''
    );
    return cleaned.trim();
  }

  // Handle item selection
  function handleItemSelect(name) {
    const cleanedName = cleanItemName(name);
    setSelectedItemName(cleanedName);
  }

  return (
    <main className="min-h-screen bg-black py-6 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-8">
          <h1 className="text-2xl font-bold mb-6 text-white">Week 8 - Shopping List + Meal Ideas</h1>
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>
        <div className="space-y-4">
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
}
