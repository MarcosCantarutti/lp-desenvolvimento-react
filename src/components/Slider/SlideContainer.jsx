import { Slide } from 'react-slideshow-image';
import { Fade } from 'react-awesome-reveal';
import 'react-slideshow-image/dist/styles.css';
import './SlideContainer.scss';
import Button from '../../components/Button/Button';
import bg from '../../assets/bg.jpg';
import bg2 from '../../assets/bg2.jpg';
// import bg3 from '../../assets/bg3.jpg';

// https://github.com/femioladeji/react-slideshow

const pStyle = {
  color: '#d4af37',
  fontSize: '1.8rem',
  textShadow: '1px 1px 1px #000',
  textAlign: 'left',
  padding: '20px',
};

const titleStyle = {
  padding: '20px',
  color: '#d4af37',
  fontSize: '3.5rem',
  textShadow: '1px 1px 1px #000',
  textAlign: 'left',
};

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '100vh',
};
const slideImages = [
  {
    url: bg,
    title: 'LP DESENVOLVIMENTO',
    content:
      'VOCÊ ESTÁ PRONTO PARA LEVAR A GESTÃO DE PESSOAS DE SUA EMPRESA PARA O PRÓXIMO NÍVEL E COLHER OS BENEFÍCIOS DE UMA EQUIPE ALTAMENTE ENGAJADA E EFICAZ?',
    button: 'FALE COM O ESPECIALISTA',
  },
  {
    url: bg2,
    title: 'SOLUÇÕES EMPRESARIAIS',
    content:
      'IMAGINE UMA EQUIPE QUE OPERA EM SUA CAPACIDADE MÁXIMA, COM FUNCIONÁRIOS COMPROMETIDOS E MOTIVADOS, LIDERADOS POR GESTORES E LIDERES EFICIENTES, PROCESSOS DEFINIDOS E PADRONIZADOS. IMAGINE UMA EMPRESA QUE CRESCE E PROSPERA COM CONFIANÇA. ESTE É O NOSSO OBJETIVO PARA AUXILIAR SUA EMPRESA.',
    button: 'CONHEÇA NOSSOS SERVIÇOS',
  },
];

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Fade cascade>
        <Slide>
          {slideImages.map((slideImage, index) => (
            <div key={index}>
              <div
                style={{
                  ...divStyle,
                  backgroundImage: `url(${slideImage.url})`,
                }}
              >
                <div className="main-container">
                  <div className="home-container">
                    <h1 style={titleStyle}>{slideImage.title}</h1>
                    <p style={pStyle}>{slideImage.content}</p>
                    <Button className="golden large">
                      {slideImage.button}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slide>
      </Fade>
    </div>
  );
};

export default Slideshow;
