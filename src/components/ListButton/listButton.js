import React, { useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import './listButton.css';

const ListButton = ({name, data, onClick}) => {
  const [isPress, setIsPress] = useState(false);

  const handleMouseDown = (e) => {
    setIsPress(true);
    onClick(e, data)
  };

  return (
    <div>
      {/* for phone press */}
      <MobileView>
      <div>
          <div
            className='listView'
            style={{
            }}
            onTouchStart={handleMouseDown}
            >
            {name}
          </div>
        </div>
      </MobileView>
      {/* for pc click */}
      <BrowserView>
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
      </BrowserView>
    </div>
  );
};

export default ListButton;