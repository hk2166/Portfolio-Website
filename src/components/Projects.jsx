import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, Code2 } from "lucide-react";

const projectsData = [
  {
    id: 1,
    title: "Sahayak - AI Teaching Assistant",
    description:
      "Developed an AI-driven teaching assistant for multi-grade, low-resource classrooms. Implemented speech assessment, multilingual chatbot, and visual aids.",
    image: "/sahayak.jpeg",
    tags: ["React", "AI/ML", "Vercel", "Speech"],
    github: "https://github.com/hk2166/Sahayak",
    demo: "https://sahayak-hazel.vercel.app/",
  },
  {
    id: 2,
    title: "FinTrack - Finance Tracker",
    description:
      "Built a responsive web app for personal finance management. Track expenses, categorize transactions, and visualize financial trends.",
    image: "/Fintrack.jpeg",
    tags: ["React", "Figma", "Finance", "Tailwind"],
    github: "https://github.com/hk2166/Fintrack.git",
    demo: "https://fintrack-peach.vercel.app/",
  },
  {
    id: 3,
    title: "Awaken - Space Education",
    description:
      "Educational platform exploring astronomy and black holes with interactive content and multimedia visualizations.",
    image: "/project-3.jpeg",
    tags: ["HTML", "CSS", "JavaScript", "Edu"],
    demo: "https://hk2166.github.io/SNWproject-CODEVENGERS-/",
  },
  {
    id: 4,
    title: "SplitBuddy - Expense Splitter",
    description:
      "Android app to simplify expense splitting among friends. Features intuitive UI for calculating shares and summaries.",
    image: "/Splitbuddy.jpeg",
    tags: ["Java", "Android", "XML", "Finance"],
    demo: "https://drive.google.com/file/d/19kevxFwEun7sER4YOMhImfAbyp45-f9Q/view",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-[var(--bg-primary)]">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            A selection of my recent work in web development, AI, and mobile applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projectsData.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative glass-morphism rounded-3xl overflow-hidden border border-[var(--border-color)] hover:border-primary transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10"
            >
              <div className="aspect-video overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                  <div className="flex gap-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/20 backdrop-blur-md rounded-xl text-white hover:bg-primary transition-colors"
                      >
                        <Github size={20} />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/20 backdrop-blur-md rounded-xl text-white hover:bg-primary transition-colors"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary/5 text-primary text-xs font-bold rounded-lg border border-primary/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
                  {project.description}
                </p>
                <div className="flex items-center gap-2 text-sm font-bold text-primary">
                  <Code2 size={16} />
                  <span>View Details</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a
            href="https://github.com/hk2166"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 dark:bg-white dark:text-blue-900 text-white rounded-xl font-bold hover:bg-primary dark:hover:bg-primary dark:hover:text-white transition-all shadow-lg"
          >
            <Github size={24} /> View All on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
