import React, { useState } from 'react';
import { getTotalScore } from '../../../apis/userApis'

import './ProfileMenu.css';

const ProfileMenu = ({name, onClick}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false),
  [totalScore, setTotalScore] = useState(0),
  [isFirstMenuOpen, setIsFirstMenuOpen] = useState(false),
  [isSecondMenuOpen, setIsSecondMenuOpen] = useState(false),
  [isThirdMenuOpen, setIsThirdMenuOpen] = useState(false);

  const handleMouseDown = () => {
    isMenuOpen ? setIsMenuOpen(false) : setIsMenuOpen(true);
  };
  const firstOptionClickHandler = async () => {
    const totalScore = await getTotalScore();
    setTotalScore(totalScore)
    setIsFirstMenuOpen(true);
  };
  const secondOptionClickHandler = () => {
    setIsSecondMenuOpen(true);
  };
  const thirdOptionClickHandler = () => {
    setIsThirdMenuOpen(true);
  };

  return (
    <div className='profileContainer'>
      <div
        className='profileButton clickButton'
        onMouseDown={handleMouseDown}
      >
        <img src='../../img/default.png' alt=''/>
        {totalScore}
      </div>
      <div 
        style={{ display: isMenuOpen ? 'block' : 'none' }}
      >
        <div
          className='firstMenuOption clickButton'
          onClick={firstOptionClickHandler}
        >
          <img src='../../img/svg/report.svg' className="App-logo" alt='' />
        </div>
        <div
          className='secondMenuOption clickButton'
          onClick={secondOptionClickHandler}
        >
          <img src='../../img/svg/reward.svg' className="App-logo" alt='' />
        </div>
        <div
          className='thirdMenuOption clickButton'
          onClick={thirdOptionClickHandler}
        >
          <img src='../../img/svg/list.svg' className="App-logo" alt=''/>
        </div>
      </div>
    </div>
  );
};

export default ProfileMenu;