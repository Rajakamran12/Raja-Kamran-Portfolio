
import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const titles = ["Developer", "Designer", "Freelancer"];
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const handleTyping = () => {
      const fullText = titles[currentTitleIndex];
      
      if (!isDeleting) {
        setDisplayText(fullText.substring(0, displayText.length + 1));
        if (displayText === fullText) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText(fullText.substring(0, displayText.length - 1));
        if (displayText === '') {
          setIsDeleting(false);
          setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? 50 : 100);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentTitleIndex, titles]);

  return (
    <div 
      className="relative h-screen flex flex-col justify-center items-start px-8 lg:px-24 bg-cover bg-center bg-no-repeat bg-fixed"
      style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1920')" }}
    >
      <div className="z-10 animate-fadeIn ml-0 lg:ml-10">
        <h1 className="text-white text-4xl lg:text-7xl font-bold mb-4 tracking-tight">
          Raja Muhammad Kamran Afzal
        </h1>
        <div className="flex items-center text-white text-2xl lg:text-3xl font-medium min-h-[1.5em]">
          <span>I'm a&nbsp;</span>
          <span className="text-white border-b-2 border-[#149ddd] inline-block pb-1">
            {displayText}
            <span className="animate-pulse ml-1">|</span>
          </span>
        </div>
        <div className="mt-8 text-gray-200 max-w-2xl">
          <p className="text-lg lg:text-xl font-semibold text-[#149ddd] tracking-wide mb-2 uppercase">Full Stack Developer, AI Engineer</p>
          <p className="text-md lg:text-lg leading-relaxed text-gray-300">
            Building scalable web applications with AI features and modern full-stack technologies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
