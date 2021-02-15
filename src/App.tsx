import React, { useState } from "react";
import { Melody } from "./transform";
import Picker from "./picker/Picker";

import "minireset.css/minireset.sass";
import "./App.scss";
import usePlayer from "./usePlayer";
import { useEffect } from "react";
import { deserialize, serialize } from "./serialize";
import { Button } from "./Button";
import clsx from "clsx";

function App() {
  const init: Melody = [
    "x",
    "-",
    "G3",
    "A3",
    "B3",
    "C4",
    "D4",
    "E4",
    "x",
    "G4",
    "A4",
    "B4",
    "C5",
    "D5",
    "E5",
    "E5",
  ];
  const [pick, setpick] = useState<Melody>(init);
  const [isCopied, setIsCopied] = useState(false);
  const player = usePlayer();

  // On load parse the query string to see if it contains the serialized melody. No cleanup needed.
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.has("play")) {
      const melody = deserialize(params.get("play")!);
      if (melody) setpick(melody);
    }
  }, []);

  const update = (idx: number, newValue: string) => {
    setpick([
      ...pick.slice(0, idx),
      newValue,
      ...pick.slice(idx + 1),
    ] as Melody);
  };

  return (
    <div className="App">
      <h1 className="logo">Animal Crossing Tunes Studio</h1>
      <section className="social-media">
        <a
          href="https://twitter.com/actunesstudio"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-twitter"></i>
        </a>
      </section>
      <section className="picker">
        <Picker onChange={update} melody={pick} />
      </section>

      <section className="player">
        <div>
          <Button
            onClick={() => player.play(pick)}
            disabled={player.isPlaying()}
          >
            <i className="fas fa-play"></i>&nbsp;Play
          </Button>

          <Button onClick={() => player.stop()} disabled={!player.isPlaying()}>
            <i className="fas fa-stop"></i>&nbsp;Stop
          </Button>

          <Button
            onClick={() => {
              const serialized = serialize(pick);
              navigator.clipboard
                .writeText(
                  `${window.location.protocol}//${window.location.host}/?play=${serialized}`
                )
                .then(() => setIsCopied(true));
            }}
            disabled={false}
          >
            <i className="fas fa-share"></i>&nbsp;Share
          </Button>

          <div className={clsx({ confirmation: true, visible: isCopied })}>
            <i className="fas fa-check"></i>&nbsp; Link copied to clipboard!
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
