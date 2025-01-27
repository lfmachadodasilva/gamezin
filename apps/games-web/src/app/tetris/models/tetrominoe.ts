import { deepClone, getRandomEnumValue, randomIntFromInterval } from '../utils/common';
import { TetrisBoard } from './board';
import {
  TetrisCellShape,
  TetrisCellL1,
  TetrisCellL2,
  TetrisCellL3,
  TetrisCellL4,
  TetrisCellType,
  TetrisCellO,
  TetrisCellI1,
  TetrisCellI2,
  TetrisCellZ1,
  TetrisCellZ2,
  TetrisCellZ3,
  TetrisCellZ4,
  TetrisCellD,
} from './cell';

export interface Tetrominoe {
  position: { row: number; col: number; type: TetrisCellShape }[][];
  type: TetrisCellShape;
  format: number;
}

export const applyTetrominoe = (
  board: TetrisBoard,
  tetrominoe: Tetrominoe,
  type?: TetrisCellShape,
  type2?: TetrisCellType,
) => {
  const boardCopy: TetrisBoard = deepClone(board);

  tetrominoe.position.forEach((row) => {
    row.forEach((cell) => {
      if (cell.type !== TetrisCellShape.E) {
        const boardRow = boardCopy[cell.row];
        if (boardRow) {
          const boardCol = boardRow[cell.col];
          if (boardCol) {
            boardCol.shape = type ?? cell.type;
            boardCol.type = type2 ?? boardCol.type;
          }
        }
      }
    });
  });
  return boardCopy;
};

export const createTetrominoe = (
  type: TetrisCellShape,
  format: number,
  from: { row: number; col: number },
) => {
  let cell: TetrisCellShape[][] = [];
  if (type === TetrisCellShape.L) {
    if (format === 1) {
      cell = TetrisCellL1;
    } else if (format === 2) {
      cell = TetrisCellL2;
    } else if (format === 3) {
      cell = TetrisCellL3;
    } else if (format === 4) {
      cell = TetrisCellL4;
    }
  } else if (type === TetrisCellShape.O) {
    cell = TetrisCellO;
  } else if (type === TetrisCellShape.I) {
    if (format === 1) {
      cell = TetrisCellI1;
    } else {
      cell = TetrisCellI2;
    }
  } else if (type === TetrisCellShape.Z) {
    if (format === 1) {
      cell = TetrisCellZ1;
    } else if (format === 2) {
      cell = TetrisCellZ2;
    } else if (format === 3) {
      cell = TetrisCellZ3;
    } else if (format === 4) {
      cell = TetrisCellZ4;
    }
  } else if (type === TetrisCellShape.D) {
    cell = TetrisCellD;
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
  const type = getRandomEnumValue(TetrisCellShape, TetrisCellShape.E);
  const format = randomIntFromInterval(1, 4);
  const from = { row: -4, col: 4 };

  return createTetrominoe(type, format, from);
};
