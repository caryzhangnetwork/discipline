import React from 'react';
import CircleButton from './ClickButton/ClickButton';
import './App.css';

const App = () => {
  const handleDinerClick = () => {
    console.log("this is diner")
  };
  const handleSleepClick = () => {
    console.log("this is sleep")
  };

  return (
    <div>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        <CircleButton name="Diner" onClick={handleDinerClick}/>
        <CircleButton name="Sleep" onClick={handleSleepClick}/>
      </div>
      <div className="menu">
        <div></div>
      </div>
    </div>
  );
};

export default App;
