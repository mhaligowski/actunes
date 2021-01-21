import React, { useState } from "react";
import "./App.css";
import * as Tone from "tone";
import Picker from "./Picker";
import { transform } from "./transform";
import "bulma/css/bulma.css";

function App() {
  const [pick, setpick] = useState(Array(16).fill("C4"));

  const update = (newValue: string, i: number) => {
    setpick([...pick.slice(0, i), newValue, ...pick.slice(i + 1)]);
  };

  const pickersCells = pick.map((value, idx) => (
    <td>
      <Picker
        onDown={(newValue) => update(newValue, idx)}
        onUp={(newValue) => update(newValue, idx)}
        value={value}
        key={idx}
        order={idx}
      />
    </td>
  ));

  return (
    <div className="App container is-centered">
      <div>
        <button
          onClick={() => {
            console.log(pick);
            console.log(transform(pick));
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
      <div className="table-container is-centered">
        <table className="table is-centered" style={{"display": "inline-table"}}>
          <tbody>
            <tr key={0}>{pickersCells.slice(0, 8)}</tr>
            <tr key={1}>{pickersCells.slice(8)}</tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
