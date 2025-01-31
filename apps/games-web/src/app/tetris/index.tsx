import { TetrisPage } from './components/page';
import { TetrisBoardProvider } from './providers/board';

export const Tetris = () => {
  return (
    <TetrisBoardProvider>
      <TetrisPage />
    </TetrisBoardProvider>
  );
};
