import React from 'react';

const CircleButton = ({name, onClick}) => {

  return (
    <button
      style={{
        width: '40rem',
        height: '40rem',
        borderRadius: '50%',
        backgroundColor: '#f0f0f0',
        border: 'none',
        outline: 'none',
        cursor: 'pointer',
        marginTop: '20rem',
        fontSize: '10rem',
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