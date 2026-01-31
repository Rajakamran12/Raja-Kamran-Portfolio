
import React from 'react';
import { EXPERIENCES, EDUCATION } from '../constants';

const Resume: React.FC = () => {
  return (
    <div className="container mx-auto">
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-white uppercase relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-1 after:bg-[#149ddd]">
          Resume
        </h2>
        <p className="mt-8 text-[#94a3b8] italic text-lg max-w-4xl">
          Passionate Full Stack Developer with expertise in building scalable web applications. Skilled in frontend and backend development with strong foundations in modern web technologies, secure authentication systems, and optimized database performance.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Column: Summary & Education */}
        <div>
          <h3 className="text-2xl font-bold text-[#f8fafc] mb-8">Summary</h3>
          <div className="relative pl-8 border-l-2 border-[#1e293b] mb-10">
            <div className="absolute w-5 h-5 bg-[#050816] border-2 border-[#149ddd] rounded-full -left-[11px] top-0 shadow-[0_0_10px_#149ddd]"></div>
            <h4 className="text-xl font-bold text-[#149ddd] uppercase tracking-wide">Raja Muhammad Kamran Afzal</h4>
            <p className="italic text-[#cbd5e1] mt-3">
              Full Stack Developer & AI enthusiast focused on clean, maintainable code and best practices.
            </p>
            <ul className="list-none mt-5 text-[#94a3b8] space-y-3">
              <li>Rawalpindi, Pakistan</li>
              <li>+92 3306927488</li>
              <li>rajakami854@gmail.com</li>
            </ul>
          </div>

          <h3 className="text-2xl font-bold text-[#f8fafc] mb-8">Education</h3>
          {EDUCATION.map((edu, idx) => (
            <div key={idx} className="relative pl-8 border-l-2 border-[#1e293b] pb-10 last:pb-0">
              <div className="absolute w-5 h-5 bg-[#050816] border-2 border-[#149ddd] rounded-full -left-[11px] top-0"></div>
              <h4 className="text-xl font-bold text-white uppercase tracking-tight">{edu.degree}</h4>
              <h5 className="inline-block px-4 py-1.5 bg-[#149ddd]/10 text-[#149ddd] font-semibold text-sm mt-3 mb-4 rounded-md border border-[#149ddd]/20">
                {edu.period}
              </h5>
              <p className="italic text-[#cbd5e1] font-medium">{edu.institution}</p>
              <p className="text-[#94a3b8] mt-3 leading-relaxed">{edu.description}</p>
            </div>
          ))}
        </div>

        {/* Right Column: Professional Experience */}
        <div>
          <h3 className="text-2xl font-bold text-[#f8fafc] mb-8">Professional Experience</h3>
          {EXPERIENCES.map((exp, idx) => (
            <div key={idx} className="relative pl-8 border-l-2 border-[#1e293b] pb-10 last:pb-0">
              <div className="absolute w-5 h-5 bg-[#050816] border-2 border-[#149ddd] rounded-full -left-[11px] top-0"></div>
              <h4 className="text-xl font-bold text-white uppercase tracking-tight">{exp.title}</h4>
              <h5 className="inline-block px-4 py-1.5 bg-[#149ddd]/10 text-[#149ddd] font-semibold text-sm mt-3 mb-4 rounded-md border border-[#149ddd]/20">
                {exp.period}
              </h5>
              <p className="italic text-[#cbd5e1] font-medium mb-5">{exp.company}</p>
              <ul className="list-disc pl-5 text-[#94a3b8] space-y-3">
                {exp.description.map((item, i) => (
                  <li key={i} className="leading-relaxed">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resume;
