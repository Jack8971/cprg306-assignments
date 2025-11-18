'use client';

import { useState } from 'react';
import Item from './item';

export default function ItemList({ items, onItemSelect, onDeleteItem }) {
  const [sortBy, setSortBy] = useState('name');


  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else {
      return a.category.localeCompare(b.category);
    }
  });

  return (
    <div>
      <div className="mb-6 flex items-center gap-4">
        <h3 className="text-lg font-medium text-white">Sort by:</h3>
        <button
          className={`px-4 py-2 rounded ${
            sortBy === 'name' ? 'bg-blue-500 text-white' : 'bg-gray-400 text-white'
          }`}
          onClick={() => setSortBy('name')}
        >
          Name
        </button>
        <button
          className={`px-4 py-2 rounded ${
            sortBy === 'category' ? 'bg-blue-500 text-white' : 'bg-gray-400 text-white'
          }`}
          onClick={() => setSortBy('category')}
        >
          Category
        </button>
      </div>

      {/*  Render each item using Item component */}
      <ul className="space-y-4">
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            id={item.id}                // Firestore doc ID
            name={item.name}
            quantity={item.quantity}
            category={item.category}
            onSelect={onItemSelect}     // highlight for meal ideas
            onDelete={onDeleteItem}     // delete handler
          />
        ))}
      </ul>
    </div>
  );
}
