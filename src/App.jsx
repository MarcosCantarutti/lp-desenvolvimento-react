import './style/index.scss';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import OtherPage from './pages/OtherPage/OtherPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<MainPage />} />
          <Route path="/teste" element={<OtherPage />} />
          {/* <Route component={NotFound} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
