import React, { memo, useCallback } from 'react';
import './Sidebar.css';
import CloseButton from '../../utility/CloseButton';
import { Link } from 'react-router-dom';
import yeezyoff from '../../Img/60off.webp';

const Sidebar = ({ handleSidebar }) => {
  const handleClose = useCallback(() => {
    handleSidebar();
  }, [handleSidebar]);

  return (
    <section className="sidebar">
      <CloseButton onClick={handleClose} />
      <ul className="sidebar-list">
        <li className="sidebar-item">
          <Link to="/" onClick={handleClose}>Home</Link>
        </li>
        <li className="sidebar-item">
          <Link to="/Journal/1">Journal</Link>
        </li>
        <li className="sidebar-item">
          Favorite
        </li>
        <li className="sidebar-item">
          Sale
        </li>
        <li className="sidebar-item">
          Shop
        </li>
      </ul>
      <div className="yeezy-nav">
        <img src={yeezyoff} alt="60% off" />
      </div>
    </section>
  );
};

export default memo(Sidebar);
