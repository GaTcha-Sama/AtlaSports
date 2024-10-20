import React from 'react'
// import ChatBot from 'react-chatbotify'
import '../styles/Home.scss'
import {useNavigate} from 'react-router-dom'
import DataCountries from '../data/data-flag-countries.json'
import Caroussel from '../components/Caroussel'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearchengin} from '@fortawesome/free-brands-svg-icons'


const carousselImages = [
  '../homecaroussel/NBA.jpg',
  '../homecaroussel/MLB.jpg',
  '../homecaroussel/NHL.webp',
  '../homecaroussel/NFL.webp',
  '../homecaroussel/MLS.jpg'
];

function Home() {
  const navigate = useNavigate();

  const handleItemClick = (item) => {
    if (item.id === 'can') {
      navigate('/gallery-can');
    } else if (item.id === 'usa') {
      navigate('/gallery-usa'); 
    } else if (item.id === 'fra') {
      navigate('/gallery-fra'); 
    } else if (item.id === 'eng') {
      navigate('/gallery-eng'); 
    } else if (item.id === 'ger') {
      navigate('/gallery-ger'); 
    } else if (item.id === 'ita') {
      navigate('/gallery-ita'); 
    } else if (item.id === 'spa') {
      navigate('/gallery-spa'); 
    } else if (item.id === 'nzl') {
      navigate('/gallery-nzl'); 
    } else if (item.id === 'aus') {
      navigate('/gallery-aus'); 
    } else if (item.id === 'irl') {
      navigate('/gallery-irl'); 
    } 
  };

  return (
    <main className='home'>
      <section>
      <div>
        <Caroussel pictures={carousselImages} />
      </div>
      <p className='home__welcome'>
        Hi everybody and welcome on AtlaSports ! 👋​<br />
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
      <section className='home__research'>
        <div className='home__research__box'>
          <h1 className='home__research__box__title'>Where are you?</h1>
          <div className='home__research__box__search'>
            <input className='home__research__box__input' placeholder='Geolocate me' />
            <select className='home__research__box__input home__research__box__select' name="sport">
              <option value="">Select a sport</option>
              <option value="football">All sports </option>
              <option value="football">Football/Soccer</option>
              <option value="basketball">Basketball</option>
              <option value="tennis">Hockey</option>
              <option value="rugby">Rugby</option>
              <option value="cricket">Foot US/Football</option>
              <option value="golf">Handball</option>
              <option value="baseball">Baseball</option>
              <option value="volleyball">Volleyball</option>
              <option value="golf">Australian rules</option>
              <option value="baseball">Cricket</option>
              <option value="volleyball">Volleyball</option>
            </select>
            <input className='home__research__box__input' placeholder='Number of tickets' type='number' />
            <button className='home__research__box__submit'><FontAwesomeIcon icon={faSearchengin} /></button>
          </div>
        </div>
        <div className='home__research__box'>
          <h1 className='home__research__box__title'>Where do you go?</h1>
          <div className='home__research__box__search'>
            <input className='home__research__box__input' placeholder='Destination' />
            <input className='home__research__box__input' placeholder='Arrival' type='date' />
            <input className='home__research__box__input' placeholder='Departure' type='date' />
            <input className='home__research__box__input' placeholder='Number of tickets' type='number' />
            <button className='home__research__box__submit'><FontAwesomeIcon icon={faSearchengin} /></button>
          </div>
        </div>
      </section>
      <h1 style={{marginTop: '50px', paddingLeft: '30px'}}>Curious ? Just check by country what could interest you !</h1>
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
       {/* <div>
        <ChatBot />
      </div> */}
    </main>
  );
}

export default Home