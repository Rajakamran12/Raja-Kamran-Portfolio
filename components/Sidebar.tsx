
import React from 'react';
import { 
  Home, 
  User, 
  FileText, 
  Server, 
  Layers, 
  Mail,
  Linkedin,
  Github,
  Instagram
} from 'lucide-react';

interface SidebarProps {
  activeSection: string;
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeSection, isOpen, onClose }) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'resume', label: 'Resume', icon: FileText },
    { id: 'portfolio', label: 'Portfolio', icon: Layers },
    { id: 'services', label: 'Services', icon: Server },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  const socialLinks = [
    { icon: Instagram, href: '#' },
    { icon: Linkedin, href: '#' },
    { icon: Github, href: '#' },
  ];

  // Image served from the `public/` folder so it's available in production builds.
  const profileImage = "/profile.png";

  return (
    <aside
      className={`fixed top-0 left-0 bottom-0 w-[300px] bg-[#040b14] transition-transform duration-300 z-40 overflow-y-auto
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0 shadow-2xl lg:shadow-none'}`}
    >
      <div className="flex flex-col h-full py-8">
        <div className="px-8 text-center mb-8">
          <div className="w-28 h-28 mx-auto rounded-full border-8 border-[#2c2f3f] overflow-hidden mb-4 transition-transform hover:scale-105 duration-300 bg-white">
            <img
              src={profileImage}
              alt="Raja Muhammad Kamran Afzal"
              className="w-full h-full object-cover object-top"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300";
              }}
            />
          </div>
          <h1 className="text-white text-2xl font-bold mb-2 tracking-tight">Raja Kamran Afzal</h1>
          <div className="flex justify-center gap-3">
            {socialLinks.map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                className="w-9 h-9 flex items-center justify-center rounded-full bg-[#212431] text-white hover:bg-[#149ddd] transition-all duration-300 transform hover:scale-110"
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <nav className="flex-1 px-8">
          <ul className="space-y-4">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={onClose}
                  className={`flex items-center gap-4 group transition-all duration-300 py-2
                    ${activeSection === item.id ? 'text-[#149ddd]' : 'text-[#a8a9b4] hover:text-white'}`}
                >
                  <item.icon
                    size={22}
                    className={`transition-colors duration-300 ${activeSection === item.id ? 'text-[#149ddd]' : 'text-[#a8a9b4] group-hover:text-[#149ddd]'}`}
                  />
                  <span className="font-medium tracking-wide">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
