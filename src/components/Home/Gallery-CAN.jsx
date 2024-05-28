import React from 'react'
import '../../styles/Gallery.scss'
import {useNavigate} from 'react-router-dom'
import DataCAN from '../../data/data-flag-provinces-canada.json'

function GalleryCAN() {
const navigate = useNavigate()

const handleItemClick = (item) => {
  navigate(`/state/${item.id}`)
}

return (
  <>
  <section>
    <h1 className='country'>🇨🇦​ CANADA 🇨🇦​</h1>
  </section>
  <section className='country__text'>
        <p>In this gallery you can choose not only among the 13 provinces of Canada but also among the biggest cities in all over the country </p>
      </section>
  <section className="gallery">
    {DataCAN.map((item) => (
      <div key={item.id}>
        <button type="button" className='gallery__card' onClick={() => handleItemClick(item)}>
          <img src={item.drapeau} alt="" className="gallery__img" />
          <h2 className="gallery__title">{item.nom}</h2>
        </button>
      </div>
    ))}
  </section>
  </>
)

}

export default GalleryCAN