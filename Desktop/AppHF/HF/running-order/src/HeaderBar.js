//HeaderBar.js
import React, { useState } from 'react';
import OptionsWindow from './OptionsWindow';

const HeaderBar = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleClick = (option) => {
    if (option === selectedOption) {
      setSelectedOption(null);
    } else {
      setSelectedOption(option);
    }
  };

  return (
    <header>
      <div className='header-title'>
        <span>Hellfest Running-Order non-officiel</span>
      </div>
      <div className='header-options'>
        <div className='options-menu'>
          <div className={`options-item ${selectedOption === 'sort' ? 'selected-option' : ''}`} onClick={() => handleClick('sort')}>
            <span><i className="fa-solid fa-sort"></i></span>
          </div>
          <div className={`options-item ${selectedOption === 'music' ? 'selected-option' : ''}`} onClick={() => handleClick('music')}>
            <span><i className="fa-solid fa-music"></i></span>
          </div>
          <div className={`options-item ${selectedOption === 'paintbrush' ? 'selected-option' : ''}`} onClick={() => handleClick('paintbrush')}>
            <span><i className="fa-solid fa-paintbrush"></i></span>
          </div>
          <div className={`options-item ${selectedOption === 'list' ? 'selected-option' : ''}`} onClick={() => handleClick('list')}>
            <span><i className="fa-solid fa-list"></i></span>
          </div>
        </div>
        <div className='options-window'>
          {selectedOption && <OptionsWindow selectedOption={selectedOption} />}
        </div>
      </div>
    </header>
  );
};

export default HeaderBar;