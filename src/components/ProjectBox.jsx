import React, { useState } from 'react';
import '../styles/ProjectBox.css';
import portfolioImg from '../asset/Portfolio-ex.png';
import img1 from '../asset/Portfolio-ex.png';
import img2 from '../asset/IMG_4192.PNG';
import img3 from '../asset/IMG_4193.PNG';

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
             <div className="project-cell">
      <img src={img1} alt="img1" className="project-image-vertical" />
      <p>메인 페이지에서는 방문 기록을 확인하고, 제 GitHub로 바로 이동할 수 있습니다.
.</p>
    </div>

 
    <div className="project-cell">
        <img src={img2} alt="img2" className="project-image-vertical" />
        <p>소개 페이지에서는 간단한 자기소개 내용을 확인할 수 있습니다.</p>
 
    </div>


    <div className="project-cell">
      <img src={img3} alt="img3" className="project-image-vertical" />
      <p>프로젝트 페이지에서는 각 프로젝트의 간단한 정보를 확인하고,<br/> 클릭을 통해 상세 내용을 볼 수 있습니다.<br/> 앞으로 프로젝트가 늘어날 때마다 계속 업데이트됩니다.</p>
    
    </div>
            
          </>
        ) : (
          <h2>포트폴리오 사이트</h2>
        )}
      </div>
    </div>
  );
}

export default ProjectBox;