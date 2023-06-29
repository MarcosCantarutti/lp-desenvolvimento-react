import { useState } from 'react';
import Header from './pages/Header/Header';
import Home from './pages/Home/Home';
import './style/index.scss';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header></Header>
      <Home></Home>
    </>
  );
}

export default App;
