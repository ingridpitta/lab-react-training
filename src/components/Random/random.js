import React from 'react';
import './random.css';

const Random = ({ min, max }) => {
  return (
    <div className="random">
      <h3>{`Random value between ${min} and ${max} => ${parseInt(
        min + Math.random() * (max - min)
      )}`}</h3>
    </div>
  );
};

export default Random;
