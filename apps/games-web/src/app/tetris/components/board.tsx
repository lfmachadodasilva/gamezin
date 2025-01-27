import { TetrisCellColor } from '../models/cell';
import { useTetrisBoard } from '../providers/board';

export const Board = () => {
  const { board, setPause } = useTetrisBoard();

  const handlePause = () => {
    setPause((pause) => !pause);
  };

  return (
    <>
      <button onClick={handlePause}>Pause</button>
      <br></br>
      <br></br>
      {board?.map((rows, indexRow) => (
        <div key={`board-row-${indexRow}`} style={{ display: 'flex' }}>
          {rows.map((cell, indexCol) => (
            <div
              key={`board-${indexRow}-${indexCol}-${cell.shape}`}
              style={{
                borderTop: indexRow === 0 ? '1px solid black' : 'none',
                borderBottom: '1px solid black',
                borderLeft: indexCol === 0 ? '1px solid black' : 'none',
                borderRight: '1px solid black',
                backgroundColor: TetrisCellColor[cell.shape],
                width: '20px',
                height: '20px',
              }}
            >
              {/* {cell.type} */}
            </div>
          ))}
        </div>
      ))}
    </>
  );
};
