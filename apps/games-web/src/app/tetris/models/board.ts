import { BOARD_COLUMNS, BOARD_ROWS } from '../constants';
import { TetrisCell, TetrisCellEnum } from './cell';

export type TetrisBoard = TetrisCell[][];

export const defaultTetrisBoard: TetrisBoard = Array.from(
  { length: BOARD_ROWS },
  () =>
    Array.from({ length: BOARD_COLUMNS }, () => ({
      type: TetrisCellEnum.Empty,
    })),
);
