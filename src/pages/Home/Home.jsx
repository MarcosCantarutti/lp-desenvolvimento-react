import './Home.scss';
import Slideshow from '../../components/Slider/SlideContainer';
import Container from '../../components/Container/Container';
import Button from '../../components/Button/Button';

function Home() {
  return (
    <Container className="main-container">
      <Slideshow></Slideshow>
      <div className="main-container">
        <h1>LP TERAPEUTAS</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
          exercitationem itaque aut perspiciatis animi iusto quasi saepe,
          ducimus, culpa sed magnam architecto ullam suscipit reprehenderit
          mollitia dolorum, quo vitae blanditiis!
        </p>
      </div>
      <Button className="golden">teste</Button>
    </Container>
  );
}

export default Home;
