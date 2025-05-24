import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';
import { experiences } from '../data/experience';
import { education } from '../data/education';
import SectionTitle from './SectionTitle';

const Experience: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="experience" className="py-20 bg-white dark:bg-secondary-900">
      <div className="container mx-auto px-4">
        <SectionTitle title="Experience" subtitle="My professional journey" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Work Experience */}
          <div>
            <div className="flex items-center mb-8">
              <Briefcase className="text-primary-600 dark:text-primary-400 mr-3" size={24} />
              <h3 className="text-2xl font-bold text-secondary-800 dark:text-white">
                Work Experience
              </h3>
            </div>
            
            <motion.div
              className="relative border-l-2 border-primary-200 dark:border-primary-800 pl-8 ml-3 space-y-10"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {experiences.map((experience) => (
                <motion.div key={experience.id} variants={itemVariants}>
                  <div className="absolute w-4 h-4 bg-primary-500 rounded-full -left-[10px] mt-1.5 border-4 border-white dark:border-secondary-900"></div>
                  <div className="bg-secondary-50 dark:bg-secondary-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <h4 className="text-xl font-bold text-secondary-800 dark:text-white">
                      {experience.position}
                    </h4>
                    <p className="text-primary-600 dark:text-primary-400 font-medium mb-2">
                      {experience.company}
                    </p>
                    <p className="text-secondary-500 dark:text-secondary-400 text-sm mb-4">
                      {experience.period}
                    </p>
                    <ul className="list-disc list-inside text-secondary-600 dark:text-secondary-300 space-y-2">
                      {experience.description.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
          
          {/* Education */}
          <div>
            <div className="flex items-center mb-8">
              <GraduationCap className="text-accent-600 dark:text-accent-400 mr-3" size={24} />
              <h3 className="text-2xl font-bold text-secondary-800 dark:text-white">
                Education
              </h3>
            </div>
            
            <motion.div
              className="relative border-l-2 border-accent-200 dark:border-accent-800 pl-8 ml-3 space-y-10"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {education.map((edu) => (
                <motion.div key={edu.id} variants={itemVariants}>
                  <div className="absolute w-4 h-4 bg-accent-500 rounded-full -left-[10px] mt-1.5 border-4 border-white dark:border-secondary-900"></div>
                  <div className="bg-secondary-50 dark:bg-secondary-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <h4 className="text-xl font-bold text-secondary-800 dark:text-white">
                      {edu.degree}
                    </h4>
                    <p className="text-accent-600 dark:text-accent-400 font-medium mb-2">
                      {edu.school}
                    </p>
                    <p className="text-secondary-500 dark:text-secondary-400 text-sm mb-4">
                      {edu.period}
                    </p>
                    <p className="text-secondary-600 dark:text-secondary-300">
                      {edu.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;