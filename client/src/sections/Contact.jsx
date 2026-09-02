import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { personalInfo } from '../data/personalInfo';
import SectionHeading from '../components/common/SectionHeading';
import AnimatedSection from '../components/common/AnimatedSection';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import { fadeInUp, staggerContainer } from '../utils/animations';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';
import { FaGithub, FaLinkedinIn, FaXTwitter, FaInstagram } from 'react-icons/fa6';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [status, setStatus] = useState({
    loading: false,
    error: null,
    success: false
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setStatus({ ...status, error: 'All fields are required.' });
      return;
    }
    if (!validateEmail(formData.email)) {
      setStatus({ ...status, error: 'Please enter a valid email address.' });
      return;
    }

    setStatus({ loading: true, error: null, success: false });

    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api';

    try {
      const response = await fetch(`${API_BASE_URL}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setStatus({
        loading: false,
        error: null,
        success: true
      });
      
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      setTimeout(() => {
        setStatus(prev => ({ ...prev, success: false }));
      }, 5000);
      
    } catch (error) {
      setStatus({
        loading: false,
        error: error.message || 'Something went wrong. Please try again later.',
        success: false
      });
    }
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div
        className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] -z-10 pointer-events-none"
        style={{ animation: 'orbDrift1 14s ease-in-out infinite' }}
      />
      <div
        className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px] -z-10 pointer-events-none"
        style={{ animation: 'orbDrift2 18s ease-in-out infinite' }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <SectionHeading 
          title="Get In Touch" 
          subtitle="Have a question or want to work together?" 
        />
        
        <AnimatedSection className="mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-col justify-center"
            >
              <motion.h3 variants={fadeInUp} className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Let's talk about your next project
              </motion.h3>
              
              <motion.p variants={fadeInUp} className="text-lg text-gray-600 dark:text-gray-400 mb-10">
                I'm currently available to take on new projects, so feel free to send me a message about anything that you want to run past me.
              </motion.p>
              
              <div className="space-y-6 mb-10">
                <motion.div variants={fadeInUp} className="flex items-center gap-5">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center bg-gradient-to-br transition-transform duration-300 hover:scale-110 hover:-rotate-6 from-blue-500/20 to-cyan-500/20 text-blue-600 dark:text-blue-400 shrink-0">
                    <FaEnvelope className="text-xl" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Email</p>
                    <a href={`mailto:${personalInfo.email}`} className="text-lg font-medium text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      {personalInfo.email}
                    </a>
                  </div>
                </motion.div>
                
                <motion.div variants={fadeInUp} className="flex items-center gap-5">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center bg-gradient-to-br transition-transform duration-300 hover:scale-110 hover:-rotate-6 from-purple-500/20 to-pink-500/20 text-purple-600 dark:text-purple-400 shrink-0">
                    <FaPhone className="text-xl" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Phone</p>
                    <a href={`tel:${personalInfo.phone}`} className="text-lg font-medium text-gray-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                      {personalInfo.phone}
                    </a>
                  </div>
                </motion.div>
                
                <motion.div variants={fadeInUp} className="flex items-center gap-5">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center bg-gradient-to-br transition-transform duration-300 hover:scale-110 hover:-rotate-6 from-green-500/20 to-emerald-500/20 text-green-600 dark:text-green-400 shrink-0">
                    <FaMapMarkerAlt className="text-xl" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Location</p>
                    <p className="text-lg font-medium text-gray-900 dark:text-white">
                      {personalInfo.location}
                    </p>
                  </div>
                </motion.div>
              </div>
              
              <motion.div variants={fadeInUp} className="flex items-center gap-4">
                {[
                  { icon: FaGithub, url: personalInfo.socials?.github, label: 'GitHub' },
                  { icon: FaLinkedinIn, url: personalInfo.socials?.linkedin, label: 'LinkedIn' },
                  { icon: FaXTwitter, url: personalInfo.socials?.twitter, label: 'Twitter' },
                  { icon: FaInstagram, url: personalInfo.socials?.instagram, label: 'Instagram' },
                ].filter(s => s.url).map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: 'spring', stiffness: 350, damping: 15 }}
                    className="w-12 h-12 rounded-full flex items-center justify-center bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:text-white hover:bg-blue-600 dark:hover:bg-blue-500 hover:border-transparent transition-colors duration-300 hover:shadow-lg hover:shadow-blue-500/30"
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
            
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <Card className="p-8 sm:p-10 backdrop-blur-xl bg-white/80 dark:bg-gray-900/80 border border-gray-200 dark:border-gray-800 shadow-xl rounded-2xl h-full">
                
                <AnimatePresence mode="wait">
                  {status.success && (
                    <motion.div 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="mb-6 p-4 rounded-xl bg-green-50 dark:bg-green-500/10 border border-green-200 dark:border-green-500/20 flex items-center gap-3 text-green-700 dark:text-green-400"
                    >
                      <FaCheckCircle className="shrink-0" />
                      <p className="text-sm font-medium">Message sent successfully! I'll get back to you soon.</p>
                    </motion.div>
                  )}
                  
                  {status.error && (
                    <motion.div 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="mb-6 p-4 rounded-xl bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 flex items-center gap-3 text-red-700 dark:text-red-400"
                    >
                      <FaExclamationCircle className="shrink-0" />
                      <p className="text-sm font-medium">{status.error}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <motion.div variants={fadeInUp} className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className="w-full px-4 py-3 rounded-xl bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all text-gray-900 dark:text-white placeholder-gray-500"
                    />
                  </motion.div>
                  
                  <motion.div variants={fadeInUp} className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 rounded-xl bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all text-gray-900 dark:text-white placeholder-gray-500"
                    />
                  </motion.div>
                  
                  <motion.div variants={fadeInUp} className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="How can I help you?"
                      className="w-full px-4 py-3 rounded-xl bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all text-gray-900 dark:text-white placeholder-gray-500"
                    />
                  </motion.div>
                  
                  <motion.div variants={fadeInUp} className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      placeholder="Your message..."
                      className="w-full px-4 py-3 rounded-xl bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all text-gray-900 dark:text-white placeholder-gray-500 resize-none"
                    ></textarea>
                  </motion.div>
                  
                  <motion.div variants={fadeInUp}>
                    <Button 
                      type="submit" 
                      disabled={status.loading}
                      className="w-full justify-center py-3.5 mt-2"
                    >
                      {status.loading ? 'Sending...' : 'Send Message'}
                    </Button>
                  </motion.div>
                </form>
              </Card>
            </motion.div>
            
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Contact;
