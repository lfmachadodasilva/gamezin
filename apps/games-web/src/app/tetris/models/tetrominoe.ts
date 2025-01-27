import { deepClone, randomIntFromInterval } from '../utils/common';
import { TetrisBoard } from './board';
import {
  TetrisCellEnum,
  TetrisCellL1,
  TetrisCellL2,
  TetrisCellL3,
  TetrisCellL4,
} from './cell';

export interface Tetrominoe {
  position: { row: number; col: number; type: TetrisCellEnum }[][];
  type: TetrisCellEnum;
  format: number;
}

export const applyTetrominoe = (
  board: TetrisBoard,
  tetrominoe: Tetrominoe,
  type?: TetrisCellEnum,
) => {
  const boardCopy: TetrisBoard = deepClone(board);

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
  format: number,
  from: { row: number; col: number },
) => {
  let cell: TetrisCellEnum[][] = [];
  if (type === TetrisCellEnum.L) {
    if (format === 1) {
      cell = TetrisCellL1;
    } else if (format === 2) {
      cell = TetrisCellL2;
    } else if (format === 3) {
      cell = TetrisCellL3;
    } else if (format === 4) {
      cell = TetrisCellL4;
    }
  }

  return {
    position: cell.map((row, rowIndex) =>
      row.map((cell, colIndex) => ({
        row: from.row + rowIndex,
        col: from.col + colIndex,
        type: cell,
      })),
    ),
    type: type,
    format: format,
  };
};

export const createRandomTetrominoe = () => {
  const type = TetrisCellEnum.L;
  const from = { row: 0, col: 4 };

  const format = randomIntFromInterval(1, 4);

  return createTetrominoe(type, format, from);
};
