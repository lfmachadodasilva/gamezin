export enum TetrisShape {
  L = 'L',
  O = 'O',
  I = 'I',
  Z = 'Z',
  D = 'D',
  E = 'empty',
}

export enum TetrisShapeType {
  Empty = 'empty',
  Fixed = 'fixed',
  Temp = 'temporary',
}

export const TetrisCellColor = {
  L: 'var(--shape-color-L)',
  O: 'var(--shape-color-O)',
  I: 'var(--shape-color-I)',
  Z: 'var(--shape-color-Z)',
  D: 'var(--shape-color-D)',
  E: 'var(--shape-color-empty)',
  empty: 'var(--shape-color-empty)',
};

export const TetrisShapeL1 = [
  [TetrisShape.L, TetrisShape.E],
  [TetrisShape.L, TetrisShape.E],
  [TetrisShape.L, TetrisShape.E],
  [TetrisShape.L, TetrisShape.L],
];
export const TetrisShapeL2 = [
  [TetrisShape.E, TetrisShape.E, TetrisShape.E, TetrisShape.L],
  [TetrisShape.L, TetrisShape.L, TetrisShape.L, TetrisShape.L],
];
export const TetrisShapeL3 = [
  [TetrisShape.L, TetrisShape.L],
  [TetrisShape.E, TetrisShape.L],
  [TetrisShape.E, TetrisShape.L],
  [TetrisShape.E, TetrisShape.L],
];
export const TetrisShapeL4 = [
  [TetrisShape.L, TetrisShape.L, TetrisShape.L, TetrisShape.L],
  [TetrisShape.L, TetrisShape.E, TetrisShape.E, TetrisShape.E],
];
export const TetrisShapeL = [TetrisShapeL1, TetrisShapeL2, TetrisShapeL3, TetrisShapeL4];
export const TetrisShapeO = [
  [TetrisShape.O, TetrisShape.O],
  [TetrisShape.O, TetrisShape.O],
];
export const TetrisShapeI1 = [[TetrisShape.I], [TetrisShape.I], [TetrisShape.I], [TetrisShape.I]];
export const TetrisShapeI2 = [[TetrisShape.I, TetrisShape.I, TetrisShape.I, TetrisShape.I]];
export const TetrisShapeI = [TetrisShapeI1, TetrisShapeI2];
export const TetrisShapeZ1 = [
  [TetrisShape.Z, TetrisShape.Z, TetrisShape.E],
  [TetrisShape.E, TetrisShape.Z, TetrisShape.Z],
];
export const TetrisShapeZ2 = [
  [TetrisShape.Z, TetrisShape.E],
  [TetrisShape.Z, TetrisShape.Z],
  [TetrisShape.E, TetrisShape.Z],
];
export const TetrisShapeZ3 = [
  [TetrisShape.E, TetrisShape.Z, TetrisShape.Z],
  [TetrisShape.Z, TetrisShape.Z, TetrisShape.E],
];
export const TetrisShapeZ4 = [
  [TetrisShape.E, TetrisShape.Z],
  [TetrisShape.Z, TetrisShape.Z],
  [TetrisShape.Z, TetrisShape.E],
];
export const TetrisShapeZ = [TetrisShapeZ1, TetrisShapeZ2, TetrisShapeZ3, TetrisShapeZ4];
export const TetrisShapeD = [[TetrisShape.D]];

export const TetrisShapes = [
  ...TetrisShapeL,
  TetrisShapeO,
  ...TetrisShapeI,
  ...TetrisShapeZ,
  TetrisShapeD,
];

export const TetrisShapeEmpty = [
  [TetrisShape.E, TetrisShape.E, TetrisShape.E, TetrisShape.E],
  [TetrisShape.E, TetrisShape.E, TetrisShape.E, TetrisShape.E],
  [TetrisShape.E, TetrisShape.E, TetrisShape.E, TetrisShape.E],
  [TetrisShape.E, TetrisShape.E, TetrisShape.E, TetrisShape.E],
];

export interface TetrisCell {
  shape: TetrisShape;
  type: TetrisShapeType;
}
