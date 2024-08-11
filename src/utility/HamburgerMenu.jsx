import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import '../components/HeadText/HeadText.css';

export default function HamburgerMenu({ onClick }) {
  return (
    <div className="hamburger" onClick={onClick}>
      <RxHamburgerMenu className="hamburger-icon" alt="Hamburger Menu Icon" />
    </div>
  );
}
