interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubLink: string;
  demoLink?: string;
}

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'E-Commerce Platform',
    description: 'A modern e-commerce platform built with React and Node.js, featuring real-time inventory management and secure payment processing.',
    image: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    githubLink: 'https://github.com/Josephalexantony-aot/E-Commerce-App',
    demoLink: 'https://josephalexantony-aot.github.io/E-Commerce-App'
  },
  {
    id: 'project-2',
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, drag-and-drop interface, and team collaboration features.',
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['TypeScript', 'React', 'Firebase', 'Material-UI'],
    githubLink: 'https://github.com/username/task-manager',
    demoLink: 'https://task-manager.demo.com'
  },
  {
    id: 'project-3',
    title: 'AI Image Generator',
    description: 'An AI-powered image generation tool that creates unique artwork based on text descriptions using machine learning algorithms.',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['Python', 'TensorFlow', 'React', 'Flask'],
    githubLink: 'https://github.com/username/ai-image-generator'
  }
];