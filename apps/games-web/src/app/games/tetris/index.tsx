import { useEffect } from 'react';
import { TetrisBoardBoard } from './components/board';
import { TetrisMenu } from './components/menu';
import { TetrisNext } from './components/next';
import { TetrisScore } from './components/score';
import { TetrisBoardProvider } from './providers/board';
import styles from './styles.module.css';
import { BOARD_COLUMNS, BOARD_ROWS } from './utils/constants';

export const Tetris = () => {
  useEffect(() => {
    document.documentElement.style.setProperty('--board-rows', BOARD_ROWS.toString());
    document.documentElement.style.setProperty('--board-cols', BOARD_COLUMNS.toString());
  }, []);

  return (
    <TetrisBoardProvider>
      <div className={styles.tetrisPage}>
        <TetrisBoardBoard />
        <TetrisMenu />
        <TetrisNext />
        <TetrisScore />
      </div>
    </TetrisBoardProvider>
  );
};
