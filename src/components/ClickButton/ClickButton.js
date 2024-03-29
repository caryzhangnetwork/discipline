import React, { useState } from 'react';
import './clickButton.css';

const ClickButton = ({name, onClick}) => {
  const [isPress, setIsPress] = useState(false);

  const handleMouseDown = () => {
    setIsPress(true);

  };

  return (
    <div>
      <div
        className='clickButton'
        style={{
        }}
        onMouseDown={handleMouseDown}
      >
        {name}
      </div>
    </div>
  );
};

export default ClickButton;