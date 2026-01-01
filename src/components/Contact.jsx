import React from "react";
import 'remixicon/fonts/remixicon.css'

const Contact = () => {
  return (
    <>
      <section id="contact">
        <div className="container">
          <h2 className="section-heading" data-outline="Contact">
            Get In Touch
          </h2>
          <p className="section-subtitle">
            Let's collaborate and build something amazing together
          </p>

          <div className="wrapper">
            <div className="left">
              <div className="contact-card">
                <div className="contact-header">
                  <h3 className="contact-heading">Let's Connect</h3>
                  <p className="contact-desc">
                    Feel free to reach out for collaborations, project
                    inquiries, or just to chat about technology and innovation.
                    I'm always excited to connect with fellow developers and
                    innovators!
                  </p>
                </div>

                <div className="contact-info">
                  <h4 className="info-title">Contact Information</h4>
                  <ul>
                    <li>
                      <a href="tel:+919610769080">
                        <span className="icon">
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
                              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                            />
                          </svg>
                        </span>
                        <span className="text">+91 9610769080</span>
                      </a>
                    </li>
                    <li>
                      <a href="mailto:9610hemant@gmail.com">
                        <span className="icon">
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
                              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                          </svg>
                        </span>
                        <span className="text">9610hemant@gmail.com</span>
                      </a>
                    </li>
                    <li>
                      <a>
                        <span className="icon">
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
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                        </span>
                        <span className="text">Pune, Maharashtra</span>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="social-info">
                  <h4 className="info-title">Follow Me</h4>
                  <ul>
                
                    <li>
                      <a
                        href="https://github.com/hk2166"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                      >
                        <i class="ri-github-fill"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/in/hemant9610/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                      >
                        <i class="ri-linkedin-fill"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="right">
              <div className="contact-visual">
                <div className="visual-card">
                  <div className="card-icon">
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
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                  </div>
                  <h3>Open to Opportunities</h3>
                  <p>
                    Looking for internships, collaborations, and exciting
                    projects in web development, AI, and robotics.
                  </p>
                </div>

                <div className="visual-card">
                  <div className="card-icon">
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
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <h3>Quick Response</h3>
                  <p>
                    I typically respond within 24 hours. Let's discuss your
                    ideas and turn them into reality!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="footer">
        <div className="container">
          <footer>
            <div className="col-2">
              <h2 className="column-heading">Important Links</h2>
              <ul>
                <li>
                  <a href="/#home">Home</a>
                </li>
                <li>
                  <a href="/#about">About</a>
                </li>
                <li>
                  <a href="/contact">Contact</a>
                </li>
                <li>
                  <a href="/#projects">Projects</a>
                </li>
                <li>
                  <a href="/#testimonial">Testimonial</a>
                </li>
              </ul>
            </div>

            <div className="col-3">
              <h2 className="column-heading">Contact Info</h2>
              <ul>
                <li>
                  <a href="mailto:9610hemant@gmail.com">9610hemant@gmail.com</a>
                </li>
                <li>
                  <a href="tel:+919610769080">+91 9610769080</a>
                </li>
                <li>
                  <a href="#">Pune, Maharashtra</a>
                </li>
              </ul>
            </div>
          </footer>
        </div>
      </section>

      <section id="copyright">
        <div className="container">
          <p>&copy; Copyright 2025 HEMANT. All Rights Reserved.</p>
        </div>
      </section>
    </>
  );
};

export default Contact;
