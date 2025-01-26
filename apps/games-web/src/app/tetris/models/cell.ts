export enum TetrisCellEnum {
  L = 'L',
  E = 'empty',
  Empty = 'empty',
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
const TetrisCellL2 = [
  [TetrisCellEnum.E, TetrisCellEnum.E, TetrisCellEnum.E, TetrisCellEnum.E],
  [TetrisCellEnum.E, TetrisCellEnum.E, TetrisCellEnum.E, TetrisCellEnum.E],
  [TetrisCellEnum.E, TetrisCellEnum.E, TetrisCellEnum.E, TetrisCellEnum.L],
  [TetrisCellEnum.L, TetrisCellEnum.L, TetrisCellEnum.L, TetrisCellEnum.L],
];
const TetrisCellL3 = [
  [TetrisCellEnum.E, TetrisCellEnum.L, TetrisCellEnum.L, TetrisCellEnum.E],
  [TetrisCellEnum.E, TetrisCellEnum.E, TetrisCellEnum.L, TetrisCellEnum.E],
  [TetrisCellEnum.E, TetrisCellEnum.E, TetrisCellEnum.L, TetrisCellEnum.E],
  [TetrisCellEnum.E, TetrisCellEnum.E, TetrisCellEnum.L, TetrisCellEnum.E],
];
const TetrisCellL4 = [
  [TetrisCellEnum.E, TetrisCellEnum.E, TetrisCellEnum.E, TetrisCellEnum.E],
  [TetrisCellEnum.E, TetrisCellEnum.E, TetrisCellEnum.E, TetrisCellEnum.E],
  [TetrisCellEnum.L, TetrisCellEnum.L, TetrisCellEnum.L, TetrisCellEnum.L],
  [TetrisCellEnum.L, TetrisCellEnum.E, TetrisCellEnum.E, TetrisCellEnum.L],
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
