import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import { useMode } from "../context/ModeContext";

const modeContent = {
  dev: {
    title: "Full-Stack Developer & AI Enthusiast",
    description:
      "Crafting immersive digital experiences at the intersection of design, development, and artificial intelligence. Specializing in full-stack applications, creative web solutions, and AI-powered tools.",
    badge: "Available for Projects",
  },
  robotics: {
    title: "Robotics Engineer & IoT Builder",
    description:
      "Building autonomous systems and intelligent hardware at the intersection of electronics and software. Specializing in sensor integration, real-time navigation, and embedded systems.",
    badge: "Building the Future",
  },
};

const Hero = () => {
  const { mode } = useMode();
  const content = modeContent[mode] || modeContent.dev;
  const name = "HEMANT";

  const letterVariants = {
    initial: { opacity: 0, y: 50 },
    animate: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 150,
        damping: 25,
      },
    }),
  };

  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
    >
      {/* Animated SVG Background Paths */}
      <div className="absolute inset-0 mask-gradient pointer-events-none">
        <svg
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop
                offset="0%"
                stopColor={mode === "robotics" ? "#3b82f6" : "#39ff14"}
                stopOpacity="0.1"
              />
              <stop
                offset="100%"
                stopColor={mode === "robotics" ? "#3b82f6" : "#39ff14"}
                stopOpacity="0"
              />
            </linearGradient>
          </defs>
          <motion.path
            d="M 0,100 Q 250,50 500,100 T 1000,100"
            stroke="url(#gradient)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.3 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          <motion.path
            d="M 0,200 Q 250,150 500,200 T 1000,200"
            stroke="url(#gradient)"
            strokeWidth="1.5"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.2 }}
            transition={{ duration: 2.5, delay: 0.2, ease: "easeInOut" }}
          />
        </svg>
      </div>

      {/* Decorative gradient orb */}
      <div className="absolute right-0 top-0 w-1/2 h-full hidden lg:block opacity-40 pointer-events-none">
        <div
          className={`absolute top-1/3 right-1/4 w-64 h-64 ${mode === "robotics" ? "bg-blue-500/10" : "bg-neon-green/10"} rounded-full blur-3xl animate-pulse-slow`}
        />
        <div
          className={`absolute top-1/2 right-1/3 w-48 h-48 ${mode === "robotics" ? "bg-blue-500/5" : "bg-neon-green/5"} rounded-full blur-2xl animate-float`}
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={containerVariants}
            initial="initial"
            animate="animate"
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div variants={itemVariants}>
              <span
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border ${mode === "robotics" ? "border-blue-400/20 text-blue-400" : "border-neon-green/20 text-neon-green"} text-sm font-semibold`}
              >
                <Sparkles size={16} className="animate-pulse" />
                {content.badge}
              </span>
            </motion.div>

            {/* Animated Name */}
            <div className="overflow-hidden">
              <motion.h1 className="text-6xl md:text-8xl font-extrabold leading-none tracking-tight">
                <span className="block text-neutral-400 text-2xl md:text-3xl mb-2">
                  Hi, I'm
                </span>
                <div className="flex">
                  {name.split("").map((letter, index) => (
                    <motion.span
                      key={index}
                      custom={index}
                      variants={letterVariants}
                      initial="initial"
                      animate="animate"
                      className="inline-block gradient-text text-shadow-glow"
                    >
                      {letter}
                    </motion.span>
                  ))}
                </div>
              </motion.h1>
            </div>

            {/* Subtitle */}
            <motion.div variants={itemVariants}>
              <h2 className="text-2xl md:text-4xl font-bold text-neutral-300 leading-tight">
                {content.title}
              </h2>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-neutral-400 leading-relaxed max-w-2xl"
            >
              {content.description}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 pt-4"
            >
              <a href="/#projects" className="group">
                <motion.button
                  className={`${mode === "robotics" ? "bg-blue-500 hover:bg-blue-400 text-black" : "btn-primary"} px-8 py-4 font-bold rounded-full inline-flex items-center gap-2 transition-all`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View My Work
                  <ArrowRight
                    size={20}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </motion.button>
              </a>
              <Link to="/contact">
                <motion.button
                  className="btn-glass inline-flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Let's Connect
                </motion.button>
              </Link>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-6 pt-6 border-t border-white/5"
            >
              <span className="text-sm font-medium text-neutral-500">
                Follow Me
              </span>
              <div className="flex gap-3">
                {[
                  {
                    icon: <Github size={20} />,
                    href: "https://github.com/hk2166",
                    label: "GitHub",
                  },
                  {
                    icon: <Linkedin size={20} />,
                    href: "https://www.linkedin.com/in/hemant9610/",
                    label: "LinkedIn",
                  },
                  {
                    icon: <Mail size={20} />,
                    href: "mailto:9610hemant@gmail.com",
                    label: "Email",
                  },
                ].map((social, idx) => (
                  <motion.a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 glass-card rounded-full text-neutral-400 ${mode === "robotics" ? "hover:text-blue-400 hover:border-blue-400/50" : "hover:text-neon-green hover:border-neon-green/50"} transition-colors`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right side - Decorative element for mobile */}
          <div className="relative lg:hidden mt-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="relative w-full max-w-md mx-auto aspect-square"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${mode === "robotics" ? "from-blue-500/20" : "from-neon-green/20"} to-transparent rounded-full blur-3xl animate-pulse-slow`}
              ></div>
              <div
                className={`relative glass-card rounded-full p-8 border-2 ${mode === "robotics" ? "border-blue-400/20" : "border-neon-green/20"}`}
              >
                <div className="w-full h-full rounded-full bg-gradient-to-br from-neutral-900 to-black flex items-center justify-center">
                  <Sparkles
                    size={64}
                    className={`${mode === "robotics" ? "text-blue-400" : "text-neon-green"} animate-pulse`}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 2,
          duration: 1,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <div className="w-6 h-10 border-2 border-neutral-700 rounded-full flex justify-center pt-2">
          <motion.div
            className={`w-1.5 h-2 ${mode === "robotics" ? "bg-blue-400" : "bg-neon-green"} rounded-full`}
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
