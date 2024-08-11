import React, { memo, useCallback } from "react";
import Whitesvg1 from "../../assets/whitenike.svg";
import Whitesvg2 from "../../assets/whiteadidas.svg";
import Whitesvg3 from "../../assets/jordan.svg";
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
    <div className={`sidebar-wrapper ${isOpen ? "slideInLeft" : ""}`}>
      
      <div 
      data-lenis-prevent
      className={`sidebar ${isOpen ? "active" : ""}`}>
        <p className="menu">MENU</p>
        <ul className="sidebar-list">
          <CloseButton onClick={handleClose} white={"white"} />
          <li className="sidebar-item">
            <Link to="/" onClick={handleClose}>
              <p className="small shoe-title">Home</p>
            </Link>
            <div className="arrow-svg">
              <svg
                aria-hidden="true"
                focusable="false"
                viewBox="0 0 24 24"
                role="img"
                width="24px"
                height="24px"
                fill="none"
              >
                <path
                  stroke="currentColor"
                  strokeWidth="1.5"
                  d="M8.474 18.966L15.44 12 8.474 5.033"
                ></path>
              </svg>
            </div>
          </li>
          <li className="sidebar-item">
            <Link to="/journal-page" onClick={handleClose}>
              <p className="small shoe-title">Journal</p>
            </Link>
            <div className="arrow-svg">
              <svg
                aria-hidden="true"
                focusable="false"
                viewBox="0 0 24 24"
                role="img"
                width="24px"
                height="24px"
                fill="none"
              >
                <path
                  stroke="currentColor"
                  strokeWidth="1.5"
                  d="M8.474 18.966L15.44 12 8.474 5.033"
                ></path>
              </svg>
            </div>
          </li>
          <li className="sidebar-item">
            <Link to="/sale-page" onClick={handleClose}>
              <p className="small shoe-title">SALE</p>
            </Link>
            <div className="arrow-svg">
              <svg
                aria-hidden="true"
                focusable="false"
                viewBox="0 0 24 24"
                role="img"
                width="24px"
                height="24px"
                fill="none"
              >
                <path
                  stroke="currentColor"
                  strokeWidth="1.5"
                  d="M8.474 18.966L15.44 12 8.474 5.033"
                ></path>
              </svg>
            </div>
          </li>

          <li className="sidebar-item">
            <Link to="/shop" onClick={handleClose}>
              <p className="small shoe-title">SHOP</p>
            </Link>
            <div className="arrow-svg">
              <svg
                aria-hidden="true"
                focusable="false"
                viewBox="0 0 24 24"
                role="img"
                width="24px"
                height="24px"
                fill="none"
              >
                <path
                  stroke="currentColor"
                  strokeWidth="1.5"
                  d="M8.474 18.966L15.44 12 8.474 5.033"
                ></path>
              </svg>
            </div>
          </li>
        </ul>
        <ul className="sponsor-wrapper">
          <li>
            <div aria-label="Jordan" className="brand-link">
            <img src={Whitesvg3} alt="nikesvg" className="flexCenter sponsor"/>
            </div>
          </li>
          <li>
            <div aria-label="Jordan" className="brand-link">
              <img src={Whitesvg1} alt="nikesvg" className="flexCenter sponsor"/>
            </div>
          </li>
          <li>
            <div aria-label="Jordan" className="brand-link">
              <img src={Whitesvg2} alt="nikesvg" className="flexCenter sponsor"/>
            </div>
          </li>
        </ul>
      </div>
    </div>,
    navigationBar
  );
};

export default memo(Sidebar);
