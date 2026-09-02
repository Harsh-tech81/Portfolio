import React from 'react';
import { motion } from 'motion/react';
import { certifications } from '../data/certifications';
import SectionHeading from '../components/common/SectionHeading';
import AnimatedSection from '../components/common/AnimatedSection';
import Card from '../components/common/Card';
import { fadeInUp, staggerContainer } from '../utils/animations';
import { FaBuilding, FaCalendarAlt, FaCertificate } from 'react-icons/fa';

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 bg-white dark:bg-gray-950 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <SectionHeading 
          title="Certifications" 
          subtitle="Professional certifications and achievements" 
        />
        
        <AnimatedSection variants={staggerContainer} className="mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div key={cert.id || index} variants={fadeInUp} className="h-full">
                <Card className="h-full flex flex-col overflow-hidden p-0 group">
                  <div className="relative aspect-video w-full overflow-hidden bg-gray-100 dark:bg-gray-800 rounded-t-xl shine-sweep">
                    {cert.image ? (
                      <img 
                        src={cert.image} 
                        alt={cert.title} 
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-5 text-center transition-transform duration-500 group-hover:scale-105">
                        <FaCertificate className="text-4xl text-blue-500/50 mb-3" />
                        <h4 className="text-base font-bold text-gray-800 dark:text-gray-200 line-clamp-2">
                          {cert.title}
                        </h4>
                      </div>
                    )}
                  </div>
                  
                  <div className="p-5 flex flex-col flex-grow">
                    <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-3 line-clamp-2">
                      {cert.title}
                    </h3>
                    
                    <div className="flex flex-col gap-2 mb-5 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center gap-2">
                        <FaBuilding className="text-blue-500 shrink-0" />
                        <span className="truncate">{cert.organization}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaCalendarAlt className="text-blue-500 shrink-0" />
                        <span>{cert.date}</span>
                      </div>
                    </div>
                    
                    <div className="mt-auto">
                      <a 
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-full px-4 py-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-900 dark:text-white rounded-lg text-sm font-medium transition-colors"
                      >
                        View Credential
                      </a>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Certifications;
