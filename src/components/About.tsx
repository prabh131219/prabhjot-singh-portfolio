import { motion } from 'framer-motion';
import { GraduationCap, Brain, BarChart3, Code2, Rocket, Briefcase, Crown } from 'lucide-react';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const focusAreas = [
  { icon: Brain, label: 'Artificial Intelligence' },
  { icon: BarChart3, label: 'Machine Learning' },
  { icon: Code2, label: 'Data Analytics' },
  { icon: Rocket, label: 'Web Development' },
  { icon: Briefcase, label: 'Technology Innovation' },
  { icon: Crown, label: 'Entrepreneurship' },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="relative py-24 bg-navy-950">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-navy-700 to-transparent" />
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-navy-400 text-sm font-semibold tracking-widest uppercase mb-3 block">Who I Am</span>
          <h2 className="section-heading text-white">About Me</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="glass-card p-8 lg:p-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-navy-700 to-navy-800 flex items-center justify-center">
                  <GraduationCap size={24} className="text-navy-300" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg">Education</h3>
                  <p className="text-silver-400 text-sm">Bachelor of Science</p>
                </div>
              </div>
              <p className="text-white text-xl font-semibold mb-2">B.Sc. in Artificial Intelligence & Data Science</p>
              <p className="text-silver-400 mb-4">Khalsa College, Amritsar</p>
              <p className="text-silver-300 leading-relaxed">
                A dedicated and passionate student with a strong foundation in AI, machine learning, and data science.
                Committed to leveraging technology to solve real-world problems and drive innovation through entrepreneurship.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <div className="glass-card p-8 lg:p-10 mb-6">
              <h3 className="text-white font-semibold text-lg mb-4">Areas of Focus</h3>
              <div className="grid grid-cols-2 gap-3">
                {focusAreas.map((area, index) => (
                  <motion.div
                    key={area.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    className="flex items-center gap-3 p-3 rounded-lg bg-navy-800/40 hover:bg-navy-800/60 transition-colors"
                  >
                    <area.icon size={18} className="text-navy-400" />
                    <span className="text-silver-300 text-sm font-medium">{area.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-white font-semibold text-lg mb-3">Leadership Highlights</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-3 text-silver-300">
                  <Crown size={18} className="text-navy-400 shrink-0" />
                  <span>Founder of <span className="text-white font-semibold">HMP NEXORA</span></span>
                </li>
                <li className="flex items-center gap-3 text-silver-300">
                  <Crown size={18} className="text-navy-400 shrink-0" />
                  <span>Founder of <span className="text-white font-semibold">Royal Trader</span></span>
                </li>
                <li className="flex items-center gap-3 text-silver-300">
                  <Crown size={18} className="text-navy-400 shrink-0" />
                  <span>President of <span className="text-white font-semibold">Tech Era Computer Science Society</span> (2025&ndash;2026)</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
