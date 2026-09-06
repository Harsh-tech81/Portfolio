import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { projects } from "../data/projects";
import SectionHeading from "../components/common/SectionHeading";
import AnimatedSection from "../components/common/AnimatedSection";
import Card from "../components/common/Card";
import Button from "../components/common/Button";
import { FiExternalLink, FiGithub, FiCalendar, FiCode, FiArrowRight } from "react-icons/fi";
import {
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiRedux,
  SiDocker,
  SiRedis,
  SiStripe,
  SiTailwindcss,
  SiNextdotjs,
  SiGithubactions,
  SiJsonwebtokens,
  SiRazorpay,
  SiQdrant,
  SiLanggraph,
  SiLangchain,
  SiGooglegemini,
} from "react-icons/si";
import { FaAws, FaCloud, FaRobot, FaShoppingCart, FaComments, FaHandHoldingHeart, FaLaptopCode } from "react-icons/fa";
import { FiImage } from "react-icons/fi";
import {
  fadeInUp,
  staggerContainer,
  staggerContainerFast,
  blurIn,
  slideInFromLeft,
  slideInFromRight,
  scaleInStation,
} from "../utils/animations";
import Tilt from "../components/ui/Tilt";

/**
 * Maps tech stack name strings to their react-icons components.
 * Falls back to FiCode for unknown tech.
 */
const techIconMap = {
  React: SiReact,
  "Redux Toolkit": SiRedux,
  "Node.js": SiNodedotjs,
  "Express.js": SiExpress,
  MongoDB: SiMongodb,
  Docker: SiDocker,
  AWS: FaAws,
  Redis: SiRedis,
  "GitHub Actions": SiGithubactions,
  Stripe: SiStripe,
  "Tailwind CSS": SiTailwindcss,
  "Next.js": SiNextdotjs,
  JWT: SiJsonwebtokens,
  Mongoose: SiMongodb,
  "NextAuth.js": SiNextdotjs,
  Cloudinary: FaCloud,
  LangChain: SiLangchain,
  LangGraph: SiLanggraph,
  Qdrant: SiQdrant,
  Razorpay: SiRazorpay,
  "Google Gemini API": SiGooglegemini,
  ImageKit: FiImage,
};

/**
 * Maps project category to icon component.
 */
const categoryIconMap = {
  "AI Platform": FaRobot,
  "E-Commerce": FaShoppingCart,
  "AI Chatbot": FaComments,
  Crowdfunding: FaHandHoldingHeart,
  Portfolio: FaLaptopCode,
};

