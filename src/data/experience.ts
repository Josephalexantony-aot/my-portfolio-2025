import { Experience } from '../types';

export const experiences: Experience[] = [
  {
    id: 'exp-1',
    company: 'Tech Innovations Inc.',
    position: 'Senior Full Stack Developer',
    period: 'Jan 2022 - Present',
    description: [
      'Lead development of microservices architecture for enterprise clients',
      'Implemented CI/CD pipelines reducing deployment time by 40%',
      'Mentored junior developers and conducted code reviews',
      'Optimized database queries resulting in 30% performance improvement'
    ]
  },
  {
    id: 'exp-2',
    company: 'Digital Solutions Ltd.',
    position: 'Full Stack Developer',
    period: 'Mar 2019 - Dec 2021',
    description: [
      'Developed and maintained multiple web applications using React and Node.js',
      'Collaborated with UX/UI designers to implement responsive interfaces',
      'Integrated third-party APIs and payment gateways',
      'Participated in Agile development processes with bi-weekly sprints'
    ]
  },
  {
    id: 'exp-3',
    company: 'WebCraft Studios',
    position: 'Frontend Developer',
    period: 'Jun 2017 - Feb 2019',
    description: [
      'Built responsive web interfaces using React and Redux',
      'Converted design mockups into functional web pages',
      'Worked with REST APIs to integrate backend services',
      'Implemented unit tests using Jest and React Testing Library'
    ]
  }
];