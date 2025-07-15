import React from 'react';
import '../App.css';
import '../styles/BackgroundFade.css';

import MainTitle from '../components/MainTitle';
import SubTitle from '../components/SubTitle';
import Description from '../components/Description';
import VisitCounter from '../components/VisitCounter';
import PersonImage from '../components/PersonImage';
import GitHubButton from '../components/GitHubButton';

const Home = () => {
  return (
    <div className="about-container">
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