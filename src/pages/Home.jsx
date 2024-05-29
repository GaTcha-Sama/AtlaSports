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
    }
  };

  return (
    <main className='home'>
      <section>
        <div className='home__banner'>
          <Banner />
        </div>
      <p className='home__welcome'>
        Hi everybody and welcome! 👋​<br />
        On this website you can find an atlas where most of major and minor league clubs are known in North America,
        specially in Canada and United States. <br />
        The objective is to map all over the world so after Canada and USA,
        I will look forward to create the same things in Europe. Most of collective sports are represented like
        basketball 🏀​, baseball ⚾​, ice hockey 🏒​, soccer ⚽​ and football 🏈​. <br />
        And yes! You will find some women's sport league like WNBA ou PWHL too! <br />
        This website is also perfect to get some informations when you are on a trip ​✈️​ and wish to see some games where you're at !  <br />
        Right now, just choose the country you want and I wish you a nice journey on this website ! Have fun, peace ! ​✌️​ <br />
        PS : Thank you guys for all the support, it's awesome ! ​🤩​
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