import './Footer.scss';
// import { Copyright } from '@phosphor-icons/react';

import Container from '../../components/Container/Container';

function Footer() {
  return (
    <Container className="main-container golden-bg">
      <div className="footer-container">
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
      </div>
    </Container>
  );
}

export default Footer;
