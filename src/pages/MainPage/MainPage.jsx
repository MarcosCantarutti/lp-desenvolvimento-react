import Header from '../Header/Header';
import Home from './Home/Home';
import About from './About/About';
import Services from './Services/Services';
import Questions from './Questions/Questions';
import Contact from './Contact/Contact';
import Footer from '../Footer/Footer';

function MainPage() {
  return (
    <>
      <Header></Header>
      <main>
        <Home></Home>
        <About></About>
        <Services></Services>
        <Questions></Questions>
        <Contact></Contact>
      </main>
      <Footer></Footer>
    </>
  );
}

export default MainPage;
