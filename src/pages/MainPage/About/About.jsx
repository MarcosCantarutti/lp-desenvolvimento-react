import './About.scss';
import { Fade } from 'react-awesome-reveal';
import Container from '../../../components/Container/Container';
import about_1 from '../../../assets/about-1.jpg';
import Button from '../../../components/Button/Button';
function About() {
  // const proprietes = {
  //   duration: 5000,
  //   transitionDuration: 500,
  //   infinite: true,
  //   indicators: false,
  //   arrows: false,
  // };
  return (
    <Container className="main-container">
      <Fade direction={'left'} triggerOnce>
        <div className="about-container" id="about">
          <div className="about-image">
            <img src={about_1} alt="" />
          </div>
          <div className="about-text">
            <h1>Nossa Consultoria</h1>
            <p>
              Nossos especialistas são multidisciplinares com formações sólidas
              em administração de empresas, psicologia, mba em gestão de
              pessoas, business coaching, gestão por competência, análise
              comportamental e diversas outras formações complementares.
              <br />
              Combinando conhecimentos teóricos e uma vasta e sólida experiência
              em grandes empresas.
            </p>

            <Button className="golden large">ENTRAR EM CONTATO</Button>
          </div>
        </div>
      </Fade>
    </Container>
  );
}

export default About;
