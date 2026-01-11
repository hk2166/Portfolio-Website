import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wide mb-6">
              Available for Projects
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
              Hi, I'm <span className="gradient-text">HEMANT</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-secondary)] mb-8">
              CS Student & Full Stack Developer
            </h2>
            <p className="text-lg text-[var(--text-secondary)] mb-10 max-w-xl leading-relaxed">
              Specializing in web development, robotics, and AI. I build autonomous systems, 
              full-stack applications, and innovative solutions that bridge hardware and software.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-12">
              <a 
                href="#projects" 
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-xl font-bold transition-all transform hover:-translate-y-1 shadow-lg shadow-primary/20"
              >
                See My Work <ArrowRight size={20} />
              </a>
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-2 bg-white dark:bg-slate-900 border border-[var(--border-color)] hover:border-primary px-8 py-4 rounded-xl font-bold transition-all transform hover:-translate-y-1"
              >
                Get in Touch
              </Link>
            </div>

            <div className="flex gap-6 items-center">
              <span className="text-sm font-medium text-[var(--text-light)]">Follow Me:</span>
              <div className="flex gap-4">
                {[
                  { icon: <Github size={20} />, href: "#" },
                  { icon: <Linkedin size={20} />, href: "#" },
                  { icon: <Mail size={20} />, href: "#" }
                ].map((social, idx) => (
                  <a 
                    key={idx}
                    href={social.href}
                    className="p-2 text-[var(--text-secondary)] hover:text-primary hover:bg-primary/5 rounded-lg transition-colors"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative hidden lg:block"
            >
              <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl animate-pulse"></div>
              
              <div className="relative z-10 w-full h-full rounded-3xl overflow-hidden border-2 border-white/20 shadow-2xl">
                <img 
                  src="/profile.jpg" 
                  alt="Hemant's profile" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating cards */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-8 top-1/4 glass-morphism p-4 rounded-2xl shadow-xl z-20"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white">
                    🚀
                  </div>
                  <div>
                    <p className="text-xs text-[var(--text-light)]">Passionate</p>
                    <p className="text-sm font-bold">Developer</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -left-8 bottom-1/4 glass-morphism p-4 rounded-2xl shadow-xl z-20"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white">
                    🤖
                  </div>
                  <div>
                    <p className="text-xs text-[var(--text-light)]">Innovating</p>
                    <p className="text-sm font-bold">AI & Robotics</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
