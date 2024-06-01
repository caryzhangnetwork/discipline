import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import itemModal from '../../../components/ItemModal/itemModal';
import { getScoreBoard } from '../../../apis/scoreApis'

import './ProfileMenu.css';

const ProfileMenu = ({ totalScore }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false),
  [isFirstMenuOpen, setIsFirstMenuOpen] = useState(false),
  [isSecondMenuOpen, setIsSecondMenuOpen] = useState(false),
  [isThirdMenuOpen, setIsThirdMenuOpen] = useState(false),
  navigate = useNavigate();


  const modalBody = (scoreBoard) => {
    const renderScoreBoard = () => {
      const getCellColor = (type) => {
        if (type === 1) {
          return 'green';
        } else if (type === 2) {
          return 'red';
        } else {
          return 'blue';
        }
      };
      const scoreboardStyles = {
        table: {
          width: '100%',
          borderCollapse: 'collapse',
          fontSize: '14px',
        },
        tr: {
          textAlign: 'center',
          width: '150%',
          backgroundColor: 'lightgreen',
          padding: '10px',
          borderBottom: '1px solid #ddd',
        },
        th: {
          textAlign: 'center',
          backgroundColor: '#f2f2f2',
          padding: '10px',
          borderBottom: '1px solid #ddd',
        },
        td: {
          textAlign: 'center',
          padding: '10px',
          borderLeft: '1px solid #ddd',
          borderBottom: '1px solid #ddd',
        },
        'tr:nth-child(even)': {
          backgroundColor: '#f2f2f2',
        },
      };
      return (
        <div>
          <table style={scoreboardStyles.table}>
            <thead>
              <tr>
                <th style={scoreboardStyles.th}>时间</th>
                <th style={scoreboardStyles.th}>分数</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(scoreBoard)
                .filter(([name]) => name !== 'reward')
                .map(([name, records]) => (
                <>
                  <div style={{ ...scoreboardStyles.tr, fontWeight: 'bold' }}>{name.toUpperCase()}</div>
                  {records
                    .map((record, index) => (
                    <tr key={`${name}-${index}`} style={{...scoreboardStyles.td, color: getCellColor(record.reward_type)}}>
                      <td>{record.counting_line}</td>
                      <td>{record.score}</td>
                    </tr>
                  ))}
                  </>
              ))}
              {Object.entries(scoreBoard)
                .filter(([name]) => name === 'reward')
                .map(([name, records]) => (
                <>
                  <div style={{ ...scoreboardStyles.tr, fontWeight: 'bold' }}>{name.toUpperCase()}</div>
                  {records
                    .map((record, index) => (
                    <tr key={`${name}-${index}`} style={{...scoreboardStyles.td, color: getCellColor(record.reward_type)}}>
                      <td>{record.counting_line}</td>
                      <td>{record.score}</td>
                    </tr>
                  ))}
                  </>
              ))}
            </tbody>
          </table>
        </div>
      );
    };

    itemModal({
      title:()=> '分数板',
      content: renderScoreBoard,
      okbtn:()=>{},
      onClose:()=>{},
      showX: true
    })
  }

  const handleMouseDown = () => {
    isMenuOpen ? setIsMenuOpen(false) : setIsMenuOpen(true);
  };
  const firstOptionClickHandler = async () => {
    const scoreBoard = await getScoreBoard('daily')
    console.log("firstOptionClickHandler ", scoreBoard)

    modalBody(scoreBoard)

    setIsFirstMenuOpen(true);
  };
  
  const secondOptionClickHandler = async () => {
    const scoreBoard = await getScoreBoard('reward')
    console.log("secondOptionClickHandler ", scoreBoard)

    modalBody(scoreBoard)

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
      </div>
    </div>
  );
};

export default ProfileMenu;