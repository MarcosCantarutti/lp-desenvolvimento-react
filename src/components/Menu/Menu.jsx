import React from 'react';
import { Link } from 'react-router-dom';
import { TiktokLogo, InstagramLogo, WhatsappLogo } from '@phosphor-icons/react';
import './Menu.scss';

function Menu() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToHome = () => {
    const homeSection = document.getElementById('home');
    console.log(homeSection);
    if (homeSection) {
      homeSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="menu">
      <ul className="navigation">
        <li>
          <Link to="/" onClick={scrollToHome}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/consultoria">Soluções Empresariais</Link>
        </li>
        <li>
          <Link to="/enviar">Enviar Currículo</Link>
        </li>
        {/* <li>
            <a href="https://lpterapeutas.com/" target="_blank">
              Desenvolvimento Humano
            </a>
          </li> */}
        <li>
          <Link to="/" onClick={scrollToContact}>
            Contato
          </Link>
        </li>
        <li>
          <Link to="/vagas">Vagas</Link>
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
