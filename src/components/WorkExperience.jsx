import { motion } from "framer-motion";
import { useMode } from "../context/ModeContext";
import { Briefcase, Calendar, BookOpen } from "lucide-react";

const workExperienceData = [
  {
    id: 1,
    company: "The Montage & Aesthetics",
    position: "UI & Frontend Developer Intern",
    duration: "May 2025 - Aug 2025",
    logo: "/public/ma.jpeg",
    learnings: [
      "React.js and modern frontend architecture",
      "Responsive design with Tailwind CSS", 
      "SEO optimization and performance best practices",
      "Team collaboration and agile development workflows"

    ],
    color: "#3B82F6"
  },
  {
    id: 2,
    company: "Unstop",
    position: "Campus Ambassador",
    duration: "Aug 2025 - Current",
    logo: "https://d8it4huxumps7.cloudfront.net/uploads/images/unstop/branding-guidelines/icon/unstop-icon-800x800.png",
    learnings: [
        "Brand promotion and community engagement",
        "Event organization and marketing strategies",
        "Social media management and content creation",
        "Networking with industry professionals"
    ],
    color: "black"
  }
];

const WorkExperience = () => {
  const { mode } = useMode();
  
  if (mode !== "dev") return null;

  return (
    <section
      id="experience"
      className="section-padding relative overflow-hidden bg-gradient-to-b from-black via-neutral-950 to-black"
    >
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-neon-green/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-neon-green/5 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <motion.div
          className="text-center mb-16"
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
            <Briefcase size={16} />
            Work Experience
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-extrabold mb-6">
            <span className="gradient-text">JOURNEY</span>
          </h2>
          <p className="text-neutral-500 text-lg">
            Professional experiences that shaped my development skills
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {workExperienceData.map((experience, index) => (
            <motion.div
              key={experience.id}
              className="group relative p-6 md:p-8 rounded-3xl glass-card border border-white/10 hover:border-neon-green/30 transition-all duration-500"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(135deg, ${experience.color}, transparent)`
                }}
              />

              <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-6">
                <motion.div
                  className="flex-shrink-0"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <div
                    className="w-20 h-20 rounded-2xl shadow-lg border border-white/10 overflow-hidden"
                    style={{ backgroundColor: experience.color }}
                  >
                    <img
                      src={experience.logo}
                      alt={experience.company}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>

                <div className="flex-1 space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">
                      {experience.position}
                    </h3>
                    <div className="flex items-center gap-4 text-neutral-400">
                      <span className="text-lg font-semibold" style={{ color: experience.color }}>
                        {experience.company}
                      </span>
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        <span className="text-sm">{experience.duration}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <BookOpen size={18} style={{ color: experience.color }} />
                      <span className="font-semibold text-white">Key Learnings</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {experience.learnings.map((learning, learningIndex) => (
                        <motion.div
                          key={learningIndex}
                          className="flex items-center gap-2 text-neutral-300"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: index * 0.1 + learningIndex * 0.1 }}
                        >
                          <div
                            className="w-2 h-2 rounded-full"
                            style={{ backgroundColor: experience.color }}
                          />
                          <span className="text-sm">{learning}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;