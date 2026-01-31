
import { Skill, Experience, Education, Service, Project } from './types';

export const SKILLS: Skill[] = [
  { name: 'React.js', percentage: 95 },
  { name: 'Node.js & Express.js', percentage: 90 },
  { name: 'JavaScript & TypeScript', percentage: 85 },
  { name: 'MongoDB & SQL', percentage: 80 },
  { name: 'REST APIs & GraphQL', percentage: 85 },
  { name: 'Next.js', percentage: 85 },
  { name: 'Python & Django', percentage: 80 },
  { name: 'Cloud & DevOps (AWS, Docker)', percentage: 70 },
  { name: 'HTML5 & CSS3', percentage: 90 },
  { name: 'UI/UX (Material Design, Tailwind)', percentage: 75 },
  { name: 'Git & GitHub', percentage: 90 },
];

export const EDUCATION: Education[] = [
  {
    degree: 'Bachelor of Science in Artificial Intelligence',
    institution: 'Shaheed Zulfikar Ali Bhutto Institute of Science and Technology, Islamabad',
    period: '2023 – 2027',
    description: 'Focusing on advanced AI concepts, machine learning, and scalable systems.'
  },
  {
    degree: 'MongoDB Bootcamp',
    institution: 'LetsUpgrade',
    period: 'September 2024',
    description: 'Comprehensive training on NoSQL database modeling and optimization.'
  },
  {
    degree: 'React Native Certification',
    institution: 'Meta (via Coursera)',
    period: 'April 2024',
    description: 'Specialized in cross-platform mobile app development with React Native.'
  }
];

export const EXPERIENCES: Experience[] = [
  {
    title: 'Full Stack Developer',
    company: 'Vertex Solutions Inc',
    period: 'Feb 2nd, 2025 – Present',
    description: [
      'Design and implement full-stack web applications using React, Node.js, MongoDB, and SQL',
      'Develop RESTful APIs and maintain backend services',
      'Collaborate with designers and product teams',
      'Follow CI/CD best practices, testing, and code reviews'
    ]
  },
  {
    title: 'Generative AI Intern',
    company: 'TechScape Pvt Ltd',
    period: 'June 20th, 2025 – Sept 20th, 2025',
    description: [
      'Worked on generative model experimentation and fine-tuning',
      'Implemented prompt engineering and evaluation metrics',
      'Integrated AI models into web applications',
      'Assisted with deployment and monitoring'
    ]
  },
  {
    title: 'Full Stack Developer',
    company: 'Upwork (Freelance)',
    period: 'Since 2024',
    description: [
      'Delivered frontend and backend client projects',
      'Integrated third-party APIs and responsive designs',
      'Handled client communication and project delivery'
    ]
  }
];

export const SERVICES: Service[] = [
  {
    title: 'Frontend Development',
    description: 'Expertise in React.js and Next.js to build fast, responsive user interfaces.',
    icon: 'Layout'
  },
  {
    title: 'Backend Development',
    description: 'Scalable servers using Node.js, Express, and Python for robust business logic.',
    icon: 'Server'
  },
  {
    title: 'UI/UX Design',
    description: 'Crafting intuitive user experiences using Material Design and Tailwind CSS.',
    icon: 'Layers'
  },
  {
    title: 'API Development',
    description: 'Developing high-performance REST and GraphQL APIs for seamless data exchange.',
    icon: 'Code'
  },
  {
    title: 'Deployment & Hosting',
    description: 'Expertise in AWS, Vercel, and GitHub Pages for continuous delivery.',
    icon: 'Cloud'
  }
];

export const PROJECTS: Project[] = [
  {
    title: 'Smart AI Assistant',
    description: 'Personalized AI companion built with Gemini API.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
    category: 'AI',
    github: '#'
  },
  {
    title: 'Modern E-Shop',
    description: 'Full-featured ecommerce with Stripe and MERN.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800',
    category: 'Web',
    github: '#',
    demo: '#'
  },
  {
    title: 'DevOps Dashboard',
    description: 'Real-time infrastructure monitoring tool.',
    image: 'https://images.unsplash.com/photo-1551288049-bbda48658a7d?auto=format&fit=crop&q=80&w=800',
    category: 'DevOps',
    github: '#'
  }
];
