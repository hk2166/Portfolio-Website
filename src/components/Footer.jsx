import React from "react";
import { Github, Linkedin, Mail, Phone, MapPin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold gradient-text mb-6">HEMANT</h2>
            <p className="text-slate-400 max-w-md leading-relaxed mb-8">
              A passionate developer and tech enthusiast specializing in robotics, AI, 
              and web development. Building innovative projects that bridge the gap 
              between hardware and software.
            </p>
            <div className="flex gap-4">
              {[
                { icon: <Github size={20} />, href: "https://github.com/hk2166" },
                { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/hemant9610/" },
                { icon: <Instagram size={20} />, href: "https://www.instagram.com/_h3mant__/" },
                { icon: <Mail size={20} />, href: "mailto:9610hemant@gmail.com" }
              ].map((social, idx) => (
                <a 
                  key={idx}
                  href={social.href}
                  className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {['Home', 'About', 'Services', 'Projects', 'Contact'].map((link) => (
                <li key={link}>
                  <a 
                    href={link === 'Home' ? '/' : link === 'Contact' ? '/contact' : `#${link.toLowerCase()}`}
                    className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li>
                <a href="mailto:9610hemant@gmail.com" className="text-slate-400 hover:text-white transition-colors flex items-center gap-3">
                  <Mail size={18} className="text-primary" />
                  9610hemant@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+919610769080" className="text-slate-400 hover:text-white transition-colors flex items-center gap-3">
                  <Phone size={18} className="text-primary" />
                  +91 9610769080
                </a>
              </li>
              <li>
                <div className="text-slate-400 flex items-center gap-3">
                  <MapPin size={18} className="text-primary" />
                  Pune, Maharashtra
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 text-center md:flex md:justify-between md:text-left">
          <p className="text-slate-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} HEMANT. All rights reserved.
          </p>
          <div className="flex gap-6 justify-center md:justify-end">
            <a href="#" className="text-slate-500 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-500 hover:text-white text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
