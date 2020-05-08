import React from 'react';
import './idCard.css';

const IdCard = ({ lastname, firstname, gender, height, birth, picture }) => {
  return (
    <div className="idCard">
      <img src={picture} alt="picture--image" />
      <div>
        <h3>
          <span>Firstname:</span> {firstname}
        </h3>
        <h3>
          <span>Lastname:</span> {lastname}
        </h3>
        <h3>
          <span>Gender:</span> {gender}
        </h3>
        <h3>
          <span>Height:</span> {height}
        </h3>
      </div>
      <h3>
        <span>Birth:</span> {birth}
      </h3>
    </div>
  );
};

export default IdCard;
