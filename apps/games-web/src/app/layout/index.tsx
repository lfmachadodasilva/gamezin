import { Link, Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <>
      <div
        style={{
          display: 'flex',
          gap: '20px',
          marginBottom: '10px',
          borderBottom: '1px solid var(--border-color-light)',
        }}
      >
        <Link to="/">Home</Link>
        <Link to="/tetris">Tetris</Link>
        <Link to="/checkers">Checkers</Link>
      </div>

      <Outlet />
    </>
  );
};
