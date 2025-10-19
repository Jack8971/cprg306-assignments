"use client";

import { useState } from "react";

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  const increment = () => {
    if (quantity < 20) setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const item = {
      id: Math.random().toString(36).substr(2, 9), 
      name,
      quantity,
      category,
    };

    onAddItem(item); 

    // Reset form
    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white text-black p-6 rounded-md shadow-md text-left space-y-4"
    >
      {/* Item Name */}
      <div>
        <label htmlFor="name" className="block font-medium mb-1">
          Item Name
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder="e.g., milk, 4 L 🥛"
          className="w-full border border-gray-300 rounded px-3 py-2"
        />
      </div>

      {/* Quantity */}
      <div>
        <label className="block font-medium mb-1">Quantity (1–20)</label>
        <p className="mb-2">
          Current: <span className="font-bold">{quantity}</span>
        </p>
        <div className="flex gap-4">
          <button
            type="button"
            onClick={decrement}
            disabled={quantity === 1}
            className={`px-4 py-2 text-lg font-bold rounded ${
              quantity === 1
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-blue-500 text-white hover:bg-blue-600"
            }`}
          >
            −
          </button>
          <button
            type="button"
            onClick={increment}
            disabled={quantity === 20}
            className={`px-4 py-2 text-lg font-bold rounded ${
              quantity === 20
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-blue-500 text-white hover:bg-blue-600"
            }`}
          >
            +
          </button>
        </div>
        <p className="text-sm text-gray-600 mt-1">Allowed range: 1–20</p>
      </div>

      {/* Category */}
      <div>
        <label htmlFor="category" className="block font-medium mb-1">
          Category
        </label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2"
        >
          {[
            "Produce",
            "Dairy",
            "Bakery",
            "Meat",
            "Frozen Foods",
            "Canned Goods",
            "Dry Goods",
            "Beverages",
            "Snacks",
            "Household",
            "Other",
          ].map((cat) => (
            <option key={cat} value={cat.toLowerCase()}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 w-25"
      >
        Add Item
      </button>
    </form>
  );
}

