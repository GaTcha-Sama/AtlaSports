import React from 'react'
import '../styles/Home.scss'
import GalleryUSA from '../components/Home/Gallery-USA'
import GalleryCAN from '../components/Home/Gallery-CAN'

function Home() {
  return (
    <main className='home'>
        <section>
          <h1 className='home__title'>USA</h1>
            <GalleryUSA />
        </section>
        <section>
          <h1 className='home__title'>CANADA</h1>
            <GalleryCAN />
        </section> 
    </main>    
  )
}

export default Home
