import './Contact.scss';
import { Fade } from 'react-awesome-reveal';
import Container from '../../components/Container/Container';
import Button from '../../components/Button/Button';
import {
  EnvelopeSimple,
  TiktokLogo,
  InstagramLogo,
  LinkedinLogo,
  WhatsappLogo,
} from '@phosphor-icons/react';

function Contact() {
  return (
    <Container className="main-container">
      <Fade direction={'bottom'} triggerOnce>
        <div className="contact-container" id="contact">
          <div className="contact-text">
            <h1>Entre em contato com a gente!</h1>
            <p>
              Ficou interessado em nossos serviços? Fale conosco atraves das
              nossas redes!
            </p>
            <Button className="golden large">
              ENTRAR EM CONTATO
              <WhatsappLogo size={32} />
            </Button>
          </div>
          <div className="contact-networks">
            <div>
              <span>
                <EnvelopeSimple size={32} />
              </span>
              <a href="mailto:contatolp.desenvolvimento@gmail.com">
                contatolp.desenvolvimento@gmail.com
              </a>
            </div>
            <div>
              <span>
                <InstagramLogo size={32} />
              </span>
              <a
                href="https://www.instagram.com/paulocantaruttioficial/"
                target="_blank"
              >
                Instagram
              </a>
            </div>
            <div>
              <span>
                <LinkedinLogo size={32} />
              </span>
              <a
                href="https://www.linkedin.com/in/paulocantarutti/?originalSubdomain=br"
                target="_blank"
              >
                Linkedin
              </a>
            </div>
            <div>
              <span>
                <TiktokLogo size={32} />
              </span>
              <a href="https://www.tiktok.com/@paulocantarutti" target="_blank">
                TikTok
              </a>
            </div>
          </div>
        </div>
      </Fade>
    </Container>
  );
}

export default Contact;
