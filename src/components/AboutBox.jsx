import React from 'react';
import profileImg from '../asset/IMG_6680.JPG';
import '../styles/AboutBox.css';

function AboutBox() {
  return (
    <div className="about-wrapper">
      <div className="about-content">
        <div className="about-left">
          <h1 className="about-title">ABOUT<br/> ME</h1>
          <p className="about-description">Name: Lee Seorin</p>
          <p className="about-description">Born: 2006</p>
          <p className="about-description">Gender: Female</p>
          <p className="about-description">Study: Chosun University</p>
          <p className="about-description">
            Hobby: <a href="https://www.instagram.com/rini._.0310" target="_blank" rel="noreferrer">Instagram</a>
          </p>
        </div>
        <img src={profileImg} alt="Profile" className="about-image" />
      </div>
    </div>
  );
}

export default AboutBox;