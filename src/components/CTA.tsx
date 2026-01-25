import React from 'react';
import { motion } from 'framer-motion';

const CTA: React.FC = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-dark-bg to-navy-bg flex items-center justify-center p-8">
      <div className="text-center max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-bold mb-8 text-neon-cyan"
        >
          🚀 Deploy Me on Your Brand
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl mb-12 opacity-80"
        >
          Ready to transform your brand's digital presence? Let's build growth systems that deliver results.
        </motion.p>

        <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-12">
          <motion.a
            href="mailto:patelhunny148@gmail.com"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-neon-cyan text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-opacity-80 transition-colors"
          >
            📧 Email Me
          </motion.a>

          <motion.a
            href="#"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="border border-neon-green text-neon-green px-8 py-4 rounded-lg font-bold text-lg hover:bg-neon-green hover:text-black transition-colors"
          >
            📄 Download Resume
          </motion.a>

          <motion.a
            href="#"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
            className="border border-neon-purple text-neon-purple px-8 py-4 rounded-lg font-bold text-lg hover:bg-neon-purple hover:text-black transition-colors"
          >
            💼 LinkedIn
          </motion.a>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-sm opacity-60"
        >
          <p>Hunny Patel • Full-Stack Digital Strategist • Bangalore, Karnataka</p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
