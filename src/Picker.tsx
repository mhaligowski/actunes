import * as Tone from "tone";

type PickerType = {
  onUp: (newValue: string) => void;
  onDown: (newValue: string) => void;
  value: string;
  order: number;
};

const Picker = ({ onUp, onDown, value }: PickerType) => {
  const goUp = () => {
    if (value === "x") {
      onUp("-");
    } else if (value === "-") {
      onUp("G2");
    } else {
      let newValue = Tone.Frequency(value);
      do {
        newValue = newValue.transpose(1);
      } while (newValue.toNote().indexOf("#") !== -1);
      onUp(newValue.toNote());
    }
  };

  const goDown = () => {
    if (value === "G2") {
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

  return (
    <div>
      <div className={"block"}>
        <button onClick={goUp} disabled={value === "E5"}>
          up
        </button>
      </div>

      <div className={"block"}>{value}</div>

      <div className={"block"}>
        <button onClick={goDown} disabled={value === "x"}>
          down
        </button>
      </div>
    </div>
  );
};

export default Picker;
