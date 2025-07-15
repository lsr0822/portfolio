import React from 'react';
import '../styles/AboutBox.css';
import profile from '../asset/IMG_4792_2.jpg';

function AboutBox() {
  return (
    <div className="about-box">
      <h2 className="about-title">About Me</h2>
      <p>Name: LeeSeoRin</p>
      <p>Born:2006</p>
      <p>Gender:female</p>
      <p>study:chosununiversity</p>
      <img src={profile} alt="profile" className="about-image" />
    </div>
  );
}

export default AboutBox;