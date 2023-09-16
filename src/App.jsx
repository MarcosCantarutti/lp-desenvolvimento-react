import './style/index.scss';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import Consultoria from './pages/Consultoria/Consultoria';
import NotFound from './pages/NotFound/NotFound';
import WorkingProgress from './pages/Working/WorkingProgress';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<MainPage />} />
          <Route path="/consultoria" element={<Consultoria />} />
          <Route path="/working" element={<WorkingProgress />} />
          <Route path="/notfound" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
