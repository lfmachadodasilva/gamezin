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

export const defaultTetrominoe: Tetrominoe = {
  position: Array.from({ length: 4 }, () =>
    Array.from({ length: 4 }, () => ({
      row: -1,
      col: -1,
      type: TetrisCellEnum.Empty,
    })),
  ),
  type: TetrisCellEnum.Empty,
  format: 1,
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

  function randomIntFromInterval(min: number = 1, max: number = 4) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  const format = randomIntFromInterval();

  return createTetrominoe(type, format, from);
};
