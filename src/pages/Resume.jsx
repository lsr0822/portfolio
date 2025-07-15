import React from 'react';
import CenterLine from '../components/CenterLine';
import AboutBox from '../components/AboutBox';
import '../styles/CenterLine.css';
import '../styles/AboutBox.css';

function Resume() {
  return (
    <div className="second-section" style={{ position: 'relative', height: '100vh', backgroundColor: 'black' }}>
      <CenterLine />
      <AboutBox />
    </div>
  );
}

export default Resume;