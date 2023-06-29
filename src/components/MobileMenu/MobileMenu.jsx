import './MobileMenu.scss';
import { TiktokLogo, InstagramLogo, WhatsappLogo } from '@phosphor-icons/react';

function MobileMenu(props) {
  return (
    <nav id="mobile" className={`mobile-container ${props.className}`}>
      <ul className="mobile-navigation">
        <li>
          {' '}
          <a href="http://">Home</a>{' '}
        </li>
        <li>
          {' '}
          <a href="http://">Sobre</a>{' '}
        </li>
        <li>
          {' '}
          <a href="http://">Serviços</a>{' '}
        </li>
        <li>
          {' '}
          <a href="http://">Contato</a>{' '}
        </li>
      </ul>

      <ul className="mobile-social">
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

export default MobileMenu;
