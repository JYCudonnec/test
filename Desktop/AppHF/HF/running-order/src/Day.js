//Day.js
import React, { useContext }  from 'react';
import PropTypes from 'prop-types';
import Scene from './Scene';
import { CheckedStateContext } from './CheckedStateContext';

const Day = ({ day, groups, selectGroup, className }) => {

  const scenes = ["MAINSTAGE 1", "MAINSTAGE 2", "WARZONE", "VALLEY", "ALTAR", "TEMPLE"];
  // const filteredScenes = scenes.filter(scene => checkedState[scene.id]);
  const { checkedState } = useContext(CheckedStateContext);

  console.log(checkedState)
  const imgSrc = [];
  imgSrc["MAINSTAGE 1"] = "https://forum.hellfest.fr/uploads/default/original/1X/723469cc76965f666beff04a4024eff673c444f3.png";
  imgSrc["MAINSTAGE 2"] = "https://forum.hellfest.fr/uploads/default/original/1X/9ef344af22970ef79d91c1955cd40c2ddaa2b32d.png";
  imgSrc["WARZONE"] = "https://forum.hellfest.fr/uploads/default/original/1X/fa9236925f7bd4a4f3b5f622071c425c8b1e04f6.png";
  imgSrc["VALLEY"] = "https://forum.hellfest.fr/uploads/default/original/1X/bd43f51c3f066a6d96df719ec826021c0f5a864d.png";
  imgSrc["ALTAR"] = "https://forum.hellfest.fr/uploads/default/original/1X/eede00d585209d337e8897aa24cbf0f2255bfdf2.png";
  imgSrc["TEMPLE"] = "https://forum.hellfest.fr/uploads/default/original/1X/2f6183017decac3885da317500a664a884eccf84.png";

  return (
    <div>
      <h2>{day}</h2>
      <div className={`day ${className}`}>
        {scenes.map(scene => (
          <Scene
            key={scene} 
            sceneName={scene} 
            groups={groups.filter(group => group.SCENE === scene)} 
            selectGroup={selectGroup} 
            imageUrl={imgSrc[scene]}
          />
        ))}
      </div>
    </div>
  );
};

Day.propTypes = {
  day: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  groups: PropTypes.array.isRequired,
  selectGroup: PropTypes.func.isRequired,
};

export default Day;
