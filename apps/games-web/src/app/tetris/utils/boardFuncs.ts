import { BOARD_ROWS } from './constants';
import { TetrisBoard } from '../models/board';
import { TetrisCellShape, TetrisCellType } from '../models/cell';
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

export const colid = (board: TetrisBoard, current: Tetrominoe, next: Tetrominoe) => {
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

export const dropping = (shape: Tetrominoe): Tetrominoe =>
  createTetrominoe(shape.type, shape.format, {
    row: shape.position[0][0].row + 1,
    col: shape.position[0][0].col,
  });
