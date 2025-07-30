// components/LoadingSpinner.js
import React from "react";
import "../Styles/LoadingSpinner.css";

const LoadingSpinner = () => {
  return (
    <div className="loading-overlay">
      <div className="spinner-container">
        <div className="spinner-logo">Portfolio</div>
        <div className="spinner"></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
