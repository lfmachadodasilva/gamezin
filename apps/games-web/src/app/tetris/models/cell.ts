export enum TetrisCellEnum {
  L = 'L',
  E = 'empty',
}

export const TetrisCellColor = {
  L: 'blue',
  E: 'white',
  empty: 'white',
};

export const TetrisCellL1 = [
  [TetrisCellEnum.E, TetrisCellEnum.L, TetrisCellEnum.E, TetrisCellEnum.E],
  [TetrisCellEnum.E, TetrisCellEnum.L, TetrisCellEnum.E, TetrisCellEnum.E],
  [TetrisCellEnum.E, TetrisCellEnum.L, TetrisCellEnum.E, TetrisCellEnum.E],
  [TetrisCellEnum.E, TetrisCellEnum.L, TetrisCellEnum.L, TetrisCellEnum.E],
];
export const TetrisCellL2 = [
  [TetrisCellEnum.E, TetrisCellEnum.E, TetrisCellEnum.E, TetrisCellEnum.E],
  [TetrisCellEnum.E, TetrisCellEnum.E, TetrisCellEnum.E, TetrisCellEnum.E],
  [TetrisCellEnum.E, TetrisCellEnum.E, TetrisCellEnum.E, TetrisCellEnum.L],
  [TetrisCellEnum.L, TetrisCellEnum.L, TetrisCellEnum.L, TetrisCellEnum.L],
];
export const TetrisCellL3 = [
  [TetrisCellEnum.E, TetrisCellEnum.L, TetrisCellEnum.L, TetrisCellEnum.E],
  [TetrisCellEnum.E, TetrisCellEnum.E, TetrisCellEnum.L, TetrisCellEnum.E],
  [TetrisCellEnum.E, TetrisCellEnum.E, TetrisCellEnum.L, TetrisCellEnum.E],
  [TetrisCellEnum.E, TetrisCellEnum.E, TetrisCellEnum.L, TetrisCellEnum.E],
];
export const TetrisCellL4 = [
  [TetrisCellEnum.E, TetrisCellEnum.E, TetrisCellEnum.E, TetrisCellEnum.E],
  [TetrisCellEnum.E, TetrisCellEnum.E, TetrisCellEnum.E, TetrisCellEnum.E],
  [TetrisCellEnum.L, TetrisCellEnum.L, TetrisCellEnum.L, TetrisCellEnum.L],
  [TetrisCellEnum.L, TetrisCellEnum.E, TetrisCellEnum.E, TetrisCellEnum.E],
];
export const TetrisCellEmpty = [
  [TetrisCellEnum.E, TetrisCellEnum.E, TetrisCellEnum.E, TetrisCellEnum.E],
  [TetrisCellEnum.E, TetrisCellEnum.E, TetrisCellEnum.E, TetrisCellEnum.E],
  [TetrisCellEnum.E, TetrisCellEnum.E, TetrisCellEnum.E, TetrisCellEnum.E],
  [TetrisCellEnum.E, TetrisCellEnum.E, TetrisCellEnum.E, TetrisCellEnum.E],
];

export interface TetrisCell {
  type: TetrisCellEnum;
}
