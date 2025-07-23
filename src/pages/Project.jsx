import React from 'react';
import '../styles/NoticeBoard.css';
import ProjectBox from '../components/ProjectBox'; 

function NoticeBoard() {
  return(
  <div>
    <h1 className="notice-title">PROJECT</h1>
    <div id="project" className="notice-wrapper">
      <ProjectBox /> 
      <ProjectBox /> 
    </div>
  </div> 
  );
}

export default NoticeBoard;