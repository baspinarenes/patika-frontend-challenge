import React, { useState, useEffect } from 'react';

function Time() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  let options = { year: 'numeric', month: 'numeric', day: 'numeric' };
  const dateFormatted = time.toLocaleTimeString('tr-TR', options).slice(0, -9);
  const timeFormatted = time.toLocaleTimeString('tr-TR', options).slice(-8);

  return <div className="date">{`${dateFormatted} ${timeFormatted}`}</div>;
}

export default Time;
