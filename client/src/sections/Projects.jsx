import React from 'react';
import { motion } from 'motion/react';
import { projects } from '../data/projects';
import SectionHeading from '../components/common/SectionHeading';
import AnimatedSection from '../components/common/AnimatedSection';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import { FiExternalLink, FiGithub, FiCalendar, FiCode } from 'react-icons/fi';
import {
  SiReact, SiNodedotjs, SiExpress, SiMongodb, SiRedux, SiDocker,
  SiRedis, SiStripe, SiTailwindcss, SiNextdotjs,
  SiGithubactions, SiJsonwebtokens, SiRazorpay, SiQdrant, SiLanggraph, SiLangchain, SiGooglegemini
} from 'react-icons/si';
import { FaAws, FaCloud } from 'react-icons/fa';
import { FiImage } from 'react-icons/fi';
import { fadeInUp, staggerContainer } from '../utils/animations';

/**
 * Maps tech stack name strings to their react-icons components.
 * Falls back to FiCode for unknown tech.
 */
const techIconMap = {
  'React': SiReact,
  'Redux Toolkit': SiRedux,
  'Node.js': SiNodedotjs,
  'Express.js': SiExpress,
  'MongoDB': SiMongodb,
  'Docker': SiDocker,
  'AWS': FaAws,
  'Redis': SiRedis,
  'GitHub Actions': SiGithubactions,
  'Stripe': SiStripe,
  'Tailwind CSS': SiTailwindcss,
  'Next.js': SiNextdotjs,
  'JWT': SiJsonwebtokens,
  'Mongoose': SiMongodb,
  'NextAuth.js': SiNextdotjs,
  'Cloudinary': FaCloud,
  'LangChain': SiLangchain,
  'LangGraph': SiLanggraph,
  'Qdrant': SiQdrant,
  'Razorpay': SiRazorpay,
  'Google Gemini API': SiGooglegemini,
  'ImageKit': FiImage,
};

/** Render a single tech icon + name tile */
const TechTile = ({ tech, size = 'md' }) => {
  const Icon = techIconMap[tech] || null;
  const isMd = size === 'md';

  return (
    <div
      className={`flex flex-col items-center gap-1.5 rounded-lg bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:border-blue-500/50 transition-all group cursor-default ${
        isMd ? 'p-2.5' : 'p-2'
      }`}
      title={tech}
    >
      {Icon ? (
        <Icon
          size={isMd ? 20 : 16}
          className="text-gray-500 dark:text-gray-400 group-hover:text-blue-400 transition-colors"
        />
      ) : (
        <FiCode
          size={isMd ? 20 : 16}
          className="text-gray-500 dark:text-gray-400 group-hover:text-blue-400 transition-colors"
        />
      )}
      <span
        className={`font-medium text-gray-600 dark:text-gray-400 text-center leading-tight ${
          isMd ? 'text-[10px]' : 'text-[8px] truncate w-full'
        }`}
      >
        {tech}
      </span>
    </div>
  );
};

/** Duration badge component */
const DurationBadge = ({ duration }) => (
  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 dark:text-blue-400 text-xs font-medium border border-blue-500/20">
    <FiCalendar className="text-[10px]" />
    {duration}
  </div>
);

