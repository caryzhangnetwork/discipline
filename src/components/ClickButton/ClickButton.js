import React from 'react';

const CircleButton = ({name, onClick}) => {

  return (
    <button
      style={{
        width: '13rem',
        height: '13rem',
        borderRadius: '50%',
        backgroundColor: '#f0f0f0',
        border: 'none',
        outline: 'none',
        cursor: 'pointer',
        marginTop: '2rem',
        fontSize: '3rem',
        color: '#333',
        boxShadow: '7px 7px 5px 0px rgba(0, 0, 0, 0.25)',
      }}
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export default CircleButton;