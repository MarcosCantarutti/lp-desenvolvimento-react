import React, { useState, useEffect } from 'react';
import './MobileMenu.scss';
import { TiktokLogo, InstagramLogo, WhatsappLogo } from '@phosphor-icons/react';

function MobileMenu(props) {
  const sendDataToParent = () => {
    props.onDataReceived(false);
  };

  return (
    <nav id="mobile" className={`mobile-container ${props.className}`}>
      <ul className="mobile-navigation">
        <li>
          {' '}
          <a href="./#home" onClick={sendDataToParent}>
            Home
          </a>{' '}
        </li>
        <li>
          {' '}
          <a href="./consultoria" onClick={sendDataToParent}>
            Soluções Empresariais
          </a>{' '}
        </li>
        <li>
          {' '}
          <a
            href="https://lpterapeutas.com/"
            target="_blank"
            onClick={sendDataToParent}
          >
            Desenvolvimento Humano
          </a>{' '}
        </li>
        <li>
          {' '}
          <a href="./#contact" onClick={sendDataToParent}>
            Contato
          </a>{' '}
        </li>
      </ul>

      <ul className="mobile-social">
        <li>
          <a
            href="https://www.instagram.com/paulocantaruttioficial/"
            target="_blank"
          >
            <TiktokLogo size={25} />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/paulocantarutti/?originalSubdomain=br"
            target="_blank"
          >
            <InstagramLogo size={25} />
          </a>
        </li>
        <li>
          <a href="https://www.tiktok.com/@paulocantarutti" target="_blank">
            <WhatsappLogo size={25} />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default MobileMenu;
