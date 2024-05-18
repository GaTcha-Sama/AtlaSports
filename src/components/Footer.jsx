import React from 'react'
import '../styles/Footer.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faInstagram, faGithub, faXTwitter} from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
    <div className='footer'>
      <div className='footer__medias'>
        <FontAwesomeIcon icon={faGithub} />
        <FontAwesomeIcon icon={faInstagram} />
        <FontAwesomeIcon icon={faXTwitter} />
      </div>
      Made by Jeremy Louet in 2024. © All rights reserved.
    </div>
  )
}

export default Footer