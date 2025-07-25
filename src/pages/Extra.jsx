import React, { useEffect, useState } from 'react';
import '../styles/Extra.css';
import img4 from '../asset/IMG_4174.PNG';

function Extra() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const opacity = Math.min(scrollY / 500, 1);
  const gradient = `linear-gradient(rgba(0, 0, 0, ${opacity}), rgba(0, 0, 0, ${opacity})), url(${img4})`;

  return (
    <div id="notice-board" className="extra-page" style={{ backgroundImage: gradient }}>
     
    </div>
  );
}

export default Extra;