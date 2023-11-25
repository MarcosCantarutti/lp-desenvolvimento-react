import { TiktokLogo, InstagramLogo, WhatsappLogo } from '@phosphor-icons/react';
import './Menu.scss';
function Menu() {
  return (
    <nav className="menu">
      <ul className="navigation">
        <li>
          {' '}
          <a href="./#home">Home</a>{' '}
        </li>
        <li>
          {' '}
          <a href="./consultoria">Soluções Empresariais</a>{' '}
        </li>
        <li>
          {' '}
          <a href="./enviar">Enviar Currículo</a>{' '}
        </li>
        {/* <li>
          {' '}
          <a href="https://lpterapeutas.com/" target="_blank">
            Desenvolvimento Humano
          </a>{' '}
        </li> */}
        <li>
          {' '}
          <a href="./#contact">Contato</a>{' '}
        </li>
      </ul>

      <ul className="social">
        {/* <li>
          <a href="">
            <TiktokLogo size={25} />
          </a>
        </li>
        <li>
          <a href="">
            <InstagramLogo size={25} />
          </a>
        </li> */}
        <li>
          <a href="https://wa.me/5534999457198" target="_blank">
            <WhatsappLogo size={25} />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
