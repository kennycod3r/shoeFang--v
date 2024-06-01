import React, { useState, useCallback } from 'react';
import { IoCloseOutline } from 'react-icons/io5';

const Promo = React.memo(() => {
  const [show, setShow] = useState(true);

  const handleToggle = useCallback(() => {
    setShow(prevState => !prevState);
  }, []);

  return (
    <div className={show ? 'flexCenter promo-nav' : 'hide'}>
      <h1>
        BLACK FRIDAY SALE. 50% <span>OFF OF ALL SELECTED ITEMS</span>
      </h1>
      <div className="x" onClick={handleToggle}>
        <IoCloseOutline />
      </div>
    </div>
  );
});

export default Promo;
