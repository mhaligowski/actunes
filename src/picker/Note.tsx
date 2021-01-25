import clsx from "clsx";
import * as Tone from "tone";
import "./note.css";

const CLASSMAP: { [name: string]: string } = {
  "-": "rest",
  x: "repeat",
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
      onUp("G4");
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
      <div className={clsx("up")}>
        <button onClick={goUp} disabled={value === "E5"}>
          up
        </button>
      </div>

      <div className={clsx("name")} />

      <div className={"down"}>
        <button onClick={goDown} disabled={value === "x"}>
          down
        </button>
      </div>
    </div>
  );
};

export default Note;
