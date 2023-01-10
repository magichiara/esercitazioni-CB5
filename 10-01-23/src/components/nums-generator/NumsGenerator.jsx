import React from "react";
import { useState } from "react";
import "./nums-generator.scss";

export const NumsGenerator = () => {
  const [numbers, setNumbers] = useState([]);

  const getRandomNumber = () => {
    if (numbers.length === 6) {
      return;
    }
    setNumbers([...numbers, Math.floor(Math.random() * 99) + 1]);
  };

  return (
    <div className="random-wrapper">
      <div className="random-nums">
        {numbers.map((number) => (
          <h3 key={number}>{number}</h3>
        ))}
      </div>
      <button
        className="random-btn"
        onClick={getRandomNumber}
        disabled={numbers.length === 6}
      >
        GET NUMBERS!
      </button>
    </div>
  );
};
