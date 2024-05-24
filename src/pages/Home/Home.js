import React from 'react';
import LongPressButton from '../../components/LongPressButton/longPressButton';
import ProfileMenu from './ProfileMenu/ProfileMenu';
import ListButton from '../../components/ListButton/listButton';
import TabButton from '../../components/TabButton/tabButton';
import postTimeSlot from '../../apis/timeApis'
import textShowing from '../../utils/animation'
import './Home.css';

const Home = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  const handleDinerClick = async (e) => {
    let score = await postTimeSlot(2);
    console.log("click ", score)
    score = JSON.stringify(score);
    if (score > 0) {
      score = '+ ' + score;
    }
    textShowing(e, score);
  };
  const handleSleepClick = async (e) => {
    let score = await postTimeSlot(1); 
    console.log("click ", score)
    score = JSON.stringify(score);
    if (score > 0) {
      score = '+ ' + score;
    }
    textShowing(e, score);
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
        <div class="nameTitle">{user.name}</div>
        <div class="profileContainer">
          <ProfileMenu totalScore={user.total_score}/>
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
