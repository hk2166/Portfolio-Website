import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageSquare,
  User,
  Sparkles,
  CheckCircle,
} from "lucide-react";
import { useMode } from "../context/ModeContext";
import Footer from "./Footer";

const Contact = () => {
  const { mode } = useMode();
  const isRobotics = mode === "robotics";
  const form = useRef();

  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    
    // Use environment variables
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error("EmailJS environment variables missing");
      setError("Configuration error: Missing environment variables.");
      return;
    }

    emailjs
      .sendForm(serviceId, templateId, form.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setIsSubmitted(true);
          setFormData({ user_name: "", user_email: "", message: "" });
          setError(null);
          setTimeout(() => setIsSubmitted(false), 5000);
        },
        (error) => {
          console.log('FAILED...', error.text);
          setError("Failed to send message. Please try again later.");
        },
      );
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <section
        id="contact"
        className="section-padding relative overflow-hidden"
      >
        {/* Background decoration */}
        <div className={`absolute top-1/4 right-0 w-96 h-96 ${isRobotics ? "bg-blue-500/5" : "bg-neon-green/5"} rounded-full blur-3xl`}></div>
        <div className={`absolute bottom-1/4 left-0 w-96 h-96 ${isRobotics ? "bg-blue-500/5" : "bg-neon-green/5"} rounded-full blur-3xl`}></div>

        <div className="container-custom relative z-10">
          {/* Section Header */}
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border ${isRobotics ? "border-blue-400/20 text-blue-400" : "border-neon-green/20 text-neon-green"} text-sm font-semibold mb-6`}
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles size={16} />
              Let's Work Together
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-extrabold mb-6">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <div className={`w-24 h-1.5 bg-gradient-to-r from-transparent ${isRobotics ? "via-blue-400" : "via-neon-green"} to-transparent mx-auto mb-6`}></div>
            <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
              Have a project in mind or just want to say hi? I'd love to hear
              from you.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="p-8 glass-card">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <MessageSquare className={isRobotics ? "text-blue-400" : "text-neon-green"} size={28} />
                  Let's Connect
                </h3>
                <p className="text-neutral-400 mb-8 leading-relaxed">
                  I'm currently available for freelance work and collaborations.
                  Whether you have a question or just want to connect, my inbox
                  is always open!
                </p>

                <div className="space-y-4">
                  {[
                    {
                      icon: <Mail size={20} />,
                      title: "Email",
                      value: "9610hemant@gmail.com",
                      href: "mailto:9610hemant@gmail.com",
                      gradient: "from-blue-500 to-cyan-500",
                    },
                    {
                      icon: <Phone size={20} />,
                      title: "Phone",
                      value: "+91 9610769080",
                      href: "tel:+919610769080",
                      gradient: "from-green-500 to-emerald-500",
                    },
                    {
                      icon: <MapPin size={20} />,
                      title: "Location",
                      value: "Pune, Maharashtra",
                      href: "#",
                      gradient: "from-purple-500 to-pink-500",
                    },
                  ].map((item, idx) => (
                    <motion.a
                      key={idx}
                      href={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + idx * 0.1 }}
                      whileHover={{ x: 10, scale: 1.02 }}
                      className={`flex items-center gap-4 p-5 glass-card ${isRobotics ? "hover:border-blue-400/30" : "hover:border-neon-green/30"} transition-all group cursor-pointer`}
                    >
                      <div
                        className={`p-3 rounded-xl bg-gradient-to-br ${item.gradient} bg-opacity-10 text-white group-hover:scale-110 transition-transform`}
                      >
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-xs font-bold text-neutral-500 uppercase tracking-wider mb-1">
                          {item.title}
                        </p>
                        <p className={`text-base font-semibold text-white ${isRobotics ? "group-hover:text-blue-400" : "group-hover:text-neon-green"} transition-colors`}>
                          {item.value}
                        </p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Quote Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className={`p-8 glass-card relative overflow-hidden group ${isRobotics ? "hover:border-blue-400/30" : "hover:border-neon-green/30"} transition-all`}
              >
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Sparkles size={100} />
                </div>
                <p className="relative z-10 text-lg italic text-neutral-300">
                  "Innovation distinguishes between a leader and a follower."
                </p>
                <p className="relative z-10 text-sm text-neutral-500 mt-4">
                  — Steve Jobs
                </p>
              </motion.div>
            </motion.div>

            {/* Right Column - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="p-8 glass-card">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <Send className={isRobotics ? "text-blue-400" : "text-neon-green"} size={28} />
                  Send a Message
                </h3>

                <form ref={form} onSubmit={sendEmail} className="space-y-6">
                  {/* Hidden field for recipient email */}
                  <input type="hidden" name="to_email" value="9610hemant@gmail.com" />
                  
                  <div>
                    <label
                      htmlFor="user_name"
                      className="block text-sm font-medium text-neutral-400 mb-2 flex items-center gap-2"
                    >
                      <User size={16} /> Your Name
                    </label>
                    <input
                      type="text"
                      id="user_name"
                      name="user_name"
                      value={formData.user_name}
                      onChange={handleChange}
                      required
                      className={`w-full px-6 py-4 bg-neutral-900/50 border border-white/5 rounded-2xl text-white placeholder-neutral-600 focus:outline-none ${isRobotics ? "focus:border-blue-400/50 focus:ring-blue-400/20" : "focus:border-neon-green/50 focus:ring-neon-green/20"} focus:ring-2 transition-all`}
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="user_email"
                      className="block text-sm font-medium text-neutral-400 mb-2 flex items-center gap-2"
                    >
                      <Mail size={16} /> Your Email
                    </label>
                    <input
                      type="email"
                      id="user_email"
                      name="user_email"
                      value={formData.user_email}
                      onChange={handleChange}
                      required
                      className={`w-full px-6 py-4 bg-neutral-900/50 border border-white/5 rounded-2xl text-white placeholder-neutral-600 focus:outline-none ${isRobotics ? "focus:border-blue-400/50 focus:ring-blue-400/20" : "focus:border-neon-green/50 focus:ring-neon-green/20"} focus:ring-2 transition-all`}
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-neutral-400 mb-2 flex items-center gap-2"
                    >
                      <MessageSquare size={16} /> Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className={`w-full px-6 py-4 bg-neutral-900/50 border border-white/5 rounded-2xl text-white placeholder-neutral-600 focus:outline-none ${isRobotics ? "focus:border-blue-400/50 focus:ring-blue-400/20" : "focus:border-neon-green/50 focus:ring-neon-green/20"} focus:ring-2 transition-all resize-none`}
                      placeholder="Tell me about your project..."
                    />
                  </div>
                  
                  {error && (
                    <p className="text-red-500 text-sm">{error}</p>
                  )}

                  <motion.button
                    type="submit"
                    className={`w-full ${isRobotics ? "bg-blue-500 hover:bg-blue-400 text-black" : "btn-primary"} font-bold py-4 rounded-xl inline-flex items-center justify-center gap-2 relative overflow-hidden transition-all`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={isSubmitted}
                  >
                    {isSubmitted ? (
                      <>
                        <CheckCircle size={20} />
                        Message Sent!
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send size={20} />
                      </>
                    )}
                  </motion.button>
                </form>
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
