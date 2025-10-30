export default function Item({ name, quantity, category, onSelect }) {
  function handleClick() {
    if (onSelect) {
      onSelect(name);
    }
  }

  return (
    <li
      className="border-2 rounded-md p-4 mb-2 shadow-sm cursor-pointer hover:bg-gray-100"
      onClick={handleClick}
    >
      <div className="font-semibold text-lg">{name}</div>
      <div>Quantity: {quantity}</div>
      <div>Category: {category}</div>
    </li>
  );
}

