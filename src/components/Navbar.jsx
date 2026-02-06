import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Code2, Cpu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useMode } from "../context/ModeContext";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { mode, setMode } = useMode();

  const isRobotics = mode === "robotics";

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 20);

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { name: "Home", to: "/#hero" },
    { name: "About", to: "/#about" },
    { name: "Skills", to: "/#services" },
    { name: "Projects", to: "/#projects" },
    { name: "Contact", to: "/contact" },
  ];

  const toggleMode = () => {
    setMode(isRobotics ? "dev" : "robotics");
  };

  if (!mode) return null;

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: isHidden ? -100 : 0 }}
      transition={{ duration: 0.3 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-nav py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="relative z-10">
          <motion.h1
            className="text-2xl md:text-3xl font-bold gradient-text"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            HEMANT
          </motion.h1>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-2 glass-card px-6 py-3 rounded-full">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {link.to.startsWith("/#") ? (
                <a
                  href={link.to}
                  className="relative px-4 py-2 text-sm font-medium text-neutral-300 hover:text-white transition-colors group"
                >
                  {link.name}
                  <span
                    className={`absolute bottom-0 left-1/2 w-0 h-0.5 ${isRobotics ? "bg-blue-400" : "bg-neon-green"} transition-all duration-300 group-hover:w-full group-hover:left-0`}
                  ></span>
                </a>
              ) : (
                <Link
                  to={link.to}
                  className="relative px-4 py-2 text-sm font-medium text-neutral-300 hover:text-white transition-colors group"
                >
                  {link.name}
                  <span
                    className={`absolute bottom-0 left-1/2 w-0 h-0.5 ${isRobotics ? "bg-blue-400" : "bg-neon-green"} transition-all duration-300 group-hover:w-full group-hover:left-0`}
                  ></span>
                </Link>
              )}
            </motion.div>
          ))}
        </div>

        {/* Right side: Mode Toggle + Let's Talk */}
        <div className="hidden md:flex items-center gap-3">
          {/* Mode Toggle */}
          <motion.button
            onClick={toggleMode}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold transition-all border ${
              isRobotics
                ? "border-blue-400/30 text-blue-400 hover:bg-blue-400/10"
                : "border-neon-green/30 text-neon-green hover:bg-neon-green/10"
            } glass-card`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isRobotics ? (
              <>
                <Code2 size={16} />
                Switch to Dev
              </>
            ) : (
              <>
                <Cpu size={16} />
                Switch to Robotics
              </>
            )}
          </motion.button>

          <Link to="/contact">
            <motion.button
              className={isRobotics ? "bg-blue-500 text-black font-bold px-8 py-4 rounded-full transition-all hover:bg-blue-400" : "btn-primary"}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Talk
            </motion.button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`md:hidden p-2 text-white ${isRobotics ? "hover:text-blue-400" : "hover:text-neon-green"} transition-colors`}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-card mt-4 mx-4 rounded-3xl overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) =>
                link.to.startsWith("/#") ? (
                  <a
                    key={link.name}
                    href={link.to}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-lg font-medium text-neutral-300 hover:text-white transition-colors py-2"
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    key={link.name}
                    to={link.to}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-lg font-medium text-neutral-300 hover:text-white transition-colors py-2"
                  >
                    {link.name}
                  </Link>
                ),
              )}

              {/* Mobile Mode Toggle */}
              <button
                onClick={() => {
                  toggleMode();
                  setIsMobileMenuOpen(false);
                }}
                className={`flex items-center gap-2 py-2 text-lg font-medium transition-colors ${
                  isRobotics ? "text-blue-400" : "text-neon-green"
                }`}
              >
                {isRobotics ? (
                  <>
                    <Code2 size={20} />
                    Switch to Dev
                  </>
                ) : (
                  <>
                    <Cpu size={20} />
                    Switch to Robotics
                  </>
                )}
              </button>

              <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                <button
                  className={`w-full mt-4 ${isRobotics ? "bg-blue-500 text-black font-bold px-8 py-4 rounded-full" : "btn-primary"}`}
                >
                  Let's Talk
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