/** Render a single tech icon + name tile (used in regular project cards) */
const TechTile = ({ tech, size = "md" }) => {
  const Icon = techIconMap[tech] || null;
  const isMd = size === "md";

  return (
    <div
      className={`flex flex-col items-center gap-1.5 rounded-lg bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-500/10 hover:-translate-y-1 hover:shadow-md hover:shadow-blue-500/20 transition-all duration-300 group cursor-pointer ${
        isMd ? "p-2.5" : "p-2"
      }`}
      title={tech}
    >
      {Icon ? (
        <Icon
          size={isMd ? 20 : 16}
          className="text-gray-500 dark:text-gray-400 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors duration-300"
        />
      ) : (
        <FiCode
          size={isMd ? 20 : 16}
          className="text-gray-500 dark:text-gray-400 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors duration-300"
        />
      )}
      <span
        className={`font-medium text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors duration-300 text-center leading-tight ${
          isMd ? "text-[10px]" : "text-[8px] truncate w-full"
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

/** Station card for the timeline — now with embedded project image */
const StationCard = ({ project, index, stationNum }) => {
  const isLeft = index % 2 === 0;
  const CategoryIcon = categoryIconMap[project.category] || FiCode;
  const [showAllTech, setShowAllTech] = useState(false);
  const MAX_VISIBLE_TECH = 4;
  const allTech = project.techStack || [];
  const visibleTech = showAllTech ? allTech : allTech.slice(0, MAX_VISIBLE_TECH);
  const remainingCount = allTech.length - MAX_VISIBLE_TECH;

  // Pick first available link for the "Explore" action
  const exploreUrl = project.liveUrl || project.liveClientUrl || project.githubUrl;

  return (
    <motion.div
      className={`station-row ${isLeft ? "left-card" : "right-card"}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      {/* Station node on the track */}
      <motion.div className="station-node" variants={scaleInStation}>
        <div className="station-node-outer">
          <div className="station-node-inner" />
        </div>
      </motion.div>



      {/* Card */}
      <motion.div
        className="station-card"
        variants={isLeft ? slideInFromLeft : slideInFromRight}
      >
        {/* Card Header — icon badge + duration + station number */}
        <div className="flex items-start justify-between mb-4">
          <div className="station-icon-badge">
            <CategoryIcon />
          </div>
          <div className="flex flex-col items-end gap-1.5">
            {project.duration && (
              <span className="text-[11px] font-medium text-gray-500 dark:text-gray-500 tracking-wide font-mono">
                {project.duration.toUpperCase()}
              </span>
            )}
            <span className="station-number">STN {stationNum}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 leading-tight">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Embedded Project Image Preview */}
        {project.image && (
          <div className="relative rounded-xl overflow-hidden mb-4 border border-gray-200 dark:border-white/8 group/img">
            <div className="aspect-[16/9] overflow-hidden bg-gray-100 dark:bg-white/5">
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="w-full h-full object-contain transition-transform duration-500 group-hover/img:scale-105"
              />
            </div>
            {/* Hover overlay with quick links */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] opacity-0 group-hover/img:opacity-100 transition-all duration-300 flex items-center justify-center gap-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-all duration-200 hover:scale-110"
                  title="Live Demo"
                >
                  <FiExternalLink size={16} />
                </a>
              )}
              {project.liveClientUrl && (
                <a
                  href={project.liveClientUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-all duration-200 hover:scale-110"
                  title="Live Client"
                >
                  <FiExternalLink size={16} />
                </a>
              )}
              {project.liveAdminUrl && (
                <a
                  href={project.liveAdminUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-purple-600 hover:bg-purple-700 text-white rounded-full transition-all duration-200 hover:scale-110"
                  title="Live Admin"
                >
                  <FiExternalLink size={16} />
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-gray-700 hover:bg-gray-600 text-white rounded-full transition-all duration-200 hover:scale-110"
                  title="GitHub"
                >
                  <FiGithub size={16} />
                </a>
              )}
            </div>
          </div>
        )}

        {/* Key Features — compact */}
        {project.features && project.features.length > 0 && (
          <ul className="space-y-1 mb-4">
            {project.features.slice(0, 3).map((feature, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-xs text-gray-500 dark:text-gray-500"
              >
                <span className="mt-1 w-1 h-1 rounded-full bg-blue-500 shrink-0" />
                <span className="line-clamp-1">{feature}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Tech pills */}
        {visibleTech.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-5">
            {visibleTech.map((tech, i) => (
              <span key={i} className="tech-pill">{tech}</span>
            ))}
            {!showAllTech && remainingCount > 0 && (
              <button
                onClick={() => setShowAllTech(true)}
                className="tech-pill opacity-60 cursor-pointer hover:opacity-100 transition-opacity"
              >
                +{remainingCount} more
              </button>
            )}
            {showAllTech && allTech.length > MAX_VISIBLE_TECH && (
              <button
                onClick={() => setShowAllTech(false)}
                className="tech-pill opacity-60 cursor-pointer hover:opacity-100 transition-opacity"
              >
                Show less
              </button>
            )}
          </div>
        )}

        {/* Action footer */}
        <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-white/5">
          {exploreUrl && (
            <a
              href={exploreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="explore-link"
            >
              Explore {project.category || "Project"}{" "}
              <FiArrowRight className="arrow" />
            </a>
          )}
          <div className="flex items-center gap-1.5">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-gray-400 hover:text-blue-500 hover:bg-blue-500/10 transition-all duration-300"
                title="Live Demo"
              >
                <FiExternalLink size={15} />
              </a>
            )}
            {project.liveClientUrl && (
              <a
                href={project.liveClientUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-gray-400 hover:text-blue-500 hover:bg-blue-500/10 transition-all duration-300"
                title="Live Client"
              >
                <FiExternalLink size={15} />
              </a>
            )}
            {project.liveAdminUrl && (
              <a
                href={project.liveAdminUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-gray-400 hover:text-purple-500 hover:bg-purple-500/10 transition-all duration-300"
                title="Live Admin"
              >
                <FiExternalLink size={15} />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-500/10 transition-all duration-300"
                title="GitHub"
              >
                <FiGithub size={15} />
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

/** Railway Timeline wrapper for featured projects */
const RailwayTimeline = ({ featuredProjects }) => {
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start end", "end start"],
  });

  // Train only moves downward — clamp so it never reverses
  const trainTop = useTransform(scrollYProgress, (v) => `${Math.min(v * 100, 100)}%`);

  return (
    <div ref={timelineRef} className="railway-timeline mt-16">
      {/* The track */}
      <div className="railway-track" />
      <div className="railway-glow-line" />

      {/* Scroll-tracking glow dot */}
      <motion.div className="train-indicator" style={{ top: trainTop }} />
      {/* Pulsing ring around the glow dot */}
      <motion.div
        className="absolute z-10 w-[18px] h-[18px] rounded-full border-2 border-purple-400/50"
        style={{ top: trainTop, left: "50%", x: "-50%" }}
        animate={{ scale: [1, 1.8, 1], opacity: [0.6, 0, 0.6] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Station cards */}
      {featuredProjects.map((project, index) => (
        <StationCard
          key={project.id || index}
          project={project}
          index={index}
          stationNum={String(index + 1).padStart(2, "0")}
        />
      ))}

      {/* End-of-line marker */}
      <motion.div
        className="end-of-line"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <p className="end-of-line-text">
          — End of line · More shipping soon —
        </p>
      </motion.div>
    </div>
  );
};

const Projects = () => {
  const featuredProjects = projects?.filter((p) => p.featured) || [];
  const regularProjects = projects?.filter((p) => !p.featured) || [];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading title="Projects" subtitle="Some of my recent work" />

        {/* Featured Projects — Railway Timeline */}
        {featuredProjects.length > 0 && (
          <RailwayTimeline featuredProjects={featuredProjects} />
        )}

        {/* Regular Projects Grid */}
        {regularProjects.length > 0 && (
          <AnimatedSection variants={staggerContainer} className="mt-24">
            <h3 className="text-2xl font-bold mb-8 text-center text-gray-900 dark:text-white">
              Other Noteworthy Projects
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularProjects.map((project, index) => (
                <motion.div
                  key={project.id || index}
                  variants={fadeInUp}
                  className="h-full"
                >
                  <Card
                    tilt
                    className="h-full flex flex-col overflow-hidden group hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300"
                  >
                    <div className="relative aspect-video overflow-hidden">
                      {project.image ? (
                        <img
                          src={project.image}
                          alt={project.title}
                          loading="lazy"
                          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 flex items-center justify-center">
                          <span className="text-xl font-bold text-gray-500/50">
                            {project.title}
                          </span>
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
