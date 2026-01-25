import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const timeline = [
    { year: '2020', event: 'Started Digital Marketing Journey', detail: 'Focused on Meta Ads and Social Media' },
    { year: '2021', event: 'Brand Strategy Specialization', detail: 'Developed comprehensive brand growth frameworks' },
    { year: '2022', event: 'Shopify & E-commerce Expertise', detail: 'Optimized online stores for maximum conversion' },
    { year: '2023', event: 'Leadership & Analytics', detail: 'Led teams and mastered data-driven strategies' }
  ];

  const skills = [
    'Meta Ads', 'Instagram Marketing', 'Brand Strategy', 'Campaign Optimization',
    'Content Creation', 'Shopify', 'Analytics', 'Leadership'
  ];

  const certifications = [
    'Google Ads Certified', 'Meta Blueprint Certified', 'Shopify Expert'
  ];

  const interests = [
    'Digital Innovation', 'Brand Storytelling', 'Data Analytics', 'Creative Strategy'
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-dark-bg to-navy-bg p-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-neon-purple">The Operator</h2>

        <div className="text-center mb-16">
          <motion.blockquote
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-2xl md:text-3xl font-bold text-neon-cyan mb-8"
          >
            "I don't just run campaigns.<br />
            I design growth systems that turn attention into revenue."
          </motion.blockquote>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Timeline */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-neon-green">Experience Timeline</h3>
            <div className="space-y-6">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0 w-16 h-16 bg-neon-cyan/20 border border-neon-cyan rounded-lg flex items-center justify-center">
                    <span className="text-neon-cyan font-bold">{item.year}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">{item.event}</h4>
                    <p className="text-sm opacity-70">{item.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Skills & Certifications */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-neon-green">Core Skills</h3>
              <div className="grid grid-cols-2 gap-3">
                {skills.map((skill) => (
                  <motion.div
                    key={skill}
                    whileHover={{ scale: 1.05 }}
                    className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-lg p-3 text-center"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 text-neon-green">Certifications</h3>
              <div className="space-y-3">
                {certifications.map((cert) => (
                  <div key={cert} className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-lg p-3">
                    {cert}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 text-neon-green">Interests</h3>
              <div className="grid grid-cols-2 gap-3">
                {interests.map((interest) => (
                  <motion.div
                    key={interest}
                    whileHover={{ scale: 1.05 }}
                    className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-lg p-3 text-center"
                  >
                    {interest}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
