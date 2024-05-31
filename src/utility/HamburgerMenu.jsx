import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";

export default function HamburgerMenu({ onClick }) {
  return (
    <div className="hamburger dontSbs" onClick={onClick}>
      <RxHamburgerMenu className="hamburger-icon" alt="Hamburger Menu Icon" />
    </div>
  );
}
