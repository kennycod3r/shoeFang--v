import React, { useState } from 'react';
import { IoCloseOutline } from 'react-icons/io5';

const Promo = () => {
  const [show, setShow] = useState(true);

  return (
    <div className={`flexCenter promo-nav ${show ? '' : 'hide'}`}>
      <h1>
        BLACK FRIDAY SALE. 50% <span>OFF OF ALL SELECTED ITEMS</span>
      </h1>
      <div className="x" onClick={() => setShow(!show)}>
        <IoCloseOutline />
      </div>
    </div>
  );
};

export default Promo;