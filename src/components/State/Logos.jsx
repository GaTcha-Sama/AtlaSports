import React from 'react';
import '../../styles/Logos.scss';

function Logos({ majorLeague, minorLeague, juniorLeague }) {
  return (
    <div className='logo'>
      {majorLeague.length > 0 && (
        <>
          <h2 className='logo__level'>Major League Teams</h2>
          <div className='logo__teams'>
            {majorLeague.map(team => (
              <div key={team.name} className='logo__club'>
                <p className='logo__club__title'>{team.name}</p>
                <div className='logo__club__content'>
                  <img src={team.logo} alt={team.name} className='logo__club__img'/>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {minorLeague.length > 0 && (
        <>
          <h2 className='logo__level'>Minor League Teams</h2>
          <div className='logo__teams'>
            {minorLeague.map(team => (
              <div key={team.name} className='logo__club'>
                <p className='logo__club__title'>{team.name}</p>
                <div className='logo__club__content'>
                  <img src={team.logo} alt={team.name} className='logo__club__img'/>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {juniorLeague.length > 0 && (
        <>
          <h2 className='logo__level'>Junior League Teams</h2>
          <div className='logo__teams'>
            {juniorLeague.map(team => (
              <div key={team.name} className='logo__club'>
                <p className='logo__club__title'>{team.name}</p>
                <div className='logo__club__content'>
                  <img src={team.logo} alt={team.name} className='logo__club__img'/>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Logos;
