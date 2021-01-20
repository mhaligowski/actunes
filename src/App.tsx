import React, { useState } from "react";
import "./App.css";
import * as Tone from "tone";
import Picker from "./Picker";
import { transform } from "./transform";

function App() {
  const [pick, setpick] = useState(Array(16).fill("C4"));

  const update = (newValue: string, i: number) => {
    setpick([...pick.slice(0, i), newValue, ...pick.slice(i + 1)]);
  };

  return (
    <div className="App">
      <div>
        <button
          onClick={() => {
            console.log(pick);
            console.log(transform(pick));
            const synth = new Tone.AMSynth().toDestination();
            Tone.Transport.bpm.value = 100;

            transform(pick).forEach((note) => {
              synth.triggerAttackRelease(note.pitch, `0:0:${note.value}`, `+0:0:${note.start}`);
            });
          }}
        >
          play
        </button>
      </div>

      {pick.map((value, idx) => (
        <Picker
          onDown={(newValue) => update(newValue, idx)}
          onUp={(newValue) => update(newValue, idx)}
          value={value}
          key={idx}
        />
      ))}
    </div>
  );
}

export default App;
