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
      <div className="home-container">
        <h1>Qual o seu desafio de hoje?</h1>
        <p>
          VOCÊ ESTÁ PRONTO PARA LEVAR A GESTÃO DE PESSOAS DE SUA EMPRESA PARA O
          PRÓXIMO NÍVEL E COLHER OS BENEFÍCIOS DE UMA EQUIPE ALTAMENTE ENGAJADA
          E EFICAZ?
        </p>
        <Button className="golden large">FALE COM O ESPECIALISTA</Button>
      </div>
      {/* <Slideshow {...proprietes}></Slideshow> */}
    </Container>
  );
}

export default Home;
