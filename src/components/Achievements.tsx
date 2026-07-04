import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Trophy, Award, Medal, Star, Shield, Zap } from 'lucide-react';

const achievements = [
  {
    title: 'Winner – Project Display Competition',
    venue: 'Global Group of Institutes',
    description: 'Secured first position in the Project Display Competition at Global Group of Institutes, demonstrating exceptional technical skills and innovative thinking.',
    icon: Trophy,
    color: 'from-yellow-600/20 to-amber-700/20',
    borderColor: 'border-yellow-600/30',
  },
  {
    title: 'Second Position – Hackathon',
    venue: 'Khalsa College, Amritsar',
    description: 'Achieved runner-up position in the Hackathon at Khalsa College, Amritsar, showcasing rapid prototyping and collaborative problem-solving abilities.',
    icon: Zap,
    color: 'from-navy-700/20 to-navy-600/20',
    borderColor: 'border-navy-600/30',
  },
  {
    title: 'Second Position – Code Warrior Competition',
    venue: 'Khalsa College of Engineering and Technology',
    description: 'Placed second in the Code Warrior Competition at Khalsa College of Engineering and Technology, demonstrating strong algorithmic thinking and programming proficiency.',
    icon: Shield,
    color: 'from-slate-700/20 to-slate-600/20',
    borderColor: 'border-slate-600/30',
  },
  {
    title: 'Second Position – Web Nexus Competition',
    venue: 'Khalsa College, Amritsar',
    description: 'Earned second place in the Web Nexus Competition at Khalsa College, Amritsar, highlighting expertise in front-end technologies and web design.',
    icon: Star,
    color: 'from-navy-800/20 to-navy-700/20',
    borderColor: 'border-navy-700/30',
  },
  {
    title: 'President – Tech Era Computer Science Society',
    venue: 'Khalsa College, Amritsar (2025–2026)',
    description: 'Elected President of the Tech Era Computer Science Society for 2025–2026, leading technical events, coding competitions, and skill development programs.',
    icon: Medal,
    color: 'from-slate-600/20 to-navy-700/20',
    borderColor: 'border-slate-500/30',
  },
  {
    title: 'Skill Development Certificate – Grade A',
    venue: 'Skill Development Program',
    description: 'Received a top-tier Skill Development Certificate with Grade A, validating excellence in professional and technical competencies.',
    icon: Award,
    color: 'from-emerald-800/20 to-emerald-700/20',
    borderColor: 'border-emerald-700/30',
  },
];

export default function Achievements() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="achievements" className="relative py-24 bg-gradient-to-b from-navy-900 to-navy-950">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-navy-700 to-transparent" />
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-navy-400 text-sm font-semibold tracking-widest uppercase mb-3 block">Recognition</span>
          <h2 className="section-heading text-white">Achievements</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className={`glass-card p-6 border ${achievement.borderColor} hover:scale-[1.02] transition-all duration-500 group`}
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${achievement.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <achievement.icon size={26} className="text-white/90" />
              </div>
              <h3 className="text-white font-semibold text-lg mb-1">{achievement.title}</h3>
              <p className="text-navy-400 text-xs font-medium mb-3">{achievement.venue}</p>
              <p className="text-silver-400 text-sm leading-relaxed">{achievement.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
