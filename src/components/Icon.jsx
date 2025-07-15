import React from 'react';
import myPhoto from './asset/IMG_4792 2.jpg';
function Icon() {
  return (
    <div className="center-container">
      <img src={myPhoto} alt="My Photo" className="center-logo" />
    </div>
  );
}

export default Icon;