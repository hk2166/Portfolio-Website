// Project Data
const projectsData = [
  {
    id: 1,
    title: "Sahayak - AI Teaching Assistant",
    description:
      "Developed an AI-driven teaching assistant for multi-grade, low-resource classrooms. Implemented speech assessment, multilingual chatbot, quizzes, worksheet generator, and visual aids.",
    image: "/sahayak.jpeg",
    tags: ["React", "AI/ML", "Vercel", "Speech Recognition"],
    github: "https://github.com/hk2166/Sahayak",
    demo: "https://sahayak-hazel.vercel.app/",
  },
  {
    id: 2,
    title: "FinTrack - Personal Finance Tracker",
    description:
      "Built a responsive web app for personal finance management. Developed using React.js with intuitive tools to track expenses, categorize transactions, and visualize financial trends.",
    image: "/Fintrack.jpeg",
    tags: ["React", "Figma", "Finance"],
    github: "https://github.com/hk2166/Fintrack.git",
    demo: "https://fintrack-peach.vercel.app/",
  },
  {
    id: 3,
    title: "Awaken - Space Education Platform",
    description:
      "Created an educational platform exploring astronomy, galaxies, and black holes with interactive content and multimedia. Features engaging visualizations and educational videos.",
    image: "/project-3.jpeg",
    tags: ["HTML", "CSS", "JavaScript"],
    demo: "https://hk2166.github.io/SNWproject-CODEVENGERS-/",
  },
  {
    id: 4,
    title: "SplitBuddy - Expense Splitter App",
    description:
      "Built an Android app to simplify expense splitting among friends. Features intuitive UI for adding expenses, calculating shares, and generating summaries.",
    image: "/Splitbuddy.jpeg",
    tags: ["Java", "Android", "XML"],
    demo: "https://drive.google.com/file/d/19kevxFwEun7sER4YOMhImfAbyp45-f9Q/view",
  },
];

// Projects Component
const Projects = () => {
  return (
    <section id="projects">
      <div className="container">
        <h2 className="section-heading" data-outline="Projects">
          Projects
        </h2>
        <p className="section-subtitle">
          Explore my latest work and innovations
        </p>

        <div className="all-projects">
          {projectsData.map((project) => (
            <div key={project.id} className="item">
              <div className="img">
                <img src={project.image} alt={project.title} />
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>

                <div className="tech-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="tech-tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  {project.github && (
                    <a
                      href={project.github}
                      className="external-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>GitHub</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  )}

                  {project.demo && (
                    <a
                      href={project.demo}
                      className="external-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>Live Demo</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
