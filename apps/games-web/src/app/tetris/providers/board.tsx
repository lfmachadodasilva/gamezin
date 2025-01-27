import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { colid, TetrisBoard } from '../models/board';
import { TetrisCellType } from '../models/cell';
import {
  applyTetrominoe,
  createRandomTetrominoe,
  createTetrominoe,
  Tetrominoe,
} from '../models/tetrominoe';
import { BOARD_COLUMNS, BOARD_ROWS, GAME_TIME } from '../constants';
import { populateArray } from '../utils/common';
import { useInterval } from '../hooks/useInterval';

const TetrisBoardContext = createContext<{
  board?: TetrisBoard;
  current?: Tetrominoe | null;
  previous?: Tetrominoe | null;
  next?: Tetrominoe | null;
  pause: boolean;
  setPause: React.Dispatch<React.SetStateAction<boolean>>;
}>({
  pause: false,
  setPause: () => {
    /* no-op */
  },
});

export const TetrisBoardProvider = ({ children }: { children: ReactNode }) => {
  const [board, setBoard] = useState<TetrisBoard>(
    populateArray(BOARD_ROWS, BOARD_COLUMNS, { type: TetrisCellType.E }),
  );
  const [current, setCurrent] = useState<Tetrominoe | null>(
    createRandomTetrominoe(),
  );
  const [previous, setPrevious] = useState<Tetrominoe | null>();
  const [next, setNext] = useState<Tetrominoe | null>();
  const [pause, setPause] = useState<boolean>(false);

  useEffect(() => {
    if (!current) {
      return;
    }

    setBoard((board) => {
      if (previous) {
        board = applyTetrominoe(board, previous, TetrisCellType.E);
      }
      if (current) {
        board = applyTetrominoe(board, current);
      }
      return board;
    });
  }, [current, previous]);

  useInterval(() => {
    if (!current || pause) {
      return;
    }

    const nextTetrominoe = {
      ...createTetrominoe(current.type, current.format, {
        row: current.position[0][0].row + 1,
        col: current.position[0][0].col,
      }),
    };

    if (colid(board, current, nextTetrominoe)) {
      setPrevious(null);
      setCurrent(createRandomTetrominoe());
    } else {
      setPrevious(current);
      setCurrent(nextTetrominoe);
    }
  }, GAME_TIME);

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
