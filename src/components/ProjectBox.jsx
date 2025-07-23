import React, { useState } from 'react';
import '../styles/ProjectBox.css';
import portfolioImg from '../asset/Portfolio-ex.png';

function ProjectBox() {
  const [clicked, setClicked] = useState(false);

    const handleClick = () => {
    setClicked(prev => !prev); 
  };

  return (
    <div className={`project-box ${clicked ? 'clicked' : ''}`} onClick={handleClick}>
      <div className="project-img">
        <img src={portfolioImg} alt="Portfolio" />
      </div>
      <div className={`project-content ${clicked ? 'scrollable' : ''}`}>
        {clicked ? (
          <>
            <h2>포트폴리오 사이트</h2>
            <h3>📍 주요 기능 및 특징</h3>
            <p>-메인 화면에서 github 바로가기<br/>
               -방문 횟수 기록<br/>
               -스크롤시 화면 색상 변환<br/>
               -메인-소개 - 프로젝트 - 순으로 표시<br/>
               -프로젝트 클릭 시 상세한 정보 표시</p>
            <h3>🛠️ 사용 기술 및 언어</h3>
            <p>-Js<br/>-css</p>
            
          </>
        ) : (
          <h2>포트폴리오 사이트</h2>
        )}
      </div>
    </div>
  );
}

export default ProjectBox;