import React from 'react';
import CircleButton from '../../components/ClickButton/ClickButton';
import TabButton from '../../components/TabButton/TabButton';
import getTime from '../../apis/timeApis'
import './Home.css';

const Home = () => {
  const handleDinerClick = () => {
    getTime();
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

export default Home;
