export enum TetrisCellType {
  L = 'L',
  E = 'empty',
}

export enum TetrisCellType2 {
  Empty = 'empty',
  Fixed = 'fixed',
  Temp = 'temporary',
}

export const TetrisCellColor = {
  L: 'blue',
  E: 'white',
  empty: 'white',
};

export const TetrisCellL1 = [
  [TetrisCellType.E, TetrisCellType.L, TetrisCellType.E, TetrisCellType.E],
  [TetrisCellType.E, TetrisCellType.L, TetrisCellType.E, TetrisCellType.E],
  [TetrisCellType.E, TetrisCellType.L, TetrisCellType.E, TetrisCellType.E],
  [TetrisCellType.E, TetrisCellType.L, TetrisCellType.L, TetrisCellType.E],
];
export const TetrisCellL2 = [
  [TetrisCellType.E, TetrisCellType.E, TetrisCellType.E, TetrisCellType.E],
  [TetrisCellType.E, TetrisCellType.E, TetrisCellType.E, TetrisCellType.E],
  [TetrisCellType.E, TetrisCellType.E, TetrisCellType.E, TetrisCellType.L],
  [TetrisCellType.L, TetrisCellType.L, TetrisCellType.L, TetrisCellType.L],
];
export const TetrisCellL3 = [
  [TetrisCellType.E, TetrisCellType.L, TetrisCellType.L, TetrisCellType.E],
  [TetrisCellType.E, TetrisCellType.E, TetrisCellType.L, TetrisCellType.E],
  [TetrisCellType.E, TetrisCellType.E, TetrisCellType.L, TetrisCellType.E],
  [TetrisCellType.E, TetrisCellType.E, TetrisCellType.L, TetrisCellType.E],
];
export const TetrisCellL4 = [
  [TetrisCellType.E, TetrisCellType.E, TetrisCellType.E, TetrisCellType.E],
  [TetrisCellType.E, TetrisCellType.E, TetrisCellType.E, TetrisCellType.E],
  [TetrisCellType.L, TetrisCellType.L, TetrisCellType.L, TetrisCellType.L],
  [TetrisCellType.L, TetrisCellType.E, TetrisCellType.E, TetrisCellType.E],
];
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
