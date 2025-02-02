import { TetrisBoardBoard } from './components/board';
import { TetrisMenu } from './components/menu';
import { TetrisNext } from './components/next';
import { TetrisScore } from './components/score';
import { TetrisBoardProvider } from './providers/board';
import styles from './styles.module.css';

export const Tetris = () => {
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
