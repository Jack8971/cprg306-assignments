'use client';

import { useState } from 'react';
import Item from './item';
import items from './items.json'; // Load static items

export default function ItemList() {
  // State variable to track current sorting preference (name, Category)
  const [sortBy, setSortBy] = useState("name");

  // Create a sorted copy of the items array
  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name); // Sort alphabetically by name
    } else {
      return a.category.localeCompare(b.category); // Sort alphabetically by category
    }
  });

  return (
    <div>
      {/* Sorting buttons */}
      <div className="mb-4">
        <button
          className={`px-4 py-2 mr-2 rounded ${
            sortBy === "name" ? "bg-blue-500 text-white" : "bg-gray-400 text-white"
          }`}
          onClick={() => setSortBy("name")}
        >
          Sort by Name
        </button>
        <button
          className={`px-4 py-2 rounded ${
            sortBy === "category" ? "bg-blue-500 text-white" : "bg-gray-400 text-white"
          }`}
          onClick={() => setSortBy("category")}
        >
          Sort by Category
        </button>
      </div>

      {/* Render each item using Item component */}
      <ul className="space-y-4">
        {sortedItems.map((item) => (
          <Item
            key={item.id} 
            name={item.name}
            quantity={item.quantity}
            category={item.category}
          />
        ))}
      </ul>
    </div>
  );
}
