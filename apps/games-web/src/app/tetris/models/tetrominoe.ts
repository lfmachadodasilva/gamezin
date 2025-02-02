import { deepClone, getRandomEnumValue, randomIntFromInterval } from '../../shared/common';
import { TetrisBoard } from './board';
import {
  TetrisShape,
  TetrisShapeL1,
  TetrisShapeL2,
  TetrisShapeL3,
  TetrisShapeL4,
  TetrisShapeType,
  TetrisShapeO,
  TetrisShapeI1,
  TetrisShapeI2,
  TetrisShapeZ1,
  TetrisShapeZ2,
  TetrisShapeZ3,
  TetrisShapeZ4,
  TetrisShapeD,
} from './cell';

export interface Tetrominoe {
  position: { row: number; col: number; type: TetrisShape }[][];
  type: TetrisShape;
  format: number;
}

export const applyTetrominoe = (
  board: TetrisBoard,
  tetrominoe: Tetrominoe,
  type?: TetrisShape,
  type2?: TetrisShapeType,
) => {
  const boardCopy: TetrisBoard = deepClone(board);

  tetrominoe.position.forEach((row) => {
    row.forEach((cell) => {
      if (cell.type !== TetrisShape.E) {
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
  type: TetrisShape,
  format: number,
  from: { row: number; col: number },
) => {
  let cell: TetrisShape[][] = [];
  if (type === TetrisShape.L) {
    if (format === 1) {
      cell = TetrisShapeL1;
    } else if (format === 2) {
      cell = TetrisShapeL2;
    } else if (format === 3) {
      cell = TetrisShapeL3;
    } else if (format === 4) {
      cell = TetrisShapeL4;
    }
  } else if (type === TetrisShape.O) {
    cell = TetrisShapeO;
  } else if (type === TetrisShape.I) {
    if (format === 1) {
      cell = TetrisShapeI1;
    } else {
      cell = TetrisShapeI2;
    }
  } else if (type === TetrisShape.Z) {
    if (format === 1) {
      cell = TetrisShapeZ1;
    } else if (format === 2) {
      cell = TetrisShapeZ2;
    } else if (format === 3) {
      cell = TetrisShapeZ3;
    } else if (format === 4) {
      cell = TetrisShapeZ4;
    }
  } else if (type === TetrisShape.D) {
    cell = TetrisShapeD;
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
  const type = getRandomEnumValue(TetrisShape, TetrisShape.E);
  const format = randomIntFromInterval(1, 4);
  const from = { row: -4, col: 4 };

  return createTetrominoe(type, format, from);
};
