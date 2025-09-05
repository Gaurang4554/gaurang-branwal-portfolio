import React, { useState, useEffect, useRef } from 'react';
import { Code, Database, Settings, Brain, Monitor, Server } from 'lucide-react';

const Skills: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      skills: [
        { name: 'HTML', level: 90, color: 'from-orange-500 to-red-500' },
        { name: 'C++', level: 85, color: 'from-blue-500 to-blue-600' },
        { name: 'JavaScript', level: 88, color: 'from-yellow-400 to-yellow-500' },
        { name: 'Python', level: 82, color: 'from-green-500 to-blue-500' }
      ],
      gradient: 'from-purple-500 to-pink-500',
      bgColor: 'from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20'
    },
    {
      title: 'Frameworks & Tools',
      icon: Settings,
      skills: [
        { name: 'CSS', level: 85, color: 'from-blue-400 to-blue-600' },
        { name: 'Node.js', level: 80, color: 'from-green-500 to-green-600' },
        { name: 'React', level: 83, color: 'from-cyan-400 to-blue-500' },
        { name: 'VS Code', level: 95, color: 'from-blue-500 to-purple-600' }
      ],
      gradient: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20'
    },
    {
      title: 'Databases',
      icon: Database,
      skills: [
        { name: 'SQL', level: 78, color: 'from-orange-500 to-red-500' },
        { name: 'MongoDB', level: 75, color: 'from-green-500 to-green-600' }
      ],
      gradient: 'from-green-500 to-teal-500',
      bgColor: 'from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20'
    },
    {
      title: 'CS Fundamentals',
      icon: Brain,
      skills: [
        { name: 'Operating Systems', level: 85, color: 'from-indigo-500 to-purple-500' },
        { name: 'DBMS', level: 80, color: 'from-blue-500 to-indigo-500' },
        { name: 'Networks', level: 75, color: 'from-cyan-500 to-blue-500' },
        { name: 'DSA', level: 88, color: 'from-red-500 to-pink-500' }
      ],
      gradient: 'from-indigo-500 to-purple-600',
      bgColor: 'from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const SkillBar: React.FC<{ skill: any; index: number; isVisible: boolean }> = ({ 
    skill, 
    index, 
    isVisible 
  }) => {
    return (
      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            {skill.name}
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {skill.level}%
          </span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
          <div
            className={`h-2.5 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
            style={{
              width: isVisible ? `${skill.level}%` : '0%',
              transitionDelay: `${index * 200}ms`
            }}
          ></div>
        </div>
      </div>
    );
  };

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise across different domains of software development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className={`bg-gradient-to-br ${category.bgColor} p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 group`}
            >
              {/* Category Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-4">
                  <div className={`bg-gradient-to-r ${category.gradient} p-3 rounded-2xl shadow-lg`}>
                    <category.icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>
              </div>

              {/* Skills */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar
                    key={skillIndex}
                    skill={skill}
                    index={skillIndex}
                    isVisible={isVisible}
                  />
                ))}
              </div>

              {/* Skill Count */}
              <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {category.skills.length} skills in this category
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Skills Summary */}
        <div className="mt-16 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-gray-100 dark:to-gray-300 p-8 rounded-3xl">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white dark:text-gray-900 mb-4">
              Continuous Learning Journey
            </h3>
            <p className="text-gray-300 dark:text-gray-700 max-w-2xl mx-auto leading-relaxed">
              I believe in constant growth and staying updated with the latest technologies. 
              My skills represent not just current knowledge, but a commitment to lifelong learning 
              in the ever-evolving field of computer science and AI.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;