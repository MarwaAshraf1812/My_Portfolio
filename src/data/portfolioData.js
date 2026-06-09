import naqlaImg from '../assets/Naqla.png'
import financeImg from '../assets/Finance.png'
import noorImg from '../assets/Noor.png'

export const skillsCategories = [
  {
    title: 'Frontend Technologies',
    icon: 'Layers',
    gradient: 'url(#frontend-grad)',
    skills: ['ReactJS', 'Angular', 'Next.js', 'React Redux', 'Context API', 'Material UI', 'Tailwind CSS', 'Bootstrap', 'HTML/CSS', 'ShadCN', 'UI/UX']
  },
  {
    title: 'Backend Technologies',
    icon: 'Code',
    gradient: 'url(#backend-grad)',
    skills: ['Node.JS', 'Express.js', 'Socket IO', 'RESTful API']
  },
  {
    title: 'AI',
    icon: 'Brain',
    gradient: 'url(#ai-grad)',
    skills: ['RAG', 'fine-tuning', 'Agentic AI and orchestration', 'Langflow', 'OpenPipe']
  },
  {
    title: 'Programming Languages',
    icon: 'Terminal',
    gradient: 'url(#prog-grad)',
    skills: ['JavaScript', 'ES6+', 'TypeScript', 'C++', 'Python']
  },
  {
    title: 'Database Management',
    icon: 'Database',
    gradient: 'url(#db-grad)',
    skills: ['MongoDB', 'PostgreSQL', 'Mysql', 'Prisma', 'Mongoose']
  },
  {
    title: 'DevOps Tools',
    icon: 'Server',
    gradient: 'url(#devops-grad)',
    skills: ['Docker', 'Linux', 'Nginx', 'Github', 'Git']
  },
  {
    title: 'Software Engineering',
    icon: 'GitBranch',
    gradient: 'url(#se-grad)',
    skills: ['OOP', 'Data Structure', 'Algorithms', 'SOLID Principles', 'Design Patterns', 'Unit Testing']
  }
];

export const timelineData = [
  {
    year: '10/2025 — Present',
    role: 'Professional Diploma in Web & UI Development',
    company: 'Information Technology Institute (ITI), Smart Village, Egypt',
    description: '9-Month Professional Training Program in Web & User Interface Development Track.',
    type: 'education'
  },
  {
    year: '2024',
    role: 'React Software Developer',
    company: 'DEPI — Ministry of Communications and IT (Internship)',
    details: [
      'Collaborated in an agile team to architect and build "InnoVest", a full-stack platform featuring a dynamic React.js frontend.',
      'Integrated robust frontend components with backend APIs, optimizing data flow, state management, and platform performance.',
      'Delivered multiple production-ready web applications using JavaScript, Bootstrap, and clean code principles.'
    ],
    type: 'work'
  },
  {
    year: '10/2021 — 07/2025',
    role: 'Bachelor, Business Information System',
    company: 'Modern Academy, Cairo, Egypt',
    description: 'Graduated with an excellent GPA of 3.88. Specialized in business database systems and enterprise web applications.',
    type: 'education'
  },
  {
    year: '09/2023 — 07/2024',
    role: 'Software Engineering, Backend Specialization',
    company: 'ALX — Holberton Inc, Cairo (Hybrid/Remote), Egypt',
    description: 'Professional program focused on backend engineering, RESTful APIs, databases, and low-level programming.',
    type: 'education'
  },
  {
    year: '2023',
    role: 'Web Designer Trainee',
    company: 'IT Gate (Internship)',
    details: [
      'Developed a fully functional, responsive E-commerce platform applying User-Centered Design principles.',
      'Built pixel-perfect user interfaces and interactive client-side components using HTML, CSS, and JavaScript.'
    ],
    type: 'work'
  }
];

