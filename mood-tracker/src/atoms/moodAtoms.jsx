import { atom } from 'jotai';

export const currentMoodAtom = atom(null);
export const moodHistoryAtom = atom([]);

export const setMoodAtom = atom(null, (get, set, newMood) => {
  set(currentMoodAtom, newMood);
  if (newMood !== null) {
    set(moodHistoryAtom, [...get(moodHistoryAtom), newMood]);
    console.log(`Mood set to ${newMood}`);
  }
});


