import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateUserScore } from '../../../apis/userApis'
import { updateTotalScore } from '../../../redux/userSlice';
import itemModal from '../../../components/ItemModal/itemModal';
import { modalTypeEnum } from '../../../interface/uiEnum'

import './ProfileMenu.css';

const ProfileMenu = ({ totalScore }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false),
  [isModalOpen, setIsModalOpen] = useState(false),
  [scoreBoardType, setScoreBoardType] = useState(''),
  navigate = useNavigate(),
  dispatch = useDispatch();

  const closeModal = () => {
    const modal = document.getElementById('condiv1');
    document.body.removeChild(modal);
    setIsModalOpen(false);
  }

  const renderConfirmBtn = (data) => {
    const confirmReward = async () => {
      const newTotalScore = await updateUserScore(data)
      dispatch(updateTotalScore(newTotalScore))
      closeModal();
    }
    const buttonStyles = {
      confirmButton: {
        margin: '10px',
        float: 'right',
        textAlign: 'center',
        padding: '5px',
        fontSize: '15px',
        textTransform: 'capitalize',
        fontWeight: 'bold',
        backgroundColor: '#324edbd4',
        width: '100px',
        borderRadius: '10px'
      }
    }
    return (
      <div style={{ ...buttonStyles.confirmButton }} onClick={confirmReward}>
        confirm
      </div>
    )
  }
  const handleMouseDown = () => {
    isMenuOpen ? setIsMenuOpen(false) : setIsMenuOpen(true);
  };
  const firstOptionClickHandler = async () => {
    setScoreBoardType('daily');
    setIsModalOpen(true);
  };
  
  const secondOptionClickHandler = async () => {
    setScoreBoardType('reward');
    setIsModalOpen(true);
  };
  const thirdOptionClickHandler = () => {
    localStorage.removeItem("user");
    navigate('/');
  };

  return (
    <div className='profileContainer'>
      <button
        className='profileButton clickButton'
        onMouseDown={handleMouseDown}
      >
        <img src='../../img/default.png' alt=''/>
        {totalScore}
      </button>
      <div 
        style={{ display: isMenuOpen ? 'block' : 'none' }}
      >
        <button
          className='firstMenuOption clickButton'
          onClick={firstOptionClickHandler}
        >
          分
          <img src='../../img/svg/report.svg' className="App-logo" alt='' />
        </button>

        <button
          className='secondMenuOption clickButton'
          onClick={secondOptionClickHandler}
        >
          奖
          <img src='../../img/svg/reward.svg' className="App-logo" alt='' />
        </button>
        <button
          className='thirdMenuOption clickButton'
          onClick={thirdOptionClickHandler}
        >
          退
          <img src='../../img/svg/list.svg' className="App-logo" alt=''/>
        </button>

        {isModalOpen &&  (
        <div>
          {    
            itemModal({
            title:()=> '分数板',
            param: scoreBoardType,
            modalType: modalTypeEnum.SCORE_BOARD,
            okbtn: scoreBoardType==='reward' ? renderConfirmBtn : ()=>{},
            onClose: closeModal,
            showX: true
            })
          }
        </div>
      )}
      </div>
    </div>
  );
};



export default ProfileMenu;