import React from 'react';
import '../styles/NavBar.css';

function NavBar() {
  return (
    <div className="navbar">
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#project">Project</a>
      <a href="#notice-board">Notice Board</a>
    </div>
  );
}

export default NavBar;