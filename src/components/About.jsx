import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FileText, Send, GraduationCap, Code, Rocket } from "lucide-react";

const About = () => {
  const skills = [
    { icon: <Code size={20} />, label: "Full Stack Dev" },
    { icon: <Rocket size={20} />, label: "Robotics & AI" },
    { icon: <GraduationCap size={20} />, label: "CS Fundamentals" },
  ];

  return (
    <section id="about" className="section-padding bg-[var(--bg-secondary)]">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <span className="text-primary text-3xl">Hi!</span> I'm Hemant
              </h3>
              <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                Currently pursuing a Bachelor's degree in Computer Science from
                <span className="font-semibold text-[var(--text-primary)]"> IIT Madras</span> and B.Tech from 
                <span className="font-semibold text-[var(--text-primary)]"> Ajeenkya D.Y. Patil University</span> (2024-2028).
              </p>
            </div>

            <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
              My expertise spans web development, robotics, and embedded systems. 
              I've successfully built autonomous robots, developed full-stack web applications, 
              and participated in competitive coding events. I'm passionate about leveraging 
              technology to solve real-world problems and continuously expanding my skill set 
              in emerging technologies.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-white dark:bg-slate-900/50 border border-[var(--border-color)]">
                <p className="text-sm font-medium text-[var(--text-light)] mb-1">Current Focus</p>
                <p className="font-bold">AI & Autonomous Systems</p>
              </div>
              <div className="p-4 rounded-2xl bg-white dark:bg-slate-900/50 border border-[var(--border-color)]">
                <p className="text-sm font-medium text-[var(--text-light)] mb-1">Education</p>
                <p className="font-bold">IIT Madras & ADYPU</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="/resume.pdf"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-primary/20"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FileText size={20} /> Open Resume
              </a>
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-2 bg-white dark:bg-slate-900 border border-[var(--border-color)] hover:border-primary px-8 py-4 rounded-xl font-bold transition-all"
              >
                <Send size={20} /> Contact Me
              </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <div className="grid grid-cols-1 gap-6">
              {skills.map((skill, idx) => (
                <div 
                  key={idx} 
                  className="group flex items-center gap-6 p-6 rounded-3xl glass-morphism border border-[var(--border-color)] hover:border-primary transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    {React.cloneElement(skill.icon, { size: 32 })}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">{skill.label}</h4>
                    <p className="text-sm text-[var(--text-secondary)]">
                      {idx === 0 && "Building responsive and scalable web applications."}
                      {idx === 1 && "Developing intelligent systems and autonomous robots."}
                      {idx === 2 && "Strong foundation in data structures and algorithms."}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
