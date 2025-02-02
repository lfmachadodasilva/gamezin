import { TetrisCellColor } from '../models/cell';
import { useTetrisBoard } from '../providers/board';

import styles from '../styles.module.css';

export const TetrisNext = () => {
  const { next } = useTetrisBoard();

  return (
    <div className={styles.nextShape}>
      <p style={{ margin: '5px' }}>Next</p>
      <div>
        <div className={styles.board}>
          {next?.position.map((rows, indexRow) => (
            <div key={`next-row-${indexRow}`} className={styles.boardRow}>
              {rows.map((cell, indexCol) => (
                <div
                  key={`next-${indexRow}-${indexCol}-${cell.type}`}
                  className={styles.boardShape}
                  style={{
                    backgroundColor: TetrisCellColor[cell.type],
                  }}
                ></div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
