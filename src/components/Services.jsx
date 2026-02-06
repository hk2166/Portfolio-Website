import { motion } from "framer-motion";
import {
  Monitor,
  Cpu,
  Code2,
  Database,
  Globe,
  Smartphone,
  Sparkles,
} from "lucide-react";

const Services = () => {
  const skills = [
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Web Development",
      desc: "Building responsive, user-friendly websites with React, Tailwind CSS, and modern JavaScript frameworks. Clean code and optimized performance.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Robotics & IoT",
      desc: "Hands-on experience with Arduino, sensor integration, and autonomous systems. Designed maze-solving robots with real-time navigation.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Programming",
      desc: "Strong foundation in Python, JavaScript, and data structures. Algorithm design, problem-solving, and competitive programming.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Backend Systems",
      desc: "Developing efficient server-side logic and database schemas. API integration and data management with modern tools.",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "AI & Machine Learning",
      desc: "Exploring artificial intelligence and machine learning to create intelligent systems and predictive models.",
      color: "from-indigo-500 to-purple-500",
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Development",
      desc: "Creating seamless mobile experiences with Android development. Mobile-first design principles across all platforms.",
      color: "from-pink-500 to-rose-500",
    },
  ];

  return (
    <section
      id="services"
      className="section-padding relative overflow-hidden bg-gradient-to-b from-black via-neutral-950 to-black"
    >
      {/* Background decoration */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-neon-green/5 rounded-full blur-3xl"></div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-neon-green/20 text-neon-green text-sm font-semibold mb-6"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Sparkles size={16} />
            What I Do
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-extrabold mb-6">
            My <span className="gradient-text">Expertise</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-transparent via-neon-green to-transparent mx-auto mb-6"></div>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
            Combining technical skills with creative problem-solving to deliver
            high-quality digital solutions
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative p-8 glass-card hover:border-neon-green/30 transition-all duration-500 cursor-pointer overflow-hidden"
            >
              {/* Gradient background on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              ></div>

              <div className="relative z-10">
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${skill.color} bg-opacity-10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 text-white`}
                >
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-white group-hover:text-neon-green transition-colors">
                  {skill.title}
                </h3>
                <p className="text-neutral-400 leading-relaxed group-hover:text-neutral-300 transition-colors">
                  {skill.desc}
                </p>
              </div>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-neon-green/20 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
