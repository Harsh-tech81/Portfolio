import React from 'react';
import { 
  SiJavascript, SiTypescript, SiPython, SiCplusplus, SiC, 
  SiReact, SiNextdotjs, SiHtml5, SiCss3, SiTailwindcss, SiBootstrap, SiRedux, SiFramer,
  SiNodedotjs, SiExpress, SiGraphql, SiSocketdotio,
  SiMongodb, SiPostgresql, SiMysql, SiRedis, SiFirebase,
  SiKubernetes, SiGithubactions, SiNginx,
  SiAmazon, SiGooglecloud, SiVercel, SiNetlify, SiHeroku,
  SiPostman, SiFigma, SiJira, SiNotion, SiLinux,
  SiGit, SiGithub, SiGitlab, SiBitbucket,
  SiTensorflow, SiPytorch, SiScikitlearn
} from 'react-icons/si';
import { FaJava, FaDocker } from 'react-icons/fa';
import { VscVscode } from 'react-icons/vsc';

export const skills = [
  {
    category: 'Programming Languages',
    icon: <SiJavascript />,
    skills: [
      { name: 'JavaScript', icon: <SiJavascript /> },
      { name: 'TypeScript', icon: <SiTypescript /> },
      { name: 'Python', icon: <SiPython /> },
      { name: 'Java', icon: <FaJava /> },
      { name: 'C++', icon: <SiCplusplus /> },
      { name: 'C', icon: <SiC /> }
    ]
  },
  {
    category: 'Frontend',
    icon: <SiReact />,
    skills: [
      { name: 'React.js', icon: <SiReact /> },
      { name: 'Next.js', icon: <SiNextdotjs /> },
      { name: 'HTML5', icon: <SiHtml5 /> },
      { name: 'CSS3', icon: <SiCss3 /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
      { name: 'Bootstrap', icon: <SiBootstrap /> },
      { name: 'Redux', icon: <SiRedux /> },
      { name: 'Framer Motion', icon: <SiFramer /> }
    ]
  },
  {
    category: 'Backend',
    icon: <SiNodedotjs />,
    skills: [
      { name: 'Node.js', icon: <SiNodedotjs /> },
      { name: 'Express.js', icon: <SiExpress /> },
      { name: 'REST APIs', icon: <SiNodedotjs /> }, // Generic icon for REST APIs
      { name: 'GraphQL', icon: <SiGraphql /> },
      { name: 'Socket.io', icon: <SiSocketdotio /> }
    ]
  },
  {
    category: 'Databases',
    icon: <SiMongodb />,
    skills: [
      { name: 'MongoDB', icon: <SiMongodb /> },
      { name: 'PostgreSQL', icon: <SiPostgresql /> },
      { name: 'MySQL', icon: <SiMysql /> },
      { name: 'Redis', icon: <SiRedis /> },
      { name: 'Firebase', icon: <SiFirebase /> }
    ]
  },
  {
    category: 'DevOps',
    icon: <FaDocker />,
    skills: [
      { name: 'Docker', icon: <FaDocker /> },
      { name: 'Kubernetes', icon: <SiKubernetes /> },
      { name: 'CI/CD', icon: <SiGithubactions /> }, // Using GitHub actions as a proxy for CI/CD
      { name: 'GitHub Actions', icon: <SiGithubactions /> },
      { name: 'Nginx', icon: <SiNginx /> }
    ]
  },
  {
    category: 'Cloud',
    icon: <SiAmazon />,
    skills: [
      { name: 'AWS', icon: <SiAmazon /> },
      { name: 'Google Cloud', icon: <SiGooglecloud /> },
      { name: 'Vercel', icon: <SiVercel /> },
      { name: 'Netlify', icon: <SiNetlify /> },
      { name: 'Heroku', icon: <SiHeroku /> }
    ]
  },
  {
    category: 'Tools',
    icon: <VscVscode />,
    skills: [
      { name: 'VS Code', icon: <VscVscode /> },
      { name: 'Postman', icon: <SiPostman /> },
      { name: 'Figma', icon: <SiFigma /> },
      { name: 'Jira', icon: <SiJira /> },
      { name: 'Notion', icon: <SiNotion /> },
      { name: 'Linux', icon: <SiLinux /> }
    ]
  },
  {
    category: 'Version Control',
    icon: <SiGit />,
    skills: [
      { name: 'Git', icon: <SiGit /> },
      { name: 'GitHub', icon: <SiGithub /> },
      { name: 'GitLab', icon: <SiGitlab /> },
      { name: 'Bitbucket', icon: <SiBitbucket /> }
    ]
  },
  {
    category: 'AI / ML',
    icon: <SiTensorflow />,
    skills: [
      { name: 'TensorFlow', icon: <SiTensorflow /> },
      { name: 'PyTorch', icon: <SiPytorch /> },
      { name: 'Scikit-learn', icon: <SiScikitlearn /> },
      { name: 'NLP', icon: <SiTensorflow /> }, // Placeholder for NLP
      { name: 'Computer Vision', icon: <SiPytorch /> } // Placeholder for Computer Vision
    ]
  }
];
