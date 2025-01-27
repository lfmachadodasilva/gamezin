import { TetrisCellColor } from '../models/cell';
import { useTetrisBoard } from '../providers/board';

export const Next = () => {
  const { next } = useTetrisBoard();

  return (
    <div>
      <p>Next</p>
      {next?.position.map((rows, indexRow) => (
        <div key={`next-row-${indexRow}`} style={{ display: 'flex' }}>
          {rows.map((cell, indexCol) => (
            <div
              key={`next-${indexRow}-${indexCol}-${cell.type}`}
              style={{
                borderTop: indexRow === 0 ? '1px solid black' : 'none',
                borderBottom: '1px solid black',
                borderLeft: indexCol === 0 ? '1px solid black' : 'none',
                borderRight: '1px solid black',
                backgroundColor: TetrisCellColor[cell.type],
                width: '20px',
                height: '20px',
              }}
            ></div>
          ))}
        </div>
      ))}
    </div>
  );
};
