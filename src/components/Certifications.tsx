import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FileCheck, Shield, Lock, Megaphone, Award, Code2 } from 'lucide-react';

const certifications = [
  {
    title: 'Data Analytics Certification',
    description: 'Comprehensive certification covering data analysis, visualization, and statistical methods for deriving business insights.',
    icon: FileCheck,
    color: 'from-navy-700 to-navy-600',
  },
  {
    title: 'Cybersecurity Certification',
    description: 'Certified in cybersecurity fundamentals, including threat detection, risk management, and network security protocols.',
    icon: Shield,
    color: 'from-slate-800 to-slate-700',
  },
  {
    title: 'Ethical Hacking Certification',
    description: 'Professional certification in ethical hacking and penetration testing, demonstrating defensive security expertise.',
    icon: Lock,
    color: 'from-navy-800 to-navy-700',
  },
  {
    title: 'Digital Marketing Certification',
    description: 'Certified in digital marketing strategies, SEO, social media marketing, and content creation for brand growth.',
    icon: Megaphone,
    color: 'from-slate-700 to-slate-600',
  },
  {
    title: 'Skill Development Certification',
    description: 'Advanced skill development program covering professional competencies, soft skills, and technical proficiency.',
    icon: Award,
    color: 'from-navy-600 to-slate-700',
  },
  {
    title: 'Programming for Everybody (Getting Started with Python)',
    description: 'Completed the foundational Python programming course offered by the University of Michigan, covering core concepts, data structures, and practical programming skills.',
    icon: Code2,
    color: 'from-navy-700 to-slate-800',
    issuer: 'University of Michigan',
  },
];

export default function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="certifications" className="relative py-24 bg-navy-950">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-navy-700 to-transparent" />
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-navy-400 text-sm font-semibold tracking-widest uppercase mb-3 block">Credentials</span>
          <h2 className="section-heading text-white">Certifications</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="glass-card p-6 hover:scale-[1.02] transition-all duration-500 group"
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${cert.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <cert.icon size={26} className="text-white" />
              </div>
              <h3 className="text-white font-semibold text-lg mb-1">{cert.title}</h3>
              {'issuer' in cert && (
                <p className="text-navy-400 text-xs font-semibold uppercase tracking-wide mb-3">{cert.issuer}</p>
              )}
              {!('issuer' in cert) && <div className="mb-3" />}
              <p className="text-silver-400 text-sm leading-relaxed">{cert.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
