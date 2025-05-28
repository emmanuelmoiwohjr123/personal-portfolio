import React from 'react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "Vinyl Record Store",
    description: "E-commerce platform for vintage vinyl records",
    image: "https://images.pexels.com/photos/1389429/pexels-photo-1389429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "#"
  },
  {
    title: "Monster Character",
    description: "Character design for gaming application",
    image: "https://images.pexels.com/photos/1816654/pexels-photo-1816654.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "#"
  },
  {
    title: "Brand Identity",
    description: "Complete branding package for startup",
    image: "https://images.pexels.com/photos/4348403/pexels-photo-4348403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "#"
  }
];

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 relative inline-block">
            RECENT PROJECTS
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-yellow-400"></span>
          </h2>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            A selection of my latest work, highlighting clean design, responsive layouts, and user-focused solutions built to meet real-world needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg bg-white shadow-lg">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <a
                    href={project.link}
                    className="text-white flex items-center gap-2 hover:text-yellow-400 transition-colors"
                  >
                    View Project <ExternalLink size={20} />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;