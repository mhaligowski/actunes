export type Note = {
  pitch: string;
  start: number; // in 16ths
  value: number; // in 16ths
};

export function transform(values: string[]): Note[] {
  let result: Note[] = [];

  let currentTime = 0; // sixteenths

  for (let i = 0; i < values.length; i++) {
    if (values[i] === "x") {
      currentTime += 2;
    } else if (values[i] === "-") {
      result[result.length - 1].value += 2;
      currentTime += 2;
    } else {
      result.push({
        pitch: values[i],
        start: currentTime,
        value: 2,
      });
      currentTime += 2;
    }
  }
  return result;
}
