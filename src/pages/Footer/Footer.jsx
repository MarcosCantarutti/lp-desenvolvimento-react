import './Footer.scss';
import Container from '../../components/Container/Container';

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
      </footer>
    </Container>
  );
}

export default Footer;
