import React from "react";
import arrowUp from '../assets/arrowUp.svg';
import '../App.css';

const Bluepointer = () => {
  return (
    <div className="bcircle">
      <div className="arrow-content">
        <img src={arrowUp} alt="arrow-link"/>
      </div>
    </div>
  );
};

export default Bluepointer;
