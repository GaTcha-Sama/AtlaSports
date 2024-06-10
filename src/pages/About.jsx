import React from 'react'
import '../styles/About.scss'

function About() {
  return (
    <div className='about'>
      <section>
        <h1 className='about__title'>About this website</h1>
      </section>
      <section>
        <ul>
          <li className='about__list'>
            Copyrights : All logos belongs to the professional leagues and their clubs.
          </li>
          <li className='about__list'>
            Respect : This is a sport website so the fair-play is essential.
          </li>
          <li className='about__list'>
            Updates : If you have information on changing a logo, moving a franchise or changing the name of a stadium, do not hesitate to contact me !
          </li>
        </ul>
      </section>
     
    </div>
  )
}

export default About