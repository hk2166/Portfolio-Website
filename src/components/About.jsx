import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FileText,
  Send,
  Code2,
  Brain,
  Rocket,
  GraduationCap,
} from "lucide-react";

const About = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.3 },
    transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
  };

  const staggerContainer = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true },
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  };

  const skills = [
    {
      icon: <Code2 size={24} />,
      label: "Full Stack Development",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Brain size={24} />,
      label: "AI & Machine Learning",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <Rocket size={24} />,
      label: "Robotics & IoT",
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section
      id="about"
      className="section-padding relative overflow-hidden bg-gradient-to-b from-black via-neutral-950 to-black"
    >
      {/* Background decoration */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-neon-green/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-neon-green/5 rounded-full blur-3xl"></div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl font-extrabold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-transparent via-neon-green to-transparent mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div variants={fadeInUp}>
              <h3 className="text-3xl md:text-4xl font-bold mb-6 flex items-center gap-3">
                <span className="neon-text text-4xl">👋</span>
                <span className="gradient-text">Hello!</span>
              </h3>
              <p className="text-lg text-neutral-300 leading-relaxed whitespace-pre-line">
                I'm <span className="text-white font-semibold">Hemant</span>, a
                Computer Science student pursuing my degree from{" "}
                <span className="text-neon-green font-semibold">
                  IIT Madras
                </span>{" "}
                and B.Tech from{" "}
                <span className="text-neon-green font-semibold">
                  Ajeenkya D.Y. Patil University
                </span>{" "}
                (2024-2028).
              </p>
            </motion.div>

            <motion.p
              variants={fadeInUp}
              className="text-lg text-neutral-400 leading-relaxed"
            >
              My expertise spans{" "}
              <span className="text-white">
                web development, robotics, and AI systems
              </span>
              . I've built autonomous robots, developed full-stack applications,
              and explored the frontiers of machine learning. I'm passionate
              about creating technology that makes a real impact.
            </motion.p>

            {/* Info Cards */}
            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4"
            >
              <motion.div
                variants={fadeInUp}
                className="glass-card p-6 hover:border-neon-green/30 transition-all"
              >
                <p className="text-sm font-medium text-neutral-500 mb-2">
                  Current Focus
                </p>
                <p className="font-bold text-white">AI & Autonomous Systems</p>
              </motion.div>
              <motion.div
                variants={fadeInUp}
                className="glass-card p-6 hover:border-neon-green/30 transition-all"
              >
                <div className="flex items-center gap-2 mb-2">
                  <GraduationCap size={16} className="text-neon-green" />
                  <p className="text-sm font-medium text-neutral-500">
                    Education
                  </p>
                </div>
                <p className="font-bold text-white">IIT Madras & ADYPU</p>
              </motion.div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap gap-4 pt-6"
            >
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <motion.button
                  className="btn-primary inline-flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FileText size={20} /> Download Resume
                </motion.button>
              </a>
              <Link to="/contact">
                <motion.button
                  className="btn-glass inline-flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Send size={20} /> Get in Touch
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column - Skills */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: [0.6, -0.05, 0.01, 0.99] }}
            className="space-y-6"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                whileHover={{ scale: 1.03, x: 10 }}
                className="glass-card p-8 hover:border-neon-green/30 transition-all cursor-pointer group"
              >
                <div className="flex items-center gap-6">
                  <div
                    className={`p-4 rounded-2xl bg-gradient-to-br ${skill.color} bg-opacity-10 text-white group-hover:scale-110 transition-transform`}
                  >
                    {skill.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-white group-hover:text-neon-green transition-colors">
                      {skill.label}
                    </h4>
                    <div className="mt-3 h-2 bg-neutral-800 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${skill.color}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: "90%" }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 + 0.5, duration: 1 }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Floating Badge */}
            <motion.div
              className="glass-card p-6 text-center"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="text-5xl font-black gradient-text mb-2">5+</div>
              <p className="text-neutral-400 font-medium">Projects Completed</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
