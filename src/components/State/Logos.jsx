import React from 'react';
import '../../styles/Logos.scss';

function Logos({ majorLeague = [], 
  minorLeague = [], 
  juniorLeague = [], 
  footballLeague = [], 
  basketLeague = [], 
  rugbyLeague = [], 
  handballLeague = [], 
  volleyLeague = [], 
  icehockeyLeague = [], 
  baseballLeague = [], 
  footusLeague = [], 
  gaelicLeague = [] 
                }) {
  return (
    <div className='logo'>
      {majorLeague.length > 0 && (
        <>
          <h2 className='logo__level'>Major League Teams :</h2>
          <div className='logo__teams'>
            {majorLeague.map(team => (
              <div key={team.name} className='logo__club'>                
                <div className='logo__club__content'>
                  <img src={team.logo} alt={team.name} className='logo__club__img'/>
                </div>
                <p className='logo__club__title'>{team.name}</p>
                <img src={team.leagueLogo} alt={team.leagueLogo} className='logo__club__league'/>
              </div>
            ))}
          </div>
        </>
      )}

      {minorLeague.length > 0 && (
        <>
          <h2 className='logo__level'>Minor League Teams :</h2>
          <div className='logo__teams'>
            {minorLeague.map(team => (
              <div key={team.name} className='logo__club'>                
                <div className='logo__club__content'>
                  <img src={team.logo} alt={team.name} className='logo__club__img'/>
                </div>
                <p className='logo__club__title'>{team.name}</p>
                <img src={team.leagueLogo} alt={team.leagueLogo} className='logo__club__league'/>
              </div>
            ))}
          </div>
        </>
      )}

      {juniorLeague.length > 0 && (
        <>
          <h2 className='logo__level'>Junior League Teams :</h2>
          <div className='logo__teams'>
            {juniorLeague.map(team => (
              <div key={team.name} className='logo__club'>                
                <div className='logo__club__content'>
                  <img src={team.logo} alt={team.name} className='logo__club__img'/>
                </div>
                <p className='logo__club__title'>{team.name}</p>
                <img src={team.leagueLogo} alt={team.leagueLogo} className='logo__club__league'/>
              </div>
            ))}
          </div>
        </>
      )}

      {footballLeague.length > 0 && (
        <>
          <h2 className='logo__level'>Major League Teams :</h2>
          <div className='logo__teams'>
            {footballLeague.map(team => (
              <div key={team.name} className='logo__club'>                
                <div className='logo__club__content'>
                  <img src={team.logo} alt={team.name} className='logo__club__img'/>
                </div>
                <p className='logo__club__title'>{team.name}</p>
                <img src={team.leagueLogo} alt={team.leagueLogo} className='logo__club__league'/>
              </div>
            ))}
          </div>
        </>
      )}

      {basketLeague.length > 0 && (
        <>
          <h2 className='logo__level'>Major League Teams :</h2>
          <div className='logo__teams'>
            {basketLeague.map(team => (
              <div key={team.name} className='logo__club'>                
                <div className='logo__club__content'>
                  <img src={team.logo} alt={team.name} className='logo__club__img'/>
                </div>
                <p className='logo__club__title'>{team.name}</p>
                <img src={team.leagueLogo} alt={team.leagueLogo} className='logo__club__league'/>
              </div>
            ))}
          </div>
        </>
      )}

      {rugbyLeague.length > 0 && (
        <>
          <h2 className='logo__level'>Major League Teams :</h2>
          <div className='logo__teams'>
            {rugbyLeague.map(team => (
              <div key={team.name} className='logo__club'>                
                <div className='logo__club__content'>
                  <img src={team.logo} alt={team.name} className='logo__club__img'/>
                </div>
                <p className='logo__club__title'>{team.name}</p>
                <img src={team.leagueLogo} alt={team.leagueLogo} className='logo__club__league'/>
              </div>
            ))}
          </div>
        </>
      )}

      {handballLeague.length > 0 && (
        <>
          <h2 className='logo__level'>Major League Teams :</h2>
          <div className='logo__teams'>
            {handballLeague.map(team => (
              <div key={team.name} className='logo__club'>                
                <div className='logo__club__content'>
                  <img src={team.logo} alt={team.name} className='logo__club__img'/>
                </div>
                <p className='logo__club__title'>{team.name}</p>
                <img src={team.leagueLogo} alt={team.leagueLogo} className='logo__club__league'/>
              </div>
            ))}
          </div>
        </>
      )}

      {icehockeyLeague.length > 0 && (
        <>
          <h2 className='logo__level'>Major League Teams :</h2>
          <div className='logo__teams'>
            {icehockeyLeague.map(team => (
              <div key={team.name} className='logo__club'>                
                <div className='logo__club__content'>
                  <img src={team.logo} alt={team.name} className='logo__club__img'/>
                </div>
                <p className='logo__club__title'>{team.name}</p>
                <img src={team.leagueLogo} alt={team.leagueLogo} className='logo__club__league'/>
              </div>
            ))}
          </div>
        </>
      )}

      {footusLeague.length > 0 && (
        <>
          <h2 className='logo__level'>Major League Teams :</h2>
          <div className='logo__teams'>
            {footusLeague.map(team => (
              <div key={team.name} className='logo__club'>                
                <div className='logo__club__content'>
                  <img src={team.logo} alt={team.name} className='logo__club__img'/>
                </div>
                <p className='logo__club__title'>{team.name}</p>
                <img src={team.leagueLogo} alt={team.leagueLogo} className='logo__club__league'/>
              </div>
            ))}
          </div>
        </>
      )}

      {volleyLeague.length > 0 && (
        <>
          <h2 className='logo__level'>Major League Teams :</h2>
          <div className='logo__teams'>
            {volleyLeague.map(team => (
              <div key={team.name} className='logo__club'>                
                <div className='logo__club__content'>
                  <img src={team.logo} alt={team.name} className='logo__club__img'/>
                </div>
                <p className='logo__club__title'>{team.name}</p>
                <img src={team.leagueLogo} alt={team.leagueLogo} className='logo__club__league'/>
              </div>
            ))}
          </div>
        </>
      )}

      {baseballLeague.length > 0 && (
        <>
          <h2 className='logo__level'>Major League Teams :</h2>
          <div className='logo__teams'>
            {baseballLeague.map(team => (
              <div key={team.name} className='logo__club'>                
                <div className='logo__club__content'>
                  <img src={team.logo} alt={team.name} className='logo__club__img'/>
                </div>
                <p className='logo__club__title'>{team.name}</p>
                <img src={team.leagueLogo} alt={team.leagueLogo} className='logo__club__league'/>
              </div>
            ))}
          </div>
        </>
      )}

      {gaelicLeague.length > 0 && (
        <>
          <h2 className='logo__level'>Major League Teams :</h2>
          <div className='logo__teams'>
            {gaelicLeague.map(team => (
              <div key={team.name} className='logo__club'>                
                <div className='logo__club__content'>
                  <img src={team.logo} alt={team.name} className='logo__club__img'/>
                </div>
                <p className='logo__club__title'>{team.name}</p>
                <img src={team.leagueLogo} alt={team.leagueLogo} className='logo__club__league'/>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Logos;
