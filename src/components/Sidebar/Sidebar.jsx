import React, { memo, useCallback } from "react";
import "./Sidebar.css";
import CloseButton from "../../utility/CloseButton";
import { Link } from "react-router-dom";
import { createPortal } from "react-dom";

const Sidebar = ({ handleSidebar, isOpen }) => {
  const handleClose = useCallback(() => {
    handleSidebar();
  }, [handleSidebar]);

  const navigationBar = document.getElementById("navigationBar");
  if (!navigationBar) return null;

  return createPortal(
    <div
      data-lenis-prevent
      className={`sidebar-wrapper ${isOpen ? "slideInLeft" : ""}`}
    >
      <div className={`sidebar`}>
        <p className="menu">MENU</p>
        <ul className="sidebar-list">
        <CloseButton onClick={handleClose} white={"white"} />
          <li className="sidebar-item">
            <Link to="/" onClick={handleClose}>
              <p>Home</p>
            </Link>
          </li>
          <li className="sidebar-item">
            <Link to="/journal-page" onClick={handleClose}>
              <p>Journal</p>
            </Link>
          </li>
          <li className="sidebar-item">
            <Link to="/sale-page" onClick={handleClose}>
              <p>SALE</p>
            </Link>
          </li>

          <li className="sidebar-item">
            <p>Shop</p>
          </li>
        </ul>
        <ul className="bottom-sidebar flexCenter">
          <li>
            <p>SOCIALS</p>
            <span>X/Kenny.lj</span>
            <span>INSTAGRAM</span>
          </li>
          <li>
            <span>CONTACT</span>
            <span>oguntolakenny6@gmail.com</span>
          </li>
        </ul>
      </div>
    </div>,
    navigationBar
  );
};

export default memo(Sidebar);
