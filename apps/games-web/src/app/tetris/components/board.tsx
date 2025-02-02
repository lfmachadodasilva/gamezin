import { TetrisCellColor } from '../models/cell';
import { useTetrisBoard } from '../providers/board';

import styles from '../styles.module.css';

export const TetrisBoardBoard = () => {
  const { board } = useTetrisBoard();

  return (
    <div className={styles.board}>
      {board?.map((rows, indexRow) => (
        <div key={`board-row-${indexRow}`} className={styles.boardRow}>
          {rows.map((cell, indexCol) => (
            <div
              key={`board-${indexRow}-${indexCol}-${cell.shape}`}
              className={`${styles.boardShape}`}
              style={{
                backgroundColor: TetrisCellColor[cell.shape],
              }}
            >
              {/* {cell.type} */}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
