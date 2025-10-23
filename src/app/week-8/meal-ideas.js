'use client';

import { useEffect, useState } from 'react';

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  // Fetch meals from TheMealDB API
  async function fetchMealIdeas(ingredient) {
    if (!ingredient) return [];
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
      );
      const data = await response.json();
      return data.meals || [];
    } catch (error) {
      console.error('Error fetching meal ideas:', error);
      return [];
    }
  }

  // Load meals when ingredient changes
  useEffect(() => {
    async function loadMealIdeas() {
      const ideas = await fetchMealIdeas(ingredient);
      setMeals(ideas);
    }
    loadMealIdeas();
  }, [ingredient]);

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">
        Meal Ideas (select an item) {ingredient}
      </h2>
      {meals.length === 0 ? (
        <p
          className="text-gray-500 cursor-text min-h-[100px] px-2 text-lg pt-4"
          contentEditable={true}
          suppressContentEditableWarning={true}
        >
          Choose an item to see ideas.
        </p>
      ) : (
        <ul className="grid grid-cols-2 gap-4">
          {meals.map((meal) => (
            <li key={meal.idMeal} className="border p-2 rounded shadow">
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="w-full h-auto rounded"
              />
              <p className="mt-2 text-center font-medium">{meal.strMeal}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
