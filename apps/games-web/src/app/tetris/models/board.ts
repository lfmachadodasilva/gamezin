import { BOARD_COLUMNS, BOARD_ROWS } from '../constants';
import { TetrisCell, TetrisCellType } from './cell';
import { applyTetrominoe, Tetrominoe } from './tetrominoe';

export type TetrisBoard = TetrisCell[][];

export const colid = (
  board: TetrisBoard,
  current: Tetrominoe,
  next: Tetrominoe,
) => {
  // remove current position
  board = applyTetrominoe(board, current, TetrisCellType.E);

  for (let rowIndex = 0; rowIndex < next.position.length; rowIndex++) {
    for (
      let colIndex = 0;
      colIndex < next.position[rowIndex].length;
      colIndex++
    ) {
      const cell = next.position[rowIndex][colIndex];

      if (cell.type === TetrisCellType.E) {
        // empty space
        continue;
      }

      if (cell.row < 0 || cell.row >= BOARD_ROWS) {
        // out of row border
        return true;
      }

      if (cell.col < 0 || cell.col >= BOARD_COLUMNS) {
        // out of col border
        return true;
      }

      if (board[cell.row][cell.col].type !== TetrisCellType.E) {
        // cell ocupied
        return true;
      }
    }
  }

  return false;
};
