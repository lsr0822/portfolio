import React from 'react';
import '../styles/NoticeBoard.css';
import ProjectBox from '../components/ProjectBox'; // ✅ 추가된 박스

function NoticeBoard() {
  return (
    <div id="project" className="notice-wrapper">
      <h1 className="notice-title">PROJECT</h1>
      <ProjectBox /> {/* ✅ 박스 삽입 */}
    </div>
  );
}

export default NoticeBoard;