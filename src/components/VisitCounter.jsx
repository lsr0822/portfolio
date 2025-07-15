import React, { useEffect, useState } from 'react';

const VisitCounter = () => {
  const [visitCount, setVisitCount] = useState(0);

  useEffect(() => {
    const storedCount = localStorage.getItem('visitCount');
    const newCount = storedCount ? parseInt(storedCount, 10) + 1 : 1;
    localStorage.setItem('visitCount', newCount);
    setVisitCount(newCount);
  }, []);

  return (
    <p className="visit-count">
      visited this site <strong>{visitCount}</strong> times.
    </p>
  );
};

export default VisitCounter;