import { BOARD_COLUMNS, BOARD_ROWS } from './constants';
import { TetrisBoard } from '../models/board';
import { TetrisCell, TetrisCellShape, TetrisCellType } from '../models/cell';
import { createTetrominoe, Tetrominoe } from '../models/tetrominoe';

export const fixedAll = (board: TetrisBoard): TetrisBoard =>
  board.map((row) =>
    row.map((col) => {
      if (col.type === TetrisCellType.Temp) {
        col.type = TetrisCellType.Fixed;
      }
      return col;
    }),
  );

export const colid = (board: TetrisBoard, current: Tetrominoe, next: Tetrominoe): boolean => {
  for (let rowIndex = 0; rowIndex < next.position.length; rowIndex++) {
    for (let colIndex = 0; colIndex < next.position[rowIndex].length; colIndex++) {
      const cell = next.position[rowIndex][colIndex];

      if (cell.type === TetrisCellShape.E) {
        // empty space
        continue;
      }

      if (cell.row === BOARD_ROWS) {
        // out of row border
        return true;
      }

      if (cell.col < 0 || cell.col >= BOARD_COLUMNS) {
        // out of column border
        return true;
      }

      const cellRow = board[cell.row];
      if (cellRow) {
        const cellCol = cellRow[cell.col];

        if (
          cellCol &&
          cellCol.shape !== TetrisCellShape.E &&
          cellCol.type === TetrisCellType.Fixed
        ) {
          return true;
        }
      }
    }
  }

  return false;
};

export const processPoint = (board: TetrisBoard): number => {
  const colsAffected = [];
  for (let rowIndex = 0; rowIndex < board.length; rowIndex++) {
    if (
      board[rowIndex].every(
        (col) => col.type === TetrisCellType.Fixed && col.shape !== TetrisCellShape.E,
      )
    ) {
      colsAffected.push(rowIndex);
    }
  }

  const value: TetrisCell = {
    shape: TetrisCellShape.E,
    type: TetrisCellType.Empty,
  };

  if (colsAffected.length > 0) {
    const emptyRow = Array.from({ length: BOARD_COLUMNS }, () => value);

    for (let i = 0; i < colsAffected.length; i++) {
      board.splice(colsAffected[i], 1);
      board.unshift(emptyRow);
    }

    return colsAffected.length * colsAffected.length;
  }

  return 0;
};

export const gameOver = (shape: Tetrominoe): boolean =>
  shape.position.some((row) => row.some((cell) => cell.row < 0));

export const dropping = (shape: Tetrominoe): Tetrominoe =>
  createTetrominoe(shape.type, shape.format, {
    row: shape.position[0][0].row + 1,
    col: shape.position[0][0].col,
  });

export const moveToRight = (shape: Tetrominoe): Tetrominoe =>
  createTetrominoe(shape.type, shape.format, {
    row: shape.position[0][0].row,
    col: shape.position[0][0].col + 1,
  });

export const moveToLeft = (shape: Tetrominoe): Tetrominoe =>
  createTetrominoe(shape.type, shape.format, {
    row: shape.position[0][0].row,
    col: shape.position[0][0].col - 1,
  });
