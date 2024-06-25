import './Services.scss';
import { Fade } from 'react-awesome-reveal';
import Container from '../../../components/Container/Container';
import Button from '../../../components/Button/Button';
import bg from '../../../assets/bg.jpg';

function Services() {
  return (
    <Container className="main-container">
      <Fade direction={'right'} triggerOnce>
        <div className="services-container" id="services">
          <div className="services-text">
            <h1>Nossa cultura impulsiona o que fazemos</h1>
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
          <div className="services-image">
            <img src={bg} alt="" />
          </div>
        </div>
      </Fade>
    </Container>
  );
}

export default Services;
