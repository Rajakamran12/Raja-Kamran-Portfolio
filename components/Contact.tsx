
import React, { useState } from 'react';
import { MapPin, Mail, Smartphone } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message! This is a demo form.");
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="container mx-auto">
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-white uppercase relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-1 after:bg-[#149ddd]">
          Contact
        </h2>
        <p className="mt-8 text-[#94a3b8] italic text-lg max-w-4xl">
          Every action leads to consequences, shaping our journey and opportunities for growth.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Contact Info */}
        <div className="lg:col-span-5 bg-[#10172d] p-10 rounded-xl border border-[#1e293b] shadow-2xl">
          <div className="space-y-10">
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#149ddd]/10 text-[#149ddd] flex-shrink-0 transition-all hover:scale-110">
                <MapPin size={26} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white tracking-wide">Location:</h4>
                <p className="text-[#94a3b8] mt-1 text-lg">Rawalpindi, Pakistan</p>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#149ddd]/10 text-[#149ddd] flex-shrink-0 transition-all hover:scale-110">
                <Mail size={26} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white tracking-wide">Email:</h4>
                <p className="text-[#94a3b8] mt-1 text-lg">rajakami854@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#149ddd]/10 text-[#149ddd] flex-shrink-0 transition-all hover:scale-110">
                <Smartphone size={26} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white tracking-wide">Call:</h4>
                <p className="text-[#94a3b8] mt-1 text-lg">+92 3129529788</p>
              </div>
            </div>
          </div>

          <div className="mt-12 rounded-xl overflow-hidden border border-[#1e293b] grayscale hover:grayscale-0 transition-all duration-700 shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106316.34567215162!2d73.00318043681427!3d33.51351294833215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df948974419acb%3A0x984357ad7a845162!2sRawalpindi%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1715012345678!5m2!1sen!2s"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-7 bg-[#10172d] p-10 rounded-xl border border-[#1e293b] shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-sm font-bold text-[#cbd5e1] uppercase tracking-wider">Your Name</label>
                <input
                  type="text"
                  required
                  className="w-full px-5 py-3.5 bg-[#050816] border border-[#1e293b] focus:border-[#149ddd] focus:ring-1 focus:ring-[#149ddd] focus:outline-none rounded-lg text-white transition-all duration-300"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div className="space-y-3">
                <label className="text-sm font-bold text-[#cbd5e1] uppercase tracking-wider">Your Email</label>
                <input
                  type="email"
                  required
                  className="w-full px-5 py-3.5 bg-[#050816] border border-[#1e293b] focus:border-[#149ddd] focus:ring-1 focus:ring-[#149ddd] focus:outline-none rounded-lg text-white transition-all duration-300"
                  placeholder="name@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-sm font-bold text-[#cbd5e1] uppercase tracking-wider">Subject</label>
              <input
                type="text"
                required
                className="w-full px-5 py-3.5 bg-[#050816] border border-[#1e293b] focus:border-[#149ddd] focus:ring-1 focus:ring-[#149ddd] focus:outline-none rounded-lg text-white transition-all duration-300"
                placeholder="How can I help you?"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              />
            </div>

            <div className="space-y-3">
              <label className="text-sm font-bold text-[#cbd5e1] uppercase tracking-wider">Message</label>
              <textarea
                rows={6}
                required
                className="w-full px-5 py-3.5 bg-[#050816] border border-[#1e293b] focus:border-[#149ddd] focus:ring-1 focus:ring-[#149ddd] focus:outline-none rounded-lg text-white transition-all duration-300 resize-none"
                placeholder="Write your message here..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              ></textarea>
            </div>

            <div className="text-center pt-4">
              <button
                type="submit"
                className="px-14 py-4 bg-[#149ddd] text-white font-bold rounded-full hover:bg-[#1f5297] transition-all transform hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(20,157,221,0.4)] tracking-wide uppercase text-sm"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
