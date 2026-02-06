import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useMode } from "../context/ModeContext";

const SPLINE_URLS = {
  dev: "https://prod.spline.design/pIES2o0DsQ9jJMlD/scene.splinecode",
  robotics: "https://prod.spline.design/T5g-jjNSVOMpcKmN/scene.splinecode",
};

export function SplineBackground() {
  const { mode } = useMode();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (mode) {
      const timer = setTimeout(() => setMounted(true), 300);
      return () => clearTimeout(timer);
    }
    setMounted(false);
  }, [mode]);

  if (!mode) return null;

  const url = SPLINE_URLS[mode];

  return (
    <AnimatePresence>
      {mounted && (
        <motion.div
          key={mode}
          className="fixed inset-0 z-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.25 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
        >
          <spline-viewer
            url={url}
            style={{
              width: "100%",
              height: "100%",
              display: "block",
            }}
          />
          {/* Overlay to darken and tint */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
