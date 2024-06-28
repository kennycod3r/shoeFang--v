import React, { useState, useEffect, useCallback } from "react";

const BackToTop = ({ lenis }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = useCallback(() => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, []);

  const scrollToTop = useCallback(() => {
    if (lenis) {
      lenis.scrollTo(0, { duration: 1 });
    } else {
      window.scrollTo({
        top: 0,
      });
    }
  }, [lenis]);

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, [toggleVisibility]);

  return (
    <div className="back-to-top">
      {isVisible && (
        <div onClick={scrollToTop} className="back-to-top-button">
          ↑
        </div>
      )}
    </div>
  );
};

export default BackToTop;
