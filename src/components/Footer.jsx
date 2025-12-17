import React from "react";

const Footer = () => {
  return (
    <>
      <section id="footer">
        <div className="container">
          <footer>
            <div className="col-1">
              <div className="logo">
                <a href="#"></a>
              </div>
              <p>
                I'm a passionate developer and tech enthusiast with a strong
                interest in robotics, AI, and web development. I love building
                innovative projects that solve real-world problems, and I'm
                always eager to improve and expand my skills. What's more, I
                consider myself truly fortunate to be able to create and
                innovate in the world of technology.
              </p>
            </div>
            <div className="col-2">
              <h2 className="column-heading">
                Important
                <br />
                Links
              </h2>
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
                  <a href="/#projects">Project</a>
                </li>
              </ul>
            </div>
            <div className="col-3">
              <h2 className="column-heading">
                Contact
                <br />
                Info
              </h2>
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
            <div className="contact-icons">
             
              <a href="https://www.instagram.com/_h3mant__/">
                <i className="bx bxl-instagram-alt"></i>
              </a>
              <a href="https://www.linkedin.com/in/hemant9610/">
                <i className="bx bxl-linkedin"></i>
              </a>
            </div>
          </footer>
        </div>
      </section>

      <section id="copyright">
        <div className="container">
          <p>&copy; Copyright 2025 HEMANT. All right Reserved</p>
        </div>
      </section>
    </>
  );
};

export default Footer;
