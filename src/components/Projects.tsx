import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Clock, Github, Bot, BarChart, Home, FileSearch, Briefcase, Globe, Cpu } from 'lucide-react';

const projects = [
  {
    title: 'AI Chatbot',
    description: 'An intelligent conversational AI powered by modern NLP techniques. Features natural language understanding, context-aware responses, and seamless integration capabilities for business applications.',
    icon: Bot,
    tech: ['Python', 'NLP', 'Machine Learning', 'API'],
    color: 'from-navy-700 to-navy-600',
  },
  {
    title: 'Sales Analytics Dashboard',
    description: 'A comprehensive data visualization platform for sales performance analysis. Interactive charts, real-time metrics, and actionable insights for business decision-making.',
    icon: BarChart,
    tech: ['Power BI', 'Excel', 'Data Visualization', 'Analytics'],
    color: 'from-slate-800 to-slate-700',
  },
  {
    title: 'House Price Prediction System',
    description: 'Machine learning model that predicts real estate prices based on location, features, and market data. Demonstrates regression modeling and feature engineering expertise.',
    icon: Home,
    tech: ['Python', 'Machine Learning', 'Pandas', 'Scikit-learn'],
    color: 'from-navy-800 to-navy-700',
  },
  {
    title: 'Personal Portfolio Website',
    description: 'A premium, responsive personal brand website built with modern web technologies. Showcases projects, skills, and achievements with elegant animations and design.',
    icon: Globe,
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    color: 'from-slate-700 to-slate-600',
  },
  {
    title: 'HMP NEXORA Official Website',
    description: 'The official corporate website for HMP NEXORA, featuring modern design, professional branding, and responsive layout optimized for business presentation.',
    icon: Briefcase,
    tech: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    color: 'from-navy-700 to-navy-800',
  },
  {
    title: 'Resume Analyzer',
    description: 'AI-powered tool that analyzes and optimizes resumes for ATS compatibility. Provides feedback on keyword optimization, formatting, and overall resume quality.',
    icon: FileSearch,
    tech: ['Python', 'NLP', 'AI', 'Data Processing'],
    color: 'from-slate-800 to-navy-800',
  },
  {
    title: 'Career Guidance AI Assistant',
    description: 'An intelligent career advisor that provides personalized guidance based on skills, interests, and market trends. Helps users navigate career paths and skill development.',
    icon: Cpu,
    tech: ['Generative AI', 'Prompt Engineering', 'Python', 'API'],
    color: 'from-navy-800 to-slate-800',
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="relative py-24 bg-navy-900">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-navy-700 to-transparent" />
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-navy-400 text-sm font-semibold tracking-widest uppercase mb-3 block">My Work</span>
          <h2 className="section-heading text-white mb-4">Featured Projects</h2>
          <p className="text-silver-400 max-w-2xl mx-auto">A curated selection of projects demonstrating my expertise in AI, data science, and web development.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="glass-card overflow-hidden group hover:scale-[1.02] transition-all duration-500"
            >
              <div className={`h-40 bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1)_0%,_transparent_70%)]" />
                <project.icon size={48} className="text-white/80 relative z-10 group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <h3 className="text-white font-semibold text-lg mb-3">{project.title}</h3>
                <p className="text-silver-400 text-sm leading-relaxed mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map(tech => (
                    <span key={tech} className="px-2 py-1 rounded-md text-xs font-medium bg-navy-800/50 text-navy-300 border border-navy-700/30">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <span className="flex items-center gap-2 px-4 py-2 rounded-lg bg-navy-800/20 text-silver-500 text-sm font-medium border border-navy-800/30 cursor-default select-none">
                    <Clock size={14} />
                    Coming Soon
                  </span>
                  <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-navy-700/30 text-silver-400 text-sm font-medium hover:bg-navy-800/30 transition-colors">
                    <Github size={14} />
                    Source
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
