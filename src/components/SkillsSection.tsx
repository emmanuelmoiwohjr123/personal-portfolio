import React from 'react';

type Skill = {
  name: string;
  percentage: number;
  color: string;
};

const skills: Skill[] = [
  { name: 'HTML', percentage: 91, color: 'bg-blue-500' },
  { name: 'CSS', percentage: 85, color: 'bg-pink-500' },
  { name: 'JAVASCRIPT', percentage: 67, color: 'bg-yellow-500' },
  { name: 'NODE JS', percentage: 56, color: 'bg-green-500' },
  { name: 'BOOTSTRAP', percentage: 66, color: 'bg-purple-500' },
  { name: 'REACT', percentage: 62, color: 'bg-blue-600' },
  { name: 'WORDPRESS', percentage: 92, color: 'bg-blue-400' },
];

const SkillBar: React.FC<Skill> = ({ name, percentage, color }) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(ref.current!);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current!);
      }
    };
  }, []);

  return (
    <div ref={ref} className="mb-6">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-gray-900">{name}</span>
        <span className="text-sm font-medium text-gray-900">{percentage}%</span>
      </div>
      <div className="h-2.5 bg-gray-200 rounded-full">
        <div 
          className={`h-2.5 rounded-full ${color} transition-all duration-1000 ease-out`}
          style={{ width: isVisible ? `${percentage}%` : '0%' }}
        ></div>
      </div>
    </div>
  );
};

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 relative inline-block">
            MY SKILLS
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-yellow-400"></span>
          </h2>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            Skilled in web design, UI/UX, and responsive development,focused on creating modern, efficient, and engaging digital experiences.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-4">
          {skills.map((skill) => (
            <SkillBar key={skill.name} {...skill} />
          ))}
        </div>
        
        <div className="mt-16 bg-white p-8 rounded-2xl shadow-lg">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Additional Skills & Tools</h3>
          <div className="flex flex-wrap gap-3">
            {['Git', 'Figma', 'Redux', 'TypeScript', 'Tailwind CSS','RESTful APIs', 'Firebase'].map((tool) => (
              <span 
                key={tool} 
                className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-sm hover:bg-yellow-100 hover:text-yellow-800 transition-colors duration-300"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;