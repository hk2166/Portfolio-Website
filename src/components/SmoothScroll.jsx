import { useEffect } from "react";
import Lenis from "lenis";
import { useMode } from "../context/ModeContext";

export function SmoothScroll({ children }) {
  const { mode } = useMode();

  useEffect(() => {
    if (!mode) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      smoothTouch: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, [mode]);

  return <>{children}</>;
}
