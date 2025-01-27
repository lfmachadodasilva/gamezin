export const deepClone = <T>(obj: T): T => JSON.parse(JSON.stringify(obj));

export const populateArray = <T>(
  length1: number,
  length2: number,
  value: T,
): T[][] =>
  Array.from({ length: length1 }, () =>
    Array.from({ length: length2 }, () => value),
  );

export const randomIntFromInterval = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1) + min);
