import React from 'react';
import '../../styles/Logos.scss';

function Logos({ majorLeague, minorLeague, juniorLeague }) {
  return (
    <div className='logo'>
      <h2 className='logo__league'>Major League Teams</h2>
      <div className='logo__teams'>
        {majorLeague.map(team => (
          <div key={team.name} className='logo__club'>
            <img src={team.logo} alt={team.name} className='logo__club__img'/>
            <div className='logo__club__info'>
              <p className='logo__club__title'>{team.name}</p>
              <img src={team.leagueLogo} alt="major-league" />
            </div>
          </div>
        ))}
      </div>

      <h2 className='logo__league'>Minor League Teams</h2>
      <div className='logo__teams'>
        {minorLeague.map(team => (
          <div key={team.name} className='logo__club'>
            <img src={team.logo} alt={team.name} className='logo__club__img'/>
            <div className='logo__club__info'>
              <p className='logo__club__title'>{team.name}</p>
              <img src={team.leagueLogo} alt="minor-league" />
            </div>
          </div>
        ))}
      </div>

      <h2 className='logo__league'>Junior League Teams</h2>
      <div className='logo__teams'>
        {juniorLeague.map(team => (
          <div key={team.name} className='logo__club'>
            <img src={team.logo} alt={team.name} className='logo__club__img'/>
            <div className='logo__club__info'>
              <p className='logo__club__title'>{team.name}</p>
              <img src={team.leagueLogo} alt="minor-league" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Logos;