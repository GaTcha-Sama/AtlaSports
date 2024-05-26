import React from 'react'
import '../../styles/Gallery.scss'
import {useNavigate} from 'react-router-dom'
import DataUSA from '../../data/data-flag-states-usa.json'

function GalleryUSA() {
const navigate = useNavigate()

const handleItemClick = (item) => {
  navigate(`/state/${item.id}`)
}

return (
  <>
  <section>
    <h1 className='country'>🇺🇸​​ UNITED STATES OF AMERICA 🇺🇸​​</h1>
  </section>
  <section className="gallery">
    {DataUSA.map((item) => (
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

export default GalleryUSA