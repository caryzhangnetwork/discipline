import React, { useState, useRef, useEffect } from 'react';
import './longPressButton.css';

const LongPressButton = ({name, onClick}) => {
  const [isPress, setIsPress] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseDown = () => {
    setIsPress(true);
    setIsLoading(true);
    timeoutRef.current = setTimeout(() => {
      onClick();
    }, 1100);
  };

  const handleMouseUp = () => {
    setIsPress(false);
    setIsLoading(false);
    clearTimeout(timeoutRef.current);
  };

  useEffect(() => {
    window.addEventListener('touchend', handleMouseUp);
    return () => {
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, []);

  return (
    <div
      style={{  
        position: 'relative',
        display: 'flex'
        
      }}
    >
      <div
        className='circleButton'
        style={{
          transform: isPress ? 'scale(0.95)' : 'scale(1)',
        }}
        onTouchStart={handleMouseDown}
      >
        {name}
      </div>
      { isLoading && (
        <svg  className="circleContainer">
          <circle  className="circle" cx="95" cy="98" r="93" fill="none" stroke="#7C83FD"></circle>
        </svg>
      )}
    </div>
  );
};

export default LongPressButton;