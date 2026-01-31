import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Instagram,
  Heart,
  ArrowUp,
} from "lucide-react";

import { useMode } from "../context/ModeContext";

const Footer = () => {
  const { mode } = useMode();
  const isRobotics = mode === "robotics";

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    {
      icon: <Github size={20} />,
      href: "https://github.com/hk2166",
      label: "GitHub",
      color: "hover:bg-white hover:text-black",
    },
    {
      icon: <Linkedin size={20} />,
      href: "https://www.linkedin.com/in/hemant9610/",
      label: "LinkedIn",
      color: "hover:bg-blue-500",
    },
    {
      icon: <Instagram size={20} />,
      href: "https://www.instagram.com/_h3mant__/",
      label: "Instagram",
      color: "hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500",
    },
    {
      icon: <Mail size={20} />,
      href: "mailto:9610hemant@gmail.com",
      label: "Email",
      color: isRobotics
        ? "hover:bg-blue-400 hover:text-black"
        : "hover:bg-neon-green hover:text-black",
    },
  ];

  const quickLinks = ["Home", "About", "Skills", "Projects", "Contact"];

  return (
    <footer className="relative bg-gradient-to-b from-black via-neutral-950 to-black pt-20 pb-10 overflow-hidden">
      {/* Background decoration */}
      <div
        className={`absolute top-0 left-1/4 w-96 h-96 ${isRobotics ? "bg-blue-500/5" : "bg-neon-green/5"} rounded-full blur-3xl`}
      ></div>

      <div className="container-custom relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <motion.h2
              className="text-3xl font-bold gradient-text"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              HEMANT
            </motion.h2>
            <p className="text-neutral-400 max-w-md leading-relaxed">
              {isRobotics
                ? "A passionate robotics engineer specialized in autonomous systems, embedded control, and hardware-software integration."
                : "A passionate developer and tech enthusiast specializing in full-stack development, AI systems, and modern web experiences."}
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 glass-card rounded-full text-neutral-400 transition-all ${social.color}`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-lg font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href={
                      link === "Home"
                        ? "/"
                        : link === "Contact"
                          ? "/contact"
                          : `#${link.toLowerCase()}`
                    }
                    className="text-neutral-400 hover:text-neon-green transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-neon-green group-hover:w-4 transition-all duration-300"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-lg font-bold mb-6 text-white">Get in Touch</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:9610hemant@gmail.com"
                  className="text-neutral-400 hover:text-neon-green transition-colors flex items-center gap-3 group"
                >
                  <Mail size={18} className="text-neon-green" />
                  <span className="text-sm">9610hemant@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+919610769080"
                  className="text-neutral-400 hover:text-neon-green transition-colors flex items-center gap-3 group"
                >
                  <Phone size={18} className="text-neon-green" />
                  <span className="text-sm">+91 9610769080</span>
                </a>
              </li>
              <li>
                <div className="text-neutral-400 flex items-center gap-3">
                  <MapPin size={18} className="text-neon-green" />
                  <span className="text-sm">Pune, Maharashtra</span>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-neutral-500 text-sm flex items-center gap-2">
            &copy; {new Date().getFullYear()} HEMANT. Crafted with{" "}
            <Heart size={14} className="text-red-500 inline animate-pulse" />{" "}
            and code
          </p>

          <div className="flex gap-6 items-center">
            {/* Scroll to Top */}
            <motion.button
              onClick={scrollToTop}
              className="p-2 glass-card rounded-full text-neutral-400 hover:text-neon-green hover:border-neon-green/50 transition-all"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Scroll to top"
            >
              <ArrowUp size={18} />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
