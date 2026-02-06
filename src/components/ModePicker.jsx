import { motion, AnimatePresence } from "framer-motion";
import { Code2, Cpu, ArrowRight } from "lucide-react";
import { useMode } from "../context/ModeContext";

export function ModePicker() {
  const { mode, setMode } = useMode();

  if (mode) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] bg-black flex items-center justify-center"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Background effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-green/5 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse-slow" />
        </div>

        <div className="relative z-10 w-full max-w-4xl mx-auto px-6">
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

          {/* Mode Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Dev Card */}
            <motion.button
              onClick={() => setMode("dev")}
              className="group relative p-8 md:p-10 glass-card text-left hover:border-neon-green/40 transition-all duration-500 cursor-pointer overflow-hidden"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              whileHover={{ scale: 1.03, y: -5 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-neon-green/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-0 right-0 w-32 h-32 bg-neon-green/10 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

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

            {/* Robotics Card */}
            <motion.button
              onClick={() => setMode("robotics")}
              className="group relative p-8 md:p-10 glass-card text-left hover:border-blue-400/40 transition-all duration-500 cursor-pointer overflow-hidden"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              whileHover={{ scale: 1.03, y: -5 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-500/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Cpu className="w-8 h-8 text-blue-400" />
                </div>

                <h2 className="text-2xl md:text-3xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">
                  Robotics
                </h2>

                <p className="text-neutral-400 leading-relaxed mb-6 group-hover:text-neutral-300 transition-colors">
                  Autonomous systems, IoT projects, Arduino builds, and
                  hardware-software integration.
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {["Arduino", "IoT", "Sensors", "Autonomous"].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium bg-neutral-900 text-neutral-300 rounded-full border border-white/5"
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
