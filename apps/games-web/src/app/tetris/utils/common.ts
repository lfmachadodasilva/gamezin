export const deepClone = <T>(obj: T): T => JSON.parse(JSON.stringify(obj));

export const populateArray = <T>(length1: number, length2: number, value: T): T[][] =>
  Array.from({ length: length1 }, () => Array.from({ length: length2 }, () => value));

export const randomIntFromInterval = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1) + min);

export function getRandomEnumValue<T extends Record<string, string>>(
  enumObj: T,
  filterOut?: string,
): T[keyof T] {
  const enumValues = Object.values(enumObj).filter((x) => x !== filterOut) as T[keyof T][];
  const randomIndex = Math.floor(Math.random() * enumValues.length);
  return enumValues[randomIndex];
}
