import { useState } from 'react';
import Header from './pages/Header/Header';
import Home from './pages/Home/Home';
import './style/index.scss';
import About from './pages/About/About';
import Services from './pages/Services/Services';
import Questions from './pages/Questions/Questions';
import Contact from './pages/Contact/Contact';
import Footer from './pages/Footer/Footer';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header></Header>
      <main>
        <Home></Home>
        <About></About>
        <Services></Services>
        <Questions></Questions>
        <Contact></Contact>
        <Footer></Footer>
      </main>
    </>
  );
}

export default App;
