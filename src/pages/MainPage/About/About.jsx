import './About.scss';
import { Fade } from 'react-awesome-reveal';
import Container from '../../../components/Container/Container';
import bg from '../../../assets/bg.jpg';
function About() {
  const proprietes = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: false,
    arrows: false,
  };
  return (
    <Container className="main-container">
      <Fade direction={'left'} triggerOnce>
        <div className="about-container" id="about">
          <div className="about-image">
            <img src={bg} alt="" />
          </div>
          <div className="about-text">
            <h1>QUEM SOMOS?</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              voluptate dolores, molestias tenetur ratione velit consequuntur
              nemo illum qui necessitatibus suscipit quibusdam id. Quo pariatur
              blanditiis quibusdam nemo officiis adipisci!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              voluptate dolores, molestias tenetur ratione velit consequuntur
              nemo illum qui necessitatibus suscipit quibusdam id. Quo pariatur
              blanditiis quibusdam nemo officiis adipisci!
            </p>
            {/* <Button className="golden large">ENTRAR EM CONTATO</Button> */}
          </div>
        </div>
      </Fade>
    </Container>
  );
}

export default About;
