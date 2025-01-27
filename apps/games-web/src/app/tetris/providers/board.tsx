import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { TetrisBoard } from '../models/board';
import { TetrisCellShape, TetrisCellType } from '../models/cell';
import { applyTetrominoe, createRandomTetrominoe, Tetrominoe } from '../models/tetrominoe';
import { BOARD_COLUMNS, BOARD_ROWS, GAME_TIME } from '../utils/constants';
import { populateArray } from '../utils/common';
import { useInterval } from '../hooks/useInterval';
import { colid, dropping, fixedAll } from '../utils/boardFuncs';

const TetrisBoardContext = createContext<{
  board?: TetrisBoard;
  pause: boolean;
  setPause: React.Dispatch<React.SetStateAction<boolean>>;
  next?: Tetrominoe | null;
}>({
  pause: false,
  setPause: () => {
    /* no-op */
  },
});

export const TetrisBoardProvider = ({ children }: { children: ReactNode }) => {
  const [board, setBoard] = useState<TetrisBoard>(
    populateArray(BOARD_ROWS, BOARD_COLUMNS, {
      shape: TetrisCellShape.E,
      type: TetrisCellType.Empty,
    }),
  );
  const [shape, setShape] = useState<{
    previous: Tetrominoe | null;
    current: Tetrominoe | null;
  }>({ previous: null, current: createRandomTetrominoe() });
  const [next, setNext] = useState<Tetrominoe | null>(createRandomTetrominoe());
  const [pause, setPause] = useState<boolean>(false);

  useEffect(() => {
    if (!shape.current) {
      return;
    }

    setBoard((board) => {
      if (shape.previous) {
        board = applyTetrominoe(board, shape.previous, TetrisCellShape.E);
      }

      if (shape.current) {
        board = applyTetrominoe(board, shape.current, undefined, TetrisCellType.Temp);
      }

      return board;
    });
  }, [shape]);

  useInterval(() => {
    if (!shape.current || pause) {
      return;
    }

    const nextTetrominoe = dropping(shape.current);

    if (colid(board, shape.current, nextTetrominoe)) {
      setBoard(fixedAll(board));
      setShape({ previous: null, current: next });
      setNext(createRandomTetrominoe());
    } else {
      setShape((value) => ({ previous: value.current, current: nextTetrominoe }));
    }
  }, GAME_TIME);

  return (
    <TetrisBoardContext.Provider value={{ board, pause, setPause, next }}>
      {children}
    </TetrisBoardContext.Provider>
  );
};

export const useTetrisBoard = () => {
  const context = useContext(TetrisBoardContext);

  if (!context) {
    throw new Error('useTetrisBoard must be used within an TetrisBoardProvider');
  }

  return context;
};
