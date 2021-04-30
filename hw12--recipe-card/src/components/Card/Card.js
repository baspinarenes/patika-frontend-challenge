import React from 'react';
import './Card.css';

const Card = ({ author, title, date, img, desc, likeCount, isLiked }) => {
  return (
    <div className="card">
      <div className="card-header">
        <div className="profile">
          <span className="letter">{author[0]}</span>
        </div>
        <div className="card-title-group">
          <h5 className="card-title">{title}</h5>
          <div className="card-date">{date}</div>
        </div>
      </div>
      <img src={img} alt="" className="card-image" />
      <div className="card-text">{desc}</div>
      <div className="card-like-bar">
        {isLiked ? (
          <button className="card-like-btn">
            <i className="card-like-icon fas fa-heart"></i>
          </button>
        ) : (
          <button className="card-like-btn">
            <i className="far fa-heart"></i>
          </button>
        )}
        <div className="like-text">
          <b>{likeCount}</b> kişi bu tarifi beğendi.
        </div>
      </div>
    </div>
  );
};

export default Card;
