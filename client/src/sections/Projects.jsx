import React from 'react';
import { motion } from 'motion/react';
import { projects } from '../data/projects';
import SectionHeading from '../components/common/SectionHeading';
import AnimatedSection from '../components/common/AnimatedSection';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { fadeInUp, staggerContainer } from '../utils/animations';

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
                viewport={{ once: true, margin: "-100px" }}
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
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
                        <span className="text-2xl font-bold text-gray-300/50">{project.title}</span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300"></div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-1/2 space-y-6">
                  <div className="inline-block px-3 py-1 bg-purple-500/10 text-purple-400 text-xs font-semibold rounded-full border border-purple-500/20">
                    Featured Project
                  </div>
                  <h3 className="text-3xl font-bold">{project.title}</h3>
                  
                  <Card className="p-6 bg-slate-800/50 backdrop-blur border-slate-700/50 shadow-xl relative z-10 lg:-ml-12 lg:mr-0 group-even:lg:ml-0 group-even:lg:-mr-12">
                    <p className="text-gray-300 leading-relaxed">
                      {project.description}
                    </p>
                  </Card>
                  
                  {project.features && project.features.length > 0 && (
                    <ul className="space-y-2">
                      {project.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-300">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0"></span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="flex flex-wrap gap-2">
                    {project.technologies?.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-xs font-medium border border-blue-500/20">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 pt-4">
                    {project.liveUrl && (
                      <Button as="a" href={project.liveUrl} target="_blank" rel="noopener noreferrer" variant="primary" icon={<FiExternalLink />}>
                        Live Demo
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button as="a" href={project.githubUrl} target="_blank" rel="noopener noreferrer" variant="secondary" icon={<FiGithub />}>
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
          <AnimatedSection 
            variants={staggerContainer}
            className="mt-24"
          >
            <h3 className="text-2xl font-bold mb-8 text-center">Other Noteworthy Projects</h3>
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
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
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
                      <h4 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h4>
                      <p className="text-gray-400 text-sm mb-6 flex-grow line-clamp-2">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mt-auto">
                        {project.technologies?.map((tech, i) => (
                          <span key={i} className="px-2 py-1 bg-blue-500/10 text-blue-400 rounded-md text-[10px] font-medium uppercase tracking-wider">
                            {tech}
                          </span>
                        ))}
                      </div>
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
