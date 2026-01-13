import { motion } from "framer-motion";
import { Github, ExternalLink, ArrowRight } from "lucide-react";

const projectsData = [
  {
    id: 1,
    title: "Sahayak - AI Teaching Assistant",
    description:
      "AI-driven teaching assistant for multi-grade classrooms with speech assessment, multilingual chatbot, and interactive visual aids.",
    image: "/sahayak.jpeg",
    tags: ["React", "AI/ML", "Vercel", "Speech Recognition"],
    github: "https://github.com/hk2166/Sahayak",
    demo: "https://sahayak-hazel.vercel.app/",
    gradient: "from-blue-500/20 to-purple-500/20",
  },
  {
    id: 2,
    title: "FinTrack - Finance Manager",
    description:
      "Responsive web app for personal finance management with expense tracking, categorization, and financial trend visualization.",
    image: "/Fintrack.jpeg",
    tags: ["React", "Tailwind", "Finance", "Data Viz"],
    github: "https://github.com/hk2166/Fintrack.git",
    demo: "https://fintrack-peach.vercel.app/",
    gradient: "from-green-500/20 to-emerald-500/20",
  },
  {
    id: 3,
    title: "Awaken - Space Education",
    description:
      "Interactive educational platform exploring astronomy and black holes with multimedia visualizations and engaging content.",
    image: "/project-3.jpeg",
    tags: ["HTML", "CSS", "JavaScript", "Education"],
    demo: "https://hk2166.github.io/SNWproject-CODEVENGERS-/",
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    id: 4,
    title: "SplitBuddy - Expense Splitter",
    description:
      "Android app simplifying expense splitting among friends with intuitive UI for calculating shares and generating summaries.",
    image: "/Splitbuddy.jpeg",
    tags: ["Java", "Android", "XML", "Finance"],
    demo: "https://drive.google.com/file/d/19kevxFwEun7sER4YOMhImfAbyp45-f9Q/view",
    gradient: "from-orange-500/20 to-red-500/20",
  },
];

const Projects = () => {
  const containerVariants = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true },
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  };

  const cardVariants = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
  };

  return (
    <section
      id="projects"
      className="section-padding relative overflow-hidden bg-black"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-neon-green/5 rounded-full blur-3xl"></div>

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
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-transparent via-neon-green to-transparent mx-auto mb-6"></div>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
            A curated selection of my recent work in web development, AI, and
            mobile applications
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projectsData.map((project, idx) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              className="focus-card group"
            >
              {/* Project Image */}
              <div className="relative aspect-video overflow-hidden rounded-t-3xl">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10`}
                ></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay with buttons */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6 gap-3 z-20">
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 glass-card rounded-full text-white hover:text-neon-green hover:border-neon-green/50 transition-colors"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Github size={20} />
                    </motion.a>
                  )}
                  {project.demo && (
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 glass-card rounded-full text-white hover:text-neon-green hover:border-neon-green/50 transition-colors"
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ExternalLink size={20} />
                    </motion.a>
                  )}
                </div>
              </div>

              {/* Project Info */}
              <div className="glass-card rounded-b-3xl p-6 border-t-0">
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-neon-green transition-colors">
                  {project.title}
                </h3>
                <p className="text-neutral-400 leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-3 py-1 text-xs font-medium bg-neutral-900 text-neutral-300 rounded-full border border-white/5 hover:border-neon-green/30 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* View Project Link */}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-neon-green font-semibold hover:gap-3 transition-all group/link"
                  >
                    View Project
                    <ArrowRight
                      size={16}
                      className="group-hover/link:translate-x-1 transition-transform"
                    />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Projects CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <a
            href="https://github.com/hk2166"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button
              className="btn-glass inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All on GitHub
              <Github size={20} />
            </motion.button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
