import ItemList from './item-list';

export default function Page() {
  return (
    <div className="bg-black min-h-screen text-white">
    <main className="max-w-2xl mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-6">
        Shopping List
      </h1>
      <ItemList />
    </main>
    </div>
  );
}

