import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { TetrisBoard } from '../models/board';
import { TetrisCellType, TetrisCellType2 } from '../models/cell';
import { applyTetrominoe, createRandomTetrominoe, Tetrominoe } from '../models/tetrominoe';
import { BOARD_COLUMNS, BOARD_ROWS, GAME_TIME } from '../utils/constants';
import { populateArray } from '../utils/common';
import { useInterval } from '../hooks/useInterval';
import { colid, dropping, fixedAll } from '../utils/boardFuncs';

const TetrisBoardContext = createContext<{
  board?: TetrisBoard;
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
    populateArray(BOARD_ROWS, BOARD_COLUMNS, {
      type: TetrisCellType.E,
      type2: TetrisCellType2.Empty,
    }),
  );
  const [shape, setShape] = useState<{
    previous: Tetrominoe | null;
    current: Tetrominoe | null;
  }>({ previous: null, current: createRandomTetrominoe() });
  const [pause, setPause] = useState<boolean>(false);

  useEffect(() => {
    if (!shape.current) {
      return;
    }

    setBoard((board) => {
      if (shape.previous) {
        board = applyTetrominoe(board, shape.previous, TetrisCellType.E);
      }

      if (shape.current) {
        board = applyTetrominoe(board, shape.current, undefined, TetrisCellType2.Temp);
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
      setShape({ previous: null, current: createRandomTetrominoe() });
    } else {
      setShape((value) => ({ previous: value.current, current: nextTetrominoe }));
    }
  }, GAME_TIME);

  return (
    <TetrisBoardContext.Provider value={{ board, pause, setPause }}>
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
