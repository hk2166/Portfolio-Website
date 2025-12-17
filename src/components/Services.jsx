import React from "react";

const Services = () => {
  return (
    <section id="services">
      <div className="container">
        <h2 className="section-heading" data-outline="SKILLS">
          SKILLS
        </h2>
        <div className="all-items">
          <div className="item">
            <div className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1"
                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="item-heading">Web Development</h3>
            <p className="item-desc">
              Proficient in HTML5, CSS3, JavaScript, and modern frameworks like
              React. Experienced in building responsive, user-friendly websites
              with clean code and optimized performance. Skilled in creating
              dynamic web applications with interactive features and seamless
              user experiences.
            </p>
          </div>

          <div className="item">
            <div className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1"
                  d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                />
              </svg>
            </div>
            <h3 className="item-heading">Robotics & Embedded Systems</h3>
            <p className="item-desc">
              Hands-on experience with Arduino, sensor integration, and
              autonomous systems. Successfully designed and built maze-solving
              robots with real-time navigation. Strong understanding of
              electronics, circuit design, and embedded programming for IoT and
              robotic applications.
            </p>
          </div>

          <div className="item">
            <div className="icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                <defs>
                  <linearGradient
                    id="pythonGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop
                      offset="0%"
                      style={{ stopColor: "#3776AB", stopOpacity: 1 }}
                    />
                    <stop
                      offset="100%"
                      style={{ stopColor: "#FFD43B", stopOpacity: 1 }}
                    />
                  </linearGradient>
                </defs>
                <g fill="url(#pythonGradient)">
                  <path
                    d="M127.7,0C80,0,64,22,64,48v32h64v8H48C21,88,0,106.7,0,136v56c0,30.7,21.5,48,48,48h32v-32c0-22.5,18.5-48,48-48h64
                  c26.7,0,48-21.3,48-48V48c0-26.7-21.5-48-48-48H127.7z M103.7,16c9,0,16.3,7.3,16.3,16.3s-7.3,16.3-16.3,16.3
                  S87.3,41.3,87.3,32.3S94.7,16,103.7,16z"
                  />
                  <path
                    d="M192,256c47.7,0,64-22,64-48v-32h-64v-8h80c26.7,0,48-18.7,48-48v-56c0-30.7-21.5-48-48-48h-32v32
                  c0,22.5-18.5,48-48,48h-64c-26.7,0-48,21.3-48,48v56c0,26.7,21.5,48,48,48H192z M216,240c-9,0-16.3-7.3-16.3-16.3
                  s7.3-16.3,16.3-16.3s16.3,7.3,16.3,16.3S225,240,216,240z"
                  />
                </g>
              </svg>
            </div>
            <h3 className="item-heading">Programming & Algorithms</h3>
            <p className="item-desc">
              Strong foundation in Python and data structures.
              Experience with algorithm design, problem-solving, and competitive
              programming. Proficient in Git version control, debugging, and
              implementing efficient solutions for complex computational
              challenges.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
