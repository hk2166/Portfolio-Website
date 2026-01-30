import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Cpu, ArrowRight, ChevronDown } from "lucide-react";
import { useMode } from "../context/ModeContext";

export function ModePicker() {
  const { mode, setMode } = useMode();
  const [showSpline, setShowSpline] = useState(false);
  const cardsRef = useRef(null);

  useEffect(() => {
    if (!mode) {
      const timer = setTimeout(() => setShowSpline(true), 1500);
      return () => clearTimeout(timer);
    }
  }, [mode]);

  const scrollToCards = () => {
    cardsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  if (mode) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] overflow-y-auto"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Section 1: Full viewport iframe video */}
        <div className="relative h-screen w-full">
          {/* Spline 3D Background */}
          <div className="absolute inset-0 z-0">
            <iframe
              src="https://my.spline.design/zoomglasscopycopy-9WRVQRBTc0D5gaI7WRzdRx7q-o0v/"
              frameBorder="0"
              width="100%"
              height="100%"
              style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
            />
          </div>

          {/* Scroll indicator at bottom */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
            <motion.button
              onClick={scrollToCards}
              className="flex flex-col items-center gap-2 cursor-pointer text-neutral-400 hover:text-white transition-colors"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <span className="text-sm font-medium tracking-wide uppercase">
                Scroll to choose your side
              </span>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <ChevronDown className="w-6 h-6" />
              </motion.div>
            </motion.button>
          </div>
        </div>

        {/* Section 2: Choice cards */}
        <div
          ref={cardsRef}
          className="relative min-h-screen bg-black flex flex-col items-center justify-center px-6 py-16"
        >
          <div className="w-full max-w-5xl">
            {/* Header */}
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.p
                className="text-lg md:text-xl text-neutral-400"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Choose which side of my work you'd like to explore
              </motion.p>
            </motion.div>

            {/* Mode Cards with Divider */}
            <div className="flex flex-col md:flex-row items-stretch gap-0 mb-4">
              {/* Dev Card */}
              <motion.button
                onClick={() => setMode("dev")}
                className="group relative flex-1 p-6 md:p-10 glass-card text-left hover:border-neon-green/40 transition-all duration-500 cursor-pointer overflow-hidden md:rounded-r-none"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
                whileHover={{ scale: 1.02, y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                {showSpline && (
                  <div className="absolute inset-0 z-0 opacity-40 animate-fade-in group-hover:opacity-70 transition-opacity duration-700">
                    <spline-viewer
                      url="https://prod.spline.design/pIES2o0DsQ9jJMlD/scene.splinecode"
                      style={{
                        width: "100%",
                        height: "100%",
                        display: "block",
                      }}
                    />
                  </div>
                )}

                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-neon-green/20 to-neon-green/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Code2 className="w-7 h-7 text-neon-green" />
                  </div>

                  <h2 className="text-xl md:text-2xl font-bold mb-2 text-white group-hover:text-neon-green transition-colors">
                    Developer
                  </h2>

                  <p className="text-neutral-400 text-sm leading-relaxed mb-4 group-hover:text-neutral-300 transition-colors">
                    Full-stack web development, AI projects, mobile apps, and
                    creative coding solutions.
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {["React", "Python", "AI/ML", "Full Stack"].map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs font-medium bg-neutral-900 text-neutral-300 rounded-full border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 text-neon-green font-semibold text-sm">
                    Explore
                    <ArrowRight
                      size={16}
                      className="group-hover:translate-x-2 transition-transform"
                    />
                  </div>
                </div>
              </motion.button>

              {/* Divider */}
              <motion.div
                className="relative flex items-center justify-center"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <div className="md:hidden w-full h-px relative my-4">
                  <div className="absolute inset-0 bg-gradient-to-r from-neon-green/40 via-neutral-600/30 to-blue-400/40" />
                  <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 top-1/2 px-3 py-1 text-xs font-bold text-neutral-500 uppercase tracking-widest">
                    or
                  </div>
                </div>
                <div className="hidden md:block w-px h-full relative mx-4">
                  <div className="absolute inset-0 bg-gradient-to-b from-neon-green/40 via-neutral-600/30 to-blue-400/40" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-2 py-3 text-xs font-bold text-neutral-500 uppercase tracking-widest [writing-mode:vertical-lr]">
                    or
                  </div>
                </div>
              </motion.div>

              {/* Robotics Card */}
              <motion.button
                onClick={() => setMode("robotics")}
                className="group relative flex-1 p-6 md:p-10 glass-card text-left hover:border-blue-400/40 transition-all duration-500 cursor-pointer overflow-hidden md:rounded-l-none"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.7 }}
                whileHover={{ scale: 1.02, y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                {showSpline && (
                  <div className="absolute inset-0 z-0 opacity-40 animate-fade-in group-hover:opacity-70 transition-opacity duration-700">
                    <spline-viewer
                      url="https://prod.spline.design/T5g-jjNSVOMpcKmN/scene.splinecode"
                      style={{
                        width: "100%",
                        height: "100%",
                        display: "block",
                      }}
                    />
                  </div>
                )}

                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-500/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Cpu className="w-7 h-7 text-blue-400" />
                  </div>

                  <h2 className="text-xl md:text-2xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">
                    Robotics
                  </h2>

                  <p className="text-neutral-300 text-sm leading-relaxed mb-4 group-hover:text-neutral-200 transition-colors">
                    Autonomous systems, IoT projects, Arduino builds, and
                    hardware-software integration.
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {["Arduino", "IoT", "Sensors", "Autonomous"].map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs font-medium bg-black/60 text-neutral-300 rounded-full border border-white/10 backdrop-blur-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 text-blue-400 font-semibold text-sm">
                    Explore
                    <ArrowRight
                      size={16}
                      className="group-hover:translate-x-2 transition-transform"
                    />
                  </div>
                </div>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
