//Group.js
import React from 'react';
import PropTypes from 'prop-types';

const Group = ({ group, selectGroup }) => {
  const {
    GROUPE,
    // STYLE,
    // Bio,
    // FFO,
    // PAYS,
    // PARTICIPATIONS,
    SCENE,
    // DAY,
    DEBUT,
    FIN,
    // DEEZER,
    // SPOTIFY,
    // LASTFM,
    // SETLISTFM,
    // YOUTUBE,
    id
  } = group;


  const debut = DEBUT.split('h');
  const fin = FIN.split('h');
  if (debut[0] < 4) {
    debut[0] = +debut[0] + 24;
  }
  if (fin[0] < 4) {
    fin[0] = +fin[0] + 24;
  }
  const debutMinutes = (+debut[0]) * 60 + (+debut[1]);
  const finMinutes = (+fin[0]) * 60 + (+fin[1]);
  const duree = finMinutes - debutMinutes;
  const dureeHeures = Math.floor(duree / 60);
  const dureeMinutes = duree % 60;
  const dureeConcert = dureeHeures * 60 + dureeMinutes;
  const dureeAvantFin = 1560 - finMinutes

  return (
      <div className={`band-container band-${SCENE.replace(/\s/g, '')} band-${id}`} style={{position: 'absolute', top: `${dureeAvantFin}px`, height: `${dureeConcert}px`}} onClick={() => selectGroup(group)} >
        <div className='band-tag'>
          <h4>{GROUPE}</h4>
          {/* <p>Style: {STYLE}</p>
          <p>Bio: {Bio}</p>
          <p>FFO: {FFO}</p>
          <p>Pays: {PAYS}</p>
          <p>Participations: {PARTICIPATIONS}</p> */}
          {/* <p>Scène: {SCENE}</p> */}
          {/* <p>Jour: {DAY}</p>
          <p>Début: {DEBUT}</p>
          <p>Fin: {FIN}</p> */}
          {/* <p>Deezer: <a href={DEEZER} target="_blank" rel="noopener noreferrer">Écouter sur Deezer</a></p>
          <p>Spotify: <a href={SPOTIFY} target="_blank" rel="noopener noreferrer">Écouter sur Spotify</a></p>
          <p>LastFM: <a href={LASTFM} target="_blank" rel="noopener noreferrer">LastFM</a></p>
          <p>SetlistFM: <a href={SETLISTFM} target="_blank" rel="noopener noreferrer">SetlistFM</a></p>
          <p>YouTube: <a href={YOUTUBE} target="_blank" rel="noopener noreferrer">Voir sur YouTube</a></p> */}
        </div>
      </div>
  );
};

Group.propTypes = {
  selectGroup: PropTypes.func.isRequired,
  group: PropTypes.shape({
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
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default Group;
