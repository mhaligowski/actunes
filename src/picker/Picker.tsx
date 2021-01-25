import React from "react";
import Note from "./Note";
import "./picker.css";

type PickerProps = {
  notes: string[];
  onChange: (idx: number, newValue: string) => void;
};

export default function Picker({ notes, onChange }: PickerProps) {
  const pickersCells = notes.map((value, idx) => (
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
