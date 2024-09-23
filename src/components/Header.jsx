import React from 'react';
import '../styles/Header.scss';
import { Link, useLocation } from 'react-router-dom';
import LogoAS from '../assets/logo-website-black.jpg';
import LogoGoatsNorthAmerica from '../assets/header-goats.jpg';
import LandscapeDataUSA from '../data/data-flag-states-usa.json';
import LandscapeDataCAN from '../data/data-flag-provinces-canada.json';

function Header() {
  const location = useLocation();

  // Condition pour afficher l'image des Goats USA/CAN uniquement sur les pages "/gallery-can" et "/gallery-usa"
  const isGalleryPageNorthAmerica = location.pathname === '/gallery-can' || location.pathname === '/gallery-usa';

  // Vérifier si l'on est sur une page d'état
  const isStatePage = location.pathname.startsWith('/state');
  const isProvincePage = location.pathname.startsWith('/province');

  // Récupérer l'ID de l'état à partir de l'URL, si présent
  const stateId = parseInt(location.pathname.split('/')[2], 10); // suppose que l'ID de l'état est dans l'URL après "/state/"
  const provinceId = parseInt(location.pathname.split('/')[2], 10);
  
  // Trouver l'état correspondant dans les données JSON
  const stateData = LandscapeDataUSA.find(state => state.id === stateId);
  const provinceData = LandscapeDataCAN.find(province => province.id === provinceId)
  
  // URL de l'image de paysage (ou chaîne vide si non trouvée)
  const landscapeImageUSA = stateData ? stateData.landscape : '';
  const landscapeImageCAN = provinceData ? provinceData.landscape : '';

  return (
    <header className='header'>
      <div className='header__logo-container'>
        <img src={LogoAS} alt="logo-atlasports" className='header__logo' />
      </div>

      {/* Afficher l'image des Goats pour les pages spécifiques */}
      {isGalleryPageNorthAmerica && (
        <div>
          <img src={LogoGoatsNorthAmerica} alt="logo-goats" className='header__logo' />
        </div>
      )}

      {/* Afficher l'image du paysage si on est sur une page d'état USA et que l'image est disponible */}
      {isStatePage && landscapeImageUSA && (
        <div>
          <img src={landscapeImageUSA} alt="landscape" className='header__logo' />
        </div>
      )}

       {/* Afficher l'image du paysage si on est sur une page de province CANADA et que l'image est disponible */}
       {isProvincePage && landscapeImageCAN && (
        <div>
          <img src={landscapeImageCAN} alt="landscape" className='header__logo' />
        </div>
      )}

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
