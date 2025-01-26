import { TetrisBoard } from './board';
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

export const applyTetrominoe = (
  board: TetrisBoard,
  tetrominoe: Tetrominoe,
  type?: TetrisCellEnum,
) => {
  var boardCopy: TetrisBoard = JSON.parse(JSON.stringify(board));

  tetrominoe.position.forEach((row) => {
    row.forEach((cell) => {
      const boardRow = boardCopy[cell.row];
      if (boardRow) {
        const boardCol = boardRow[cell.col];
        if (boardCol) {
          boardCol.type = type ?? cell.type;
        }
      }
    });
  });
  return boardCopy;
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
