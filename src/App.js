import React, { useEffect, useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import background1 from './asset/IMG_4167.PNG';
import background2 from './asset/IMG_4168.PNG';
import background3 from './asset/IMG_4173.PNG';
import background4 from './asset/IMG_4174.PNG';
import person from './asset/IMG_4165.PNG';
import Resume from './pages/Resume';
import NoticeBoard from './pages/Project';
import Extra from './pages/Extra';

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

  const vh = window.innerHeight;
  const opacity2 = Math.min(scrollY / vh, 1);
  const opacity3 = Math.min(Math.max((scrollY - vh) / vh, 0), 1);
 const opacity4 = Math.min(Math.max((scrollY - 1.5 * vh) / vh, 0), 1);

  return (
    <>
      <div className="background-layer">
        <img src={background1} alt="bg1" className="bg-image" style={{ opacity: 1 }} />
        <img src={background2} alt="bg2" className="bg-image" style={{ opacity: opacity2 }} />
        <img src={background3} alt="bg3" className="bg-image" style={{ opacity: opacity3 }} />
        <img src={background4} alt="bg4" className="bg-image" style={{ opacity: opacity4 }} />
      </div>

      <div className="scroll-sections">
        <section id="home" className="content-section">
          <h1 className="main-text">PORTFOLIO</h1>
          <h2 className="sub-text">Front-End</h2>
          <p className="name-text">
            “If you can code, you can sit down and make something,<br />
            and no one can stop you.”<br />— Mark Zuckerberg —
          </p>
          <p className="visit-count"><strong>{visitCount}</strong> visits</p>
          <img src={person} alt="person" className="person-image" />
          <a href="https://github.com/lsr0822" target="_blank" rel="noopener noreferrer" className="github-button">
            Git Hub
          </a>
        </section>

        <section id="about" className="content-section"><Resume /></section>
        <section id="project" className="content-section"><NoticeBoard /></section>
        <section id="extra" className="content-section"><Extra /></section>
      </div>

      <NavBar />
    </>
  );
}

export default App;