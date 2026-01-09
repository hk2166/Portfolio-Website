import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageSquare, Sparkles } from "lucide-react";
import Footer from "./Footer";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 pt-20">
      <section id="contact" className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <div className="w-20 h-1.5 bg-primary mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Have a project in mind or just want to say hi? I'd love to hear from you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="p-8 rounded-3xl glass-morphism border border-[var(--border-color)]">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <MessageSquare className="text-primary" /> Let's Connect
                </h3>
                <p className="text-[var(--text-secondary)] mb-8 leading-relaxed">
                  I'm currently looking for new opportunities and collaborations. 
                  Whether you have a question or just want to connect, my inbox 
                  is always open!
                </p>

                  <div className="space-y-6">
                    {[
                      { icon: <Mail />, title: "Email", value: "9610hemant@gmail.com", href: "mailto:9610hemant@gmail.com" },
                      { icon: <Phone />, title: "Phone", value: "+91 9610769080", href: "tel:+919610769080" },
                      { icon: <Linkedin />, title: "LinkedIn", value: "hemant9610", href: "https://www.linkedin.com/in/hemant9610/" },
                    ].map((item, idx) => (
                      <a
                        key={idx}
                        href={item.href}
                        target={item.href.startsWith('http') ? "_blank" : undefined}
                        rel={item.href.startsWith('http') ? "noopener noreferrer" : undefined}
                        className="flex items-center gap-6 p-4 rounded-2xl hover:bg-primary/5 transition-colors group"
                      >
                        <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                          {React.cloneElement(item.icon, { size: 24 })}
                        </div>
                        <div>
                          <p className="text-xs font-bold text-[var(--text-light)] uppercase tracking-wider">{item.title}</p>
                          <p className="text-lg font-bold">{item.value}</p>
                        </div>
                      </a>
                    ))}
                  </div>
              </div>

              <div className="p-8 rounded-3xl bg-linear-to-br from-primary to-secondary text-white shadow-xl shadow-primary/20">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Sparkles size={20} /> Quick Response
                </h3>
                <p className="opacity-90 leading-relaxed">
                  I typically respond within 24 hours. Looking forward to hearing about your innovative ideas!
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
