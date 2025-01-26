import { TetrisCellEnum, TetrisCellL1 } from './cell';

export interface Tetrominoe {
  position: { row: number; col: number; type: TetrisCellEnum }[][];
  type: TetrisCellEnum;
}

export const defaultTetrominoe: Tetrominoe = {
  position: Array.from({ length: 4 }, () =>
    Array.from({ length: 4 }, () => ({
      row: -1,
      col: -1,
      type: TetrisCellEnum.Empty,
    })),
  ),
  type: TetrisCellEnum.Empty,
};

export const createTetrominoe = (
  type: TetrisCellEnum,
  from: { row: number; col: number },
) => {
  if (type === TetrisCellEnum.L) {
    return {
      position: TetrisCellL1.map((row, rowIndex) =>
        row.map((cell, colIndex) => ({
          row: from.row + rowIndex,
          col: from.col + colIndex,
          type: cell,
        })),
      ),
      type: type,
    };
  }

  return defaultTetrominoe;
};
