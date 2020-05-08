import React from 'react';
import './greetings.css';

const Greetings = ({ lang, children }) => {
  return (
    <div>
      {
        {
          de: <h3>{`Hallo ${children}`}</h3>,
          fr: <h3>{`Bonjour ${children}`}</h3>
        }[lang]
      }
    </div>
  );
};

export default Greetings;
