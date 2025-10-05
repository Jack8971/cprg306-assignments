'use client';

import { useState } from 'react';

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    if (quantity < 20) setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (

    <div className="bg-white text-black p-6 rounded-md shadow-md w-96 mx-auto text-left">
      
      <div className="text-lg font-medium mb-4">
        Quantity: <span className="font-bold">{quantity}</span>
      </div>

      <div className="flex justify-start items-start gap-4 mb-2">
        <button
          onClick={decrement}
          disabled={quantity === 1}
          aria-label="Decrease quantity"
          className={`px-4 py-2 text-lg font-bold rounded ${
            quantity === 1
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'bg-blue-500 text-white hover:bg-blue-600'
          }`}
        >
          −
        </button>

        <button
          onClick={increment}
          disabled={quantity === 20}
          aria-label="Increase quantity"
          className={`px-4 py-2 text-lg font-bold rounded ${
            quantity === 20
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'bg-blue-500 text-white hover:bg-blue-600'
          }`}
        >
          +
        </button>
      </div>

      <p 
      className="text-sm text-gray-600">Allowed range: 1–20
      </p>
    </div>
  );
}