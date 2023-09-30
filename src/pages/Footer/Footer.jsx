import './Footer.scss';
import Container from '../../components/Container/Container';
import whatsapp from '../../assets/whatsapp.svg';

function Footer() {
  return (
    <Container className="main-container black-bg">
      <footer className="footer-container">
        <div>
          <span>
            {' '}
            <b>LP Desenvolvimento</b> | Todos os direitos reservados.
          </span>
        </div>

        <div>
          <span>
            Desenvolvido por:
            <a href="http://www.marcoscantarutti.com.br">Marcos Cantarutti</a>
          </span>
        </div>

        <div class="whatsapp-btn">
          <a
            class="whatsapp-link"
            href="https://wa.me/5534999457198"
            target="_blank"
          >
            <img src={whatsapp} alt="whatsapp" />
          </a>
        </div>
      </footer>
    </Container>
  );
}

export default Footer;
