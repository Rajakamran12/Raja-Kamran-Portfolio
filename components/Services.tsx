
import React from 'react';
import { Layout, Server, Layers, Code, Cloud } from 'lucide-react';
import { SERVICES } from '../constants';

const iconMap: Record<string, any> = {
  Layout: Layout,
  Server: Server,
  Layers: Layers,
  Code: Code,
  Cloud: Cloud
};

const Services: React.FC = () => {
  return (
    <div className="container mx-auto">
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-white uppercase relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-1 after:bg-[#149ddd]">
          Services
        </h2>
        <p className="mt-8 text-[#94a3b8] italic text-lg max-w-4xl">
          Offering comprehensive web development and design solutions tailored to meet modern business needs and technological standards.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SERVICES.map((service, idx) => {
          const IconComponent = iconMap[service.icon];
          return (
            <div key={idx} className="group p-10 bg-[#10172d] border border-[#1e293b] rounded-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#149ddd]/50 hover:shadow-[0_10px_40px_-15px_rgba(20,157,221,0.3)]">
              <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-[#149ddd]/10 text-[#149ddd] mb-8 group-hover:bg-[#149ddd] group-hover:text-white transition-all duration-300">
                <IconComponent size={32} />
              </div>
              <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-[#149ddd] transition-colors">
                {service.title}
              </h4>
              <p className="text-[#94a3b8] text-base leading-relaxed">
                {service.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
