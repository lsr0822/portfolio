import React from 'react';
import '../App.css';

import BackgroundImage from '../components/BackgroundImage'
import { MainTitle, SubTitle } from '../components/Title';
import Description from '../components/Description';
import VisitCounter from '../components/VisitCounter';
import PersonImage from '../components/PersonImage';
import GitHubButton from '../components/GitHubButton';

const Home = () => {
  return (
    <div className="about-container">
      <BackgroundImage />
      <MainTitle />
      <SubTitle />
      <Description />
      <VisitCounter />
      <PersonImage />
      <GitHubButton />
    </div>
  );
};

export default Home;