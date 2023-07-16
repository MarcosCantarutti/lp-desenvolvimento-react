import './Questions.scss';

import Container from '../../components/Container/Container';
import Button from '../../components/Button/Button';
import bg from '../../assets/bg.jpg';

function Questions() {
  return (
    <Container className="main-container white-bg">
      <h1 className="questions-title">Perguntas frequentes</h1>
      <div className="questions-container">
        <div className="questions-text">
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
          {/* <Button className="golden large">ENTRAR EM CONTATO</Button> */}
        </div>

        <div className="questions-text">
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
          {/* <Button className="golden large">ENTRAR EM CONTATO</Button> */}
        </div>
        <div className="questions-image">
          <img src={bg} alt="" />
        </div>
      </div>
    </Container>
  );
}

export default Questions;
