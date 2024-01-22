// App.js
import React, { useState, useEffect } from 'react';
import HeaderBar from './HeaderBar';
import Day from './Day';
import GroupDetails from './GroupDetails';
import Navigation from './Navigation';
import './App.css';
import { CheckedStateContext } from './CheckedStateContext';


function App() {
  const [checkedState, setCheckedState] = useState({
    mainstage1: true,
    mainstage2: true,
    warzone: true,
    valley: true,
    altar: true,
    temple: true,
    reverse: false
  });
  
  const [groupsData, setGroupsData] = useState([]);
  const [currentDay, setCurrentDay] = useState("Jeudi");
  const [selectedGroup, setSelectedGroup] = useState(null);
  const selectGroup = group => {
    setSelectedGroup(group);
  };
  const deselectGroup = () => {
    setSelectedGroup(null);
  };

  useEffect(() => {
    fetch('/test/lineup.json')
      .then(response => response.json())
      .then(data => setGroupsData(data))
      .catch(error => console.error('Erreur lors du chargement des données :', error));
  }, []);

  useEffect(() => {
    //console.log(selectedGroup);
    let lineup = document.getElementsByClassName('day')[0];
    if (selectedGroup) {
      lineup.style.animation = 'none';
      lineup.style.marginLeft = '300px';
      lineup.style.width = 'calc(100% - 300px)';
      lineup.style.animation = 'adjustWidth1 0.4s ';
    }
    else {
      lineup.style.animation = 'none';
      lineup.style.marginLeft = '0px';
      lineup.style.width = '100%';
      lineup.style.animation = 'adjustWidth2 0.5s forwards';
    }
  }, [selectedGroup]);

  // document.cookie = "1=2;2=2;3=1;2=3";
  // console.log(document.cookie)

  const [dayClass, setDayClass] = useState('');

  useEffect(() => {
    setDayClass(selectedGroup ? 'day-with-group-details' : '');
  }, [selectedGroup]);
  
  // return (
  //   <div className='main'>
  //     <HeaderBar />
  //     <Navigation 
  //       currentDay={currentDay} 
  //       setCurrentDay={setCurrentDay} 
  //     />
  //     <Day
  //       key={currentDay}
  //       day={currentDay}
  //       groups={groupsData.filter(group => group.DAY === currentDay)}
  //       selectGroup={selectGroup}
  //       className={dayClass}
  //     />
  //     {selectedGroup && <GroupDetails group={selectedGroup}  deselectGroup={deselectGroup}/>}
  //   </div>
  // );

return (
  <CheckedStateContext.Provider value={{ checkedState, setCheckedState }}>
    <div className='main'>
      <HeaderBar />
      <Navigation 
        currentDay={currentDay} 
        setCurrentDay={setCurrentDay} 
      />
      <Day
        key={currentDay}
        day={currentDay}
        groups={groupsData.filter(group => group.DAY === currentDay)}
        selectGroup={selectGroup}
        className={dayClass}
      />
      {selectedGroup && <GroupDetails group={selectedGroup}  deselectGroup={deselectGroup}/>}
    </div>
  </CheckedStateContext.Provider>
);
  
}

export default App;
