import React, { useState } from "react";
import { Melody } from "./transform";
import Picker from "./picker/Picker";

import "minireset.css/minireset.sass";
import "./App.css";
import usePlayer from "./usePlayer";

function App() {
  // const init = Array(16).fill("E4");

  // ALL
  const init: Melody = [
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
  const [pick, setpick] = useState<Melody>(init);

  const update = (idx: number, newValue: string) => {
    setpick([
      ...pick.slice(0, idx),
      newValue,
      ...pick.slice(idx + 1),
    ] as Melody);
  };

  const player = usePlayer();

  return (
    <div className="App">
      <h1>Animal Crossing Tunes Studio</h1>
      <section className="picker">
        <Picker onChange={update} melody={pick} />
      </section>
      <div>
        <button onClick={() => player.play(pick)} disabled={player.isPlaying()}>
          play
        </button>
        <button onClick={() => player.stop()} disabled={!player.isPlaying()}>
          stop
        </button>
      </div>
    </div>
  );
}

export default App;
