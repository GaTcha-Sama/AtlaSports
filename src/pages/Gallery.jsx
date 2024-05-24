import React from 'react'
import '../styles/Gallery.scss'
import GalleryUSA from '../components/Home/Gallery-USA'
import GalleryCAN from '../components/Home/Gallery-CAN'

function Gallery() {
  return (
    <main className='home'>        
        <section>
          <h1 className='home__title'>CANADA</h1>
            <GalleryCAN />
        </section> 
        <section>
          <h1 className='home__title'>USA</h1>
            <GalleryUSA />
        </section>
    </main>    
  )
}

export default Gallery