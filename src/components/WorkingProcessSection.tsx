import React from 'react';
import { BarChart2, Code2, Smartphone } from 'lucide-react';

const WorkingProcessSection: React.FC = () => {
  return (
    <section id="process" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 relative inline-block">
            WORKING PROCESS
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-yellow-400"></span>
          </h2>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            My process is simple and collaborative—starting with understanding your goals, followed by planning, design, and development. 
            I keep you involved every step of the way to ensure a smooth and successful project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-lg transition-shadow duration-300">
            <div className="w-16 h-16 bg-yellow-100 rounded-lg flex items-center justify-center mx-auto mb-6">
              <BarChart2 className="text-yellow-600" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">01.</h3>
            <h4 className="text-xl font-semibold text-gray-800 mb-4">Web Design</h4>
            <p className="text-gray-600">
              Elevate your digital presence with responsive, user-focused web designs that blend creativity and functionality to reflect your brand and engage your audience.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-lg transition-shadow duration-300">
            <div className="w-16 h-16 bg-yellow-100 rounded-lg flex items-center justify-center mx-auto mb-6">
              <Code2 className="text-yellow-600" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">02.</h3>
            <h4 className="text-xl font-semibold text-gray-800 mb-4">Web Development</h4>
            <p className="text-gray-600">
              Boost your online presence with scalable, high-performance web solutions. From custom platforms to seamless user experiences, I deliver secure, results-driven websites that stand out.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-lg transition-shadow duration-300">
            <div className="w-16 h-16 bg-yellow-100 rounded-lg flex items-center justify-center mx-auto mb-6">
              <Smartphone className="text-yellow-600" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">03.</h3>
            <h4 className="text-xl font-semibold text-gray-800 mb-4">Mobile Development</h4>
            <p className="text-gray-600">
              Create powerful mobile experiences with responsive design and progressive web apps that work seamlessly across all devices and platforms.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkingProcessSection;