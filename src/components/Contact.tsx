import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Phone, Linkedin, Github, Send, MapPin, CheckCircle, Instagram } from 'lucide-react';

const contactCards = [
  {
    icon: Mail,
    label: 'Email',
    value: 'prabhjotsinghbagga369@gmail.com',
    href: 'mailto:prabhjotsinghbagga369@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 79864 14641',
    href: 'tel:+917986414641',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'prabhjot-singh-03776b404',
    href: 'https://www.linkedin.com/in/prabhjot-singh-03776b404',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'prabh131219',
    href: 'https://github.com/prabh131219',
  },
  {
    icon: Instagram,
    label: 'Instagram',
    value: '@imprabhjotsingh4784_',
    href: 'https://www.instagram.com/imprabhjotsingh4784_',
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="relative py-24 bg-navy-900">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-navy-700 to-transparent" />
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-navy-400 text-sm font-semibold tracking-widest uppercase mb-3 block">Get In Touch</span>
          <h2 className="section-heading text-white">Contact</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="text-white font-semibold text-xl mb-2">Send a Message</h3>
            <p className="text-silver-400 mb-6">Have a project idea or want to collaborate? Let's connect.</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-silver-300 mb-2">Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-navy-800/50 border border-navy-700/50 text-white placeholder-silver-500 focus:outline-none focus:border-navy-500 transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-silver-300 mb-2">Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-navy-800/50 border border-navy-700/50 text-white placeholder-silver-500 focus:outline-none focus:border-navy-500 transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-silver-300 mb-2">Message</label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-navy-800/50 border border-navy-700/50 text-white placeholder-silver-500 focus:outline-none focus:border-navy-500 transition-colors resize-none"
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                className="btn-primary flex items-center gap-2 w-full justify-center"
              >
                {submitted ? (
                  <>
                    <CheckCircle size={18} />
                    Message Sent
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="space-y-4"
          >
            <h3 className="text-white font-semibold text-xl mb-2">Contact Information</h3>
            <p className="text-silver-400 mb-6">Connect with me through any of these channels.</p>

            <div className="grid gap-4">
              {contactCards.map((card, index) => (
                <motion.a
                  key={card.label}
                  href={card.href}
                  target={card.href.startsWith('http') ? '_blank' : undefined}
                  rel={card.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  className="glass-card p-4 flex items-center gap-4 hover:bg-navy-800/40 transition-colors group"
                >
                  <div className="w-11 h-11 rounded-lg bg-navy-800/50 flex items-center justify-center group-hover:bg-navy-700/50 transition-colors shrink-0">
                    <card.icon size={20} className="text-navy-400" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-silver-500 text-sm">{card.label}</p>
                    <p className="text-white font-medium truncate">{card.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="glass-card p-4 flex items-center gap-4 mt-4">
              <div className="w-11 h-11 rounded-lg bg-navy-800/50 flex items-center justify-center shrink-0">
                <MapPin size={20} className="text-navy-400" />
              </div>
              <div>
                <p className="text-silver-500 text-sm">Location</p>
                <p className="text-white font-medium">Amritsar, Punjab, India 143022</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
