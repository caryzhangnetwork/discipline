import React, { useState } from 'react';
import './listButton.css';

const ListButton = ({name, onClick}) => {
  const [isPress, setIsPress] = useState(false);

  const handleMouseDown = () => {
    setIsPress(true);

  };

  return (
    <div>
      <div
        className='listView'
        style={{
        }}
        onMouseDown={handleMouseDown}
      >
        {name}
      </div>
    </div>
  );
};

export default ListButton;