//OptionsWindow.js
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { CheckedStateContext } from './CheckedStateContext';

const OptionsWindow = ({ selectedOption }) => {
  
  const { setCheckedState } = useContext(CheckedStateContext);

  const handleChange = (event) => {
    console.log(event.target.name)
    setCheckedState(prevState => ({ ...prevState, [event.target.name]: event.target.checked }));
  };
  console.log(CheckedStateContext)
    let content;
    switch (selectedOption) {
      case 'sort':
        content = 
        <div className='sort-content'>
          <div className='sort-scene'>
            <div className='sort-scene-column'>
                <input type="checkbox" id="mainstage1"  name="mainstage1" checked={CheckedStateContext.mainstage1} onChange={handleChange}/>
                <label htmlFor="mainstage1">MS1</label><br></br>
                <input type="checkbox" id="mainstage2" name="mainstage2" checked={CheckedStateContext.mainstage2} onChange={handleChange}/>
                <label htmlFor="mainstage2">MS2</label>
            </div>
            <div className='sort-scene-column'>
                <input type="checkbox" id="warzone" name="warzone"  checked={CheckedStateContext.warzone} onChange={handleChange}/>
                <label htmlFor="warzone">Warzone</label><br></br>
                <input type="checkbox" id="valley" name="valley"  checked={CheckedStateContext.valley} onChange={handleChange}/>
                <label htmlFor="valley">Valley</label>
            </div>
            <div className='sort-scene-column'>
                <input type="checkbox" id="altar" name="altar"  checked={CheckedStateContext.altar} onChange={handleChange}/>
                <label htmlFor="altar">Altar</label><br></br>
                <input type="checkbox" id="temple" name="temple"  checked={CheckedStateContext.temple} onChange={handleChange}/>
                <label htmlFor="temple">Temple</label>
            </div>
          </div>
          <hr />
          <div className='sort-reverse'>
            <input type="checkbox" id="reverse" name="reverse"/>
            <label htmlFor="reverse">Inverser l&apos;ordre des groupes</label>
          </div>
        </div>;
        break;
      case 'music':
        content = 
        <div id="playlistContent">
          <h5>Playlist du Jour</h5>
          <ul>
            <li><a href="#" target="_blank" rel="noreferrer">Deezer</a></li>
            <li><a href="#" target="_blank" rel="noreferrer">Spotify</a></li>
          </ul>
          <hr/>
          <h5>Playlist 4 jours</h5>
          <ul>
            <li><a href="https://www.deezer.com/fr/playlist/12022669371" target="_blank" rel="noreferrer">Deezer</a></li>
            <li><a href="https://open.spotify.com/playlist/7wPC59o4wROGkb0CMfioiP" target="_blank" rel="noreferrer">Spotify</a></li>
            <li><a href="https://music.apple.com/fr/playlist/hellfest-2024/pl.u-e98lkMmUzD9yq1Y"
                target="_blank" rel="noreferrer">Apple Music</a></li>
            <li><a href="https://music.youtube.com/playlist?list=PLJGGvdXJlXvBYEW34OsuV5XkVXXvN4YZT"
                target="_blank" rel="noreferrer">Youtube Music</a></li>
            <li><a href="https://www.youtube.com/playlist?list=PL-_n4BHEzsy6uxvlt2vdL2vsVnXsiEI-b"
                target="_blank" rel="noreferrer">Youtube (setlist récentes)</a></li>
          </ul>
          <hr/>
          <span>Incollable ? Tester vos connaissances sur <a href="https://blinest.com/rooms/hellfest-2024"
              target="_blank" rel="noreferrer">Blinest</a></span>
        </div>;
        break;
      case 'paintbrush':
        content = <div>Paintbrush Content</div>;
        break;
      case 'list':
        content = <div>List Content</div>;
        break;
      default:
        content = null;
    }

  return (
      <div className='options-window-sub'>
      {content}
      </div>
  );
};

OptionsWindow.propTypes = {
    selectedOption: PropTypes.string.isRequired,
};

export default OptionsWindow;
