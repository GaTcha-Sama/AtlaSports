import React from 'react'
import '../../styles/Logos.scss'
import LogoNBA from '../../assets/Logos/ARIZONA/Phoenix Suns.png'
import LogoNFL from '../../assets/Logos//ARIZONA/Arizona Cardinals.png'
import LogoMLB from '../../assets/Logos//ARIZONA/Arizona Diamondbacks.png'
import LogoWNBA from '../../assets/Logos/ARIZONA/Phoenix Mercury.jpg'
import LogoNBAGL from '../../assets/Logos/ARIZONA/Valley Suns.png'
import LogoAHL from '../../assets/Logos/ARIZONA/Tucson Roadrunners.jpg'
import LogoNCAA1 from '../../assets/Logos/ARIZONA/Arizona State Sun Devils.png'
import LogoNCAA2 from '../../assets/Logos/ARIZONA/Arizona Wildcats.png'
import LogoNCAA3 from '../../assets/Logos/ARIZONA/Northern_Arizona_Athletics_logo.svg.png'
import LogoNCAA4 from '../../assets/Logos/ARIZONA/Grand Canyon Antelopes.jpg'


function Logos() {
  return (
    <>
    <section className='logo'>
        <div className='logo__league'>
          <h3 >MAJOR LEAGUE :</h3>
        </div>
        <div className='logo__club'>
          <img src={LogoNBA} alt=""/>
          <h5 className='logo__club__title'>Phoenix Suns</h5>
        </div>
        <div className='logo__club'>
          <img src={LogoNFL} alt=""/>
          <h5 className='logo__club__title'>Arizona Cardinals</h5>
        </div>
        <div className='logo__club'>
          <img src={LogoMLB} alt=""/>
          <h5 className='logo__club__title'>Arizona DiamondBacks</h5>
        </div>
        <div className='logo__club'>
          <img src={LogoWNBA} alt=""/>
          <h5 className='logo__club__title'>Phoenix Mercury</h5>
        </div>
    </section>
    <section className='logo'>
        <div className='logo__league'>
          <h3 >MINOR LEAGUE :</h3>
        </div>
        <div className='logo__club'>
          <img src={LogoAHL} alt=""/>
          <h5 className='logo__club__title'>Tucson Roadrunners</h5>
        </div>
        <div className='logo__club'>
          <img src={LogoNBAGL} alt=""/>
          <h5 className='logo__club__title'>Valley Suns</h5>
        </div>
    </section>
    <section className='logo'>
        <div className='logo__league'>
          <h3 >NCAA :</h3>
        </div>
        <div className='logo__club'>
          <img src={LogoNCAA1} alt=""/>
          <h5 className='logo__club__title'>Arizona State Sun Devils</h5>
        </div>
        <div className='logo__club'>
          <img src={LogoNCAA2} alt=""/>
          <h5 className='logo__club__title'>Arizona Wildcats</h5>
        </div>
        <div className='logo__club'>
          <img src={LogoNCAA3} alt=""/>
          <h5 className='logo__club__title'>Northern Arizona Lumberjacks</h5>
        </div>
        <div className='logo__club'>
          <img src={LogoNCAA4} alt=""/>
          <h5 className='logo__club__title'>Grand Canyon Antelopes</h5>
        </div>
    </section>
</>
  )
}

export default Logos