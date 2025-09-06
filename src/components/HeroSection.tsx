import * as React from 'react';
import type { JSX } from 'react';
import HeroBackground from './HeroBackground';
import { ChevronDown, Download, Github, Linkedin, MapPin,Calendar, Coffee, Twitter } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      div: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
      section: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      a: React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;
      h1: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
      h2: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
      p: React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>;
      span: React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;
      img: React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>;
      br: React.DetailedHTMLProps<React.HTMLAttributes<HTMLBRElement>, HTMLBRElement>;
    }
  }
}

const HeroSection = (): JSX.Element => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-black text-white py-20 relative overflow-hidden">
      <HeroBackground />

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <a href="#about" className="text-gray-400 hover:text-white transition-colors">
          <ChevronDown size={24} />
        </a>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 space-y-8 animate-fadeIn relative">
            {/* Decorative elements */}
            <div className="absolute -left-4 top-10 w-1 h-32 bg-gradient-to-b from-yellow-400 to-transparent"></div>
            <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-transparent"></div>
            <div className="space-y-4">
            <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <MapPin size={16} />
                  <span>Monrovia, Liberia</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Coffee size={16} />
                  <span>Available for work</span>
                </div>
              </div>
              <h2 className="text-xl sm:text-2xl font-medium text-yellow-400 tracking-wider uppercase">
                I'M GLAD YOU'RE HERE.
              </h2>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                Hi <span className="inline-block animate-wave origin-bottom-right">👋</span>,
                I'm Emmanuel<br />Moiwoh Jr.
              </h1>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8">
                <TypeAnimation
                  sequence={[
                    'Frontend Developer',
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
            
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl leading-relaxed font-light animate-fadeInUp animation-delay-600">
              I'm passionate about creating <span className="text-yellow-400 font-medium">user-friendly designs</span> and
              <span className="text-yellow-400 font-medium"> functional websites</span>.
              With expertise in both design and development, I bring a unique perspective
              to every project. Let's collaborate on something <span className="text-yellow-400 font-medium">great</span>!
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a
                href="/files/Emmanuel M Moiwoh Jr Professional Resume.pdf"
                download
                className="group px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-medium rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center"
              >
                <span className="mr-2">Download Resume</span>
                <Download 
                  size={18} 
                  className="transform transition-transform duration-300 group-hover:-translate-y-1" 
                />
              </a>
              <a
                href="#projects"
                className="px-6 py-3 mt-2 bg-transparent hover:bg-gray-700 text-white border-2 border-gray-600 font-medium rounded-full transition-all duration-300"
              >
                View Projects
              </a>
            </div>
            
            <div className="flex items-center gap-4 pt-4">
              <a 
                href="https://github.com/" 
                target="_blank"
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://linkedin.com/" 
                target="_blank"
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="https://twitter.com/" 
                target="_blank"
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter size={24} />
              </a>
            </div>
          </div>
          
          <div className="lg:w-1/2 flex justify-center items-center">
            <div className="relative">
              {/* Professional image with hexagon clip-path */}
              <div className="relative w-80 h-96 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-blue-500/20 z-10" />
                <div 
                  className="relative w-full h-full transform hover:scale-105 transition-transform duration-500"
                  style={{
                    clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
                    boxShadow: '0 0 20px rgba(0,0,0,0.3)'
                  }}
                >
                  <img 
                    src="src/images/emmanuel-removebg-preview.png" 
                    alt="Emmanuel Moiwoh Jr" 
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                {/* Decorative border */}
                <div 
                  className="absolute inset-0 border-2 border-yellow-400/30 z-20"
                  style={{
                    clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
                    transform: 'scale(1.02)'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;