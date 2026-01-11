import React from "react";
import { motion } from "framer-motion";
import { Monitor, Cpu, Code2, Database, Globe, Smartphone } from "lucide-react";

const Services = () => {
  const skills = [
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Web Development",
      desc: "Proficient in HTML5, CSS3, JavaScript, and modern frameworks like React. Building responsive, user-friendly websites with clean code and optimized performance.",
      color: "bg-blue-500/10 text-blue-500"
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Robotics & Embedded",
      desc: "Hands-on experience with Arduino, sensor integration, and autonomous systems. Designed and built maze-solving robots with real-time navigation.",
      color: "bg-purple-500/10 text-purple-500"
    },
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Programming",
      desc: "Strong foundation in Python and data structures. Experience with algorithm design, problem-solving, and competitive programming.",
      color: "bg-green-500/10 text-green-500"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Backend Systems",
      desc: "Developing efficient server-side logic and database schemas. Experience with API integration and data management.",
      color: "bg-orange-500/10 text-orange-500"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Cloud Solutions",
      desc: "Familiar with cloud platforms and deployment workflows. Ensuring high availability and scalability for web applications.",
      color: "bg-cyan-500/10 text-cyan-500"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Friendly",
      desc: "Prioritizing mobile-first design principles. Creating seamless experiences across all devices and screen sizes.",
      color: "bg-pink-500/10 text-pink-500"
    }
  ];

  return (
    <section id="services" className="section-padding bg-white dark:bg-slate-950">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            My <span className="gradient-text">Expertise</span>
          </h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            Combining technical skills with creative problem-solving to deliver high-quality digital solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group p-8 rounded-3xl bg-white dark:bg-slate-900 border border-[var(--border-color)] hover:border-primary transition-all duration-300 hover:shadow-2xl hover:shadow-primary/5"
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 duration-300 ${skill.color}`}>
                {skill.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                {skill.title}
              </h3>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                {skill.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
