
import React, { useEffect, useState, useRef } from 'react';
import { SKILLS } from '../constants';

const SkillBar: React.FC<{ name: string; percentage: number; isVisible: boolean }> = ({ name, percentage, isVisible }) => {
  return (
    <div className="mb-8">
      <div className="flex justify-between mb-2 uppercase text-sm font-bold text-white tracking-widest">
        <span>{name}</span>
        <span className="text-[#149ddd]">{percentage}%</span>
      </div>
      <div className="h-2.5 w-full bg-[#1e293b] rounded-full overflow-hidden border border-[#334155]/30">
        <div
          className="h-full bg-[#149ddd] transition-all duration-1000 ease-out shadow-[0_0_10px_#149ddd]"
          style={{ width: isVisible ? `${percentage}%` : '0%' }}
        ></div>
      </div>
    </div>
  );
};

const Skills: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="container mx-auto" ref={sectionRef}>
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-white uppercase relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-1 after:bg-[#149ddd]">
          Skills
        </h2>
        <p className="mt-8 text-[#94a3b8] italic max-w-4xl text-lg">
          Highly proficient in building web ecosystems from scratch. My technical toolkit includes everything from modern frontend frameworks to scalable cloud infrastructures.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16">
        {SKILLS.map((skill, idx) => (
          <SkillBar key={idx} name={skill.name} percentage={skill.percentage} isVisible={isVisible} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
