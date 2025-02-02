import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CheckersPage } from './games/checkers';
import { Tetris } from './games/tetris';
import { HomePage } from './home';
import { NotFoundPage } from './notFound';

import { Layout } from './layout';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="tetris" element={<Tetris />} />
          <Route path="checkers" element={<CheckersPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
