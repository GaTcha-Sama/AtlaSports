import React from 'react'
import '../styles/Footer.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faInstagram, faGithub, faXTwitter, faFacebook, faLinkedin} from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
    <div className='footer'>
      <div className='footer__medias'>
        <a href="https://github.com/GaTcha-Sama" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} className='footer__medias__icon' />
        </a>
        <a href="https://www.linkedin.com/in/jeremylouet/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} className='footer__medias__icon' />
        </a>
        <a href="https://www.instagram.com/jeremylouetgatcha/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} className='footer__medias__icon' />
        </a>
        <a href="https://twitter.com/JeremyLouet" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faXTwitter} className='footer__medias__icon' />
        </a>
        <a href="https://www.facebook.com/jeremy.louet29" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} className='footer__medias__icon' />
        </a>
      </div>
      <div className='footer__copyrights'>Made by Jeremy Louet in 2024. © All rights reserved.</div>
    </div>
  );
}

export default Footer;