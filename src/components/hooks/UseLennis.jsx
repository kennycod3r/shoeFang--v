import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

const useLenis = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    let isDestroyed = false;

    function raf(time) {
      if (!isDestroyed) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
    }

    requestAnimationFrame(raf);

    return () => {
      isDestroyed = true;
      lenis.destroy();
    };
  }, []);
};

export default useLenis;
