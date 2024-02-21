import React, { useState } from 'react';
import './scoreBoard.css';

const ScoreBoard = ({total, list}) => {
  const [isPress, setIsPress] = useState(false);

  const handleMouseDown = () => {
    setIsPress(true);
    
  };

  return (
    <div>
      <div className="boardHeader">
        {{total}}
      </div>
      <ul>
        {
          list.map((item, index) => {
            return <li key={index}>{item}</li>
          })
				}
      </ul>
    </div>
  );
};

export default ScoreBoard;