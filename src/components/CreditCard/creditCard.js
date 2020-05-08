import React from 'react';
import './creditCard.css';

const CreditCard = ({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color
}) => {
  return (
    <div
      className="creditCard"
      style={{ backgroundColor: bgColor, color: color }}
    >
      <h3>{type}</h3>
      <h2>{number}</h2>
      <div className="creditCard--date">
        <h3>{`Expires ${expirationMonth}/${expirationYear}`}</h3>
        <h3>{bank}</h3>
      </div>
      <h3>{owner}</h3>
    </div>
  );
};

export default CreditCard;
