import React from 'react';
import { GraduationCap, MapPin, Calendar, Award } from 'lucide-react';

const About: React.FC = () => {
  const timeline = [
    {
      year: '2022 - Present',
      institution: 'UPES Dehradun',
      degree: 'B.Tech Computer Science (AI & ML)',
      description: 'Specializing in Artificial Intelligence and Machine Learning with focus on deep learning, computer vision, and autonomous systems.',
      status: 'current'
    },
    {
      year: 'March 2020 - May 2021',
      institution: 'Sunbeam Suncity School, Varanasi, India',
      degree: 'CBSE Higher Secondary Certificate',
      description: 'Percentage: 84.8/100.0 - Mathematics Topper with exceptional performance in Physics, Chemistry, and Mathematics.',
      status: 'completed'
    },
    {
      year: 'March 2018 - June 2019',
      institution: 'Sunbeam Suncity School, Varanasi, India',
      degree: 'CBSE Secondary School Certificate',
      description: 'Percentage: 84.8/100.0 - Strong foundation in core subjects with focus on science and mathematics.',
      status: 'completed'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A passionate Computer Science student with a deep interest in AI/ML technologies,
            constantly exploring innovative solutions and pushing technological boundaries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Info */}
          <div className="space-y-6">
            {/* Profile Image */}
            <div className="flex justify-center lg:justify-start mb-8">
              <div className="relative group">
                {/* Animated background glow */}
                <div className="absolute inset-0 w-48 h-48 rounded-full bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 opacity-20 group-hover:opacity-40 transition-opacity duration-500 animate-pulse"></div>
                
                {/* Main image container */}
                <div className="relative w-48 h-48 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 p-1 group-hover:shadow-2xl group-hover:scale-105 transition-all duration-500 ease-out">
                  <div className="w-full h-full rounded-full overflow-hidden">
                    <img
                      src="./Profile.jpg"
                      alt="Gaurang Baranwal"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    
                    {/* Overlay effect on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>
                
                {/* AI/ML Badge with enhanced animation */}
                <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  <span className="text-white text-sm font-bold group-hover:text-lg transition-all duration-300">AI/ML</span>
                </div>
                
                {/* Floating decorative elements */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full animate-pulse opacity-60 group-hover:opacity-100 transition-opacity duration-300" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute top-4 -left-2 w-3 h-3 bg-pink-400 rounded-full animate-ping opacity-60 group-hover:opacity-100 transition-opacity duration-300" style={{ animationDelay: '1s' }}></div>
                <div className="absolute bottom-4 -left-3 w-2 h-2 bg-purple-400 rounded-full animate-bounce opacity-60 group-hover:opacity-100 transition-opacity duration-300" style={{ animationDelay: '1.5s' }}></div>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Quick Facts
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="text-blue-600 dark:text-blue-400" size={20} />
                  <span className="text-gray-700 dark:text-gray-300">Deoria, Uttar Pradesh</span>
                </div>
                <div className="flex items-center space-x-3">
                  <GraduationCap className="text-blue-600 dark:text-blue-400" size={20} />
                  <span className="text-gray-700 dark:text-gray-300">B.Tech CSE (AI & ML) Student</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="text-blue-600 dark:text-blue-400" size={20} />
                  <span className="text-gray-700 dark:text-gray-300">Mathematics Topper, Football CBSE Cluster Player</span>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Interests & Goals
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                I'm deeply passionate about artificial intelligence, machine learning, and their applications
                in solving real-world problems. My current focus areas include deep learning for computer vision,
                autonomous systems, and natural language processing. I believe in continuous learning and
                contributing to the AI community through innovative projects and research.
              </p>
            </div>
          </div>

          {/* Education Timeline */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
              Education Journey
            </h3>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-cyan-600"></div>
              
              {timeline.map((item, index) => (
                <div key={index} className="relative flex items-start space-x-6 pb-8">
                  {/* Timeline dot */}
                  <div className={`relative z-10 flex items-center justify-center w-16 h-16 rounded-full ${
                    item.status === 'current' 
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-600' 
                      : 'bg-green-600'
                  } shadow-lg`}>
                    <GraduationCap className="text-white" size={24} />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center space-x-2 mb-2">
                      <Calendar className="text-blue-600 dark:text-blue-400" size={16} />
                      <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                        {item.year}
                      </span>
                      {item.status === 'current' && (
                        <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 text-xs rounded-full">
                          Current
                        </span>
                      )}
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                      {item.institution}
                    </h4>
                    <p className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">
                      {item.degree}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;