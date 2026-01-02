import React from "react";

const Hero = () => {
  return (
    <section id="hero">
      <div className="container">
        <div className="left">
          <p style={{ color: "blue", fontWeight: "bold" , fontSize: "30px"}} className="subheading">I'm HEMANT</p>
          <h2 className="heading">
           
            
        
          </h2>
          <p className="desc">
            Computer Science student specializing in web development, robotics,
            and AI. Experienced in building autonomous systems, full-stack web
            applications, and participating in competitive hackathons.
            Proficient in HTML, CSS, JavaScript, Python, Arduino, and modern
            frameworks. Passionate about creating innovative solutions that
            bridge hardware and software.
          </p>
          <div className="buttons">
            <a href="#projects" className="primary-btn">
              See My Works
            </a>
          </div>
        </div>
        <div className="right">
          <img src="/profile.jpg" alt="Hemant's profile" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
