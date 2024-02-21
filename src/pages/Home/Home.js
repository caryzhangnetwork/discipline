import React from 'react';
import LongPressButton from '../../components/LongPressButton/longPressButton';
import ProfileMenu from './ProfileMenu/ProfileMenu';
import ListButton from '../../components/ListButton/listButton';
import TabButton from '../../components/TabButton/tabButton';
import postTimeSlot from '../../apis/timeApis'
import './Home.css';

const Home = () => {
  const handleDinerClick = () => {
    postTimeSlot(2);
  };
  const handleSleepClick = () => {
    postTimeSlot(1);
  };
  const handleDataClick = () => {
    console.log("this is data")
  };
  const handleMenuClick = () => {
    console.log("this is menu")
  };

  return (
    <div>
      <div className="header">
        <div class="profileContainer">
          <ProfileMenu/>
        </div>
      </div>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        <LongPressButton name="餐" onClick={handleDinerClick}/>
        <LongPressButton name="睡" onClick={handleSleepClick}/>
      </div>
      <div className="menu">
        <TabButton name='Data' onClick={handleDataClick} />
        <TabButton name='Menu' onClick={handleMenuClick} />
      </div>
      <div className="optionsList">
        <ListButton/>
        <ListButton/>
        <ListButton/>
      </div>
    </div>
  );
};

export default Home;
