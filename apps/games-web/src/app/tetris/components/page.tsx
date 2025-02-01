import { TetrisBoardBoard } from './board';
import { TetrisMenu } from './menu';
import { TetrisNext } from './next';
import { TetrisPoints } from './points';

export const TetrisPage = () => {
  return (
    <div style={{ overflow: 'hidden' }}>
      <TetrisMenu />
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
        <TetrisBoardBoard />
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <TetrisPoints />
          <TetrisNext />
        </div>
      </div>
    </div>
  );
};
