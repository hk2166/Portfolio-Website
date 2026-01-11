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
                    { icon: <MapPin />, title: "Location", value: "Pune, Maharashtra", href: "#" }
                  ].map((item, idx) => (
                    <a
                      key={idx}
                      href={item.href}
                      className="flex items-center gap-6 p-4 rounded-2xl hover:bg-primary/5 transition-colors group"
                    >
                      <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                        {item.icon}
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

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white dark:bg-slate-900 p-8 md:p-10 rounded-3xl border border-[var(--border-color)] shadow-2xl"
            >
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold ml-1">Your Name</label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full px-5 py-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-[var(--border-color)] focus:border-primary outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold ml-1">Email Address</label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="w-full px-5 py-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-[var(--border-color)] focus:border-primary outline-none transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold ml-1">Subject</label>
                  <input
                    type="text"
                    placeholder="Project Inquiry"
                    className="w-full px-5 py-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-[var(--border-color)] focus:border-primary outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold ml-1">Message</label>
                  <textarea
                    rows="5"
                    placeholder="Tell me about your project..."
                    className="w-full px-5 py-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-[var(--border-color)] focus:border-primary outline-none transition-all resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-primary hover:bg-primary-dark text-white rounded-xl font-bold flex items-center justify-center gap-2 transition-all transform hover:-translate-y-1 shadow-lg shadow-primary/20"
                >
                  <Send size={18} /> Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
