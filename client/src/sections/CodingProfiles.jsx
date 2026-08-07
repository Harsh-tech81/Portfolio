import React from 'react';
import { motion } from 'motion/react';
import { codingProfiles } from '../data/codingProfiles';
import SectionHeading from '../components/common/SectionHeading';
import AnimatedSection from '../components/common/AnimatedSection';
import Card from '../components/common/Card';
import { fadeInUp, staggerContainer } from '../utils/animations';

const CodingProfiles = () => {
  return (
    <section id="coding-profiles" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <SectionHeading 
          title="Coding Profiles" 
          subtitle="My competitive programming profiles" 
        />
        
        <AnimatedSection variants={staggerContainer} className="mt-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {codingProfiles.map((profile, index) => {
              const Icon = profile.icon;
              return (
                <motion.div 
                  key={profile.id || index}
                  variants={fadeInUp}
                  whileHover={{ y: -4 }}
                  className="h-full group"
                >
                  <Card 
                    className="h-full flex flex-col items-center p-8 text-center transition-all duration-300 border-2 border-transparent group-hover:border-[var(--hover-color)]"
                    style={{ 
                      '--hover-color': profile.color,
                      backgroundColor: 'var(--card-bg)'
                    }}
                  >
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl pointer-events-none"
                      style={{ backgroundColor: profile.bgColor || profile.color }}
                    />
                    <div className="mb-4 flex items-center justify-center p-4 rounded-full bg-gray-100 dark:bg-gray-800 transition-colors" style={{ color: profile.color }}>
                      {Icon && <Icon size={48} />}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1 relative z-10">
                      {profile.platform}
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 mb-2 relative z-10">
                      @{profile.username}
                    </p>
                    {profile.maxRating && (
                      <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-6 relative z-10 bg-white/50 dark:bg-black/20 px-3 py-1 rounded-full border border-gray-200 dark:border-gray-700/50">
                        Max Rating: <span style={{ color: profile.color }}>{profile.maxRating}</span>
                      </p>
                    )}
                    

                    <div className="mt-auto w-full relative z-10">
                      <a 
                        href={profile.url} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-6 py-2.5 rounded-xl font-medium transition-all duration-300 w-full"
                        style={{ backgroundColor: profile.color, color: 'white' }}
                      >
                        Visit Profile
                      </a>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CodingProfiles;
