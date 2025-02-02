import { useTetrisBoard } from '../providers/board';

import styles from '../styles.module.css';

export const TetrisScore = () => {
  const { points } = useTetrisBoard();

  return (
    <div className={styles.score}>
      <p>Points:</p>
      <p>{points}</p>
    </div>
  );
};
