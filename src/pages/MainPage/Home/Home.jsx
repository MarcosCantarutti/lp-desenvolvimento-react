import './Home.scss';
import Slideshow from '../../../components/Slider/SlideContainer';
import Container from '../../../components/Container/Container';

function Home() {
  const proprietes = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: false,
    arrows: false,
  };
  return (
    <Container className="main-container container-no-padding-top">
      <span id="home"></span>
      <Slideshow {...proprietes}></Slideshow>
    </Container>
  );
}

export default Home;