import * as Tone from "tone";

type PickerType = {
  onUp: (newValue: string) => void;
  onDown: (newValue: string) => void;
  value: string;
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
      <button onClick={goUp} disabled={value === "E5"}>
        up
      </button>

      <div style={{ display: "inline" }}>{value}</div>
      <button onClick={goDown} disabled={value === "x"}>
        down
      </button>
    </div>
  );
};

export default Picker;
