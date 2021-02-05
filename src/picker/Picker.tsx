import React from "react";
import { Melody } from "../transform";
import Note from "./note/Note";

import "./picker.css";
import "./picker.mobile.css";

type PickerProps = {
  melody: Melody;
  onChange: (idx: number, newValue: string) => void;
};

export default function Picker({ melody, onChange }: PickerProps) {
  const pickersCells = melody.map((value, idx) => (
    <Note
      onDown={(newValue: string) => onChange(idx, newValue)}
      onUp={(newValue: string) => onChange(idx, newValue)}
      value={value}
      key={idx}
      order={idx}
    />
  ));

  return (
    <div className="Picker">
      <div className="Picker-inner">{pickersCells}</div>
    </div>
  );
}
