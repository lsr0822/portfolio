import React, { useEffect, useState } from 'react';
import './App.css';
import background1 from './asset/IMG_4167.PNG';
import background2 from './asset/IMG_4168.PNG';
import person from './asset/IMG_4165.PNG';
import profile from './asset/IMG_4792_2.jpg';
import CenterLine from './components/CenterLine';
import './styles/CenterLine.css';

function App() {
  const [visitCount, setVisitCount] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const storedCount = localStorage.getItem('visitCount');
    const newCount = storedCount ? parseInt(storedCount) + 1 : 1;
    localStorage.setItem('visitCount', newCount);
    setVisitCount(newCount);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const opacity = Math.min(scrollY / window.innerHeight, 1);

  return (
    <>
      <div className="background-layer">
        <img src={background1} alt="bg1" className="bg-image bg1" />
        <img src={background2} alt="bg2" className="bg-image bg2" style={{ opacity }} />
      </div>

      <div className="content-section">
        <h1 className="main-text">PORTFOLIO</h1>
        <h2 className="sub-text">Front-End</h2>
        <p className="name-text">
          My name is LeeSeoRin,<br />
          and I am an aspiring front-end developer.
        </p>

        <p className="visit-count">
          visited this site <strong>{visitCount}</strong> times.
        </p>

        <img src={person} alt="person" className="person-image" />

        <a
          href="https://github.com/lsr0822"
          target="_blank"
          rel="noopener noreferrer"
          className="github-button"
        >
          <img
            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
            alt="GitHub Logo"
            className="github-logo"
          />
          View on GitHub
        </a>
      </div>

      <div className="second-section" style={{ position: 'relative' }}>
        <CenterLine />
      </div>
    </>
  );
}

export default App;