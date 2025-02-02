import { useTetrisBoard } from '../providers/board';

import styles from '../styles.module.css';

export const TetrisMenu = () => {
  const { setPause, restart } = useTetrisBoard();

  const handlePause = () => {
    setPause((pause) => !pause);
  };

  return (
    <div className={styles.menu}>
      <button onClick={handlePause}>Pause</button>
      <button onClick={restart}>Restart</button>
    </div>
  );
};
