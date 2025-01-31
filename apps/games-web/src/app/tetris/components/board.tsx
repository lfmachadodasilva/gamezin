import { TetrisCellColor } from '../models/cell';
import { useTetrisBoard } from '../providers/board';

export const TetrisBoardBoard = () => {
  const { board } = useTetrisBoard();

  return (
    <div>
      {board?.map((rows, indexRow) => (
        <div key={`board-row-${indexRow}`} style={{ display: 'flex' }}>
          {rows.map((cell, indexCol) => (
            <div
              key={`board-${indexRow}-${indexCol}-${cell.shape}`}
              style={{
                borderTop: indexRow === 0 ? '1px solid var(--border-color-light)' : 'none',
                borderBottom: '1px solid var(--border-color-light)',
                borderLeft: indexCol === 0 ? '1px solid var(--border-color-light)' : 'none',
                borderRight: '1px solid var(--border-color-light)',
                backgroundColor: TetrisCellColor[cell.shape],
                minWidth: '20px',
                minHeight: '20px',
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
