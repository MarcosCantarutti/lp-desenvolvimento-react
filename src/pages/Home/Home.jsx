import './Home.scss';
import Slideshow from '../../components/Slider/SlideContainer';
import Container from '../../components/Container/Container';


function Home() {
  return (
    <Container className="main-container">
      <Slideshow></Slideshow>
    </Container>
  );
}

export default Home;
