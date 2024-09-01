import React, { useState } from 'react';
import '../../styles/Gallery.scss';
import { useNavigate } from 'react-router-dom';
import DataUSA from '../../data/data-flag-states-usa.json';
import { ListGroup, Form } from 'react-bootstrap';

function GalleryUSA() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const handleItemClick = (item) => {
    navigate(`/state/${item.id}`);
  };

  const filteredData = DataUSA.filter(item =>
    item.nom.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <section>
        <h1 className='country'>🇺🇸​​ UNITED STATES OF AMERICA 🇺🇸​​</h1>
      </section>
      <section className='country__text'>
        <p className='country__text'>In this gallery you can choose among the 50 states of the US</p>
      </section>
      
      <div className="search-container">
        <Form.Control
          type="text"
          placeholder="Tap your research..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className='search-content mb-3'
        />
        {searchTerm && (
          <ListGroup className="search-list">
            {filteredData.map((item) => (
              <ListGroup.Item key={item.id} action onClick={() => handleItemClick(item)}>
                {item.nom}
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </div>

      <section className="gallery">
        {filteredData.map((item) => (
          <div key={item.id} className="gallery__item">
            <button type="button" className='gallery__card' onClick={() => handleItemClick(item)}>
              <img src={item.drapeau} alt={`${item.nom} flag`} className="gallery__img" />
              <h2 className="gallery__title">{item.nom}</h2>
              <div className="gallery__overlay">
                <img src={item.carte} alt={`${item.nom} map`} className="gallery__map" />
              </div>
            </button>
          </div>
        ))}
      </section>
    </>
  );
}

export default GalleryUSA;
