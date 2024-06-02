import React, { memo, useCallback } from "react";
import "./Sidebar.css";
import CloseButton from "../../utility/CloseButton";
import { Link } from "react-router-dom";
import yeezyoff from "../../Img/60off.webp";
import { createPortal } from "react-dom";

const Sidebar = ({ handleSidebar, isOpen }) => {
  const handleClose = useCallback(() => {
    handleSidebar();
  }, [handleSidebar]);

  const navigationBar = document.getElementById("navigationBar");
  if (!navigationBar) return null;

  return createPortal(
    <section className={`sidebar-wrapper ${isOpen ? 'open' : ''}`}>
      <div className="sidebar">
        <CloseButton onClick={handleClose} />
        <span className="light-grey">NAVIGATION</span>
        <ul className="sidebar-list">
          <li className="sidebar-item">
            <Link to="/" onClick={handleClose}>
              <p>Home</p>
            </Link>
          </li>
          <li className="sidebar-item">
            <Link to="/Journal/1" onClick={handleClose}>
              <p>Journal</p>
            </Link>
          </li>
          <li className="sidebar-item">
            <p>Favorite</p>
          </li>
          <li className="sidebar-item">
            <p>Sale</p>
          </li>
          <li className="sidebar-item">
            <p>Shop</p>
          </li>
        </ul>
        <div className="yeezy-nav">
          <img src={yeezyoff} alt="60% off" />
        </div>
      </div>
    </section>,
    navigationBar
  );
};

export default memo(Sidebar);

