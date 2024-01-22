import React from 'react';
import PropTypes from 'prop-types';

const HourTag = ({ hour, i }) => {

  return (
    // {/* {hours.map((hour, i) => `<div class="hours" style="position: absolute;top:${(i * 60) - 5}px; left: 45%;color:white;opacity:0.7;"><span>${hour}</span></div>`).join('')} */}
      <div className='hours'  style={{top: `${(i * 60) - 5}px`}}>
        {hour}
      </div>
  );
};

HourTag.propTypes = {
  hour: PropTypes.string.isRequired,
  i: PropTypes.number.isRequired,
};

export default HourTag;