const Projects = () => {
  const featuredProjects = projects?.filter(p => p.featured) || [];
  const regularProjects = projects?.filter(p => !p.featured) || [];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          title="Projects"
          subtitle="Some of my recent work"
        />

        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <div className="mt-16 space-y-24">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id || index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
                variants={fadeInUp}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center`}
              >
                {/* Image Side */}
                <div className="w-full lg:w-1/2">
                  <div className="relative aspect-video rounded-xl overflow-hidden group shadow-2xl">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                        <span className="text-2xl font-bold text-gray-300/50">{project.title}</span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
                  </div>
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-1/2 space-y-4">
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="inline-block px-3 py-1 bg-purple-500/10 text-purple-500 dark:text-purple-400 text-xs font-semibold rounded-full border border-purple-500/20">
                      Featured Project
                    </span>
                    {project.duration && <DurationBadge duration={project.duration} />}
                  </div>

                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white">{project.title}</h3>

                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {project.description}
                  </p>

                  {project.features && project.features.length > 0 && (
                    <ul className="space-y-1.5">
                      {project.features.slice(0, 5).map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Tech Stack Grid with Icons */}
                  {project.techStack && project.techStack.length > 0 && (
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-500 mb-2">Tech Stack</p>
                      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2">
                        {project.techStack.map((tech, i) => (
                          <TechTile key={i} tech={tech} size="md" />
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="flex gap-4 pt-2">
                    {project.liveUrl && (
                      <Button href={project.liveUrl} target="_blank" rel="noopener noreferrer" variant="primary" icon={<FiExternalLink />}>
                        Live Demo
                      </Button>
                    )}
                    {project.liveClientUrl && (
                      <Button href={project.liveClientUrl} target="_blank" rel="noopener noreferrer" variant="primary" icon={<FiExternalLink />}>
                        Live Client
                      </Button>
                    )}
                    {project.liveAdminUrl && (
                      <Button href={project.liveAdminUrl} target="_blank" rel="noopener noreferrer" variant="primary" icon={<FiExternalLink />}>
                        Live Admin
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button href={project.githubUrl} target="_blank" rel="noopener noreferrer" variant="secondary" icon={<FiGithub />}>
                        GitHub
                      </Button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Regular Projects Grid */}
        {regularProjects.length > 0 && (
          <AnimatedSection variants={staggerContainer} className="mt-24">
            <h3 className="text-2xl font-bold mb-8 text-center text-gray-900 dark:text-white">Other Noteworthy Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularProjects.map((project, index) => (
                <motion.div
                  key={project.id || index}
                  variants={fadeInUp}
                  className="h-full"
                >
                  <Card className="h-full flex flex-col overflow-hidden group hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300">
                    <div className="relative aspect-video overflow-hidden">
                      {project.image ? (
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 flex items-center justify-center">
                          <span className="text-xl font-bold text-gray-500/50">{project.title}</span>
                        </div>
                      )}

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-slate-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors"
                            aria-label="Live Demo"
                            title="Live Demo"
                          >
                            <FiExternalLink size={20} />
                          </a>
                        )}
                        {project.liveClientUrl && (
                          <a
                            href={project.liveClientUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors"
                            aria-label="Live Client"
                            title="Live Client"
                          >
                            <FiExternalLink size={20} />
                          </a>
                        )}
                        {project.liveAdminUrl && (
                          <a
                            href={project.liveAdminUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full transition-colors"
                            aria-label="Live Admin"
                            title="Live Admin"
                          >
                            <FiExternalLink size={20} />
                          </a>
                        )}
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-slate-700 hover:bg-slate-600 text-white rounded-full transition-colors"
                            aria-label="GitHub Repository"
                          >
                            <FiGithub size={20} />
                          </a>
                        )}
                      </div>
                    </div>

                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
                          {project.title}
                        </h4>
                      </div>

                      {project.duration && (
                        <div className="mb-3">
                          <DurationBadge duration={project.duration} />
                        </div>
                      )}

                      <p className="text-gray-500 dark:text-gray-400 text-sm mb-4 flex-grow line-clamp-2">
                        {project.description}
                      </p>

                      {/* Compact Tech Stack Grid */}
                      {project.techStack && project.techStack.length > 0 && (
                        <div className="grid grid-cols-4 gap-1.5 mt-auto pt-4 border-t border-gray-100 dark:border-white/5">
                          {project.techStack.slice(0, 8).map((tech, i) => (
                            <TechTile key={i} tech={tech} size="sm" />
                          ))}
                        </div>
                      )}
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        )}
      </div>
    </section>
  );
};

export default Projects;
