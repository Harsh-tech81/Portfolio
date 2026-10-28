/**
 * Positions of Responsibility Data
 * 
 * To add more positions, simply add a new object to this array following the same structure.
 * 
 * Example:
 * {
 *   id: 3,
 *   role: "Your Role",
 *   organization: "Organization / Club Name",
 *   duration: "Duration (e.g., Aug 2025 - Present)",
 *   type: "Technical Club / Open Source / Student Body",
 *   badge: "Lead / Core Team / Contributor",
 *   location: "Patna, Bihar / Remote",
 *   description: "Brief summary of your impact and scope of work.",
 *   responsibilities: [
 *     "Key responsibility or achievement 1",
 *     "Key responsibility or achievement 2"
 *   ],
 *   technologies: ["React", "Node.js", "Team Leadership"],
 *   link: "https://example.com" // optional
 * }
 */

export const responsibilities = [
  {
    id: 1,
    role: "Web Developer",
    organization: "Web Development Cell (WDC) Club, NITP",
    shortOrg: "WDC Club, NIT Patna",
    duration: "March 2026",
    type: "Technical Club",
    badge: "Institute Technical Club",
    location: "NIT Patna, Bihar, India",
    description:
      "Selected as a core Web Developer at Web Development Cell (WDC), the premier technical web society at the National Institute of Technology Patna (NITP). Responsible for developing institute platforms, event portals, and conducting technical initiatives.",
    responsibilities: [
      "Architecting and developing modern, responsive web applications and portals for institute events, hackathons, and student activities.",
      "Collaborating in an agile environment with fellow developers and designers using modern frontend and backend technologies.",
      "Conducting code reviews, optimizing web performance, and mentoring junior batchmates in modern web development practices."
    ],
    technologies: ["React.js", "JavaScript", "Tailwind CSS", "Node.js", "Git", "Team Collaboration"],
    link: "https://www.nitp.ac.in",
  },
  {
    id: 2,
    role: "Contributor",
    organization: "GirlScript Summer of Code (GSSoC’25)",
    shortOrg: "GSSoC'25",
    duration: "2025",
    type: "Open Source Program",
    badge: "Open Source",
    location: "Remote / Open Source",
    description:
      "Contributed to global open-source projects under GirlScript Summer of Code (GSSoC'25), one of the largest open-source development programs, solving real-world issues, writing clean code, and collaborating with international maintainers.",
    responsibilities: [
      "Resolved complex bugs, implemented modular frontend UI components, and improved backend endpoints across open-source codebases.",
      "Collaborated with project maintainers and global developer communities through Git and GitHub pull requests.",
      "Authored clean documentation, improved project maintainability, and actively participated in code discussions."
    ],
    technologies: ["React.js", "Node.js", "Git", "GitHub", "Open Source", "Full Stack Development"],
    link: "https://gssoc.girlscript.tech",
  },
];
