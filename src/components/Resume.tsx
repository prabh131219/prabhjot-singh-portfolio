import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Download, FileText, CheckCircle, Eye } from 'lucide-react';

const RESUME_PDF = '/Resume.pdf';

const resumeHighlights = [
  'B.Sc. Artificial Intelligence & Data Science – Khalsa College',
  'Founder – HMP NEXORA (2026 – Present)',
  'President – Tech Era CS Society (2025–2026)',
  'Python, SQL, R, HTML, CSS, JavaScript',
  'Machine Learning, Generative AI & Power BI',
  'Winner – Project Display Competition, Global Group of Institutes',
];

export default function Resume() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="resume" className="relative py-24 bg-gradient-to-b from-navy-950 to-navy-900">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-navy-700 to-transparent" />
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-navy-400 text-sm font-semibold tracking-widest uppercase mb-3 block">My Profile</span>
          <h2 className="section-heading text-white">Resume</h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-card p-8 lg:p-12 text-center"
          >
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-navy-700 to-navy-600 flex items-center justify-center mx-auto mb-6">
              <FileText size={40} className="text-white" />
            </div>
            <h3 className="text-white font-semibold text-2xl mb-3">Prabhjot Singh Bagga</h3>
            <p className="text-silver-400 mb-8 max-w-lg mx-auto">
              AI & Data Science undergraduate with hands-on experience in Python, Machine Learning, Data Analytics,
              and Web Development. Founder of HMP NEXORA and former President of Tech Era Computer Science Society.
            </p>

            <div className="grid sm:grid-cols-2 gap-3 mb-10 max-w-lg mx-auto">
              {resumeHighlights.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.08 }}
                  className="flex items-center gap-2 text-left"
                >
                  <CheckCircle size={16} className="text-navy-400 shrink-0" />
                  <span className="text-silver-300 text-sm">{item}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <a
                href={RESUME_PDF}
                download="Prabhjot_Singh_Bagga_Resume.pdf"
                className="btn-primary inline-flex items-center gap-2 text-lg px-8 py-4"
              >
                <Download size={20} />
                Download Resume
              </a>
              <a
                href={RESUME_PDF}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center gap-2 text-lg px-8 py-4"
              >
                <Eye size={20} />
                View Resume
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
