import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getTotalScore } from '../../../apis/userApis'

import './ProfileMenu.css';

const ProfileMenu = ({ totalScore }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false),
  [isFirstMenuOpen, setIsFirstMenuOpen] = useState(false),
  [isSecondMenuOpen, setIsSecondMenuOpen] = useState(false),
  [isThirdMenuOpen, setIsThirdMenuOpen] = useState(false),
  [score, setTotalScore] = useState(totalScore);
  const navigate = useNavigate();

  const handleMouseDown = () => {
    isMenuOpen ? setIsMenuOpen(false) : setIsMenuOpen(true);
  };
  const firstOptionClickHandler = async () => {
    const newTotalScore = await getTotalScore();
    const user = JSON.parse(localStorage.getItem('user'));
    user.total_score = newTotalScore
    localStorage.setItem('user', JSON.stringify(user))
    setTotalScore(newTotalScore)
    setIsFirstMenuOpen(true);
  };
  const secondOptionClickHandler = () => {
    setIsSecondMenuOpen(true);
  };
  const thirdOptionClickHandler = () => {
    localStorage.removeItem("user");
    navigate('/');
    setIsThirdMenuOpen(true);
  };

  return (
    <div className='profileContainer'>
      <button
        className='profileButton clickButton'
        onMouseDown={handleMouseDown}
      >
        <img src='../../img/default.png' alt=''/>
        {score}
      </button>
      <div 
        style={{ display: isMenuOpen ? 'block' : 'none' }}
      >
        <button
          className='firstMenuOption clickButton'
          onClick={firstOptionClickHandler}
        >
          更
          <img src='../../img/svg/report.svg' className="App-logo" alt='' />
        </button>
        <button
          className='secondMenuOption clickButton'
          onClick={secondOptionClickHandler}
        >
          <img src='../../img/svg/reward.svg' className="App-logo" alt='' />
        </button>
        <button
          className='thirdMenuOption clickButton'
          onClick={thirdOptionClickHandler}
        >
          退
          <img src='../../img/svg/list.svg' className="App-logo" alt=''/>
        </button>
      </div>
    </div>
  );
};

export default ProfileMenu;