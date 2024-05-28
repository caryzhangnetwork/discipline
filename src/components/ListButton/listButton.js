import React, { useState } from 'react';
import './listButton.css';

const ListButton = ({name, data, onClick}) => {
  const [isPress, setIsPress] = useState(false);

  const handleMouseDown = (e) => {
    setIsPress(true);
    onClick(e, data)
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