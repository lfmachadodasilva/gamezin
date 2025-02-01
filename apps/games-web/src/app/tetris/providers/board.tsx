import {
  createContext,
  ReactNode,
  TouchEventHandler,
  use,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import { TetrisBoard } from '../models/board';
import { TetrisCellShape, TetrisCellType } from '../models/cell';
import { applyTetrominoe, createRandomTetrominoe, Tetrominoe } from '../models/tetrominoe';
import { BOARD_COLUMNS, BOARD_ROWS, GAME_TIME } from '../utils/constants';
import { populateArray } from '../utils/common';
import { useInterval } from '../hooks/useInterval';
import {
  colid,
  dropping,
  fixedAll,
  gameOver,
  moveToLeft,
  moveToRight,
  processPoint,
} from '../utils/boardFuncs';

const TetrisBoardContext = createContext<{
  board?: TetrisBoard;
  pause: boolean;
  setPause: React.Dispatch<React.SetStateAction<boolean>>;
  next?: Tetrominoe | null;
  restart: () => void;
  points: number;
}>({
  pause: false,
  setPause: () => {
    /* no-op */
  },
  restart: () => {
    /* no-op */
  },
  points: 0,
});

export const TetrisBoardProvider = ({ children }: { children: ReactNode }) => {
  const [points, setPoints] = useState<number>(0);
  const touchStartPosition = useRef<{ x: number; y: number } | null>(null);
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
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!shape.current) {
        return;
      }
      const nextTetrominoe =
        e.code === 'ArrowLeft'
          ? moveToLeft(shape.current)
          : e.code === 'ArrowRight'
            ? moveToRight(shape.current)
            : e.code === 'ArrowDown'
              ? dropping(shape.current)
              : null;

      if (!nextTetrominoe) {
        return;
      }

      if (!colid(board, shape.current, nextTetrominoe)) {
        setShape((value) => ({ previous: value.current, current: nextTetrominoe }));
      }
    };
    document.addEventListener('keyup', handleKeyDown);

    return () => {
      document.removeEventListener('keyup', handleKeyDown);
    };
  }, [shape, board, next]);

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

      const currentPoint = processPoint(board);
      setPoints((value) => value + currentPoint);

      return board;
    });
  }, [shape]);

  useInterval(() => {
    if (!shape.current || pause) {
      return;
    }

    const nextTetrominoe = dropping(shape.current);

    if (colid(board, shape.current, nextTetrominoe)) {
      if (gameOver(nextTetrominoe)) {
        setShape({ previous: shape.current, current: null });
      } else {
        setBoard(fixedAll(board));
        setShape({ previous: null, current: next });
        setNext(createRandomTetrominoe());
      }
    } else {
      setShape((value) => ({ previous: value.current, current: nextTetrominoe }));
    }
  }, GAME_TIME);

  const handleRestart = useCallback(() => {
    setPoints(0);
    setBoard(
      populateArray(BOARD_ROWS, BOARD_COLUMNS, {
        shape: TetrisCellShape.E,
        type: TetrisCellType.Empty,
      }),
    );
    setShape({ previous: null, current: createRandomTetrominoe() });
    setNext(createRandomTetrominoe());
  }, []);

  const handleTouchStart = (event: React.TouchEvent) => {
    const touch = event.touches[0];
    touchStartPosition.current = { x: touch.clientX, y: touch.clientY }; // Record initial touch position
  };

  const handleTouchMove = useCallback(
    (event: React.TouchEvent) => {
      if (!touchStartPosition.current) {
        return;
      }
      if (!shape.current) {
        return;
      }

      const touch = event.touches[0];
      const deltaX = touch.clientX - touchStartPosition.current.x;
      const deltaY = touch.clientY - touchStartPosition.current.y;

      const moveThreshold = 20; // Pixels to trigger movement

      if (Math.abs(deltaX) > moveThreshold) {
        // Horizontal movement (left/right)
        const directionX = deltaX > 0 ? 1 : -1;

        const nextTetrominoe =
          directionX === 1 ? moveToRight(shape.current) : moveToLeft(shape.current);
        if (!colid(board, shape.current, nextTetrominoe)) {
          setShape((value) => ({ previous: value.current, current: nextTetrominoe }));
        }

        // Reset start X position to avoid continuous triggering
        touchStartPosition.current.x = touch.clientX;
      } else if (Math.abs(deltaY) > moveThreshold) {
        // Vertical movement (down)
        const directionY = deltaY > 0 ? 1 : 0; // Only move down

        if (directionY) {
          const nextTetrominoe = dropping(shape.current);
          if (!colid(board, shape.current, nextTetrominoe)) {
            setShape((value) => ({ previous: value.current, current: nextTetrominoe }));
          }

          // Reset start Y position to avoid continuous triggering
          touchStartPosition.current.y = touch.clientY;
        }
      }
    },
    [board, shape],
  );

  const handleTouchEnd = () => {
    touchStartPosition.current = null; // Reset touch tracking
  };

  return (
    <span onTouchMove={handleTouchMove} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
      <TetrisBoardContext.Provider
        value={{ board, pause, setPause, next, restart: handleRestart, points }}
      >
        {children}
      </TetrisBoardContext.Provider>
    </span>
  );
};

export const useTetrisBoard = () => {
  const context = useContext(TetrisBoardContext);

  if (!context) {
    throw new Error('useTetrisBoard must be used within an TetrisBoardProvider');
  }

  return context;
};
