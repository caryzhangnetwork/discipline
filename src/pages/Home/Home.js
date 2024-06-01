import React, { useState, useEffect } from 'react';
import LongPressButton from '../../components/LongPressButton/longPressButton';
import ProfileMenu from './ProfileMenu/ProfileMenu';
import ListButton from '../../components/ListButton/listButton';
import TabButton from '../../components/TabButton/tabButton';
import { usePostTimeSlot, usePostDuraction } from '../../apis/timeApis'
import { useSelector } from 'react-redux';
import { textShowing } from '../../utils/animation'
import { getTotalScore } from '../../apis/userApis'
import './Home.css';

const Home = () => {
  const [showBtnList, setShowBtnList] = useState(false),
  user = JSON.parse(localStorage.getItem('user')),
  postTimeSlot = usePostTimeSlot(),
  postDuraction = usePostDuraction();
  // useEffect(async () => {
  //   // call api or anything
  // });

  let newTotalScore = useSelector((state) => state.user.totalScore);

  const handleDinerClick = async (e) => {
    console.log("before click diner")
    let score = await postTimeSlot(2);
    console.log("click ", score)
    score = JSON.stringify(score);
    if (score > 0) {
      score = '+ ' + score;
    }
    textShowing(e, score);
  };
  const handleSleepClick = async (e) => {
    console.log("before click sleep")
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

  const handleExClick = async (e, duration) => {
    let score = await postDuraction(3, duration); 
    console.log("click ", score)
    score = JSON.stringify(score);
    if (score > 0) {
      score = '+ ' + score;
    }
    textShowing(e, score);
  }

  const openExList = () => {
    setShowBtnList((prevState) => !prevState);
  }

  return (
    <div>
      <div className="header">
        <div class="nameTitle">{user.name}</div>
        <div class="profileContainer">
          <ProfileMenu totalScore={newTotalScore}/>
        </div>
      </div>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '50px',
      }}>
        <LongPressButton name="餐" onClick={handleDinerClick}/>
        <LongPressButton name="睡" onClick={handleSleepClick}/>
      </div>
      <div className="menu">
        <TabButton name='Data'  onClick={handleDataClick} />
        <TabButton name='Menu'  onClick={handleMenuClick} />
      </div>
      <div className="optionsList">
        <ListButton name="锻" onClick={openExList}/>
        {showBtnList && (
          <div className='optionsItems'>
            <ListButton name="锻30" data="30" onClick={handleExClick} />
            <ListButton name="锻60" data="60" onClick={handleExClick} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
