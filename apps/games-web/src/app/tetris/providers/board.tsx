import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { defaultTetrisBoard, TetrisBoard } from '../models/board';
import { TetrisCellEnum } from '../models/cell';
import { createTetrominoe, Tetrominoe } from '../models/tetrominoe';
import { BOARD_COLUMNS, BOARD_ROWS, GAME_TIME } from '../constants';

const TetrisBoardContext = createContext<{
  board?: TetrisBoard;
  current?: Tetrominoe;
  previous?: Tetrominoe;
  next?: Tetrominoe;
}>({});

export const TetrisBoardProvider = ({ children }: { children: ReactNode }) => {
  const [board, setBoard] = useState<TetrisBoard>(defaultTetrisBoard);
  const [current, setCurrent] = useState<Tetrominoe>();
  const [previous, setPrevious] = useState<Tetrominoe>();
  const [next, setNext] = useState<Tetrominoe>();

  useEffect(() => {
    setCurrent(createTetrominoe(TetrisCellEnum.L, { row: 0, col: 2 }));
  }, []);

  useEffect(() => {
    if (!current) {
      return;
    }

    setBoard((board) => {
      previous?.position.forEach((row) => {
        row.forEach((cell) => {
          const boardRow = board[cell.row];
          if (boardRow) {
            const boardCol = boardRow[cell.col];
            if (boardCol) {
              boardCol.type = TetrisCellEnum.Empty;
            }
          }
        });
      });

      current.position.forEach((row) => {
        row.forEach((cell) => {
          const boardRow = board[cell.row];
          if (boardRow) {
            const boardCol = boardRow[cell.col];
            if (boardCol) {
              boardCol.type = cell.type;
            }
          }
        });
      });
      return board;
    });
  }, [current]);

  useEffect(() => {
    if (!current) {
      return;
    }

    setTimeout(() => {
      setPrevious(current);
      setCurrent({
        ...createTetrominoe(current.type, {
          row: current.position[0][0].row + 1,
          col: current.position[0][0].col,
        }),
      });
    }, GAME_TIME);
  }, [current]);

  console.log('current', { current, board });

  return (
    <TetrisBoardContext.Provider value={{ board, current, previous, next }}>
      {children}
    </TetrisBoardContext.Provider>
  );
};

export const useTetrisBoard = () => {
  const context = useContext(TetrisBoardContext);

  if (!context) {
    throw new Error(
      'useTetrisBoard must be used within an TetrisBoardProvider',
    );
  }

  return context;
};
