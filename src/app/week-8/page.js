"use client";

import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import itemsData from "./items.json";

export default function Page() {
  const [items, setItems] = useState(itemsData);

  function handleAddItem(newItem) {
    setItems(prevItems => [...prevItems, newItem]);
  }


  return (
    <main className="min-h-screen bg-black py-6 px-4">
  <div className="max-w-2xl mx-auto space-y-8">
    <h1 className="text-2xl font-bold mb-6 text-white">Week 7 - Shopping List</h1>
    <NewItem onAddItem={handleAddItem} />
    <ItemList items={items} />
  </div>
</main>
  );
}


