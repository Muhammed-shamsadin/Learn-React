import { useAtom } from 'jotai';
import { useEffect } from 'react';
import { currentMoodAtom, setMoodAtom } from '../atoms/moodAtoms';
import MoodButton from '../components/MoodButton';
import CurrentMood from '../components/CurrentMood';
import { Link } from 'react-router-dom';

// function useMoodToast(mood) {
// }

export default function Home() {  
  const [mood] = useAtom(currentMoodAtom);
  const [, setMood] = useAtom(setMoodAtom);
  
  // useMoodToast(mood);
  useEffect(() => {
    if (mood) console.log(`UseEffect Mood set to ${mood}`);
  }, [mood]);

  const moods = ['😊', '😐', '😢', '😡', '😴'];

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold mb-4">Mood Tracker</h1>

      <div className="flex gap-4">
        {moods.map((emoji) => (

          <MoodButton key={emoji} emoji={emoji} onSelect={setMood} />

        ))}
      </div>

      <button
        onClick={() => setMood(null)}
        className="mt-4 px-4 py-2 rounded bg-red-500 text-white hover:bg-red-600"
      >
        Reset Mood
      </button>

      <CurrentMood mood={mood} />

      <Link to="/history" className="mt-8 underline text-blue-600">
        View Mood History ➜
      </Link>
    </main>
  );
}