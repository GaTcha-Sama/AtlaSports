import React from 'react';
import '../styles/Header.scss';
import { Link, useLocation } from 'react-router-dom';
import LogoAS from '../assets/logo-website-black.jpg';
import LogoGoats from '../assets/header-goats.jpg'

function Header() {
  const location = useLocation();

  return (
    <header className='header'>
      <div className='header__logo-container'>
        <img src={LogoAS} alt="logo-atlasports" className='header__logo' />
      </div>
      <div>
        <img src={LogoGoats} alt="logo-atlasports" className='header__logo' />
      </div>
      <div className='header__navbar-container'>
        <ul className='header__navbar'>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <li className={`header__navbar__txt ${location.pathname === '/' ? 'active' : ''}`}>Home</li>
          </Link>
          <Link to="/about" style={{ textDecoration: 'none' }}>
            <li className={`header__navbar__txt ${location.pathname === '/about' ? 'active' : ''}`}>About</li>
          </Link>
          <Link to="/contact" style={{ textDecoration: 'none' }}>
            <li className={`header__navbar__txt ${location.pathname === '/contact' ? 'active' : ''}`}>Contact</li>
          </Link>
        </ul>
      </div>     
    </header>
  );
}

export default Header;

