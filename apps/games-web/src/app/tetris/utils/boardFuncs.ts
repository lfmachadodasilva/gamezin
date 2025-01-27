import { BOARD_ROWS } from './constants';
import { TetrisBoard } from '../models/board';
import { TetrisCellType, TetrisCellType2 } from '../models/cell';
import { Tetrominoe } from '../models/tetrominoe';

export const fixedAll = (board: TetrisBoard): TetrisBoard =>
  board.map((row) =>
    row.map((col) => {
      if (col.type2 === TetrisCellType2.Temp) {
        col.type2 = TetrisCellType2.Fixed;
      }
      return col;
    }),
  );

export const colid = (board: TetrisBoard, current: Tetrominoe, next: Tetrominoe) => {
  for (let rowIndex = 0; rowIndex < next.position.length; rowIndex++) {
    for (let colIndex = 0; colIndex < next.position[rowIndex].length; colIndex++) {
      const cell = next.position[rowIndex][colIndex];

      if (cell.type === TetrisCellType.E) {
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
          cellCol.type !== TetrisCellType.E &&
          cellCol.type2 === TetrisCellType2.Fixed
        ) {
          return true;
        }
      }
    }
  }

  return false;
};
