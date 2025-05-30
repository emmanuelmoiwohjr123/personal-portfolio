import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import WorldMapBackground from './WorldMapBackground';

type ProjectType = 'All' | 'Web Development' | 'UI/UX' | 'E-commerce';

interface Project {
  title: string;
  description: string;
  image: string;
  category: ProjectType;
  demoLink: string;
  githubLink: string;
  technologies: string[];
}

const projects: Project[] = [
  {
    title: "Modern E-commerce Platform",
    description: "A fully responsive e-commerce solution with advanced filtering and payment integration.",
    image: "src/images/ph1.jpg",
    category: "E-commerce",
    demoLink: "https://demo.example.com",
    githubLink: "https://github.com/example/ecommerce",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"]
  },
  {
    title: "Portfolio Website Redesign",
    description: "A sleek portfolio website with smooth animations and interactive elements.",
    image: "src/images/ph2.jpg",
    category: "UI/UX",
    demoLink: "https://demo.example.com",
    githubLink: "https://github.com/example/portfolio",
    technologies: ["HTML5", "CSS3", "JavaScript", "GSAP"]
  },
  {
    title: "Task Management Dashboard",
    description: "A comprehensive task management system with real-time updates and team collaboration.",
    image: "src/images/ph3.jpg",
    category: "Web Development",
    demoLink: "https://demo.example.com",
    githubLink: "https://github.com/example/dashboard",
    technologies: ["React", "Firebase", "Material UI", "Chart.js"]
  },
  {
    title: "Restaurant Ordering System",
    description: "An online ordering platform for restaurants with menu management and delivery tracking.",
    image: "src/images/ph4.jpg",
    category: "E-commerce",
    demoLink: "https://demo.example.com",
    githubLink: "https://github.com/example/restaurant",
    technologies: ["Vue.js", "Express", "PostgreSQL", "Mapbox"]
  },
  {
    title: "Fitness Tracking App",
    description: "A mobile-responsive fitness application with workout plans and progress tracking.",
    image: "src/images/ph5.jpg",
    category: "UI/UX",
    demoLink: "https://demo.example.com",
    githubLink: "https://github.com/example/fitness",
    technologies: ["React Native", "Redux", "Firebase", "D3.js"]
  },
  {
    title: "Corporate Website Overhaul",
    description: "A complete redesign of a corporate website with improved UX and performance.",
    image: "src/images/ph6.jpg",
    category: "Web Development",
    demoLink: "https://demo.example.com",
    githubLink: "https://github.com/example/corporate",
    technologies: ["WordPress", "Elementor", "PHP", "MySQL"]
  }
];

const ProjectsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<ProjectType>('All');
  const categories: ProjectType[] = ['All', 'Web Development', 'UI/UX', 'E-commerce'];

  const filteredProjects = projects.filter(project => 
    activeFilter === 'All' ? true : project.category === activeFilter
  );

  return (
    <section id="projects" className="py-20 bg-black relative overflow-hidden">
      <WorldMapBackground />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            My <span className="text-yellow-400">Projects</span>
            
          </h2>
          
          <p className="text-gray-300 max-w-3xl mx-auto">
            Explore my portfolio of web development, UI/UX design, and e-commerce projects. Each
            project represents my commitment to creating beautiful, functional digital experiences.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2 rounded-full transition-all ${activeFilter === category
                ? 'bg-yellow-400 text-black'
                : 'bg-gray-800 text-white hover:bg-gray-700'}`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div key={index} className="bg-gray-900 rounded-xl overflow-hidden">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span className="px-4 py-1 text-sm rounded-full bg-yellow-400 text-black font-medium">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="px-3 py-1 text-sm bg-gray-800 text-gray-300 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-yellow-400 text-black rounded-full hover:bg-yellow-500 transition-colors"
                  >
                    Live Demo <ExternalLink size={16} />
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors"
                  >
                    GitHub <Github size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;