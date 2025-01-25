// Uncomment this line to use CSS modules
// import styles from './app.module.css';
import { HomePage } from './home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { TetrisPage } from './tetris';
import { CheckersPage } from './checkers';
import { NotFoundPage } from './notFound';

import { Layout } from './layout';

export function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="tetris" element={<TetrisPage />} />
            <Route path="checkers" element={<CheckersPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
