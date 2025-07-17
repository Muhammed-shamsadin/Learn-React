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