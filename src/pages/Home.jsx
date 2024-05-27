import React from 'react'
import '../styles/Home.scss'
import {useNavigate} from 'react-router-dom'
import DataCountries from '../data/data-flag-countries.json'
import Banner from '../components/Home/Banner'

function Home() {
  const navigate = useNavigate();

  const handleItemClick = (item) => {
    if (item.id === 'can') {
      navigate('/gallery-can');
    } else if (item.id === 'usa') {
      navigate('/gallery-usa');
    } else if (item.id === 'fra') {
      navigate('/gallery-fra');
    }
  };

  return (
    <main className='home'>
      <section>
        <div>
          <Banner />
        </div>
      <p className='home__welcome'>
        Hello everybody and welcome! On this website you can find an atlas where most of major and minor league clubs are known in North America,
        specially in Canada and United States. The objective is to map all over the world so after Canada and USA,
        I will look forward to create the same things in Europe. Most of collective sports are represented like
        basketball, baseball, ice hockey, soccer and football. And yes! You will find some women's sport league like WNBA too!
        Right now you juste have to choose the country you are interested in and I wish you a nice journey on this website ! Perfect to get some information when you are on a trip and wish to see some games where you're at ! Have fun, peace !
      </p>
      </section>
      <section className='home__gallery'>
      {DataCountries.map((item) => (
        <div key={item.id}>
          <button type="button" className='home__gallery__card' onClick={() => handleItemClick(item)}>
            <img src={item.drapeau} alt={item.nom} className="home__gallery__img" />
            <h2 className="home__gallery__title">{item.nom}</h2>
          </button>
        </div>      
      ))}
      </section>
    </main>
  );
}

export default Home;