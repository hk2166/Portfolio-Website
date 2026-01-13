import { motion } from "framer-motion";
import {
  GraduationCap,
  Calendar,
  MapPin,
  Award,
  BookOpen,
  Sparkles,
} from "lucide-react";

const Stats = () => {
  const education = [
    {
      degree: "Bachelor of Science (B.Sc)",
      major: "Computer Science",
      institution: "IIT Madras",
      duration: "2024 - 2028",
      icon: <Sparkles size={24} />,
      current: true,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      degree: "Bachelor of Technology (B.Tech)",
      major: "Computer Science & Engineering",
      institution: "Ajeenkya D.Y. Patil University",
      duration: "2024 - 2028",
      icon: <Award size={24} />,
      current: true,
      gradient: "from-purple-500 to-pink-500",
    },
    {
      degree: "Senior Secondary Education",
      major: "Science Stream",
      institution: "Kala Vidhya Mandir School",
      duration: "2022 - 2024",
      icon: <BookOpen size={24} />,
      current: false,
      gradient: "from-orange-500 to-red-500",
    },
  ];

  const stats = [
    { number: "5+", label: "Projects Completed" },
    { number: "3+", label: "Technologies Mastered" },
    { number: "2", label: "Degrees Pursuing" },
  ];

  return (
    <section
      id="stats"
      className="section-padding relative overflow-hidden bg-black"
    >
      {/* Background decoration */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-neon-green/5 rounded-full blur-3xl"></div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Header & Quote */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-extrabold mb-6">
              My <span className="gradient-text">Education</span>
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-neon-green to-transparent rounded-full mb-8"></div>
            <p className="text-lg text-neutral-400 leading-relaxed mb-10">
              Currently pursuing dual degrees in Computer Science, bridging
              theoretical foundations at IIT Madras with practical engineering
              at ADYPU. This unique path provides comprehensive understanding
              and real-world application.
            </p>

            {/* Stats Cards */}
            <div className="grid grid-cols-3 gap-4 mb-10">
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="glass-card p-6 text-center hover:border-neon-green/30 transition-all"
                >
                  <div className="text-3xl font-black gradient-text mb-2">
                    {stat.number}
                  </div>
                  <p className="text-xs text-neutral-400">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Quote Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="relative p-8 glass-card overflow-hidden group hover:border-neon-green/30 transition-all"
            >
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <GraduationCap size={120} />
              </div>
              <p className="relative z-10 text-lg font-medium italic text-neutral-300">
                "Education is not the learning of facts, but the training of the
                mind to think."
              </p>
              <p className="relative z-10 text-sm text-neutral-500 mt-4">
                — Albert Einstein
              </p>
            </motion.div>
          </motion.div>

          {/* Right Column - Education Timeline */}
          <div className="space-y-6">
            {education.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: idx * 0.15, duration: 0.8 }}
                whileHover={{ scale: 1.02, x: 10 }}
                className="relative p-6 glass-card hover:border-neon-green/30 transition-all group cursor-pointer"
              >
                {/* Gradient accent on left */}
                <div
                  className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${item.gradient} rounded-l-3xl`}
                ></div>

                {item.current && (
                  <motion.span
                    className="absolute top-4 right-4 px-3 py-1 bg-neon-green/10 border border-neon-green/30 text-neon-green text-xs font-bold rounded-full"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    Current
                  </motion.span>
                )}

                <div className="flex gap-6 items-start pl-4">
                  <div
                    className={`p-4 bg-gradient-to-br ${item.gradient} bg-opacity-10 rounded-2xl group-hover:scale-110 transition-transform text-white`}
                  >
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-1 text-white group-hover:text-neon-green transition-colors">
                      {item.degree}
                    </h3>
                    <p className="text-sm font-semibold text-neutral-300 mb-3">
                      {item.major}
                    </p>
                    <div className="flex flex-col gap-2">
                      <p className="text-sm text-neutral-400 flex items-center gap-2">
                        <MapPin size={14} className="text-neon-green" />{" "}
                        {item.institution}
                      </p>
                      <p className="text-sm text-neon-green font-medium flex items-center gap-2">
                        <Calendar size={14} /> {item.duration}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
