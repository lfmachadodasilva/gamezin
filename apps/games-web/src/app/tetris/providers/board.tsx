import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { colid, defaultTetrisBoard, TetrisBoard } from '../models/board';
import { TetrisCellEnum } from '../models/cell';
import {
  applyTetrominoe,
  createTetrominoe,
  Tetrominoe,
} from '../models/tetrominoe';
import { BOARD_COLUMNS, BOARD_ROWS, GAME_TIME } from '../constants';

const TetrisBoardContext = createContext<{
  board?: TetrisBoard;
  current?: Tetrominoe | null;
  previous?: Tetrominoe | null;
  next?: Tetrominoe | null;
  pause: boolean;
  setPause: React.Dispatch<React.SetStateAction<boolean>>;
}>({
  pause: false,
  setPause: () => {},
});

export const TetrisBoardProvider = ({ children }: { children: ReactNode }) => {
  const [board, setBoard] = useState<TetrisBoard>(defaultTetrisBoard);
  const [current, setCurrent] = useState<Tetrominoe | null>();
  const [previous, setPrevious] = useState<Tetrominoe | null>();
  const [next, setNext] = useState<Tetrominoe | null>();
  const [pause, setPause] = useState<boolean>(false);

  const dropNewTetrominoe = () => {
    setCurrent(createTetrominoe(TetrisCellEnum.L, { row: 0, col: 4 }));
  };

  useEffect(() => {
    setCurrent(createTetrominoe(TetrisCellEnum.L, { row: 0, col: 4 }));
  }, []);

  useEffect(() => {
    if (!current) {
      return;
    }

    setBoard((board) => {
      if (previous) {
        board = applyTetrominoe(board, previous, TetrisCellEnum.Empty);
      }
      if (current) {
        board = applyTetrominoe(board, current);
      }
      return board;
    });
  }, [current]);

  useEffect(() => {
    if (!current || pause) {
      return;
    }

    setTimeout(() => {
      const nextTetrominoe = {
        ...createTetrominoe(current.type, {
          row: current.position[0][0].row + 1,
          col: current.position[0][0].col,
        }),
      };

      if (colid(board, current, nextTetrominoe)) {
        setCurrent(null);
        setPrevious(null);
        dropNewTetrominoe();
      } else {
        setPrevious(current);
        setCurrent(nextTetrominoe);
      }
    }, GAME_TIME);
  }, [current, pause]);

  return (
    <TetrisBoardContext.Provider
      value={{ board, current, previous, next, pause, setPause }}
    >
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
