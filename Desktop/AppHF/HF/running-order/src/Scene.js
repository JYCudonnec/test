//Scene.js
import React from 'react';
import PropTypes from 'prop-types';
import Group from './Group';
import HourTag from './HourTag';

const Scene = ({ sceneName, groups, selectGroup, imageUrl }) => {
  groups.sort(function (a, b) {
    let x = Number(a.DEBUT.split('h')[0]);
    let y = Number(b.DEBUT.split('h')[0]);
    if (x < 4) {
      x = x + 24;
    }
    if (y < 4) {
      y = y + 24;
    }
    return y - x;
  });

  let hours = ["02:00", "01:00", "00:00", "23:00", "22:00", "21:00", "20:00", "19:00", "18:00", "17:00", "16:00", "15:00", "14:00", "13:00", "12:00", "11:00", "10:00"];
  return (
    <div className={`scene-column scene-column-${sceneName.replace(/\s/g, '')}`}>

      <img className='scene-image' src={imageUrl} />
      <h3>{sceneName}</h3>

      <div className='scene-bands'>

        {hours.map((hour, i) => (
          <HourTag key={i} hour={hour} i={i} />
        ))}

        {groups.map((group) => (
          <Group 
            key={group.id}
            group={group}
            selectGroup={selectGroup}
          />
        ))}

      </div>

    </div>
  );
};

Scene.propTypes = {
  sceneName: PropTypes.string.isRequired,
  selectGroup: PropTypes.func.isRequired,
  imageUrl: PropTypes.string.isRequired,
  groups: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      GROUPE: PropTypes.string.isRequired,
      STYLE: PropTypes.string.isRequired,
      Bio: PropTypes.string.isRequired,
      FFO: PropTypes.string.isRequired,
      PAYS: PropTypes.string.isRequired,
      PARTICIPATIONS: PropTypes.string.isRequired,
      SCENE: PropTypes.string.isRequired,
      DAY: PropTypes.string.isRequired,
      DEBUT: PropTypes.string.isRequired,
      FIN: PropTypes.string.isRequired,
      DEEZER: PropTypes.string.isRequired,
      SPOTIFY: PropTypes.string.isRequired,
      LASTFM: PropTypes.string.isRequired,
      SETLISTFM: PropTypes.string.isRequired,
      YOUTUBE: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Scene;
