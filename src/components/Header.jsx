import React from 'react'
import '../styles/Header.scss'
import {Link} from 'react-router-dom'

function Header() {
  return (
    <div className='header'>
      <div className='header__title'>
      ATLAS OF NORTH AMERICAN SPORTS
      </div>
      <div>
        <ul className='header__navbar'>
            <Link to="/"><li>Home</li></Link>
            <li>Contacts</li>
        </ul>
      </div>     
    </div>
  )
}

export default Header