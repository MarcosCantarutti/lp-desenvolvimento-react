import React, { useState, useEffect } from 'react';
import './Header.scss';
import { List } from '@phosphor-icons/react';
import MobileMenu from '../../components/MobileMenu/MobileMenu';
import Menu from '../../components/Menu/Menu';
import logo from '../../assets/logo.png';
function Header() {
  const [menuOpen, setMenuOpen] = useState('false');
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const handleChildData = (menuOpen) => {
    toggleMenu(menuOpen);
  };

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const threshold = 100; // Define o ponto em que a cor de fundo do menu deve mudar
      setIsScrolled(scrollPosition > threshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={` ${isScrolled ? 'scrolled' : ''}`}>
      <a href="./">
        <img src={logo} alt="logo" />
      </a>
      <Menu />
      <List className="mobile-menu" onClick={toggleMenu} size={32} />
      <MobileMenu
        className={` ${menuOpen ? 'hidden' : 'visible'}`}
        onDataReceived={handleChildData}
      />
    </header>
  );
}

export default Header;
