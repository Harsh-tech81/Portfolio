import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { projects } from "../data/projects";
import SectionHeading from "../components/common/SectionHeading";
import AnimatedSection from "../components/common/AnimatedSection";
import Card from "../components/common/Card";
import Button from "../components/common/Button";
import { FiExternalLink, FiGithub, FiCalendar, FiCode, FiArrowRight, FiChevronDown, FiChevronUp, FiCheck } from "react-icons/fi";
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
  "Framer Motion": SiReact,
  "Three.js": FiCode,
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

/** Duration badge component */
const DurationBadge = ({ duration }) => (
  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 dark:text-blue-400 text-xs font-medium border border-blue-500/20">
    <FiCalendar className="text-[10px]" />
    {duration}
  </div>
);

/** Show More / Show Less toggle button */
const ExpandToggle = ({ expanded, onClick, label = "details" }) => (
  <button
    onClick={onClick}
    className="inline-flex items-center gap-1.5 px-3 py-1.5 mt-2 rounded-lg text-xs font-semibold tracking-wide uppercase cursor-pointer
      text-blue-500 dark:text-blue-400 bg-blue-500/5 hover:bg-blue-500/10 border border-blue-500/15 hover:border-blue-500/30
      transition-all duration-300 group"
  >
    {expanded ? (
      <>
        Show Less <FiChevronUp className="transition-transform duration-300 group-hover:-translate-y-0.5" size={14} />
      </>
    ) : (
      <>
        Show More <FiChevronDown className="transition-transform duration-300 group-hover:translate-y-0.5" size={14} />
      </>
    )}
  </button>
);

