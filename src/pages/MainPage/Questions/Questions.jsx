import './Questions.scss';
import { Fade } from 'react-awesome-reveal';
import Container from '../../../components/Container/Container';

function Questions() {
  return (
    <Container className="main-container white-bg" id="questions">
      <Fade direction={'top'} triggerOnce>
        <h1 className="questions-title">POR QUE ESCOLHER A LP?</h1>
        <div className="questions-container">
          <div className="questions-text">
            <div>
              <h2>Experiência Comprovada</h2>
              <p>
                Com anos de experiência, já ajudamos inúmeras empresas a
                otimizar seus recursos humanos e alcançar resultados
                especializados.
              </p>
            </div>
            <div>
              <h2>Soluções Personalizadas</h2>
              <p>
                Sabemos que cada empresa é única. Desenvolvemos estratégias de
                gestão de pessoas sob medida para atender às suas necessidades
                específicas.
              </p>
            </div>
          </div>

          <div className="questions-text">
            <div>
              <h2>Resultados Tangíveis</h2>
              <p>
                Não apenas conversamos, entregamos resultados mensuráveis.
                Aumento de produtividade, maior satisfação dos funcionários e
                redução de custos são apenas o começo.
              </p>
            </div>
            <div>
              <h2>Foco na Sua Cultura Empresarial</h2>
              <p>
                Valorizamos a cultura da sua empresa e ganhamos para
                fortalecê-la, incentivando a inovação, a colaboração e o
                crescimento.
              </p>
            </div>
          </div>
          {/* <div className="questions-image">
          <img src={bg} alt="questions-image" />
        </div> */}
        </div>
      </Fade>
      <Fade direction={'top'} triggerOnce>
        <h1 className="questions-title">
          QUAIS SÃO OS POSSÍVEIS RETORNOS PARA SUA EMPRESA?
        </h1>
        <div className="questions-container">
          <div className="questions-text">
            <div>
              <h2>Equipe Altamente Engajada</h2>
              <p>
                Reduza a rotatividade de funcionários e mantenha sua equipe
                motivada.
              </p>
            </div>
            <div>
              <h2> Aumento da Eficiência</h2>
              <p>
                Implemente práticas de gestão que aumentem a produtividade e a
                eficácia operacional.
              </p>
            </div>
          </div>

          <div className="questions-text">
            <div>
              <h2>Ambiente de Trabalho Positivo</h2>
              <p>
                Crie uma cultura empresarial saudável, onde a criatividade e o
                trabalho em equipe floresçam.
              </p>
            </div>
            <div>
              <h2>Otimização de Recursos</h2>
              <p>
                Utilize seus recursos humanos de maneira eficiente, economizando
                tempo e dinheiro.
              </p>
            </div>
            <div>
              <h2>Preparação para o Futuro</h2>
              <p>
                Esteja à frente da concorrência com uma equipe talentosa e
                adaptável.
              </p>
            </div>
          </div>
          {/* <div className="questions-image">
          <img src={bg} alt="questions-image" />
        </div> */}
        </div>
      </Fade>
    </Container>
  );
}

export default Questions;
