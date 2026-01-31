
import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { PROJECTS } from '../constants';

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', ...new Set(PROJECTS.map(p => p.category))];

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  return (
    <div className="container mx-auto">
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-white uppercase relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-1 after:bg-[#149ddd]">
          Portfolio
        </h2>
        <p className="mt-8 text-[#94a3b8] italic text-lg max-w-4xl">
          A showcase of some of my recent works ranging from MERN stack applications to AI integrations and mobile development.
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-8 py-2.5 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 border
              ${filter === cat 
                ? 'bg-[#149ddd] text-white border-[#149ddd] shadow-[0_0_15px_rgba(20,157,221,0.4)]' 
                : 'bg-[#10172d] text-[#cbd5e1] border-[#1e293b] hover:border-[#149ddd] hover:text-[#149ddd]'}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {filteredProjects.map((project, idx) => (
          <div key={idx} className="relative group overflow-hidden rounded-xl border border-[#1e293b] bg-[#10172d] aspect-[4/3] shadow-2xl">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-[#050816]/90 backdrop-blur-sm flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-500 p-8 text-center translate-y-4 group-hover:translate-y-0">
              <h4 className="text-white text-2xl font-bold mb-3">{project.title}</h4>
              <p className="text-[#94a3b8] text-sm mb-6 italic leading-relaxed">{project.description}</p>
              <div className="flex gap-5">
                {project.github && (
                  <a 
                    href={project.github} 
                    className="w-12 h-12 flex items-center justify-center rounded-full bg-[#149ddd] text-white hover:bg-white hover:text-[#149ddd] transition-all transform hover:scale-110 shadow-lg"
                    title="View Source Code"
                  >
                    <Github size={22} />
                  </a>
                )}
                {project.demo && (
                  <a 
                    href={project.demo} 
                    className="w-12 h-12 flex items-center justify-center rounded-full bg-[#149ddd] text-white hover:bg-white hover:text-[#149ddd] transition-all transform hover:scale-110 shadow-lg"
                    title="View Live Demo"
                  >
                    <ExternalLink size={22} />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
