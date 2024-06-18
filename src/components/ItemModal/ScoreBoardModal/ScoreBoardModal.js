import React, { useState, useEffect, memo } from 'react';
import { getScoreBoard } from '../../../apis/scoreApis';
import { useSelector } from 'react-redux';

const ScoreBoardModal = ({scoreBoardType, itemModal}) => {
  const [selectedRow, setSelectedRow] = useState({score: 0, counting_line: ''}),
  [modalScoreBoard, setModalScoreBoard] = useState([]),
  totalScore = useSelector((state) => state.user.totalScore);
  useEffect(() => {
    const fetchScoreBoard = async () => {
      const scoreBoard = await getScoreBoard(scoreBoardType);
      setModalScoreBoard(scoreBoard);
    };
    fetchScoreBoard(); 
  }, [scoreBoardType]);

  const selectOptionHandler = (record) => {
    if (record.score > totalScore) {
      return;
    }
    const data = {
      counting_line: record.counting_line,
      score: record.score
    };
    setSelectedRow(data);
    itemModal.getChildData(data);
  }
  
  const getCellColor = (type) => {
    if (type === 1) {
      return 'green';
    } else if (type === 2) {
      return 'red';
    } else {
      return '#ff5c00c4';
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
      width: '155%',
      backgroundColor: '#dbd3328f',
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
      borderLeft: '1px solid #ddd',
      borderBottom: '1px solid #ddd',
      padding: '15px',
      textTransform: 'capitalize',
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
          {Object.entries(modalScoreBoard)
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
          {Object.entries(modalScoreBoard)
            .filter(([name]) => name === 'reward')
            .map(([name, records]) => (
            <>
              <div style={{ ...scoreboardStyles.tr, fontWeight: 'bold' }}>{name.toUpperCase()}</div>
              {records
                .map((record, index) => (
                <>
                  <tr key={`${name}-${index}`} 
                    onClick = {() => selectOptionHandler(record)}
                    style={{...scoreboardStyles.td, 
                    backgroundColor: record.score > totalScore ? 'lightgrey' :
                    (selectedRow.counting_line === record.counting_line && selectedRow.score <= totalScore ? 'yellow' 
                    :  'white'),
                    color: getCellColor(record.reward_type)}}>
                    <td>{record.counting_line}</td>
                    <td>{record.score}</td>
                  </tr>
                </>
              ))}
              </>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ScoreBoardModal;