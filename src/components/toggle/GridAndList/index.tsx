import React, { useState } from 'react';
import './index.style.scss';

const GridAndListToggle = () => {
  const [isActive, setIsActive] = useState(false);
  const _handleClick = () => {
    setIsActive(!isActive);
  };
  return (
    <button
      type="button"
      className={`grid-list animation ${isActive && 'active'}`}
      onClick={_handleClick}
    >
      <div className="icon">
        <div className="dots">
          <i />
          <i />
          <i />
          <i />
        </div>
        <div className="lines">
          <i />
          <i />
          <i />
          <i />
        </div>
      </div>
      <div className="text">
        <span>Grid</span>
        <span>List</span>
      </div>
    </button>
  );
};

export default GridAndListToggle;
