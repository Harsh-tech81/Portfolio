import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'motion/react';
import { codingProfiles } from '../data/codingProfiles';
import SectionHeading from '../components/common/SectionHeading';
import AnimatedSection from '../components/common/AnimatedSection';
import Card from '../components/common/Card';
import { fadeInUp, staggerContainer, countUp } from '../utils/animations';

/**
 * Animated counter component — counts from 0 to `value` when visible.
 */
const AnimatedCounter = ({ value, color }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const cancel = countUp(value, 1200, setDisplay);
    return cancel;
  }, [isInView, value]);

  return (
    <span ref={ref} style={{ color, fontWeight: 700 }}>
      {display}
    </span>
  );
};

/**
 * Animated badge component with shimmer, glow pulse and entrance animation.
 */
const AnimatedBadge = ({ badge, badgeIcon, badgeColor, badgeBg }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20, delay: 0.8 }}
      className="relative inline-flex items-center gap-1.5"
    >
      {/* Pulsing glow behind the badge */}
      <motion.div
        className="absolute inset-0 rounded-full blur-md pointer-events-none"
        style={{ backgroundColor: badgeColor }}
        animate={{
          opacity: [0.15, 0.35, 0.15],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Badge pill */}
      <div
        className="relative overflow-hidden flex items-center gap-1.5 px-3 py-1 rounded-full text-xs xl:text-sm font-bold border"
        style={{
          backgroundColor: badgeBg,
          borderColor: `${badgeColor}40`,
          color: badgeColor,
        }}
      >
        {/* Shimmer sweep overlay */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `linear-gradient(105deg, transparent 40%, ${badgeColor}20 45%, ${badgeColor}35 50%, ${badgeColor}20 55%, transparent 60%)`,
          }}
          animate={{ x: ['-100%', '200%'] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatDelay: 2,
            ease: 'easeInOut',
          }}
        />

        {/* Badge icon with bounce */}
        <motion.span
          className="text-sm xl:text-base"
          animate={{ rotate: [0, -10, 10, -5, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatDelay: 4,
            ease: 'easeInOut',
          }}
        >
          {badgeIcon}
        </motion.span>

        <span className="relative z-10">{badge}</span>
      </div>
    </motion.div>
  );
};

const CodingProfiles = () => {
  return (
    <section id="coding-profiles" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <SectionHeading 
          title="Coding Profiles" 
          subtitle="My competitive programming profiles" 
        />
        
        <AnimatedSection variants={staggerContainer} className="mt-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 xl:gap-6">
            {codingProfiles.map((profile, index) => {
              const Icon = profile.icon;
              return (
                <motion.div 
                  key={profile.id || index}
                  variants={fadeInUp}
                  whileHover={{ y: -6 }}
                  className="h-full group"
                >
                  <Card 
                    className="h-full flex flex-col items-center p-6 lg:p-5 xl:p-6 text-center transition-all duration-300 border-2 border-transparent group-hover:border-[var(--hover-color)]"
                    style={{ 
                      '--hover-color': profile.color,
                      backgroundColor: 'var(--card-bg)'
                    }}
                  >
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl pointer-events-none"
                      style={{ backgroundColor: profile.bgColor || profile.color }}
                    />

                    {/* Icon with animated glow ring on hover */}
                    <div className="relative mb-4">
                      <motion.div
                        className="flex items-center justify-center p-3 lg:p-2.5 xl:p-4 rounded-full bg-gray-100 dark:bg-gray-800 transition-all duration-300 group-hover:scale-110 group-hover:-rotate-6 group-hover:shadow-lg"
                        style={{ color: profile.color }}
                        whileHover={{ rotate: -6, scale: 1.12 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                      >
                        {Icon && <Icon className="w-10 h-10 lg:w-8 lg:h-8 xl:w-12 xl:h-12" />}
                      </motion.div>
                      {/* Glow ring that appears on hover */}
                      <div
                        className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none blur-md"
                        style={{ backgroundColor: profile.color }}
                      />
                    </div>

                    <h3 className="text-lg xl:text-xl font-semibold text-gray-900 dark:text-white mb-1 relative z-10 w-full truncate" title={profile.platform}>
                      {profile.platform}
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 mb-2 relative z-10 w-full truncate text-sm xl:text-base" title={`@${profile.username}`}>
                      @{profile.username}
                    </p>

                    {/* Rating row with badge */}
                    {profile.maxRating ? (
                      <div className="flex flex-col items-center gap-1.5 mb-4 relative z-10">
                        <p className="text-xs xl:text-sm font-medium text-gray-700 dark:text-gray-300 bg-white/50 dark:bg-black/20 px-2.5 py-1 rounded-full border border-gray-200 dark:border-gray-700/50 whitespace-nowrap flex items-center gap-1.5">
                          Max Rating: <AnimatedCounter value={profile.maxRating} color={profile.color} />
                          {profile.badge && (
                            <span className="inline-flex items-center ml-0.5">
                              <span
                                className="inline-block w-1 h-1 rounded-full mx-1 opacity-40"
                                style={{ backgroundColor: profile.color }}
                              />
                              <AnimatedBadge
                                badge={profile.badge}
                                badgeIcon={profile.badgeIcon}
                                badgeColor={profile.badgeColor}
                                badgeBg={profile.badgeBg}
                              />
                            </span>
                          )}
                        </p>
                      </div>
                    ) : (
                      // Equal spacer to keep layout aligned
                      <div className="h-[26px] mb-4" />
                    )}
                    

                    <div className="mt-auto w-full relative z-10">
                      <motion.a 
                        href={profile.url} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-6 py-2.5 rounded-xl font-medium transition-all duration-300 w-full"
                        style={{ backgroundColor: profile.color, color: 'white' }}
                        whileHover={{ scale: 1.03, boxShadow: `0 8px 25px ${profile.color}40` }}
                        whileTap={{ scale: 0.97 }}
                      >
                        Visit Profile
                      </motion.a>
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

