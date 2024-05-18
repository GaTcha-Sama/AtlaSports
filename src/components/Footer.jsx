import React from 'react'
import '../styles/Footer.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faInstagram, faGithub, faXTwitter, faFacebook, faLinkedin} from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
    <div className='footer'>
      <div className='footer__medias'>
        <FontAwesomeIcon icon={faGithub} className='footer__medias__icon' />
        <FontAwesomeIcon icon={faLinkedin} className='footer__medias__icon' />
        <FontAwesomeIcon icon={faInstagram} className='footer__medias__icon' />
        <FontAwesomeIcon icon={faXTwitter} className='footer__medias__icon' />
        <FontAwesomeIcon icon={faFacebook} className='footer__medias__icon' />
      </div>
      Made by Jeremy Louet in 2024. © All rights reserved.
    </div>
  )
}

export default Footer