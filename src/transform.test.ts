import { transform } from "./transform";

it("should return empty values when the input is empty", () => {
  expect(transform([])).toEqual([]);
});

it("should give a single note when single note is given", () => {
  expect(transform(["G2"])).toEqual([{ pitch: "G2", value: 2, start: 0 }]);
});

it("should give two separate notes when two different notes are given", () => {
  expect(transform(["G2", "G2"])).toEqual([
    { pitch: "G2", value: 2, start: 0 },
    { pitch: "G2", value: 2, start: 2 },
  ]);
});

it("should give two separate different notes when two different notes are given", () => {
  expect(transform(["C2", "E2"])).toEqual([
    { pitch: "C2", value: 2, start: 0 },
    { pitch: "E2", value: 2, start: 2 },
  ]);
});

it("should honor the single rest", () => {
  expect(transform(["C2", "x"])).toEqual([{ pitch: "C2", value: 2, start: 0 }]);
});

it("should return nothing with a single rest", () => {
  expect(transform(["x"])).toEqual([]);
});

it("should move the start of the note", () => {
  expect(transform(["x", "C2"])).toEqual([{ pitch: "C2", value: 2, start: 2 }]);
});

it("should extend the length of the of the note", () => {
  expect(transform(["C2", "-"])).toEqual([{ pitch: "C2", value: 4, start: 0 }]);
});
