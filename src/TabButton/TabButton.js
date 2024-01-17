import React from 'react';

const CircleButton = ({name, onClick}) => {

  return (
    <button
      style={{
        flex: 1,
        textAlign: 'center',
        fontSize: '70px',
      }}
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export default CircleButton;