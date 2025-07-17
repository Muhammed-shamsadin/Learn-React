export default function MoodButton({ emoji, onSelect }) {
  return (
    <button
      className="text-3xl p-3 hover:scale-110 transition-transform"
      onClick={() => onSelect(emoji)}
    >
      {emoji}
    </button>
  );
}
