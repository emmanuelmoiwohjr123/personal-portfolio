import React from 'react';
import { Code, Download, FileText, Palette, Users, Zap } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 relative inline-block">
            ABOUT ME
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-yellow-400"></span>
          </h2>
        </div>
        
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <div className="relative">
              <div className="w-full h-full rounded-lg overflow-hidden shadow-2xl">
                <img
                  src="./src/images/eman.png"
                  alt="About Me"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-yellow-400 rounded-lg -z-10"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-gray-900 rounded-lg -z-10"></div>
            </div>
          </div>
          
          <div className="md:w-1/2 mt-12 md:mt-0">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Hello! I'm an enthusiastic web designer and developer with a passion for
              crafting captivating digital experiences.
            </h3>
            
            <p className="text-gray-700 mb-8">
              With a keen eye for design and strong technical skills, I transform ideas into 
              beautiful, functional websites. My approach combines creativity with technical 
              precision to deliver solutions that not only look great but perform exceptionally well.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-yellow-100">
                  <Palette className="text-yellow-600" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Design Magic</h4>
                  <p className="text-gray-600">I blend aesthetics and functionality for stunning websites.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-yellow-100">
                  <Code className="text-yellow-600" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Code Whisperer</h4>
                  <p className="text-gray-600">Clean, efficient code for seamless experiences.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-yellow-100">
                  <Zap className="text-yellow-600" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Fast Performance</h4>
                  <p className="text-gray-600">Lightning-fast load times and optimized code.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-yellow-100">
                  <Users className="text-yellow-600" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Collaboration</h4>
                  <p className="text-gray-600">Let's work together to turn your ideas into reality.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <a 
                href="#contact"
                className="px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white font-medium rounded-full transition-all duration-300 inline-block"
              >
                Hire Me Now
              </a>
              {/* <a 
                href="/files/moiwohjr.pdf"
                download
                className="group px-6 py-3 bg-transparent text-gray-900 font-medium rounded-full transition-all duration-300 inline-flex items-center ml-4 border border-gray-300 hover:border-gray-400 hover:bg-gray-50"
              >
                <span className="mr-2">Download CV</span>
                <Download 
                  size={18} 
                  className="transform transition-transform duration-300 group-hover:-translate-y-1" 
                />
              </a> */}
              {/* Preview CV Button */}
              <a 
                href="/files/moiwohjr.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-6 py-3 bg-transparent text-gray-900 font-medium rounded-full transition-all duration-300 inline-flex items-center ml-4 border border-gray-300 hover:border-gray-400 hover:bg-gray-50"
              >
                <span className="mr-2">Preview CV</span>
                <FileText 
                  size={18} 
                  className="transform transition-transform duration-300 group-hover:scale-110" 
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;