export const projectsData = [
  {
    title: 'Naqla AI',
    tag: 'AI · Team',
    category: ['AI', 'Full-Stack'],
    image: naqlaImg,
    description: 'Spearheaded end-to-end design and launch of a real-time AI recruitment pipeline. Built async processing networks to automate post-screening state transitions.',
    tags: ['LangGraph.js', 'BullMQ', 'Redis', 'React', 'Node.js'],
    metric: '5-stage pipeline',
    github: 'https://github.com/MarwaAshraf1812',
    demo: '#'
  },
  {
    title: 'Personal Finance Tracker',
    tag: 'Full-Stack · Team',
    category: ['Full-Stack'],
    image: financeImg,
    description: 'Architected a multi-user financial system using layered MVC. Optimized data processing via MongoDB Aggregation Pipelines across transaction and trend reporting.',
    tags: ['MongoDB', 'Angular', 'Node.js', 'Express.js'],
    metric: '324ms / 10k records',
    github: 'https://github.com/MarwaAshraf1812',
    demo: '#'
  },
  {
    title: 'Workshop Management System',
    tag: 'Backend',
    category: ['Backend'],
    image: 'https://via.placeholder.com/600x400/1A1825/A78BFA?text=Workshop+System',
    description: 'Engineered a scalable REST API to manage workshops and student progress. Integrated Role-Based Access Control and real-time updates using Socket.io.',
    tags: ['Express', 'Prisma', 'PostgreSQL', 'Socket.io', 'Docker'],
    metric: 'Real-time updates',
    github: 'https://github.com/MarwaAshraf1812',
    demo: '#'
  },
  {
    title: 'Noor',
    tag: 'Frontend · Full-Stack',
    category: ['Full-Stack'],
    image: noorImg,
    description: 'Built a full-stack platform to gamify Quran memorization and prayer tracking for children. Engineered a Rewards System with gamification mechanics.',
    tags: ['React', 'Node.js', 'Figma'],
    metric: 'Gamification platform',
    github: 'https://github.com/MarwaAshraf1812',
    demo: '#'
  },
  {
    title: 'InnoVest',
    tag: 'Backend',
    category: [ 'Backend'],
    image: 'https://via.placeholder.com/600x400/1A1825/A78BFA?text=InnoVest',
    description: 'Architected a high-performance investment ecosystem connecting entrepreneurs, investors, and mentors. Built on Clean Architecture and OOP principles.',
    tags: ['Clean Architecture', 'Socket.IO', 'Jest', 'MongoDB'],
    metric: '90% test coverage',
    github: 'https://github.com/MarwaAshraf1812',
    demo: '#'
  },
  {
    title: 'Create Arch CLI',
    tag: 'DevTools · Solo',
    category: ['Backend', 'DevTools'],
    image: 'https://via.placeholder.com/600x400/1A1825/A78BFA?text=Create+Arch+CLI',
    description: 'Developed an automation CLI tool using Node.js to scaffold standardized Express.js backend architectures, instantly generating clean directory structures, routes, and controllers.',
    tags: ['Node.js', 'CLI', 'Automation', 'JavaScript'],
    metric: 'Zero-Config Setup',
    github: 'https://github.com/MarwaAshraf1812/create-arch-cli',
    demo: '#'
  },
  {
    title: 'Harry Potter Task Manager',
    tag: 'Web App · Solo',
    category: ['Frontend'],
    image: 'https://via.placeholder.com/600x400/1A1825/A78BFA?text=HP+Task+Manager',
    description: 'Engineered a dynamic Task Management dashboard using Angular. Integrated core state mechanisms and an immersive Harry Potter theme with responsive UI tracking tools.',
    tags: ['Angular', 'TypeScript', 'RxJS', 'HTML/CSS'],
    metric: 'Interactive UX',
    github: 'https://github.com/MarwaAshraf1812/ITI_Projects/tree/main/Angular/harryPotter-taskManager',
    demo: '#'
  },
  {
    title: 'Tech News App',
    tag: 'Web App · Solo',
    category: ['Frontend'],
    image: 'https://via.placeholder.com/600x400/1A1825/A78BFA?text=Tech+News+App',
    description: 'Built a real-time tech news aggregation interface in React, utilizing structured component architecture and robust state management to parse and display top technical feeds.',
    tags: ['React', 'Context API', 'JavaScript', 'RESTful API'],
    metric: 'Dynamic Feed',
    github: 'https://github.com/MarwaAshraf1812/ITI_Projects/tree/main/react/tech-news-app',
    demo: '#'
  },
  {
    title: 'Wizard Memory Game',
    tag: 'Game · Solo',
    category: ['Frontend'],
    image: 'https://via.placeholder.com/600x400/1A1825/A78BFA?text=Memory+Game',
    description: 'Developed a high-performance card matching memory game leveraging TypeScript to enforce strict typing, handling core state evaluation, custom logic, and smooth interactive DOM updates.',
    tags: ['TypeScript', 'OOP', 'DOM Manipulation', 'CSS Canvas'],
    metric: 'Strict Type-Safety',
    github: 'https://github.com/MarwaAshraf1812/ITI_Projects/tree/main/typescript/day2/memoryGame',
    demo: '#'
  },
];
