import { TetrisBoardBoard } from './components/board';
import { TetrisMenu } from './components/menu';
import { TetrisNext } from './components/next';
import { TetrisScore } from './components/score';
import { TetrisBoardProvider } from './providers/board';

export const Tetris = () => {
  return (
    <TetrisBoardProvider>
      <div style={{ overflow: 'hidden' }}>
        <TetrisMenu />
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
          <TetrisBoardBoard />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <TetrisScore />
            <TetrisNext />
          </div>
        </div>
      </div>
    </TetrisBoardProvider>
  );
};
