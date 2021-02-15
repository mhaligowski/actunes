export type Sound = {
  note: string;
  time: number; // in 16ths
  duration: number; // in 16ths
};

export type Note =
  | "E5"
  | "E5"
  | "D5"
  | "C5"
  | "B4"
  | "A4"
  | "G4"
  | "F4"
  | "E4"
  | "D4"
  | "C4"
  | "B3"
  | "A3"
  | "G3"
  | "-"
  | "x";

export type Melody = [
  Note,
  Note,
  Note,
  Note,
  Note,
  Note,
  Note,
  Note,
  Note,
  Note,
  Note,
  Note,
  Note,
  Note,
  Note,
  Note
]; // 16 notes

export function transform(values: Melody): Sound[] {
  let result: Sound[] = [];

  let currentTime = 0; // sixteenths

  for (let i = 0; i < values.length; i++) {
    if (values[i] === "x") {
      currentTime += 2;
    } else if (values[i] === "-") {
      if (result.length > 0) {
        result[result.length - 1].duration += 2;
      }
      currentTime += 2;
    } else {
      result.push({
        note: values[i],
        time: currentTime,
        duration: 2,
      });
      currentTime += 2;
    }
  }
  return result;
}
