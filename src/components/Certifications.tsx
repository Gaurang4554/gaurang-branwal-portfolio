import React from 'react';
import { Award, Calendar, ExternalLink, Trophy, Mountain, Target, Brain } from 'lucide-react';

const Certifications: React.FC = () => {
  const certifications = [
    {
      title: 'DevOps Bootcamp',
      issuer: 'Professional Certification',
      date: 'September 2024',
      description: 'Comprehensive training in DevOps practices, CI/CD pipelines, containerization, and cloud deployment strategies.',
      skills: ['Docker', 'Kubernetes', 'CI/CD', 'AWS', 'Jenkins', 'Infrastructure as Code'],
      icon: Target,
      color: 'from-blue-500 to-cyan-600',
      bgColor: 'from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20',
      link: 'https://drive.google.com/file/d/1nUoGlMSGZ0mPIou14hFTrKgotpwdG55O/view?usp=sharing'
    }
  ];

  const achievements = [
    {
      title: 'Mathematics Topper',
      category: '12th Grade Excellence',
      description: 'Achieved the highest score in Mathematics among all students, demonstrating exceptional analytical and problem-solving abilities.',
      icon: Trophy,
      color: 'from-yellow-500 to-orange-500',
      year: '2022',
      link: 'https://drive.google.com/file/d/1db6y3X3L0hSB5gcf3E6h34sFiPaIj5-z/view?usp=sharing'
    },
    {
      title: 'Sar Pass Trek Completion',
      category: 'Adventure Achievement',
      description: 'Successfully completed the challenging Sar Pass Trek in Himachal Pradesh, reaching an altitude of 13,850 ft. Trek duration: June 9-13, 2023, organized by Himtrek Tours and Travels.',
      icon: Mountain,
      color: 'from-green-500 to-teal-500',
      year: '2023',
      link: 'https://drive.google.com/file/d/1hDKB37zz6J16uQnfgkovympq6UFAywKe/view?usp=sharing'
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Certifications & Achievements
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Professional certifications and personal achievements that demonstrate commitment to excellence
          </p>
        </div>

        <div className="space-y-12">
          {/* Certifications Section */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Professional Certifications
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className={`bg-gradient-to-br ${cert.bgColor} p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 group`}
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                    <div className="flex-1">
                      {/* Header */}
                      <div className="flex items-center space-x-4 mb-6">
                        <div className={`bg-gradient-to-r ${cert.color} p-4 rounded-2xl shadow-lg`}>
                          <cert.icon className="text-white" size={32} />
                        </div>
                        <div>
                          <h4 className="text-2xl font-bold text-gray-900 dark:text-white">
                            {cert.title}
                          </h4>
                          <p className="text-lg text-gray-700 dark:text-gray-300 font-medium">
                            {cert.issuer}
                          </p>
                        </div>
                      </div>

                      {/* Date */}
                      <div className="flex items-center space-x-2 mb-4">
                        <Calendar className="text-gray-600 dark:text-gray-400" size={18} />
                        <span className="text-gray-600 dark:text-gray-400 font-medium">
                          {cert.date}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                        {cert.description}
                      </p>

                      {/* Skills */}
                      <div className="mb-6">
                        <h5 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                          Skills Acquired
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {cert.skills.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="px-3 py-1 bg-white/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium backdrop-blur-sm border border-gray-200 dark:border-gray-700"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Action Button */}
                    <div className="md:ml-6">
                      <a 
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex px-6 py-3 bg-gradient-to-r ${cert.color} text-white rounded-xl font-medium hover:shadow-lg transition-all duration-300 hover:scale-105 items-center space-x-2`}
                      >
                        <ExternalLink size={18} />
                        <span>View</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements Section */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Notable Achievements
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 group hover:scale-105"
                >
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`bg-gradient-to-r ${achievement.color} p-4 rounded-2xl shadow-lg`}>
                      <achievement.icon className="text-white" size={32} />
                    </div>
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">
                      {achievement.year}
                    </span>
                  </div>

                  {/* Content */}
                  <div>
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
                      {achievement.category}
                    </p>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                      {achievement.title}
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                      {achievement.description}
                    </p>
                    {achievement.link && (
                      <a 
                        href={achievement.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex px-4 py-2 bg-gradient-to-r ${achievement.color} text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300 hover:scale-105 items-center space-x-2 text-sm`}
                      >
                        <ExternalLink size={16} />
                        <span>View Certificate</span>
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Summary Stats */}
          <div className="bg-gradient-to-r from-gray-900 to-gray-700 dark:from-gray-100 dark:to-gray-300 p-8 rounded-3xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-white dark:text-gray-900 mb-2">
                  {certifications.length}
                </div>
                <div className="text-gray-300 dark:text-gray-700">
                  Professional Certifications
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white dark:text-gray-900 mb-2">
                  {achievements.length}
                </div>
                <div className="text-gray-300 dark:text-gray-700">
                  Academic & Sports Achievements
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white dark:text-gray-900 mb-2">
                  2024
                </div>
                <div className="text-gray-300 dark:text-gray-700">
                  Latest Certification
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;