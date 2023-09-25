import './Questions.scss';
import React, { useState, useEffect } from 'react';
import { Fade } from 'react-awesome-reveal';
import Container from '../../../components/Container/Container';
import { Swiper, SwiperSlide } from 'swiper/react';
// import time from '../../../assets/time.svg';
// import equipe from '../../../assets/equipe.svg';
// import eficiencia from '../../../assets/eficiencia.svg';
// import recursos from '../../../assets/recursos.svg';
import futuro from '../../../assets/futuro.svg';
import one from '../../../assets/1.png';
import two from '../../../assets/2.png';
import three from '../../../assets/3.png';
import four from '../../../assets/4.png';
import five from '../../../assets/5.png';
// Import Swiper styles
import 'swiper/css';

function Questions() {
  const [tamanhoDaPagina, setTamanhoDaPagina] = useState('');

  // Função para verificar e atualizar o tamanho da página
  const verificarTamanhoDaPagina = () => {
    if (window.innerWidth >= 1375) {
      setTamanhoDaPagina(4);
    } else if (window.innerWidth >= 1000) {
      setTamanhoDaPagina(3);
    } else if (window.innerWidth >= 780) {
      setTamanhoDaPagina(2);
    } else {
      setTamanhoDaPagina(1);
    }
  };

  // Use useEffect para adicionar um ouvinte de redimensionamento da janela
  useEffect(() => {
    verificarTamanhoDaPagina(); // Verificar o tamanho da página quando o componente montar

    // Adicionar um ouvinte de redimensionamento da janela
    window.addEventListener('resize', verificarTamanhoDaPagina);

    // Limpar o ouvinte de redimensionamento quando o componente desmontar
    return () => {
      window.removeEventListener('resize', verificarTamanhoDaPagina);
    };
  }, []); // Os colchetes vazios indicam que este efeito só é executado uma vez

  return (
    <Container className="main-container " id="questions">
      <Fade direction={'top'} triggerOnce>
        <span className="divider"></span>
        <h1 className="questions-title">POR QUE ESCOLHER A LP?</h1>
        <Swiper
          spaceBetween={50}
          slidesPerView={tamanhoDaPagina}
          initialSlide={1}
        >
          <SwiperSlide>
            {' '}
            <div className="questions-container">
              <div>
                <h1>01</h1>
                <h2>Experiência Comprovada</h2>
                <p>
                  Com anos de experiência, já ajudamos inúmeras empresas a
                  otimizar seus recursos humanos e alcançar resultados
                  especializados.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="questions-container">
              <div>
                <h1>02</h1>
                <h2>Soluções Personalizadas</h2>
                <p>
                  Sabemos que cada empresa é única. Desenvolvemos estratégias de
                  gestão de pessoas sob medida para atender às suas necessidades
                  específicas.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="questions-container">
              <div>
                <h1>03</h1>
                <h2>Resultados Tangíveis</h2>
                <p>
                  Não apenas conversamos, entregamos resultados mensuráveis.
                  Aumento de produtividade, maior satisfação dos funcionários e
                  redução de custos são apenas o começo.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {' '}
            <div className="questions-container">
              {' '}
              <div>
                <h1>04</h1>
                <h2>Foco na Sua Cultura Empresarial</h2>
                <p>
                  Valorizamos a cultura da sua empresa e ganhamos para
                  fortalecê-la, incentivando a inovação, a colaboração e o
                  crescimento.
                </p>
              </div>
            </div>
          </SwiperSlide>
          ...
        </Swiper>
      </Fade>
      <Fade direction={'top'} triggerOnce>
        <h1 className="questions-title">RETORNOS PARA SUA EMPRESA</h1>
        <Swiper
          spaceBetween={50}
          slidesPerView={tamanhoDaPagina}
          initialSlide={1}
        >
          <SwiperSlide>
            {' '}
            <div className="questions-container-alternative">
              <div className="container">
                <div className="img-container">
                  <img src={one} alt="equipe" />
                </div>
                <h2>Equipe Altamente Engajada</h2>
                <p>
                  Reduza a rotatividade de funcionários e mantenha sua equipe
                  motivada.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="questions-container-alternative">
              <div className="container">
                <div className="img-container">
                  <img src={two} alt="eficiencia" />
                </div>
                <h2> Aumento da Eficiência</h2>
                <p>
                  Implemente práticas de gestão que aumentem a produtividade e a
                  eficácia operacional.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="questions-container-alternative">
              <div className="container">
                <div className="img-container">
                  <img src={three} alt="time" />
                </div>
                <h2>Ambiente de Trabalho Positivo</h2>
                <p>
                  Crie uma cultura empresarial saudável, onde a criatividade e o
                  trabalho em equipe floresçam.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {' '}
            <div className="questions-container-alternative">
              {' '}
              <div className="container">
                <div className="img-container">
                  <img src={four} alt="recursos" />
                </div>
                <h2>Otimização de Recursos</h2>
                <p>
                  Utilize seus recursos humanos de maneira eficiente,
                  economizando tempo e dinheiro.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {' '}
            <div className="questions-container-alternative">
              <div className="container">
                <div className="img-container">
                  <img src={five} alt="futuro" />
                </div>
                <h2>Preparação para o Futuro</h2>
                <p>
                  Esteja à frente da concorrência com uma equipe talentosa e
                  adaptável.
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </Fade>
    </Container>
  );
}

export default Questions;
