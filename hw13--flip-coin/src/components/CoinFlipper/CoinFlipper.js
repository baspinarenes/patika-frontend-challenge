import React, { useState } from 'react';
import Coin from '../Coin/Coin';
import './CoinFlipper.css';

const CoinFlipper = (props) => {
  const [side, setSide] = useState('head');
  const [flipping, setFlipping] = useState(false);
  const [stats, setStats] = useState({ tail: 0, head: 0 });

  const clickHandle = () => {
    setFlipping(true);

    const sides = ['tail', 'head'];
    const randomSide = sides[Math.floor(Math.random() * sides.length)];
    console.log(randomSide);
    setSide(randomSide);

    setTimeout(() => {
      setFlipping(false);

      if (randomSide === 'tail') {
        setStats({ ...stats, tail: ++stats['tail'] });
      } else {
        setStats({ ...stats, head: ++stats['head'] });
      }
    }, 500);
  };

  return (
    <div className="coin-flipper">
      <h1>Coin Flip</h1>
      <Coin side={side} flipping={flipping} />
      <button onClick={clickHandle}>At!</button>
      <p>
        <br />
        <strong>{stats['tail'] + stats['head']}</strong> flip
        <br />
        <strong>{stats['head']}</strong> head
        <br />
        <strong>{stats['tail']}</strong> tail
      </p>
    </div>
  );
};

export default CoinFlipper;
