import React from 'react';
import './App.css';
import background from './asset/IMG_4167.PNG';
import person from './asset/IMG_4165.PNG';

function App() {
  return (
    <div className="about-container">
      <img src={background} alt="background" className="background-image" />
      <h1 className="main-text">PORTFOLIO</h1>
      <h2 className="sub-text">Front-End</h2>
      <img src={person} alt="person" className="person-image" />
    </div>
  );
}

export default App;