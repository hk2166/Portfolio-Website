import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";

const Stats = () => {
  const education = [
    {
      degree: "Bachelor of Science (BS)",
      major: "Computer Science",
      institution: "IIT Madras",
      duration: "2024 - 2028",
      icon: <GraduationCap size={24} />,
      current: true
    },
    {
      degree: "Bachelor of Technology (B.Tech)",
      major: "Computer Science & Engineering",
      institution: "Ajeenkya D.Y. Patil University",
      duration: "2024 - 2028",
      icon: <Award size={24} />,
      current: true
    },
    {
      degree: "Senior Secondary Education",
      major: "Science",
      institution: "Kala Vidhya Mandir School",
      duration: "Completed",
      icon: <MapPin size={24} />,
      current: false
    }
  ];

  return (
    <section id="stats" className="section-padding bg-[var(--bg-secondary)]">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
              My <span className="gradient-text">Education</span> Journey
            </h2>
            <div className="w-20 h-1.5 bg-primary rounded-full mb-8"></div>
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-10">
              I am currently pursuing dual degrees in Computer Science, bridging the gap 
              between theoretical foundations at IIT Madras and practical engineering 
              applications at ADYPU. This unique educational path allows me to develop 
              a comprehensive understanding of the field.
            </p>
            
            <div className="relative p-8 rounded-3xl glass-morphism overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <GraduationCap size={120} />
              </div>
              <p className="relative z-10 text-xl font-medium italic text-[var(--text-primary)]">
                "Learning is a lifelong process of keeping your mind open and your skills sharp."
              </p>
            </div>
          </motion.div>

          <div className="space-y-6">
            {education.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative p-6 rounded-2xl bg-white dark:bg-slate-900 border border-[var(--border-color)] hover:border-primary transition-all group"
              >
                {item.current && (
                  <span className="absolute top-4 right-4 px-3 py-1 bg-green-500/10 text-green-500 text-xs font-bold rounded-full">
                    Current
                  </span>
                )}
                <div className="flex gap-6 items-start">
                  <div className="p-4 bg-primary/10 text-primary rounded-2xl group-hover:bg-primary group-hover:text-white transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                      {item.degree}
                    </h3>
                    <p className="text-sm font-semibold text-[var(--text-primary)] mb-2">
                      {item.major}
                    </p>
                    <div className="flex flex-col gap-1">
                      <p className="text-sm text-[var(--text-secondary)] flex items-center gap-2">
                        <MapPin size={14} /> {item.institution}
                      </p>
                      <p className="text-sm text-primary font-medium flex items-center gap-2">
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
