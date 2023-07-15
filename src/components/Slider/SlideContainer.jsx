import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './SlideContainer.scss';
import Button from '../../components/Button/Button';

// https://github.com/femioladeji/react-slideshow

const pStyle = {
  color: '#d4af37',
  fontSize: '2.5rem',
  textShadow: '1px 1px 1px #000',
  textAlign: 'left',
  padding: '20px 0',
};

const titleStyle = {
  // padding: '20px',
  color: '#d4af37',
  fontSize: '5.5rem',
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
    url: '../../../bg.jpg',
    title: 'LP DESENVOLVIMENTO',
    content:
      "lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown prin.",
    button: 'Saiba mais sobre nós',
  },
  {
    url: '../../../bg2.jpg',
    title: 'Para você',
    content:
      "lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.",
    button: 'Eu quero me desenvolver',
  },
  {
    url: '../../../bg3.jpg',
    title: 'Para empresas',
    content:
      "lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.",

    button: 'Eu quero desenvolver minha empresa',
  },
];

const Slideshow = () => {
  return (
    <div className="slide-container">
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
                <h1 style={titleStyle}>{slideImage.title}</h1>
                <p style={pStyle}>{slideImage.content}</p>
                <Button className="golden large">{slideImage.button}</Button>
              </div>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default Slideshow;
