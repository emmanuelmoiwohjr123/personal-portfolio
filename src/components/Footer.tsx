import React from 'react';
import { Facebook, Twitter, Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-4">GET IN TOUCH</h3>
            <p className="text-gray-400 mb-4">
              Have a project in mind or just want to connect? Feel free to reach out, I'm always open to new opportunities and collaborations.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">ABOUT ME</h3>
            <p className="text-gray-400">
              I'm a passionate web designer and developer who creates visually stunning, user-friendly websites. With a focus on clean design, smooth performance, and collaborative creativity, I turn ideas into impactful digital experiences.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">MY PROJECTS</h3>
            <div className="grid grid-cols-3 gap-2">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="aspect-square bg-gray-800 rounded-lg overflow-hidden">
                  <img
                    src={`https://images.pexels.com/photos/${1389429 + item}/pexels-photo-${1389429 + item}.jpeg?auto=compress&cs=tinysrgb&w=100`}
                    alt={`Project ${item}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            © Emmanuel Moiwoh Jr 2025. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Github size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;