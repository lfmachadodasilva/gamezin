import { TetrisCellColor } from '../models/cell';
import { useTetrisBoard } from '../providers/board';

export const TetrisNext = () => {
  const { next } = useTetrisBoard();

  return (
    <div
      style={{
        border: '1px solid var(--border-color-light)',
        padding: '5px',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: '100px',
      }}
    >
      <p style={{ margin: '5px' }}>Next</p>
      <div>
        {next?.position.map((rows, indexRow) => (
          <div key={`next-row-${indexRow}`} style={{ display: 'flex' }}>
            {rows.map((cell, indexCol) => (
              <div
                key={`next-${indexRow}-${indexCol}-${cell.type}`}
                style={{
                  borderTop: indexRow === 0 ? '1px solid var(--border-color-light)' : 'none',
                  borderBottom: '1px solid var(--border-color-light)',
                  borderLeft: indexCol === 0 ? '1px solid var(--border-color-light)' : 'none',
                  borderRight: '1px solid var(--border-color-light)',
                  backgroundColor: TetrisCellColor[cell.type],
                  width: '20px',
                  height: '20px',
                }}
              ></div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
