import React from 'react';
import { motion } from 'motion/react';
import { navLinks } from '../../data/navLinks';
import { personalInfo } from '../../data/personalInfo';
import { FaGithub, FaLinkedinIn, FaXTwitter, FaInstagram } from 'react-icons/fa6';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (e, path) => {
    e.preventDefault();
    const id = path.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-gray-50 dark:bg-[#0a0a0a] border-t border-gray-200/50 dark:border-white/5 pt-16 pb-8"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Left Column: Brand & Tagline */}
          <div className="flex flex-col space-y-4">
            <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="flex items-center gap-2">
              <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-500 bg-clip-text text-transparent">
                H
              </span>
              <span className="text-xl font-semibold text-gray-900 dark:text-white">
                arsh
              </span>
            </a>
            <p className="text-gray-600 dark:text-gray-400 max-w-sm">
              {personalInfo.title} based in {personalInfo.location}. Building modern, performant web applications with passion.
            </p>
            <div className="flex space-x-4 pt-2">
              {[
                { icon: FaGithub, url: personalInfo.socials.github, label: 'GitHub' },
                { icon: FaLinkedinIn, url: personalInfo.socials.linkedin, label: 'LinkedIn' },
                { icon: FaXTwitter, url: personalInfo.socials.twitter, label: 'Twitter' },
                { icon: FaInstagram, url: personalInfo.socials.instagram, label: 'Instagram' },
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-gray-200 dark:bg-white/10 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + index * 0.08, type: 'spring', stiffness: 300, damping: 20 }}
                  whileHover={{ y: -3, scale: 1.15 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Center Column: Quick Links */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a href={link.path} onClick={(e) => handleNavClick(e, link.path)} className="group inline-flex items-center gap-1.5 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    <span className="w-0 group-hover:w-3 overflow-hidden transition-all duration-300 text-blue-500">→</span>
                    <span className="inline-block transition-transform duration-300 group-hover:translate-x-0.5">{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Contact Info */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Contact</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li>
                <a href={`mailto:${personalInfo.email}`} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  {personalInfo.email}
                </a>
              </li>
              <li>
                <a href={`tel:${personalInfo.phone}`} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  {personalInfo.phone}
                </a>
              </li>
              <li>{personalInfo.location}</li>
            </ul>
          </div>
          
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200/50 dark:border-white/5 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 dark:text-gray-400">
          <p>&copy; {currentYear} Harsh. All rights reserved.</p>
          <p className="mt-2 md:mt-0 flex items-center">
            Made with <span className="heartbeat text-red-500 mx-1 cursor-default">❤️</span> by Harsh
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
