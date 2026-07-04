import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Rocket, Factory, Crown, Calendar, MapPin, TrendingUp } from 'lucide-react';

const experiences = [
  {
    title: 'Founder',
    company: 'HMP NEXORA',
    period: '2026 – Present',
    location: 'Amritsar, India',
    description: 'Founded and leading a technology-driven venture focused on innovative solutions. Driving strategic vision, product development, and business growth.',
    icon: Rocket,
    color: 'bg-gradient-to-br from-navy-700 to-navy-600',
  },
  {
    title: 'Founder',
    company: 'Royal Trader',
    period: '2026 – Present',
    location: 'Amritsar, India',
    description: 'Founded and managing Royal Trader, overseeing business operations, strategy, and growth initiatives in the trading domain.',
    icon: TrendingUp,
    color: 'bg-gradient-to-br from-slate-700 to-navy-700',
  },
  {
    title: 'Industrial Trainee',
    company: 'AI & Technology Training',
    period: '2025 – 2026',
    location: 'Amritsar, India',
    description: 'Completed hands-on industrial training in AI and technology domains. Gained practical experience in machine learning, data analysis, and software development practices.',
    icon: Factory,
    color: 'bg-gradient-to-br from-slate-800 to-slate-700',
  },
  {
    title: 'President',
    company: 'Tech Era Computer Science Society',
    period: '2025 – 2026',
    location: 'Khalsa College, Amritsar',
    description: 'Led technical events and student activities as President of Tech Era Computer Science Society. Organized Tech Fest and workshops to enhance student engagement. Coordinated teams for event management, ensuring successful execution.',
    icon: Crown,
    color: 'bg-gradient-to-br from-navy-800 to-navy-700',
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="relative py-24 bg-navy-950">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-navy-700 to-transparent" />
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-navy-400 text-sm font-semibold tracking-widest uppercase mb-3 block">My Journey</span>
          <h2 className="section-heading text-white">Professional Experience</h2>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-navy-700 via-navy-600 to-navy-700 md:-translate-x-px" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
              className={`relative flex items-start gap-6 mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              <div className="hidden md:block md:w-1/2" />
              <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 w-10 h-10 rounded-full border-4 border-navy-900 z-10 flex items-center justify-center">
                <div className={`w-4 h-4 rounded-full ${exp.color}`} />
              </div>
              <div className={`ml-14 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <div className="glass-card p-6 hover:scale-[1.01] transition-transform duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-10 h-10 rounded-lg ${exp.color} flex items-center justify-center`}>
                      <exp.icon size={18} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">{exp.title}</h3>
                      <p className="text-navy-300 font-medium text-sm">{exp.company}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-silver-500 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={14} />
                      {exp.location}
                    </span>
                  </div>
                  <p className="text-silver-400 text-sm leading-relaxed">{exp.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
