import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar } from 'lucide-react';
import { about } from '../data/about';
import SectionTitle from './SectionTitle';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-secondary-50 dark:bg-secondary-800/50">
      <div className="container mx-auto px-4">
        <SectionTitle title="About Me" subtitle="Get to know me better" />
        
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <motion.div 
            className="w-full md:w-2/5"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary-500 to-accent-500 rounded-lg blur-lg opacity-20 dark:opacity-30 animate-pulse"></div>
              <img 
                src={about.mainImage} 
                alt={about.name} 
                className="w-full h-auto rounded-lg shadow-xl relative z-10"
              />
            </div>
          </motion.div>
          
          <motion.div 
            className="w-full md:w-3/5"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-secondary-800 dark:text-white mb-4">
              Who I Am
            </h3>
            
            <div className="prose prose-lg dark:prose-invert mb-6">
              <p className="text-secondary-700 dark:text-secondary-300 whitespace-pre-line">
                {about.longDescription}
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 mb-8">
              <div className="flex items-center">
                <MapPin className="text-primary-600 dark:text-primary-400 mr-2" />
                <span className="text-secondary-700 dark:text-secondary-300">
                  {about.location}
                </span>
              </div>
              <div className="flex items-center">
                <Calendar className="text-primary-600 dark:text-primary-400 mr-2" />
                <span className="text-secondary-700 dark:text-secondary-300">
                  {about.availability}
                </span>
              </div>
            </div>
            
            <motion.a 
              href="#contact" 
              className="inline-block px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg shadow-lg hover:shadow-xl transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Talk
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;