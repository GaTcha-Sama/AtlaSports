import React from 'react'
import '../../styles/Stadiums.scss'
import ArenaNBA1 from '../../assets/Stadiums Pro/PHOENIX - TALKING STICK RESORT ARENA.jpg'
import ArenaNBA2 from '../../assets/Stadiums Pro/PHOENIX - TALKING STICK RESORT ARENA SUNS.jpg'
import StadiumNFL1 from '../../assets/Stadiums Pro/PHOENIX - UNIVERSITY OF PHOENIX STADIUM.jpg'
import StadiumNFL2 from '../../assets/Stadiums Pro//PHOENIX - UNIVERSITY OF PHOENIX STADIUM CARDINALS.jpg'
import BallparkMLB1 from '../../assets/Stadiums Pro/PHOENIX - CHASE FIELD.jpg'
import BallparkMLB2 from '../../assets/Stadiums Pro/PHOENIX - CHASE FIELD DIAMONDBACKS.jpg'
import StadiumNCAA1 from '../../assets/Stadiums NCAA/Stadiums NCAA/ARIZONA STATE - SUN DEVIL STADIUM-FRANK KUSCH FIELD - TEMPE.jpg'
import StadiumNCAA2 from '../../assets/Stadiums NCAA/Stadiums NCAA/ARIZONA STATE - SUN DEVIL STADIUM-FRANK KUSCH FIELD - TEMPE SUN DEVILS.jpg'
import StadiumNCAA3 from '../../assets/Stadiums NCAA/Stadiums NCAA/ARIZONA - ARIZONA STADIUM - TUCSON.jpg'
import StadiumNCAA4 from '../../assets/Stadiums NCAA/Stadiums NCAA/ARIZONA - ARIZONA STADIUM - TUCSON WILDCATS.jpg'

function Stadiums() {
  return (
    <section>
      <div className='stadium'>
        <h1 className='stadium__title'>STADIUMS AND ARENAS</h1>
        <div className='stadium__photo'>
          <div className='stadium__img'><img src={ArenaNBA1} alt=""/></div>
          <div className='stadium__img'><img src={ArenaNBA2} alt=""/></div>
        </div>        
        <h5 className='stadium__subtitle'>Talking Stick Resort Arena</h5>
        <p>Local teams : Phoenix Suns (NBA), Phoenix Mercury (WNBA)</p>
      </div>
      <div className='stadium'>
        <div className='stadium__photo'>
          <div className='stadium__img'><img src={StadiumNFL1} alt=""/></div>
          <div className='stadium__img'><img src={StadiumNFL2} alt=""/></div>
        </div>        
        <h5 className='stadium__subtitle'>State Farm Stadium</h5>
        <p>Local team : Arizona Cardinals (NFL)</p>
      </div>
      <div className='stadium'>
        <div className='stadium__photo'>
          <div className='stadium__img'><img src={BallparkMLB1} alt=""/></div>
          <div className='stadium__img'><img src={BallparkMLB2} alt=""/></div>
        </div>        
        <h5 className='stadium__subtitle'>Chase Field</h5>
        <p>Local team : Arizona DiamondBacks (MLB)</p>
      </div>
      <div className='stadium'>
        <div className='stadium__photo'>
          <div className='stadium__img'><img src={StadiumNCAA1} alt=""/></div>
          <div className='stadium__img'><img src={StadiumNCAA2} alt=""/></div>
        </div>        
        <h5 className='stadium__subtitle'>Sun Devil Stadium</h5>
        <p>Local team : Arizona State Sun Devils (NCAA Football)</p>
      </div>
      <div className='stadium'>
        <div className='stadium__photo'>
          <div className='stadium__img'><img src={StadiumNCAA3} alt=""/></div>
          <div className='stadium__img'><img src={StadiumNCAA4} alt=""/></div>
        </div>        
        <h5 className='stadium__subtitle'>Arizona Stadium</h5>
        <p>Local team : Arizona Wildcats (NCAA Football)</p>
      </div>
    </section>
  )
}

export default Stadiums