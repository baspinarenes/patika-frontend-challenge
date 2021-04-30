import React from 'react';
import './Coin.css';
import CoinHead from '../../assets/coin-head.png';
import CoinTail from '../../assets/coin-tail.png';

const Coin = (props) => {
  return (
    <div className="coin-container">
      <div className={`coin ${props.flipping ? 'coin-rotate' : ''}`}>
        <img
          src={CoinHead}
          className={props.side === 'tail' ? 'coin-back' : 'coin-front'}
          alt=""
        />
        <img
          src={CoinTail}
          className={props.side === 'tail' ? 'coin-front' : 'coin-back'}
          alt=""
        />
      </div>
    </div>
  );
};

export default Coin;
