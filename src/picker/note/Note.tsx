import clsx from "clsx";
import React from "react";
import * as Tone from "tone";
import Arrow from "../arrow/Arrow";
import "./note.scss";

const CLASSMAP: { [name: string]: string } = {
  "-": "repeat",
  x: "rest",
  G3: "low-g",
  A3: "low-a",
  B3: "low-b",
  C4: "low-c",
  D4: "low-d",
  E4: "low-e",
  F4: "low-f",
  G4: "hi-g",
  A4: "hi-a",
  B4: "hi-b",
  C5: "hi-c",
  D5: "hi-d",
  E5: "hi-e",
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
      <Arrow onClick={goUp} direction={"up"} />
      <Arrow onClick={goDown} direction={"down"} />
    </div>
  );
};

export default Note;
