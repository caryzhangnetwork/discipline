import React, { useState, useRef, useEffect } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import './longPressButton.css';

const LongPressButton = ({name, onClick}) => {
  const [isPress, setIsPress] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseDown = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsPress(true);
    setIsLoading(true);
    timeoutRef.current = setTimeout(() => {
      onClick(e);
      setIsPress(false);
      setIsLoading(false);
    }, 900);
  };

  const handleMouseUp = (e) => {
    setIsPress(false);
    setIsLoading(false);
    clearTimeout(timeoutRef.current);
  };

  useEffect(() => {
    // window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchend', handleMouseUp);
    return () => {
      // window.removeEventListener('mouseup', handleMouseUp);
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
      {/* for phone press */}
      <MobileView>
        <div
          className='circleButton'
          style={{
            transform: isPress ? 'scale(0.9)' : 'scale(1)',
          }}
          onTouchStart={handleMouseDown}
        >
          {name}
        </div>
      </MobileView>

      {/* for pc click */}
      <BrowserView>
        <button
          className='circleButton'
          style={{
            transform: isPress ? 'scale(0.9)' : 'scale(1)',
          }}
          onMouseDown={handleMouseDown}
        >
          {name}
        </button>
      </BrowserView>
      
      {  isLoading && (
        <svg  className="circleContainer">
          <circle  className="circle" cx="95" cy="95" r="93" fill="none" stroke="#7C83FD"></circle>
        </svg>
      )}
    </div>
  );
};

export default LongPressButton;