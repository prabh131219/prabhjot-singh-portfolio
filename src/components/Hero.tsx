import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail } from 'lucide-react';
import AnimatedBackground from './AnimatedBackground';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <AnimatedBackground />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950/30 via-transparent to-navy-950 z-[1]" />

      <div className="relative z-10 section-container text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-4"
        >
          <span className="inline-block px-4 py-2 rounded-full border border-navy-600/50 text-sm font-medium text-navy-300 bg-navy-900/50 backdrop-blur-sm">
            Welcome to my portfolio
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
        >
          PRABHJOT SINGH
          <br />
          <span className="gradient-text">BAGGA</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-6"
        >
          <p className="text-lg sm:text-xl text-silver-400 font-light mb-2">
            AI & Data Science Student
          </p>
          <p className="text-base sm:text-lg text-navy-300 font-medium">
            Founder &ndash; HMP NEXORA & Royal Trader
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-xl sm:text-2xl text-silver-300 italic font-light max-w-2xl mx-auto mb-10"
        >
          &ldquo;Building Skills, Creating Solutions, Embracing Innovation.&rdquo;
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#projects" className="btn-primary flex items-center gap-2 group">
            View Projects
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="/Resume.pdf" download="Prabhjot_Singh_Bagga_Resume.pdf" className="btn-secondary flex items-center gap-2">
            <Download size={18} />
            Download Resume
          </a>
          <a href="#contact" className="btn-secondary flex items-center gap-2">
            <Mail size={18} />
            Contact Me
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 rounded-full border-2 border-silver-600/50 flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-2 rounded-full bg-silver-400"
          />
        </div>
      </motion.div>
    </section>
  );
}
