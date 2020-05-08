import React from 'react';
import './boxColor.css';

const BoxColor = ({ r, g, b }) => {
  return (
    <div className="boxColor" style={{backgroundColor: `rgb(${r},${g},${b})`}}>
      <h3>{`rgb(${r},${g},${b})`}</h3>
    </div>
  );
};

export default BoxColor;
