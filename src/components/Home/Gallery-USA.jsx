import React, { useState } from 'react';
import '../../styles/Gallery.scss';
import { useNavigate } from 'react-router-dom';
import DataUSA from '../../data/data-flag-states-usa.json';
import { Collapse, Button, ListGroup, Form } from 'react-bootstrap';

function GalleryUSA() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
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
        <p className='country__text'>In this gallery you can choose not only among the 50 states of USA but also among the biggest cities in all over the country </p>
      </section>
      
      <div className="collapse-container">
        <Button
          onClick={() => setOpen(!open)}
          aria-controls="collapse-list"
          aria-expanded={open}
          className='mb-3'
        >
          Show List of all states and cities
        </Button>
      </div>
      <Collapse in={open}>
        <div id="collapse-list" className="collapse-content">
          <Form.Control
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className='mb-3'
          />
          <ListGroup>
            {filteredData.map((item) => (
              <ListGroup.Item key={item.id} action onClick={() => handleItemClick(item)}>
                {item.nom}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </div>
      </Collapse>

      <section className="gallery">
        {DataUSA.map((item) => (
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

