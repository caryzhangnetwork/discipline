import React from 'react';
import CircleButton from './ClickButton/ClickButton';
import TabButton from './TabButton/TabButton';
import './App.css';

const App = () => {
  const handleDinerClick = () => {
    console.log("this is diner")
  };
  const handleSleepClick = () => {
    console.log("this is sleep")
  };
  const handleDataClick = () => {
    console.log("this is data")
  };
  const handleMenuClick = () => {
    console.log("this is menu")
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
        <TabButton name='Data' onClick={handleDataClick} />
        <TabButton name='Menu' onClick={handleMenuClick} />
      </div>
    </div>
  );
};

export default App;
