import React from "react";
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiCplusplus,
  // SiJsonwebtokens,
  SiC,
  SiReact,
  SiNextdotjs,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiBootstrap,
  SiRedux,
  SiFramer,
  SiNodedotjs,
  SiExpress,
  SiGraphql,
  SiSocketdotio,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiRedis,
  SiFirebase,
  SiKubernetes,
  SiGithubactions,
  SiNginx,
  SiGooglecloud,
  SiVercel,
  SiNetlify,
  SiPostman,
  SiFigma,
  SiJira,
  SiNotion,
  SiLinux,
  SiGit,
  SiGithub,
  SiGitlab,
  SiBitbucket,
  SiTensorflow,
  SiPytorch,
  SiScikitlearn,
  SiJsonwebtokens,
} from "react-icons/si";
import {
  FaJava,
  FaDocker,
  FaAws,
  FaCloud,
  FaDatabase,
  FaNetworkWired,
  FaLaptopCode,
  FaMicrochip,
} from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";

export const skills = [
  {
    category: "Programming Languages",
    icon: <SiJavascript />,
    skills: [
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "Python", icon: <SiPython /> },
      { name: "Java", icon: <FaJava /> },
      { name: "C++", icon: <SiCplusplus /> },
      { name: "C", icon: <SiC /> },
    ],
  },
  {
    category: "Frontend",
    icon: <SiReact />,
    skills: [
      { name: "React.js", icon: <SiReact /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "HTML5", icon: <SiHtml5 /> },
      { name: "CSS3", icon: <SiCss /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      // { name: "React Router", icon: <SiReact /> },
      { name: "Bootstrap", icon: <SiBootstrap /> },
      { name: "Redux", icon: <SiRedux /> },
      { name: "Framer Motion", icon: <SiFramer /> },
    ],
  },
  {
    category: "Backend",
    icon: <SiNodedotjs />,
    skills: [
      { name: "Node.js", icon: <SiNodedotjs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "REST APIs", icon: <SiNodedotjs /> }, // Generic icon for REST APIs
      { name: "JWT", icon: <SiJsonwebtokens /> },
      { name: "Socket.io", icon: <SiSocketdotio /> },
    ],
  },
  {
    category: "Databases",
    icon: <SiMongodb />,
    skills: [
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "MySQL", icon: <SiMysql /> },
      { name: "Redis", icon: <SiRedis /> },
      // { name: "Qdrant Vector DB", icon: <FaDatabase /> },
    ],
  },
  {
    category: "DevOps",
    icon: <FaDocker />,
    skills: [
      { name: "Docker", icon: <FaDocker /> },
      { name: "CI/CD", icon: <SiGithubactions /> }, // Using GitHub actions as a proxy for CI/CD
      { name: "GitHub Actions", icon: <SiGithubactions /> },
      { name: "Nginx", icon: <SiNginx /> },
    ],
  },
  {
    category: "Cloud",
    icon: <FaAws />,
    skills: [
      { name: "AWS", icon: <FaAws /> },
      // { name: "Google Cloud", icon: <SiGooglecloud /> },
      // { name: "Vercel", icon: <SiVercel /> },
    ],
  },
  {
    category: "Tools",
    icon: <VscVscode />,
    skills: [
      { name: "VS Code", icon: <VscVscode /> },
      { name: "Postman", icon: <SiPostman /> },
    ],
  },
  {
    category: "Version Control",
    icon: <SiGit />,
    skills: [
      { name: "Git", icon: <SiGit /> },
      { name: "GitHub", icon: <SiGithub /> },
    ],
  },
  {
    category: "AI / ML",
    icon: <SiTensorflow />,
    skills: [
      // { name: 'TensorFlow', icon: <SiTensorflow /> },
      // { name: 'PyTorch', icon: <SiPytorch /> },
      // { name: 'Scikit-learn', icon: <SiScikitlearn /> },
      // { name: 'NLP', icon: <SiTensorflow /> }, // Placeholder for NLP
      // { name: 'Computer Vision', icon: <SiPytorch /> } // Placeholder for Computer Vision

      { name: "LangChain", icon: <SiGit /> },
      { name: "LangGraph", icon: <SiGithub /> },
      { name: "RAG", icon: <SiGit /> },
      { name: "Groq", icon: <SiGithub /> },
      { name: "Vector Search", icon: <SiGithub /> },
    ],
  },
  {
    category: "Architecture",
    icon: <FaCloud />,
    skills: [
      { name: "Microservices", icon: <FaCloud /> },
      { name: "API Gateway", icon: <FaCloud /> },
      { name: "System Design", icon: <FaCloud /> },
    ],
  },
  {
    category: "CS Fundamentals",
    icon: <FaLaptopCode />,
    skills: [
      { name: "Data Structures", icon: <FaDatabase /> },
      { name: "Algorithms", icon: <FaMicrochip /> },
      { name: "OOP", icon: <FaLaptopCode /> },
      { name: "DBMS", icon: <FaDatabase /> },
      { name: "Operating Systems", icon: <SiLinux /> },
      { name: "Computer Networks", icon: <FaNetworkWired /> },
    ],
  },
];
