import React from 'react';
import { Building, Calendar, Code, Database, Brain, Cpu } from 'lucide-react';

const Experience: React.FC = () => {
  const experience = {
    company: 'IBM',
    role: 'Deep Learning Intern',
    duration: 'Summer 2024',
    project: 'Deep Learning for Autonomous Vehicles',
    description: 'Developed advanced computer vision solutions for autonomous vehicle navigation using state-of-the-art deep learning models.',
    technologies: ['YOLOv4', 'YOLOv11', 'MiDaS', 'Python', 'TensorFlow', 'PyTorch'],
    achievements: [
      'Implemented object detection using YOLOv4 and YOLOv11 for real-time vehicle perception',
      'Integrated MiDaS depth estimation model for 3D scene understanding',
      'Worked with Cityscapes Dataset for urban scene segmentation and analysis',
      'Achieved 92% accuracy in object detection and depth estimation tasks',
      'Optimized models for real-time inference on edge computing devices'
    ]
  };

  const techStack = [
    { name: 'YOLOv4/v11', icon: Brain, color: 'text-purple-600' },
    { name: 'MiDaS', icon: Cpu, color: 'text-green-600' },
    { name: 'Cityscapes', icon: Database, color: 'text-blue-600' },
    { name: 'Deep Learning', icon: Code, color: 'text-orange-600' }
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Experience
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Hands-on experience with cutting-edge AI/ML technologies in real-world applications
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main Experience Card */}
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-blue-900/20 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <div className="flex items-center space-x-4 mb-4 md:mb-0">
                <div className="bg-blue-600 p-3 rounded-2xl">
                  <Building className="text-white" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {experience.company}
                  </h3>
                  <p className="text-lg text-blue-600 dark:text-blue-400 font-medium">
                    {experience.role}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                <Calendar size={20} />
                <span className="font-medium">{experience.duration}</span>
              </div>
            </div>

            <div className="mb-8">
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {experience.project}
              </h4>
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                {experience.description}
              </p>
            </div>

            {/* Tech Stack */}
            <div className="mb-8">
              <h5 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                Technologies Used
              </h5>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {techStack.map((tech, index) => (
                  <div 
                    key={index}
                    className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 text-center"
                  >
                    <tech.icon className={`${tech.color} mx-auto mb-2`} size={32} />
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      {tech.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div>
              <h5 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                Key Achievements
              </h5>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {experience.achievements.map((achievement, index) => (
                  <div 
                    key={index}
                    className="flex items-start space-x-3 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md"
                  >
                    <div className="bg-green-100 dark:bg-green-900/30 p-1 rounded-full mt-1">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                      {achievement}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Technologies */}
            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;