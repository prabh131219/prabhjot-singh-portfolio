import { Mail, Linkedin, Github, Instagram } from 'lucide-react';

const socialLinks = [
  { icon: Mail, href: 'mailto:prabhjotsinghbagga369@gmail.com', label: 'Email' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/prabhjot-singh-03776b404', label: 'LinkedIn' },
  { icon: Github, href: 'https://github.com/prabh131219', label: 'GitHub' },
  { icon: Instagram, href: 'https://www.instagram.com/imprabhjotsingh4784_', label: 'Instagram' },
];

export default function Footer() {
  return (
    <footer className="relative bg-navy-950 border-t border-navy-800/50">
      <div className="section-container py-12">
        <div className="flex flex-col items-center text-center">
          <h3 className="font-display text-2xl font-bold text-white mb-2">PRABHJOT SINGH BAGGA</h3>
          <p className="text-silver-400 text-sm mb-6">
            AI & Data Science Student &nbsp;|&nbsp; Founder &nbsp;|&nbsp; Technology Entrepreneur
          </p>

          <div className="flex items-center gap-4 mb-8">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-navy-800/50 flex items-center justify-center text-silver-400 hover:text-white hover:bg-navy-700/50 transition-all"
                aria-label={social.label}
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>

          <div className="w-full h-px bg-gradient-to-r from-transparent via-navy-800 to-transparent mb-6" />

          <p className="text-silver-500 text-sm">
            &copy; {new Date().getFullYear()} Prabhjot Singh Bagga. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
