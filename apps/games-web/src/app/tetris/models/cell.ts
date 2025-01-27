export enum TetrisCellShape {
  L = 'L',
  O = 'O',
  I = 'I',
  Z = 'Z',
  D = 'D',
  E = 'empty',
}

export enum TetrisCellType {
  Empty = 'empty',
  Fixed = 'fixed',
  Temp = 'temporary',
}

export const TetrisCellColor = {
  L: 'blue',
  O: 'green',
  I: 'red',
  Z: 'purple',
  D: 'black',
  E: 'white',
  empty: 'white',
};

export const TetrisCellL1 = [
  [TetrisCellShape.L, TetrisCellShape.E],
  [TetrisCellShape.L, TetrisCellShape.E],
  [TetrisCellShape.L, TetrisCellShape.E],
  [TetrisCellShape.L, TetrisCellShape.L],
];
export const TetrisCellL2 = [
  [TetrisCellShape.E, TetrisCellShape.E, TetrisCellShape.E, TetrisCellShape.L],
  [TetrisCellShape.L, TetrisCellShape.L, TetrisCellShape.L, TetrisCellShape.L],
];
export const TetrisCellL3 = [
  [TetrisCellShape.L, TetrisCellShape.L],
  [TetrisCellShape.E, TetrisCellShape.L],
  [TetrisCellShape.E, TetrisCellShape.L],
  [TetrisCellShape.E, TetrisCellShape.L],
];
export const TetrisCellL4 = [
  [TetrisCellShape.L, TetrisCellShape.L, TetrisCellShape.L, TetrisCellShape.L],
  [TetrisCellShape.L, TetrisCellShape.E, TetrisCellShape.E, TetrisCellShape.E],
];
export const TetrisCellO = [
  [TetrisCellShape.O, TetrisCellShape.O],
  [TetrisCellShape.O, TetrisCellShape.O],
];
export const TetrisCellI1 = [
  [TetrisCellShape.I],
  [TetrisCellShape.I],
  [TetrisCellShape.I],
  [TetrisCellShape.I],
];
export const TetrisCellI2 = [
  [TetrisCellShape.I, TetrisCellShape.I, TetrisCellShape.I, TetrisCellShape.I],
];
export const TetrisCellZ1 = [
  [TetrisCellShape.Z, TetrisCellShape.Z, TetrisCellShape.E],
  [TetrisCellShape.E, TetrisCellShape.Z, TetrisCellShape.Z],
];
export const TetrisCellZ2 = [
  [TetrisCellShape.Z, TetrisCellShape.E],
  [TetrisCellShape.Z, TetrisCellShape.Z],
  [TetrisCellShape.E, TetrisCellShape.Z],
];
export const TetrisCellZ3 = [
  [TetrisCellShape.E, TetrisCellShape.Z, TetrisCellShape.Z],
  [TetrisCellShape.Z, TetrisCellShape.Z, TetrisCellShape.E],
];
export const TetrisCellZ4 = [
  [TetrisCellShape.E, TetrisCellShape.Z],
  [TetrisCellShape.Z, TetrisCellShape.Z],
  [TetrisCellShape.Z, TetrisCellShape.E],
];
export const TetrisCellD = [[TetrisCellShape.D]];

export const TetrisCells = [
  TetrisCellL1,
  TetrisCellL2,
  TetrisCellL3,
  TetrisCellL4,
  TetrisCellO,
  TetrisCellI1,
  TetrisCellI2,
  TetrisCellZ1,
  TetrisCellZ2,
  TetrisCellZ3,
  TetrisCellZ4,
  TetrisCellD,
];

export const TetrisCellEmpty = [
  [TetrisCellShape.E, TetrisCellShape.E, TetrisCellShape.E, TetrisCellShape.E],
  [TetrisCellShape.E, TetrisCellShape.E, TetrisCellShape.E, TetrisCellShape.E],
  [TetrisCellShape.E, TetrisCellShape.E, TetrisCellShape.E, TetrisCellShape.E],
  [TetrisCellShape.E, TetrisCellShape.E, TetrisCellShape.E, TetrisCellShape.E],
];

export interface TetrisCell {
  shape: TetrisCellShape;
  type: TetrisCellType;
}
