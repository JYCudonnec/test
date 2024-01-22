//GroupDetails.js
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const GroupDetails = ({ group, deselectGroup  }) => {
    const [isClosing, setIsClosing] = useState(false);
  
    const handleClose = () => {
      setIsClosing(true);
      setTimeout(deselectGroup, 500); // Attend la fin de l'animation avant de fermer
    };
  
    return (
      <div className={`group-details ${isClosing ? 'closing' : ''}`}>
        <div><h3>{group.GROUPE}</h3></div>
        <div><span>{group.STYLE}</span></div>
        <div><span>{group.PAYS}</span></div>
        <div><p>{group.Bio}</p></div>
        <div><span>{group.FFO}</span></div>
        <div><span>{group.DEBUT} - {group.FIN}</span></div>
        <button onClick={handleClose}>Fermer</button>
      </div>
    );
};

GroupDetails.propTypes = {
    deselectGroup: PropTypes.func.isRequired,
    group: PropTypes.shape({
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
    }).isRequired,
  };
  

export default GroupDetails;