import React from 'react'
import '../../styles/Gallery.scss'
import {useNavigate} from 'react-router-dom'
import DataUSA from '../../data/data-usa.json'

function Gallery() {
const navigate = useNavigate();

const handleItemClick = (item) => {
  navigate(`/state/${item.id}`);
};

return (
  <main className="gallery">
    {DataUSA.map((item) => (
      <div key={item.id}>
        <button type="button" className='gallery__card' onClick={() => handleItemClick(item)}>
          <img src={item.drapeau} alt="" className="gallery__img" />
          <h2 className="gallery__title">{item.nom}</h2>
        </button>
      </div>
    ))}
  </main>
);
}

export default Gallery