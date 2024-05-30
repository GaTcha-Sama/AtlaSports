import React from 'react'
import '../../styles/Logos.scss'
import LogoNBA from '../../assets/Logos/ARIZONA/Phoenix Suns.png'
import LogoNFL from '../../assets/Logos//ARIZONA/Arizona Cardinals.png'
import LogoNHL from '../../assets/Logos//ARIZONA/Arizona Coyotes.png'
import LogoMLB from '../../assets/Logos//ARIZONA/Arizona Diamondbacks.png'


function Logos() {
  return (
    <>
    <section className='logo'>
        <div>
          <h3>MAJOR LEAGUE</h3>
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
          <img src={LogoNHL} alt=""/>
          <h5 className='logo__club__title'>Arizona Coyotes</h5>
        </div>
        <div className='logo__club'>
          <img src={LogoMLB} alt=""/>
          <h5 className='logo__club__title'>Arizona DBacks</h5>
        </div>
    </section>
    <section className='logo'>
        <div>
          <h3>MINOR LEAGUE</h3>
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
          <img src={LogoNHL} alt=""/>
          <h5 className='logo__club__title'>Arizona Coyotes</h5>
        </div>
        <div className='logo__club'>
          <img src={LogoMLB} alt=""/>
          <h5 className='logo__club__title'>Arizona DBacks</h5>
        </div>
    </section>
    <section className='logo'>
        <div>
          <h3>UNIVERSITY</h3>
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
          <img src={LogoNHL} alt=""/>
          <h5 className='logo__club__title'>Arizona Coyotes</h5>
        </div>
        <div className='logo__club'>
          <img src={LogoMLB} alt=""/>
          <h5 className='logo__club__title'>Arizona DBacks</h5>
        </div>
    </section>
</>
  )
}

export default Logos