/** Station card for the timeline — enhanced design without timeline balls */
const StationCard = ({ project, index, stationNum }) => {
  const isLeft = index % 2 === 0;
  const CategoryIcon = categoryIconMap[project.category] || FiCode;
  const [showAllTech, setShowAllTech] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const MAX_VISIBLE_TECH = 4;
  const MAX_VISIBLE_FEATURES = 3;
  const allTech = project.techStack || [];
  const visibleTech = showAllTech ? allTech : allTech.slice(0, MAX_VISIBLE_TECH);
  const remainingCount = allTech.length - MAX_VISIBLE_TECH;
  const allFeatures = project.features || [];
  const visibleFeatures = showMore ? allFeatures : allFeatures.slice(0, MAX_VISIBLE_FEATURES);

  // Pick first available link for the "Explore" action
  const exploreUrl = project.liveUrl || project.liveClientUrl || project.githubUrl;

  return (
    <motion.div
      className={`station-row ${isLeft ? "left-card" : "right-card"}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      {/* Card */}
      <motion.div
        className="station-card"
        variants={isLeft ? slideInFromLeft : slideInFromRight}
      >
        {/* Gradient accent bar at top */}
        <div className="station-card-accent" />

        {/* Card Header — icon badge + category + duration + station number */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="station-icon-badge">
              <CategoryIcon />
            </div>
            {project.category && (
              <span className="inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-semibold tracking-wide uppercase bg-purple-500/8 text-purple-500 dark:text-purple-400 border border-purple-500/15">
                {project.category}
              </span>
            )}
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

        {/* Description — expandable */}
        <div className="mb-4">
          <p className={`text-sm text-gray-600 dark:text-gray-400 leading-relaxed ${!showMore ? "line-clamp-3 sm:line-clamp-none" : ""}`}>
            {project.description}
          </p>
        </div>

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

        {/* Key Features — expandable with checkmark icons */}
        {allFeatures.length > 0 && (
          <div className="mb-4">
            <AnimatePresence initial={false}>
              <ul className="space-y-1.5">
                {visibleFeatures.map((feature, i) => (
                  <motion.li
                    key={i}
                    initial={i >= MAX_VISIBLE_FEATURES ? { opacity: 0, height: 0 } : false}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="flex items-start gap-2 text-xs text-gray-500 dark:text-gray-500"
                  >
                    <FiCheck className="mt-0.5 text-emerald-500 shrink-0" size={12} />
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </AnimatePresence>
            {allFeatures.length > MAX_VISIBLE_FEATURES && (
              <ExpandToggle
                expanded={showMore}
                onClick={() => setShowMore(!showMore)}
              />
            )}
          </div>
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

/** Railway Timeline wrapper for featured projects — no balls, just clean track + cards */
const RailwayTimeline = ({ featuredProjects }) => {
  const timelineRef = useRef(null);

  return (
    <div ref={timelineRef} className="railway-timeline mt-16">
      {/* The track */}
      <div className="railway-track" />
      <div className="railway-glow-line" />

      {/* Station cards */}
      {featuredProjects.map((project, index) => (
        <StationCard
          key={project.id || index}
          project={project}
          index={index}
          stationNum={String(index + 1).padStart(2, "0")}
        />
      ))}

      {/* End-of-line text marker (no dot) */}
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
                <RegularProjectCard key={project.id || index} project={project} index={index} />
              ))}
            </div>
          </AnimatedSection>
        )}
      </div>
    </section>
  );
};

/** Regular project card with expandable content */
const RegularProjectCard = ({ project, index }) => {
  const [showMore, setShowMore] = useState(false);
  const [showAllTech, setShowAllTech] = useState(false);
  const MAX_VISIBLE_TECH = 8;
  const MAX_VISIBLE_FEATURES = 3;
  const allTech = project.techStack || [];
  const visibleTech = showAllTech ? allTech : allTech.slice(0, MAX_VISIBLE_TECH);
  const techRemaining = allTech.length - MAX_VISIBLE_TECH;
  const allFeatures = project.features || [];
  const visibleFeatures = showMore ? allFeatures : allFeatures.slice(0, MAX_VISIBLE_FEATURES);
  const CategoryIcon = categoryIconMap[project.category] || FiCode;

  return (
    <motion.div
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
          {/* Category + Title row */}
          <div className="flex items-center gap-2 mb-2">
            <CategoryIcon className="text-blue-500 shrink-0" size={16} />
            <h4 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
              {project.title}
            </h4>
          </div>

          {project.duration && (
            <div className="mb-3">
              <DurationBadge duration={project.duration} />
            </div>
          )}

          {/* Description — expandable */}
          <div className="mb-3">
            <p className={`text-gray-500 dark:text-gray-400 text-sm leading-relaxed ${!showMore ? "line-clamp-2" : ""}`}>
              {project.description}
            </p>
          </div>

          {/* Features — expandable */}
          {allFeatures.length > 0 && (
            <div className="mb-3">
              <ul className="space-y-1">
                {visibleFeatures.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-xs text-gray-500 dark:text-gray-500"
                  >
                    <FiCheck className="mt-0.5 text-emerald-500 shrink-0" size={11} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              {allFeatures.length > MAX_VISIBLE_FEATURES && (
                <ExpandToggle
                  expanded={showMore}
                  onClick={() => setShowMore(!showMore)}
                />
              )}
            </div>
          )}

          {/* Tech Stack Grid */}
          {allTech.length > 0 && (
            <div className="mt-auto pt-4 border-t border-gray-100 dark:border-white/5">
              <div className="flex flex-wrap gap-1.5">
                {visibleTech.map((tech, i) => (
                  <span key={i} className="tech-pill text-[9px]">{tech}</span>
                ))}
                {!showAllTech && techRemaining > 0 && (
                  <button
                    onClick={() => setShowAllTech(true)}
                    className="tech-pill text-[9px] opacity-60 cursor-pointer hover:opacity-100 transition-opacity"
                  >
                    +{techRemaining} more
                  </button>
                )}
                {showAllTech && allTech.length > MAX_VISIBLE_TECH && (
                  <button
                    onClick={() => setShowAllTech(false)}
                    className="tech-pill text-[9px] opacity-60 cursor-pointer hover:opacity-100 transition-opacity"
                  >
                    Show less
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </Card>
    </motion.div>
  );
};

export default Projects;
