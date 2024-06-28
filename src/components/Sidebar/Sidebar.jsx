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
        <CloseButton onClick={handleClose} white={"white"} />
        <p className="menu">MENU</p>
        <ul className="sidebar-list">
          <li className="sidebar-item">
            <Link to="/" onClick={handleClose}>
              <p>Home</p>
            </Link>
          </li>
          <li className="sidebar-item">
            <Link to="/Journal" onClick={handleClose}>
              <p>Journal</p>
            </Link>
          </li>
          <li className="sidebar-item">
            <Link to="/Sale" onClick={handleClose}>
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
            <span>X</span>
            <span>INSTAGRAM</span>
          </li>
          <li>
            <span>CONTACT</span>
            <span>DISCOUNT</span>
          </li>
        </ul>
      </div>
    </div>,
    navigationBar
  );
};

export default memo(Sidebar);
