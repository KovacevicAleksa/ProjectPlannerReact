export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some task to your list 😶‍🌫️</em>
      </p>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;

  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything to publish 🚀"
          : `📦 You have ${numItems} task on your lits, and you already finished
        ${numPacked}  (${percentage}%)`}
      </em>
    </footer>
  );
}
