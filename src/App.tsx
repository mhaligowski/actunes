import React, { useState } from "react";
import * as Tone from "tone";
import { transform } from "./transform";
import Picker from "./picker/Picker";

import "minireset.css/minireset.sass";
import "./App.css";

function App() {
  // const init = Array(16).fill("E4");

  // ALL
  const init = [
    "E5",
    "E5",
    "D5",
    "C5",
    "B4",
    "A4",
    "G4",
    "F4",
    "E4",
    "D4",
    "C4",
    "B3",
    "A3",
    "G3",
    "-",
    "x",
  ];

  // const init = [
  //   "-",
  //   "x",
  //   "G3",
  //   "A3",
  //   "B3",
  //   "C4",
  //   "D4",
  //   "E4",
  //   "-",
  //   "x",
  //   "G3",
  //   "A3",
  //   "B3",
  //   "C4",
  //   "D4",
  //   "E4",
  // ];
  const [pick, setpick] = useState(init);

  const update = (idx: number, newValue: string) => {
    setpick([...pick.slice(0, idx), newValue, ...pick.slice(idx + 1)]);
  };

  return (
    <div className="App">
      <h1>Animal Crossing Tunes Studio</h1>
      <section className="picker">
        <Picker onChange={update} notes={pick} />
      </section>
      <div>
        <button
          onClick={() => {
            const synth = new Tone.AMSynth({
              envelope: {
                attack: 0.09,
                decay: 0.0795,
                release: 0.2,
                releaseCurve: "step",
              },
            }).toDestination();
            Tone.Transport.bpm.value = 100;

            const durationMultiplier = 0.8;
            transform(pick).forEach((note) => {
              synth.triggerAttackRelease(
                note.pitch,
                `0:0:${note.value * durationMultiplier}`,
                `+0:0:${note.start}`
              );
            });
          }}
        >
          play
        </button>
      </div>
    </div>
  );
}

export default App;
