// 📁 mood-tracker-react (Vite + React + Jotai + Tailwind)

// Step 1: Scaffold project
// Run this in terminal:
// npm create vite@latest mood-tracker-react -- --template react
// cd mood-tracker-react
// npm install
// npm install jotai react-router-dom
// npm install -D tailwindcss postcss autoprefixer
// npx tailwindcss init -p

// tailwind.config.cjs
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: { extend: {} },
  plugins: [],
};

// postcss.config.cjs
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};

// src/index.css
@tailwind base;
@tailwind components;
@tailwind utilities;

// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import History from './pages/History';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </Router>
  );
}

// src/atoms/moodAtoms.js
import { atom } from 'jotai';

export const currentMoodAtom = atom(null);
export const moodHistoryAtom = atom([]);

export const setMoodAtom = atom(null, (get, set, newMood) => {
  set(currentMoodAtom, newMood);
  if (newMood !== null) {
    set(moodHistoryAtom, [...get(moodHistoryAtom), newMood]);
  }
});

// src/components/MoodButton.jsx
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

// src/components/CurrentMood.jsx
export default function CurrentMood({ mood }) {
  return (
    <div className="mt-6 text-center text-2xl">
      {mood ? (
        <>Current mood: <span className="text-4xl">{mood}</span></>
      ) : (
        <span className="italic text-gray-500">No mood selected yet.</span>
      )}
    </div>
  );
}

// src/pages/Home.jsx
import { useAtom } from 'jotai';
import { useEffect } from 'react';
import { currentMoodAtom, setMoodAtom } from '../atoms/moodAtoms';
import MoodButton from '../components/MoodButton';
import CurrentMood from '../components/CurrentMood';
import { Link } from 'react-router-dom';

function useMoodToast(mood) {
  useEffect(() => {
    if (mood) console.log(`Mood set to ${mood}`);
  }, [mood]);
}

export default function Home() {
  const [mood] = useAtom(currentMoodAtom);
  const [, setMood] = useAtom(setMoodAtom);

  useMoodToast(mood);

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

// src/pages/History.jsx
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
