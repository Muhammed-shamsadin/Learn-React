import { useState } from "react";
import MoodButton from "./components/MoodButton";
import CurrentMood from "./components/CurrentMood";


export default function App() {
  const [mood, setMood] = useState(null);

  const handleMoodSelect = (selectedEmoji) => {
    console.log("Selected mood:", selectedEmoji);
    setMood(selectedEmoji); 
    
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold mb-4">Mood Tracker</h1>

      <div className="flex gap-4">
        <MoodButton emoji="😊" onSelect={handleMoodSelect} />
        <MoodButton emoji="😐" onSelect={handleMoodSelect} />
        <MoodButton emoji="😢" onSelect={handleMoodSelect} />
      </div>

      <button
        onClick={() => setMood(null)}
        className="mt-4 px-4 py-2 rounded bg-red-500 text-white hover:bg-red-600"
      >
        Reset Mood
      </button>

      <CurrentMood mood={mood} />
      
    </main>
  );
}

