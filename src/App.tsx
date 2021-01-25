import React, { useState } from "react";
import * as Tone from "tone";
import { transform } from "./transform";
import Picker from "./picker/Picker";

import "minireset.css/minireset.sass";
import "./App.css";

function App() {
  const init = Array(16).fill("E4");

  // ALL
  // const init = [
  //   "-",
  //   "x",
  //   "G3",
  //   "A3",
  //   "B3",
  //   "C4",
  //   "D4",
  //   "E4",
  //   "F4",
  //   "G4",
  //   "A4",
  //   "B4",
  //   "C5",
  //   "D5",
  //   "E5",
  //   "-",
  // ];

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
            const synth = new Tone.AMSynth().toDestination();
            Tone.Transport.bpm.value = 100;

            transform(pick).forEach((note) => {
              synth.triggerAttackRelease(
                note.pitch,
                `0:0:${note.value}`,
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
