import { Board } from './components/board';
import { TetrisBoardProvider } from './providers/board';

export const TetrisPage = () => {
  return (
    <TetrisBoardProvider>
      <Board />
    </TetrisBoardProvider>
  );
};
