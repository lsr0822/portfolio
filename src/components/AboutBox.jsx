import React from 'react';
import profileImg from '../asset/IMG_6680.JPG';
import { FaJs, FaHtml5, FaPython, FaGithub, FaDiscord } from 'react-icons/fa';
import { SiC, SiNotion } from 'react-icons/si';

import '../styles/AboutBox.css';

function AboutBox() {
  return (
    <div id="about" className="about-wrapper">
      <div className="about-content">
        <div className="left-block">
          <div className="about-left">
            <h1 className="about-title">ABOUT<br/> ME</h1>
            <p className="about-description">Name: Lee Seorin</p>
            <p className="about-description">Born: 2006</p>
            <p className="about-description">Gender: Female</p>
            <p className="about-description">Study: Chosun University</p>
            <p className="about-description">
              Hobby: <a href="https://www.instagram.com/rini._.0310" target="_blank" rel="noreferrer">drawing</a>
            </p>
          </div>
          <img src={profileImg} alt="Profile" className="about-image" />
        </div>

        <div className="right-block">
          <h2 className="section-title">SKILL & TOOLS</h2>
          <div className="icon-group">
            <SiC size={32} />
            <FaJs size={32} />
            <FaHtml5 size={32} />
            <FaPython size={32} />
            
          </div>
          <div className="icon-group">
            <SiNotion size={32} />
            <FaDiscord size={32} />
            <FaGithub size={32} />
          </div>
          <h2 className="section-title">LICENSE</h2>
          <p className="license-text">태권도 4단 (국기원 공인)<br />취득일: 2021.02.28</p>
          <p className="license-text">합기도 1단 / 대한합기도협회</p>
        </div>
      </div>
    </div>
  );
}

export default AboutBox;