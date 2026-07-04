import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Code, BarChart3, BrainCircuit, Globe, Users, ChevronRight } from 'lucide-react';

const skillCategories = [
  {
    icon: Code,
    title: 'Programming',
    color: 'from-navy-700 to-navy-800',
    skills: ['Python', 'SQL', 'R Programming'],
  },
  {
    icon: BarChart3,
    title: 'Data Analytics',
    color: 'from-navy-800 to-slate-800',
    skills: ['Microsoft Excel', 'Power BI', 'Data Visualization'],
  },
  {
    icon: BrainCircuit,
    title: 'AI & Machine Learning',
    color: 'from-slate-800 to-slate-900',
    skills: ['Artificial Intelligence', 'Machine Learning', 'Generative AI', 'Prompt Engineering'],
  },
  {
    icon: Globe,
    title: 'Development',
    color: 'from-navy-800 to-navy-900',
    skills: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    icon: Users,
    title: 'Professional Skills',
    color: 'from-slate-900 to-slate-800',
    skills: ['Leadership', 'Entrepreneurship', 'Problem Solving', 'Project Management', 'Communication'],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <section id="skills" className="relative py-24 bg-gradient-to-b from-navy-950 to-navy-900">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-navy-700 to-transparent" />
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-navy-400 text-sm font-semibold tracking-widest uppercase mb-3 block">What I Bring</span>
          <h2 className="section-heading text-white">Skills & Expertise</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + catIndex * 0.1 }}
              onMouseEnter={() => setActiveCard(catIndex)}
              onMouseLeave={() => setActiveCard(null)}
              className="glass-card p-6 hover:scale-[1.02] transition-all duration-500 cursor-pointer group"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <category.icon size={22} className="text-white" />
              </div>
              <h3 className="text-white font-semibold text-lg mb-4">{category.title}</h3>
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.3, delay: 0.4 + catIndex * 0.1 + skillIndex * 0.05 }}
                    className="flex items-center gap-2"
                  >
                    <ChevronRight size={14} className={`text-navy-500 transition-colors ${activeCard === catIndex ? 'text-navy-300' : ''}`} />
                    <span className="text-silver-400 text-sm">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
