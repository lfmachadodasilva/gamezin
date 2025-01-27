import { deepClone, getRandomEnumValue, randomIntFromInterval } from '../utils/common';
import { TetrisBoard } from './board';
import {
  TetrisCellType,
  TetrisCellL1,
  TetrisCellL2,
  TetrisCellL3,
  TetrisCellL4,
  TetrisCellType2,
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
  position: { row: number; col: number; type: TetrisCellType }[][];
  type: TetrisCellType;
  format: number;
}

export const applyTetrominoe = (
  board: TetrisBoard,
  tetrominoe: Tetrominoe,
  type?: TetrisCellType,
  type2?: TetrisCellType2,
) => {
  const boardCopy: TetrisBoard = deepClone(board);

  tetrominoe.position.forEach((row) => {
    row.forEach((cell) => {
      if (cell.type !== TetrisCellType.E) {
        const boardRow = boardCopy[cell.row];
        if (boardRow) {
          const boardCol = boardRow[cell.col];
          if (boardCol) {
            boardCol.type = type ?? cell.type;
            boardCol.type2 = type2 ?? boardCol.type2;
          }
        }
      }
    });
  });
  return boardCopy;
};

export const createTetrominoe = (
  type: TetrisCellType,
  format: number,
  from: { row: number; col: number },
) => {
  let cell: TetrisCellType[][] = [];
  if (type === TetrisCellType.L) {
    if (format === 1) {
      cell = TetrisCellL1;
    } else if (format === 2) {
      cell = TetrisCellL2;
    } else if (format === 3) {
      cell = TetrisCellL3;
    } else if (format === 4) {
      cell = TetrisCellL4;
    }
  } else if (type === TetrisCellType.O) {
    cell = TetrisCellO;
  } else if (type === TetrisCellType.I) {
    if (format === 1) {
      cell = TetrisCellI1;
    } else {
      cell = TetrisCellI2;
    }
  } else if (type === TetrisCellType.Z) {
    if (format === 1) {
      cell = TetrisCellZ1;
    } else if (format === 2) {
      cell = TetrisCellZ2;
    } else if (format === 3) {
      cell = TetrisCellZ3;
    } else if (format === 4) {
      cell = TetrisCellZ4;
    }
  } else if (type === TetrisCellType.D) {
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
  const type = getRandomEnumValue(TetrisCellType, TetrisCellType.E);
  const from = { row: 0, col: 4 };
  const format = randomIntFromInterval(1, 4);

  return createTetrominoe(type, format, from);
};
