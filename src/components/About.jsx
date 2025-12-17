import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <h2 className="section-heading" data-outline="about">
          About
        </h2>
        <div className="wrapper">
          <div className="left">
            <div className="card">
              <div className="img">
                <img src="/profile.jpg" alt="Hemant" />
              </div>
              <p className="card-desc">
                Pursuing dual degrees in Computer Science from IIT Madras (BS)
                and Ajeenkya D.Y. Patil University (B.Tech). Experienced in
                robotics, web development, and embedded systems. Successfully
                developed an autonomous maze-solving robot and multiple web
                applications. Active participant in hackathons with proven
                problem-solving abilities and strong foundation in both hardware
                and software development.
              </p>
              
            </div>
          </div>
          <div className="right">
            <p className="subheading">Hi! This is Hemant</p>
            <h2 className="slogan">Developer & Innovator</h2>
            <p className="right-text">
              Currently pursuing a Bachelor's degree in Computer Science from
              IIT Madras and B.Tech from Ajeenkya D.Y. Patil University
              (2024-2028). My expertise spans web development, robotics, and
              embedded systems. I've successfully built autonomous robots,
              developed full-stack web applications, and participated in
              competitive coding events. I'm passionate about leveraging
              technology to solve real-world problems and continuously expanding
              my skill set in emerging technologies.
            </p>
            <div className="buttons">
              <a
                href="/resume.pdf"
                className="primary-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open Resume
              </a>
              <Link to="/contact" className="primary-btn outline">
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
