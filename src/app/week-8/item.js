export default function Item({ name, quantity, category }) {
  return (
    <li className="border-2 rounded-md p-4 mb-2 shadow-sm">
      <div className="font-semibold text-lg">{name}</div>
      <div>Quantity: {quantity}</div>
      <div>Category: {category}</div>
    </li>
  );
}
