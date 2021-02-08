import React from "react";

import clsx from "clsx";
import * as Tone from "tone";
import Arrow from "../arrow/Arrow";

import "./note.scss";

const CLASSMAP: { [name: string]: string } = {
  x: "x",
  "-": "r",
  G3: "g",
  A3: "a",
  B3: "b",
  C4: "c",
  D4: "d",
  E4: "e",
  F4: "f",
  G4: "G",
  A4: "A",
  B4: "B",
  C5: "C",
  D5: "D",
  E5: "E",
};

type NoteProps = {
  onUp: (newValue: string) => void;
  onDown: (newValue: string) => void;
  value: string;
  order: number;
};

const Note = ({ onUp, onDown, value }: NoteProps) => {
  const goUp = () => {
    if (value === "x") {
      onUp("-");
    } else if (value === "-") {
      onUp("G3");
    } else if (value === "E5") {
    } else {
      let newValue = Tone.Frequency(value);
      do {
        newValue = newValue.transpose(1);
      } while (newValue.toNote().indexOf("#") !== -1);
      onUp(newValue.toNote());
    }
  };

  const goDown = () => {
    if (value === "G3") {
      onDown("-");
    } else if (value === "-") {
      onDown("x");
    } else if (value === "x") {
    } else {
      let newValue = Tone.Frequency(value);
      do {
        newValue = newValue.transpose(-1);
      } while (newValue.toNote().indexOf("#") !== -1);
      onUp(newValue.toNote());
    }
  };

  const noteClassName: string = CLASSMAP[value];
  return (
    <div className={clsx("Note", noteClassName)} data-name={value}>
      <Arrow onClick={goUp} direction={"up"} disabled={value === "E5"} />
      <Arrow onClick={goDown} direction={"down"} disabled={value === "x"} />
    </div>
  );
};

export default Note;
