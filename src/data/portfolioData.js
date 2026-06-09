import naqlaImg from '../assets/Naqla.png'
import financeImg from '../assets/Finance.png'
import noorImg from '../assets/Noor.png'
import workshop from '../assets/Workshop.png'
import InnoVest from '../assets/Innovest.png'
import cliImg from '../assets/CLI.png'
import taskImg from '../assets/taskmanaager.png'
import IcedIMg from '../assets/Iced.png'


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
    description: 'Designed an AI recruitment pipeline with async networks for automated post-screening state transitions.',
    tags: ['LangGraph.js', 'BullMQ', 'Redis', 'React', 'Node.js'],
    metric: '5-stage pipeline',
    github: 'https://github.com/orgs/RecruitAIApp/repositories',
    demo: 'https://github.com/RecruitAIApp/client'
  },
  {
    title: 'Personal Finance Tracker',
    tag: 'Full-Stack · Team',
    category: ['Full-Stack'],
    image: financeImg,
    description: 'Architected a multi-user financial system. Optimized reporting via MongoDB Aggregation Pipelines.',
    tags: ['MongoDB', 'Angular', 'Node.js', 'Express.js'],
    metric: '324ms / 10k records',
    github: 'https://github.com/MarwaAshraf1812/finance-tracker-app',
    demo: 'https://github.com/MarwaAshraf1812/finance-tracker-app'
  },
  {
    title: 'Workshop Management System',
    tag: 'Backend',
    category: ['Backend'],
    image: workshop,
    description: 'Engineered a REST API for workshop management, featuring RBAC and real-time Socket.io updates.',
    tags: ['Express', 'Prisma', 'PostgreSQL', 'Socket.io', 'Docker'],
    metric: 'Real-time updates',
    github: 'https://github.com/MarwaAshraf1812/workshop_management_server',
    demo: 'https://github.com/MarwaAshraf1812/workshop_management_server'
  },
  {
    title: 'Noor',
    tag: 'Frontend · Full-Stack',
    category: ['Full-Stack'],
    image: noorImg,
    description: 'Built a full-stack gamified platform for children to track prayers and Quran memorization.',
    tags: ['React', 'Node.js', 'Figma'],
    metric: 'Gamification platform',
    github: 'https://github.com/MarwaAshraf1812/Noor.git',
    demo: 'https://github.com/MarwaAshraf1812/Noor.git'
  },
  {
    title: 'InnoVest',
    tag: 'Backend',
    category: [ 'Backend'],
    image: InnoVest,
    description: 'Architected a high-performance investment ecosystem built on Clean Architecture and OOP principles.',
    tags: ['Clean Architecture', 'Socket.IO', 'Jest', 'MongoDB'],
    metric: '90% test coverage',
    github: 'https://github.com/Innovest-org/server',
    demo: 'https://github.com/Innovest-org/server'
  },
  {
    title: 'Create Arch CLI',
    tag: 'DevTools · Solo',
    category: ['Backend', 'DevTools'],
    image: cliImg,
    description: 'Developed a CLI tool to automate and scaffold standardized Express.js backend architectures.',
    tags: ['Node.js', 'CLI', 'Automation', 'JavaScript'],
    metric: 'Zero-Config Setup',
    github: 'https://github.com/MarwaAshraf1812/create-arch-cli',
    demo: 'https://github.com/MarwaAshraf1812/create-arch-cli'
  },
  {
    title: "Milton's Choco Coffee",
    tag: 'Web App · Solo',
    category: ['Frontend'],
    image: IcedIMg,
    description: 'Developed an interactive customization dashboard using React and MUI with real-time state-driven menus.',
    tags: ['React', 'Material UI', 'Vite', 'Emotion'],
    metric: 'Customization Engine',
    github: 'https://github.com/MarwaAshraf1812/ITI_Projects/tree/main/MUI/D02/IceCoffeeApp',
    demo: 'https://github.com/MarwaAshraf1812/ITI_Projects/tree/main/MUI/D02/IceCoffeeApp'
  },
  {
    title: 'Harry Potter Task Manager',
    tag: 'Web App · Solo',
    category: ['Frontend'],
    image: taskImg,
    description: 'Engineered a dynamic task management dashboard using Angular with an immersive themed UI.',
    tags: ['Angular', 'TypeScript', 'RxJS', 'HTML/CSS'],
    metric: 'Interactive UX',
    github: 'https://github.com/MarwaAshraf1812/ITI_Projects/tree/main/Angular/harryPotter-taskManager',
    demo: 'https://github.com/MarwaAshraf1812/ITI_Projects/tree/main/Angular/harryPotter-taskManager'
  }
];