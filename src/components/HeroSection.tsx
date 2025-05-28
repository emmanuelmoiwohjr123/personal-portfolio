import React from 'react';
import { ChevronDown, Github, Linkedin, Twitter } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white flex flex-col justify-center overflow-hidden">
      {/* Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-yellow-400/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-yellow-500/10 to-transparent rounded-full blur-3xl"></div>
      </div>
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)', 
          backgroundSize: '30px 30px',
          animation: 'gridFloat 20s linear infinite'
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 py-20">
          <div className="lg:w-1/2 space-y-8 animate-fadeIn relative">
            {/* Decorative elements */}
            <div className="absolute -left-4 top-10 w-1 h-32 bg-gradient-to-b from-yellow-400 to-transparent"></div>
            <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-transparent"></div>
            <div>
              <h2 className="text-xl sm:text-2xl font-medium text-yellow-400 tracking-wider mb-4 uppercase">
              I'M GLAD YOU'RE HERE.
              </h2>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                Hi <span className="inline-block animate-wave origin-bottom-right">👋</span>,
                I'm Emmanuel<br />Moiwoh Jr.
              </h1>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8">
                <TypeAnimation
                  sequence={[
                    'Web Developer',
                    2000,
                    'UI/UX Designer',
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  className="text-yellow-400"
                  repeat={Infinity}
                />
              </h2>
            </div>
            
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl leading-relaxed font-light">
              I'm passionate about creating user-friendly designs and functional websites.
              With expertise in both design and development, I bring a unique perspective
              to every project. Let’s collaborate on something great!
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-medium rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Contact Me
              </a>
              <a
                href="#projects"
                className="px-6 py-3 bg-transparent hover:bg-gray-700 text-white border-2 border-gray-600 font-medium rounded-full transition-all duration-300"
              >
                View Projects
              </a>
            </div>
            
            <div className="flex items-center gap-4 pt-4">
              <a 
                href="https://github.com/" 
                target="_blank" 
                rel="noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://linkedin.com/" 
                target="_blank" 
                rel="noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="https://twitter.com/" 
                target="_blank" 
                rel="noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter size={24} />
              </a>
            </div>
          </div>
          
          <div className="lg:w-1/2 flex justify-center items-center">
            <div className="relative">
              {/* Decorative circles */}
              <div className="absolute -inset-4 bg-gradient-to-br from-yellow-400/20 to-transparent rounded-full blur-2xl"></div>
              <div className="absolute -inset-8 bg-gradient-to-br from-yellow-400/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
              {/* Profile image */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-yellow-400/50 animate-float shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Emmanuel Moiwoh Jr"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-white/70 hover:text-white transition-colors">
          <ChevronDown size={32} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;