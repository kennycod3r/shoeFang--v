import React from "react";

const Bluepointer = () => {
  return (
    <div className="bcircle">
      <div className="arrow-content">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <polyline
            points="18 8 18 18 8 18"
            fill="none"
            stroke="#fff"
            strokeMiterlimit="10"
            width="25px"
            height="25px"
          ></polyline>
          <line
            x1="18"
            y1="18"
            x2="5"
            y2="5"
            fill="#fff"
            stroke="#fff"
            strokeMiterlimit="10"
          ></line>
        </svg>{" "}
      </div>
    </div>
  );
};

export default Bluepointer;
