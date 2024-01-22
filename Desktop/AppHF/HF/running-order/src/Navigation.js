// Dans Navigation.js
import React from 'react';
import PropTypes from 'prop-types';

const Navigation = ({ currentDay, setCurrentDay }) => {
  const days = ['Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
  const currentDayIndex = days.indexOf(currentDay);

  const handleDayChange = (newDayIndex) => {
    setCurrentDay(days[newDayIndex]);
  };

  return (
    <nav>
      {currentDayIndex > 0 && <button onClick={() => handleDayChange(currentDayIndex - 1)}>←</button>}
      <h1>{currentDay}</h1>
      {currentDayIndex < days.length - 1 && <button onClick={() => handleDayChange(currentDayIndex + 1)}>→</button>}
    </nav>
  );
};

Navigation.propTypes = {
  currentDay: PropTypes.string.isRequired,
  setCurrentDay: PropTypes.func.isRequired,
};

export default Navigation;