import React from 'react'
import '../styles/Home.scss'
import {Link} from 'react-router-dom'

function Home() {
  return (
    <main className='home'>        
        <Link to="/gallery" className='home__title'>North America</Link>
    </main>    
  )
}

export default Home
