import './Services.scss';

import Container from '../../components/Container/Container';
import Button from '../../components/Button/Button';
import bg from '../../assets/bg.jpg';

function Services() {
  return (
    <Container className="main-container">
      <div className="services-container">
        <div className="services-text">
          <h1>Nossa cultura impulsiona o que fazemos</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            voluptate dolores, molestias tenetur ratione velit consequuntur nemo
            illum qui necessitatibus suscipit quibusdam id. Quo pariatur
            blanditiis quibusdam nemo officiis adipisci!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            voluptate dolores, molestias tenetur ratione velit consequuntur nemo
            illum qui necessitatibus suscipit quibusdam id. Quo pariatur
            blanditiis quibusdam nemo officiis adipisci!
          </p>

          <Button className="golden large">ENTRAR EM CONTATO</Button>
        </div>
        <div className="services-image">
          <img src={bg} alt="" />
        </div>
      </div>
    </Container>
  );
}

export default Services;
