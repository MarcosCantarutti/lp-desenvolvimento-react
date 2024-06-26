import './Home.scss';
// import Slideshow from '../../../components/Slider/SlideContainer';
import Container from '../../../components/Container/Container';
import Button from '../../../components/Button/Button';

function Home() {
  // const proprietes = {
  //   duration: 5000,
  //   transitionDuration: 500,
  //   infinite: true,
  //   indicators: false,
  //   arrows: false,
  // };
  return (
    <Container className="main-container no-padding">
      <div className="home-container" id="home">
        <div className="home-content">
          <h1>Qual o seu desafio de hoje?</h1>
          <p>
            Faça a sua área de Recursos Humanos um pilar estratégico de
            resultados, e desenvolva uma Gestão de Pessoas eficiente.
          </p>
          <Button className="golden large">FALE COM O ESPECIALISTA</Button>
        </div>
      </div>
      {/* <Slideshow {...proprietes}></Slideshow> */}
    </Container>
  );
}

export default Home;
