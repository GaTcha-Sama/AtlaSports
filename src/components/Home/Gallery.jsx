import React from 'react'
import '../../styles/Gallery.scss'
import {useNavigate} from 'react-router-dom'
import Data from '../../data/data-usa.json'

function Gallery() {
const navigate = useNavigate();

const handleItemClick = (item) => {
  navigate(`/state/${item.id}`);
};

return (
  <div className="gallery">
    {Data.map((item) => (
      <div key={item.id}>
        <button type="button" className='gallery__card' onClick={() => handleItemClick(item)}>
          <img src={item.drapeau} alt="" className="gallery__img" />
          <h2 className="gallery__title">{item.nom}</h2>
        </button>
      </div>
    ))}
  </div>
);
}

export default Gallery