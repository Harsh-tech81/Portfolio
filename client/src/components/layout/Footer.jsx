import React from 'react';
import { motion } from 'motion/react';
import { navLinks } from '../../data/navLinks';
import { personalInfo } from '../../data/personalInfo';
import { FaGithub, FaLinkedinIn, FaXTwitter, FaInstagram } from 'react-icons/fa6';

const Footer = () => {
  const currentYear = new Date().getFullYear();

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
            <a href="#home" className="flex items-center gap-2">
              <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-500 bg-clip-text text-transparent">
                H
              </span>
              <span className="text-xl font-semibold text-gray-900 dark:text-white">
                arsh
              </span>
            </a>
            <p className="text-gray-600 dark:text-gray-400 max-w-sm">
              {personalInfo.role} based in {personalInfo.location}. Building modern, performant web applications with passion.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href={personalInfo.socials.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-gray-200 dark:bg-white/10 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <FaGithub size={20} />
              </a>
              <a href={personalInfo.socials.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-gray-200 dark:bg-white/10 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <FaLinkedinIn size={20} />
              </a>
              <a href={personalInfo.socials.twitter} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-gray-200 dark:bg-white/10 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <FaXTwitter size={20} />
              </a>
              <a href={personalInfo.socials.instagram} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-gray-200 dark:bg-white/10 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <FaInstagram size={20} />
              </a>
            </div>
          </div>

          {/* Center Column: Quick Links */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a href={link.path} className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    {link.name}
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
            Made with <span className="text-red-500 mx-1">❤️</span> by Harsh
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
