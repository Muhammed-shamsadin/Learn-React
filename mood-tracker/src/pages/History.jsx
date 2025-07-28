import { useAtomValue } from 'jotai';
import { moodHistoryAtom } from '../atoms/moodAtoms';
import { Link } from 'react-router-dom';

export default function History() {
  const history = useAtomValue(moodHistoryAtom);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-semibold mb-4">Mood History</h1>

      {history.length === 0 ? (
        <p className="italic text-gray-500">No moods recorded yet.</p>
      ) : (
        <ul className="flex flex-wrap gap-3 text-3xl">
          {history.map((m, idx) => (
            <li key={idx}>{m}</li>
          ))}
        </ul>
      )}

      <Link to="/" className="mt-8 underline text-blue-600">
        ← Back to Home
      </Link>
    </main>
  );
}