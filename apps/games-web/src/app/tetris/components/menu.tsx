import { useTetrisBoard } from '../providers/board';

export const TetrisMenu = () => {
  const { setPause, restart } = useTetrisBoard();

  const handlePause = () => {
    setPause((pause) => !pause);
  };

  return (
    <div style={{ display: 'flex', gap: '10px', margin: '5px', marginLeft: 0 }}>
      <button onClick={handlePause}>Pause</button>
      <button onClick={restart}>Restart</button>
    </div>
  );
};
