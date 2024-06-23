import React from "react";
import "./Loading.css";

const Loading = () => {
  return (
    <div className="loading-container">
      <div className="loading-screen">
        <div className="head-text lsht">
          <h3>ShoeFang</h3>
        </div>
        <div className="spinner"></div>
      </div>
    </div>
  );
};

export default Loading;
