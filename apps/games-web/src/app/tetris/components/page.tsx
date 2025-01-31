import { TetrisBoardBoard } from './board';
import { TetrisMenu } from './menu';
import { TetrisNext } from './next';

export const TetrisPage = () => {
  return (
    <div>
      <TetrisMenu />
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
        <TetrisBoardBoard />
        <TetrisNext />
      </div>
    </div>
  );
};
