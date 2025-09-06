import React, { useState, useEffect, useRef } from 'react';

type Skill = {
  name: string;
  percentage: number;
  color: string;
  icon: string;
  category: string;
};

type SkillCategory = {
  name: string;
  skills: Skill[];
  color: string;
};

const skillCategories: SkillCategory[] = [
  {
    name: 'Frontend Development',
    color: 'from-yellow-400 to-yellow-500',
    skills: [
      { name: 'HTML', percentage: 95, color: 'bg-yellow-500', icon: '', category: 'Frontend' },
      { name: 'CSS', percentage: 88, color: 'bg-gray-900', icon: '', category: 'Frontend' },
      { name: 'JavaScript', percentage: 70, color: 'bg-yellow-500', icon: '', category: 'Frontend' },
      { name: 'React', percentage: 85, color: 'bg-gray-900', icon: '', category: 'Frontend' },
      { name: 'TypeScript', percentage: 80, color: 'bg-yellow-500', icon: '', category: 'Frontend' },
    ]
  },
  {
    name: 'Backend & Tools',
    color: 'from-gray-800 to-black',
    skills: [
      { name: 'Node.js', percentage: 75, color: 'bg-gray-900', icon: '', category: 'Backend' },
      { name: 'Git', percentage: 85, color: 'bg-yellow-500', icon: '', category: 'Tools' },
      { name: 'WordPress', percentage: 92, color: 'bg-gray-900', icon: '', category: 'CMS' },
      { name: 'Firebase', percentage: 70, color: 'bg-yellow-500', icon: '', category: 'Backend' },
    ]
  },
  {
    name: 'Frameworks & Libraries',
    color: 'from-yellow-400 to-yellow-500',
    skills: [
      { name: 'Tailwind CSS', percentage: 90, color: 'bg-yellow-500', icon: '', category: 'Framework' },
      { name: 'Bootstrap', percentage: 85, color: 'bg-gray-900', icon: '', category: 'Framework' },
      { name: 'Next.js', percentage: 70, color: 'bg-gray-800', icon: '', category: 'Framework' },
      
    ]
  }
];

const SkillCard: React.FC<{ skill: Skill; isVisible: boolean; delay: number }> = ({ skill, isVisible, delay }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`group relative p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-400 transform hover:scale-105 cursor-pointer border-2 border-transparent hover:border-gray-200 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Skill Icon */}
      <div className="text-4xl mb-4 transform transition-transform duration-300 group-hover:scale-110">
        {skill.icon}
      </div>
      
      {/* Skill Name */}
      <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
        {skill.name}
      </h3>
      
      {/* Circular Progress */}
      <div className="relative w-20 h-20 mx-auto mb-4">
        <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 36 36">
          <path
            className="text-gray-200"
            stroke="currentColor"
            strokeWidth="3"
            fill="transparent"
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          <path
            className={`transition-all duration-1000 ease-out ${skill.color.replace('bg-', 'text-')}`}
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            fill="transparent"
            strokeDasharray={`${isVisible ? skill.percentage : 0}, 100`}
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className={`text-lg font-bold transition-all duration-1000 ${skill.color.replace('bg-', 'text-')}`}>
            {isVisible ? skill.percentage : 0}%
          </span>
        </div>
      </div>
      
      {/* Category Badge */}
      <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${skill.color} text-white`}>
        {skill.category}
      </div>
      
      {/* Hover Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br ${skill.color.replace('bg-', 'from-')} to-transparent opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`} />
    </div>
  );
};

const CategorySection: React.FC<{ category: SkillCategory; isVisible: boolean; index: number }> = ({ category, isVisible, index }) => {
  return (
    <div className={`mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${index * 200}ms` }}>
      <div className="text-center mb-8">
        <h3 className={`text-2xl font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent mb-2`}>
          {category.name}
        </h3>
        <div className={`w-24 h-1 bg-gradient-to-r ${category.color} mx-auto rounded-full`}></div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {category.skills.map((skill, skillIndex) => (
          <SkillCard 
            key={skill.name} 
            skill={skill} 
            isVisible={isVisible} 
            delay={skillIndex * 100}
          />
        ))}
      </div>
    </div>
  );
};

const SkillsSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="py-10 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-200 via-white to-gray-100 relative">
      {/* Background Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-gray-200 rounded-full opacity-20 animate-float-slow"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-yellow-200 rounded-full opacity-20 animate-float-delayed"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-yellow-300 rounded-full opacity-20 animate-float"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 relative inline-block mb-4">
              MY <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">SKILLS</span>
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500"></span>
            </h2>
            <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Skilled in web design, UI/UX, and responsive development, focused on creating 
              <span className="font-semibold text-gray-800"> modern, efficient, and engaging</span> digital experiences.
            </p>
          </div>
        </div>
        
        {/* Tab Navigation */}
        <div className={`flex justify-center mb-12 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex bg-white rounded-full p-2 shadow-lg border">
            {skillCategories.map((category, index) => (
              <button
                key={category.name}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === index
                    ? `bg-gradient-to-r ${category.color} text-white shadow-md transform scale-105`
                    : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
                }`}
              >
                {category.name.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>
        
        {/* Skills Categories */}
        <div className="mb-16">
          {skillCategories.map((category, index) => (
            <div key={category.name} className={activeTab === index ? 'block' : 'hidden'}>
              <CategorySection category={category} isVisible={isVisible} index={index} />
            </div>
          ))}
        </div>
        
        {/* All Skills Overview */}
        {/* <div className={`transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Complete Skill Set</h3>
            <p className="text-gray-600">Interactive overview of all my technical abilities</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <CategorySection 
                key={category.name} 
                category={category} 
                isVisible={isVisible} 
                index={categoryIndex}
              />
            ))}
          </div>
        </div> */}
        
        {/* Additional Tools Section */}
        <div className={`mt-16 bg-white p-8 rounded-2xl shadow-lg border-t-4 border-gradient-to-r from-yellow-400 to-orange-500 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center justify-center gap-2">
              <span className="text-2xl"></span>
              Additional Tools & Technologies
            </h3>
            <p className="text-gray-600">Other tools and technologies I work with regularly</p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {[
              { name: 'Figma', icon: '', color: 'hover:bg-purple-50 hover:text-purple-600' },
              { name: 'Redux', icon: '', color: 'hover:bg-purple-50 hover:text-purple-600' },
              { name: 'REST APIs', icon: '', color: 'hover:bg-blue-50 hover:text-blue-600' },
              { name: 'Responsive', icon: '', color: 'hover:bg-green-50 hover:text-green-600' },
              { name: 'SEO', icon: '', color: 'hover:bg-yellow-50 hover:text-yellow-600' },
              { name: 'Testing', icon: '', color: 'hover:bg-indigo-50 hover:text-indigo-600' }
            ].map((tool, index) => (
              <div 
                key={tool.name} 
                className={`group p-4 bg-gray-50 rounded-xl text-center transition-all duration-300 transform hover:scale-105 hover:shadow-md cursor-pointer ${tool.color}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">{tool.icon}</div>
                <div className="text-sm font-medium">{tool.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;