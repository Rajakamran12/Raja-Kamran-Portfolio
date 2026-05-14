
import { Skill, Experience, Education, Service, Project } from './types';

export const SKILLS: Skill[] = [
  { name: 'React.js & Next.js', percentage: 95 },
  { name: 'TypeScript', percentage: 95 },
  { name: 'Machine Learning', percentage: 90 },
  { name: 'Python, PyTorch & TensorFlow', percentage: 88 },
  { name: 'Generative AI & NLP', percentage: 85 },
  { name: 'UI/UX Design', percentage: 85 },
  { name: 'REST APIs & GraphQL', percentage: 85 },
  { name: 'Data Visualization', percentage: 82 },
  { name: 'Cloud & DevOps (AWS, Docker)', percentage: 80 },
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
    title: 'Frontend Developer',
    company: 'Vertex Solutions Inc',
    period: 'Feb 2nd, 2025 – Present',
    description: [
      'Design and implement frontend-rich web applications using React, Node.js, MongoDB, and SQL',
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
    title: 'Frontend Developer',
    company: 'Upwork (Freelance)',
    period: 'Since 2024',
    description: [
      'Delivered frontend-first client projects',
      'Integrated third-party APIs and responsive designs',
      'Handled client communication and project delivery'
    ]
  }
];

export const SERVICES: Service[] = [
  {
    title: 'AI-Powered Frontends',
    description: 'Designing responsive interfaces with adaptive AI features and polished visual systems.',
    icon: 'Layout'
  },
  {
    title: 'Model Integration',
    description: 'Integrating machine learning models and inference pipelines into web applications.',
    icon: 'Code'
  },
  {
    title: 'Data & Analytics',
    description: 'Transforming data into insights with dashboards, visualizations, and analytics workflows.',
    icon: 'Layers'
  },
  {
    title: 'Frontend Development',
    description: 'Building scalable web platforms using React, Node.js, and cloud-ready architectures.',
    icon: 'Server'
  },
  {
    title: 'Deployment & Hosting',
    description: 'Delivering production-ready apps with AWS, Vercel, and containerized deployment.',
    icon: 'Cloud'
  }
];

export const PROJECTS: Project[] = [
  {
    title: 'Smart AI Assistant',
    description: 'Conversational AI companion built with Gemini API and adaptive frontend interactions.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
    category: 'AI',
    github: '#'
  },
  {
    title: 'Modern E-Shop',
    description: 'Personalized ecommerce UI with recommendation engines and fast React checkout.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800',
    category: 'Frontend',
    github: '#',
    demo: '#'
  },
  {
    title: 'AI Analytics Dashboard',
    description: 'Interactive analytics dashboard with real-time insights and predictive metrics.',
    image: 'https://images.unsplash.com/photo-1551288049-bbda48658a7d?auto=format&fit=crop&q=80&w=800',
    category: 'Data',
    github: '#'
  }
];
