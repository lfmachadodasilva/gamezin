export enum TetrisCellType {
  L = 'L',
  O = 'O',
  I = 'I',
  Z = 'Z',
  D = 'D',
  E = 'empty',
}

export enum TetrisCellType2 {
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
  [TetrisCellType.L, TetrisCellType.E],
  [TetrisCellType.L, TetrisCellType.E],
  [TetrisCellType.L, TetrisCellType.E],
  [TetrisCellType.L, TetrisCellType.L],
];
export const TetrisCellL2 = [
  [TetrisCellType.E, TetrisCellType.E, TetrisCellType.E, TetrisCellType.L],
  [TetrisCellType.L, TetrisCellType.L, TetrisCellType.L, TetrisCellType.L],
];
export const TetrisCellL3 = [
  [TetrisCellType.L, TetrisCellType.L],
  [TetrisCellType.E, TetrisCellType.L],
  [TetrisCellType.E, TetrisCellType.L],
  [TetrisCellType.E, TetrisCellType.L],
];
export const TetrisCellL4 = [
  [TetrisCellType.L, TetrisCellType.L, TetrisCellType.L, TetrisCellType.L],
  [TetrisCellType.L, TetrisCellType.E, TetrisCellType.E, TetrisCellType.E],
];
export const TetrisCellO = [
  [TetrisCellType.O, TetrisCellType.O],
  [TetrisCellType.O, TetrisCellType.O],
];
export const TetrisCellI1 = [
  [TetrisCellType.I],
  [TetrisCellType.I],
  [TetrisCellType.I],
  [TetrisCellType.I],
];
export const TetrisCellI2 = [
  [TetrisCellType.I, TetrisCellType.I, TetrisCellType.I, TetrisCellType.I],
];
export const TetrisCellZ1 = [
  [TetrisCellType.Z, TetrisCellType.Z, TetrisCellType.E],
  [TetrisCellType.E, TetrisCellType.Z, TetrisCellType.Z],
];
export const TetrisCellZ2 = [
  [TetrisCellType.Z, TetrisCellType.E],
  [TetrisCellType.Z, TetrisCellType.Z],
  [TetrisCellType.E, TetrisCellType.Z],
];
export const TetrisCellZ3 = [
  [TetrisCellType.E, TetrisCellType.Z, TetrisCellType.Z],
  [TetrisCellType.Z, TetrisCellType.Z, TetrisCellType.E],
];
export const TetrisCellZ4 = [
  [TetrisCellType.E, TetrisCellType.Z],
  [TetrisCellType.Z, TetrisCellType.Z],
  [TetrisCellType.Z, TetrisCellType.E],
];
export const TetrisCellD = [[TetrisCellType.D]];
export const TetrisCellEmpty = [
  [TetrisCellType.E, TetrisCellType.E, TetrisCellType.E, TetrisCellType.E],
  [TetrisCellType.E, TetrisCellType.E, TetrisCellType.E, TetrisCellType.E],
  [TetrisCellType.E, TetrisCellType.E, TetrisCellType.E, TetrisCellType.E],
  [TetrisCellType.E, TetrisCellType.E, TetrisCellType.E, TetrisCellType.E],
];

export interface TetrisCell {
  type: TetrisCellType;
  type2: TetrisCellType2;
}
