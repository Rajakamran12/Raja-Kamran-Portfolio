
import React from 'react';
import { ChevronRight } from 'lucide-react';

const About: React.FC = () => {
  const personalInfo = [
    { label: 'Birthday', value: '12 January 2004' },
    { label: 'Website', value: 'kamran-afzal.com' },
    { label: 'Phone', value: '+92 3306927488' },
    { label: 'City', value: 'Rawalpindi, Pakistan' },
    { label: 'Age', value: '22' },
    { label: 'Degree', value: 'Bachelors in Artificial Intelligence' },
    { label: 'Email', value: 'rajakami854@gmail.com' },
    { label: 'Freelance', value: 'Available' },
  ];

  const profileImage = "/profile.png";

  return (
    <div className="container mx-auto">
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-white uppercase relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-1 after:bg-[#149ddd]">
          About
        </h2>
        <p className="mt-8 text-[#94a3b8] leading-relaxed text-lg max-w-4xl">
          I specialize in full-stack web development, leveraging modern technologies like React.js, Node.js, and MongoDB for building scalable, high-performance applications. My expertise includes developing responsive frontends, robust backend services, and integrating APIs and databases.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-4">
          <div className="rounded-lg shadow-[0_0_30px_rgba(20,157,221,0.2)] overflow-hidden bg-white/5 border border-[#1e293b] p-3 backdrop-blur-sm">
            <img
              src={profileImage}
              alt="Raja Muhammad Kamran Afzal"
              className="w-full h-auto transition-transform duration-700 hover:scale-110 rounded-md"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800";
              }}
            />
          </div>
        </div>

        <div className="lg:col-span-8">
          <h3 className="text-3xl font-bold text-white mb-4">
            Full Stack Developer & AI Engineer
          </h3>
          <p className="text-[#94a3b8] mb-8 italic text-lg leading-relaxed">
            I also integrate AI-driven features such as intelligent recommendations, automation, and data-driven insights to enhance user experience and system efficiency.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6">
            {personalInfo.map((info, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <ChevronRight className="text-[#149ddd] flex-shrink-0" size={22} />
                <span className="font-bold text-white min-w-[100px]">{info.label}:</span>
                <span className="text-[#cbd5e1]">{info.value}</span>
              </div>
            ))}
          </div>

          <p className="mt-10 text-[#94a3b8] leading-relaxed text-lg">
            Focused on building efficient systems that solve real-world problems. My passion lies at the intersection of web architecture and artificial intelligence, creating seamless digital experiences that are both powerful and user-friendly.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
