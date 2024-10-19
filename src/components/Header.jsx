import React from 'react';
import '../styles/Header.scss';
import { Link, useLocation } from 'react-router-dom';
import LogoAS from '../assets/logo-website-black.jpg';
import LogoGoatsNorthAmerica from '../assets/header-goats.jpg';
import Banner from '../components/Home/Banner';
import LandscapeDataUSA from '../data/data-flag-states-usa.json';
import LandscapeDataCAN from '../data/data-flag-provinces-canada.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faHouse, faEnvelope, faCopyright } from '@fortawesome/free-solid-svg-icons';

function Header() {
  const location = useLocation();

  // Fonction pour vérifier si la route actuelle correspond à une route spécifique
  const isCurrentPage = (path) => location.pathname === path;

  const isGalleryPageNorthAmerica = 
    location.pathname === '/gallery-can' || location.pathname === '/gallery-usa';

  const isStatePage = location.pathname.startsWith('/state');
  const isProvincePage = location.pathname.startsWith('/province');

  const stateId = parseInt(location.pathname.split('/')[2], 10);
  const provinceId = parseInt(location.pathname.split('/')[2], 10);

  const stateData = LandscapeDataUSA.find(state => state.id === stateId);
  const provinceData = LandscapeDataCAN.find(province => province.id === provinceId);

  const landscapeImageUSA = stateData ? stateData.landscape : '';
  const landscapeImageCAN = provinceData ? provinceData.landscape : '';

  return (
    <header className='header'>
      <div className='header__logo-container'>
        <Link to="/">
          <img src={LogoAS} alt="logo-atlasports" className='header__logo' />
        </Link>
      </div>

      {isCurrentPage('/') && (
        <div>
          <Banner />
        </div>
      )}

      {isGalleryPageNorthAmerica && (
        <div>
          <img src={LogoGoatsNorthAmerica} alt="logo-goats" className='header__logo' />
        </div>
      )}

      {isStatePage && landscapeImageUSA && (
        <div>
          <img src={landscapeImageUSA} alt="landscape" className='header__logo' />
        </div>
      )}

      {isProvincePage && landscapeImageCAN && (
        <div>
          <img src={landscapeImageCAN} alt="landscape" className='header__logo' />
        </div>
      )}

      <div className='header__navbar-container'>
        <ul className='header__navbar'>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <li className={`header__navbar__txt ${isCurrentPage('/') ? 'active' : ''}`}>
              <FontAwesomeIcon icon={faHouse} /> Home
            </li>
          </Link>
          <li className='header__navbar__txt'>
            <FontAwesomeIcon icon={faUser} /> Connexion
          </li>
          <Link to="/contact" style={{ textDecoration: 'none' }}>
            <li className={`header__navbar__txt ${isCurrentPage('/contact') ? 'active' : ''}`}>
              <FontAwesomeIcon icon={faEnvelope} /> Contact
            </li>
          </Link>
          <Link to="/about" style={{ textDecoration: 'none' }}>
            <li className={`header__navbar__txt ${isCurrentPage('/about') ? 'active' : ''}`}>
              <FontAwesomeIcon icon={faCopyright} /> About
            </li>
          </Link>
          
        </ul>
      </div>
    </header>
  );
}

export default Header;
