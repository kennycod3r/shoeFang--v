import React from "react";
import '../components/Sidebar/Sidebar.css';

const CloseButton = ({ onClick, white, className }) => (
  <div
    className={`close-button ${className} ${white ? "bagitemclose" : ""}`}
    onClick={onClick}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={white ? "40" : "32"}
      height="50"
      viewBox="0 0 24 24"
      fill={white ? "#fff" : "black"}
      stroke={white ? "#fff" : "currentColor"}
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-x"
    >
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  </div>
);

export default CloseButton;
