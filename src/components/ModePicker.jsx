import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Cpu, ArrowRight } from "lucide-react";
import { useMode } from "../context/ModeContext";

export function ModePicker() {
  const { mode, setMode } = useMode();
  const [showSpline, setShowSpline] = useState(false);

  useEffect(() => {
    if (!mode) {
      const timer = setTimeout(() => setShowSpline(true), 1500);
      return () => clearTimeout(timer);
    }
  }, [mode]);

  if (mode) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] bg-black flex items-center justify-center"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
        >
          {/* Spline 3D Name Background */}
          <div className="absolute inset-0 z-0">
            <iframe
              src="https://my.spline.design/zoomglasscopycopy-9WRVQRBTc0D5gaI7WRzdRx7q-o0v/"
              frameBorder="0"
              width="100%"
              height="100%"
              style={{ position: "absolute", inset: 0 }}
            />
            {/* Overlay to keep content readable */}
            <div className="absolute inset-0 bg-black/50" />
          </div>

        <div className="relative z-10 w-full max-w-5xl mx-auto px-6">
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1
              className="text-4xl md:text-6xl font-extrabold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Hi, I'm <span className="gradient-text">HEMANT</span>
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-neutral-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Choose which side of my work you'd like to explore
            </motion.p>
          </motion.div>

          {/* Mode Cards with Divider */}
          <div className="flex flex-col md:flex-row items-stretch gap-0">
            {/* Dev Card */}
              <motion.button
                onClick={() => setMode("dev")}
                className="group relative flex-1 p-8 md:p-10 glass-card text-left hover:border-neon-green/40 transition-all duration-500 cursor-pointer overflow-hidden md:rounded-r-none"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                whileHover={{ scale: 1.02, y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
              {/* Spline 3D Background - lazy loaded, interactive */}
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

                  {/* Overlay gradient to keep text readable */}
                  <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-green-900/30 z-[1] pointer-events-none" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-[1] pointer-events-none" />

                <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-neon-green/20 to-neon-green/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Code2 className="w-8 h-8 text-neon-green" />
                </div>

                <h2 className="text-2xl md:text-3xl font-bold mb-3 text-white group-hover:text-neon-green transition-colors">
                  Developer
                </h2>

                <p className="text-neutral-400 leading-relaxed mb-6 group-hover:text-neutral-300 transition-colors">
                  Full-stack web development, AI projects, mobile apps, and
                  creative coding solutions.
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {["React", "Python", "AI/ML", "Full Stack"].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium bg-neutral-900 text-neutral-300 rounded-full border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2 text-neon-green font-semibold">
                  Explore
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-2 transition-transform"
                  />
                </div>
              </div>
            </motion.button>

            {/* Vertical Divider (desktop) / Horizontal Divider (mobile) */}
            <motion.div
              className="relative flex items-center justify-center"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              {/* Mobile horizontal line */}
              <div className="md:hidden w-full h-px relative my-6">
                <div className="absolute inset-0 bg-gradient-to-r from-neon-green/60 via-white/30 to-blue-400/60" />
                <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 top-1/2 bg-black px-3 py-1 text-xs font-bold text-neutral-500 uppercase tracking-widest">
                  or
                </div>
              </div>
              {/* Desktop vertical line */}
              <div className="hidden md:block w-px h-full relative mx-6">
                <div className="absolute inset-0 bg-gradient-to-b from-neon-green/60 via-white/30 to-blue-400/60" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black px-2 py-3 text-xs font-bold text-neutral-500 uppercase tracking-widest [writing-mode:vertical-lr]">
                  or
                </div>
              </div>
            </motion.div>

            {/* Robotics Card with Spline background */}
            <motion.button
              onClick={() => setMode("robotics")}
              className="group relative flex-1 p-8 md:p-10 glass-card text-left hover:border-blue-400/40 transition-all duration-500 cursor-pointer overflow-hidden md:rounded-l-none"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              whileHover={{ scale: 1.02, y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
                {/* Spline 3D Background - lazy loaded, interactive */}
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

                {/* Overlay gradient to keep text readable */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-blue-900/30 z-[1] pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-[1] pointer-events-none" />

              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-500/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Cpu className="w-8 h-8 text-blue-400" />
                </div>

                <h2 className="text-2xl md:text-3xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">
                  Robotics
                </h2>

                <p className="text-neutral-300 leading-relaxed mb-6 group-hover:text-neutral-200 transition-colors">
                  Autonomous systems, IoT projects, Arduino builds, and
                  hardware-software integration.
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {["Arduino", "IoT", "Sensors", "Autonomous"].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium bg-black/60 text-neutral-300 rounded-full border border-white/10 backdrop-blur-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2 text-blue-400 font-semibold">
                  Explore
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-2 transition-transform"
                  />
                </div>
              </div>
            </motion.button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
