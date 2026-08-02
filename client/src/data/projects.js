export const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-featured MERN stack e-commerce platform. Includes user authentication, product management, shopping cart, and secure checkout with Stripe integration.',
    features: [
      'User authentication with JWT',
      'Admin dashboard for product management',
      'Shopping cart and order tracking',
      'Payment gateway integration'
    ],
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Redux', 'Stripe'],
    image: '/projects/project-1.jpg',
    liveUrl: '#',
    githubUrl: '#',
    featured: true
  },
  {
    id: 2,
    title: 'Real-Time Chat App',
    description: 'A seamless real-time messaging application using Socket.io and React. Supports private and group chats, read receipts, and online status indicators.',
    features: [
      'Real-time bi-directional communication',
      'Private and group messaging',
      'Typing indicators and read receipts',
      'Secure user authentication'
    ],
    techStack: ['React', 'Node.js', 'Express', 'Socket.io', 'MongoDB'],
    image: '/projects/project-2.jpg',
    liveUrl: '#',
    githubUrl: '#',
    featured: true
  },
  {
    id: 3,
    title: 'AI Content Generator',
    description: 'An AI-powered tool for generating high-quality blog posts and marketing copy. Built with Next.js and integrates the OpenAI API for natural language processing.',
    features: [
      'Integration with OpenAI API',
      'Multiple content templates',
      'History tracking and favorites',
      'Responsive design with Tailwind CSS'
    ],
    techStack: ['Next.js', 'React', 'Tailwind CSS', 'OpenAI API'],
    image: '/projects/project-3.jpg',
    liveUrl: '#',
    githubUrl: '#',
    featured: false
  },
  {
    id: 4,
    title: 'Task Management Dashboard',
    description: 'A comprehensive task management dashboard inspired by Jira. Allows users to create tasks, organize them in Kanban boards, and track project progress.',
    features: [
      'Drag-and-drop Kanban boards',
      'Task assignment and due dates',
      'Real-time updates with Firebase',
      'State management with Redux'
    ],
    techStack: ['React', 'Redux', 'Firebase', 'Tailwind CSS'],
    image: '/projects/project-4.jpg',
    liveUrl: '#',
    githubUrl: '#',
    featured: false
  }
];
