import { TiktokLogo, InstagramLogo, WhatsappLogo } from '@phosphor-icons/react';
import './Menu.scss';
function Menu() {
  return (
    <nav className="menu">
      <ul className="navigation">
        <li>
          {' '}
          <a href="#home">Home</a>{' '}
        </li>
        <li>
          {' '}
          <a href="#about">Sobre</a>{' '}
        </li>
        <li>
          {' '}
          <a href="#services">Serviços</a>{' '}
        </li>
        <li>
          {' '}
          <a href="#contact">Contato</a>{' '}
        </li>
      </ul>

      <ul className="social">
        <li>
          <a href="">
            <TiktokLogo size={25} />
          </a>
        </li>
        <li>
          <a href="">
            <InstagramLogo size={25} />
          </a>
        </li>
        <li>
          <a href="">
            <WhatsappLogo size={25} />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
