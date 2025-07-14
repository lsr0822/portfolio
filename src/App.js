import React, { useEffect, useState } from 'react';
import './App.css';
import background from './asset/IMG_4167.PNG';
import person from './asset/IMG_4165.PNG';

function App() {
  const [visitCount, setVisitCount] = useState(0);

  useEffect(() => {
    const storedCount = localStorage.getItem('visitCount');
    const newCount = storedCount ? parseInt(storedCount) + 1 : 1;
    localStorage.setItem('visitCount', newCount);
    setVisitCount(newCount);
  }, []);

  return (
    <div className="about-container">
      <img src={background} alt="background" className="background" />

      <h1 className="main-text">PORTFOLIO</h1>
      <h2 className="sub-text">Front-End</h2>

      <p className="name-text">
        My name is LeeSeoRin,<br />
        and I am an aspiring front-end developer.
      </p>

      {/* 방문 횟수 출력용 새 클래스 */}
      <p className="visit-count">
        visited this site <strong>{visitCount}</strong> times.
      </p>

      <img src={person} alt="person" className="person-image" />
    </div>
  );
}

export default App;