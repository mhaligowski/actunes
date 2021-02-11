import { Melody } from "./transform";

type SerializationMap = { [note: string]: string };

const SERIALMAP: SerializationMap = {
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

const DESERIALMAP: SerializationMap = Object.keys(SERIALMAP).reduce(
  (acc: SerializationMap, cv: string) => {
    acc[SERIALMAP[cv]] = cv;
    return acc;
  },
  {} as SerializationMap
);

const serialize = (melody: Melody): string =>
  melody.map((n) => SERIALMAP[n]).join();

const deserialize = (melody: string): Melody | null => {
  if (melody.length === 16) {
    return melody.split("").map((n) => DESERIALMAP[n]) as Melody;
  } else {
    return null;
  }
};

export { serialize, deserialize };
