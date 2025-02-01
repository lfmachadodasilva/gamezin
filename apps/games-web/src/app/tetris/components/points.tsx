import { useTetrisBoard } from '../providers/board';

export const TetrisPoints = () => {
  const { points } = useTetrisBoard();

  return (
    <div style={{ border: '1px solid var(--border-color-light)', padding: '5px', width: '100%' }}>
      <p>Points:</p>
      <p>{points}</p>
    </div>
  );
};
