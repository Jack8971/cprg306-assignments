// /app/week-4/page.js
import NewItem from './new-item';

export default function Week4Page() {
  return (
    <main className="min-h-screen bg-black p-6">
      <div className="w-96 mx-auto text-left">
        <h1 className="text-2xl font-bold mb-4 text-white">Week 5 - New Item</h1>
        <NewItem />
      </div>
    </main>
  );
}