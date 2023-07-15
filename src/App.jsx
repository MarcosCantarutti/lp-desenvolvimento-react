import { useState } from 'react';
import Header from './pages/Header/Header';
import Home from './pages/Home/Home';
import './style/index.scss';
import About from './pages/About/About';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header></Header>
      <main>
        <Home></Home>
        <About></About>
      </main>
    </>
  );
}

export default App;
