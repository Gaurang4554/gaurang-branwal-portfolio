import React from 'react';
import { ExternalLink, Github, Bot, Recycle, Brain, Database } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Guide Pro Chatbot',
      description: 'An intelligent conversational AI system built with advanced NLP capabilities and modern web technologies.',
      longDescription: 'A comprehensive chatbot solution featuring natural language processing, context-aware conversations, and seamless integration with modern web applications. Built with a robust backend and intuitive frontend interface.',
      technologies: ['Java', 'React', 'MongoDB', 'NLP', 'API Integration', 'Node.js'],
      features: [
        'Natural Language Processing for intelligent conversations',
        'Context-aware response generation',
        'Real-time chat interface with modern UI',
        'MongoDB integration for conversation history',
        'RESTful API architecture',
        'Responsive design across all devices'
      ],
      icon: Bot,
      gradient: 'from-blue-500 to-purple-600',
      bgGradient: 'from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20'
    },
    {
      title: 'SORT SMART: Advanced Waste Management',
      description: 'AI-powered waste classification and management system using deep learning for environmental sustainability.',
      longDescription: 'An innovative waste management solution that leverages computer vision and deep learning to automatically classify and sort different types of waste, promoting environmental sustainability and efficient recycling processes.',
      technologies: ['Deep Learning', 'Flask/Django', 'React', 'Cloud Deployment', 'Computer Vision', 'TensorFlow'],
      features: [
        'Real-time waste classification using deep learning',
        'Computer vision-based sorting automation',
        'Cloud-deployed scalable architecture',
        'Interactive dashboard for monitoring',
        'Environmental impact tracking',
        'Integration with IoT waste management systems'
      ],
      icon: Recycle,
      gradient: 'from-green-500 to-teal-600',
      bgGradient: 'from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20'
    },
    {
      title: 'Deep Learning for Autonomous Vehicles',
      description: 'Advanced computer vision pipeline for object detection and depth estimation in autonomous vehicles using state-of-the-art deep learning models.',
      longDescription: 'Built a comprehensive deep learning pipeline combining YOLO object detection with MiDaS depth estimation for enhanced perception in autonomous navigation. Trained on Cityscapes dataset for urban scene understanding.',
      technologies: ['YOLOv4/v11', 'MiDaS', 'Python', 'Cityscapes Dataset', 'TensorFlow', 'PyTorch'],
      features: [
        'Real-time object detection using YOLOv4 and YOLOv11',
        'Monocular depth estimation with MiDaS model',
        'Urban scene understanding with Cityscapes dataset',
        'Integrated perception pipeline for autonomous navigation',
        'Optimized for real-time inference on edge devices',
        'Enhanced 3D scene reconstruction capabilities'
      ],
      icon: Brain,
      gradient: 'from-purple-500 to-indigo-600',
      bgGradient: 'from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Innovative solutions combining AI/ML with modern web technologies to solve real-world problems
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${project.bgGradient} p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group`}
            >
              {/* Project Header */}
              <div className="flex items-center justify-between mb-6">
                <div className={`bg-gradient-to-r ${project.gradient} p-4 rounded-2xl shadow-lg`}>
                  <project.icon className="text-white" size={32} />
                </div>
                <div className="flex space-x-3">
                  <a 
                    href={index === 0 ? "https://github.com/Deepansh1292/GuidePro-Travel-Assistant.git" : index === 1 ? "https://github.com/PranitThomas/Sort-Smart-Advanced-Waste-Management-System.git" : "https://github.com/PrathamKSrivastav/DL-for-Autonomous-Vehicle"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg transition-shadow duration-200 group-hover:scale-110"
                  >
                    <Github className="text-gray-700 dark:text-gray-300" size={20} />
                  </a>
                  <a 
                    href={index === 0 ? "https://github.com/Deepansh1292/GuidePro-Travel-Assistant.git" : index === 1 ? "https://github.com/PranitThomas/Sort-Smart-Advanced-Waste-Management-System.git" : "https://github.com/PrathamKSrivastav/DL-for-Autonomous-Vehicle"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg transition-shadow duration-200 group-hover:scale-110"
                  >
                    <ExternalLink className="text-gray-700 dark:text-gray-300" size={20} />
                  </a>
                </div>
              </div>

              {/* Project Content */}
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-gray-700 dark:group-hover:from-white dark:group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {project.longDescription}
                </p>
              </div>

              {/* Features */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Key Features
                </h4>
                <div className="grid grid-cols-1 gap-2">
                  {project.features.slice(0, 3).map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-2">
                      <div className="bg-green-100 dark:bg-green-900/30 p-1 rounded-full mt-1">
                        <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300 text-sm">
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-white/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium backdrop-blur-sm border border-gray-200 dark:border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <a 
                href={index === 0 ? "https://github.com/Deepansh1292/GuidePro-Travel-Assistant.git" : index === 1 ? "https://github.com/PranitThomas/Sort-Smart-Advanced-Waste-Management-System.git" : "https://github.com/PrathamKSrivastav/DL-for-Autonomous-Vehicle"}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-3 bg-gradient-to-r ${project.gradient} text-white rounded-xl font-medium hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2`}
              >
                <span>Learn More</span>
                <ExternalLink size={18} />
              </a>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-12">
          <a 
            href="https://github.com/Gaurang4554"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex px-8 py-4 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-gray-100 dark:to-gray-300 text-white dark:text-gray-900 rounded-full font-medium hover:shadow-xl transition-all duration-300 hover:scale-105 items-center space-x-2"
          >
            <Github size={20} />
            <span>View All Projects on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;