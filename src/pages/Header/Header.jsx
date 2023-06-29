import React, { useState } from 'react';
import './Header.scss';
import { List } from '@phosphor-icons/react';
import MobileMenu from '../../components/MobileMenu/MobileMenu';
import Menu from '../../components/Menu/Menu';
function Header() {
  const [menuOpen, setMenuOpen] = useState('false');
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <img src="../../../public/logo.png" alt="logo" />
      <Menu />
      <List className="mobile-menu" onClick={toggleMenu} size={32} />
      <MobileMenu className={` ${menuOpen ? 'hidden' : 'visible'}`} />
    </header>
  );
}

export default Header;
