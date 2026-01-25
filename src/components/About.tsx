import React from "react";
import { motion } from "framer-motion";
import ElectricBorder from "./ElectricBorder";

const About: React.FC = () => {
  const timeline = [
    { year: "2021", event: "12th Science(PMC)", detail: "PHBV, Surat" },
    { year: "2025", event: "BS in Computer Science", detail: "SASSC, Surat" },
    { year: "2025", event: "Marketing Certificate", detail: "Digital Marketing" },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-dark-bg to-navy-bg p-32">
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 pt-8 ">
          {/* Timeline */}
          <div>
            <h2 className="text-4xl font-bold text-start mb-12 text-white">Education</h2>
            <h3 className="text-2xl font-bold mb-6 text-neon-green">Timeline</h3>
            <div className="space-y-6">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="flex items-start space-x-4">
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

          {/* HERE */}
          <ElectricBorder
            color="#7df9ff"
            speed={1}
            chaos={0.12}
            // thickness={2}
            className="col-span-2"
            style={{ borderRadius: 16 }}>
            <div className="text-center max-w-4xl mx-auto p-12">
              <motion.h2
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-xl md:text-4xl font-bold mb-8 text-neon-cyan">
                🚀 Deploy Me on Your Brand
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl md:text-2xl mb-12 opacity-80">
                Ready to transform your brand's digital presence? Let's build growth systems that deliver results.
              </motion.p>

              <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-12">
                <motion.a
                  href="mailto:patelhunny148@gmail.com"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 }}
                  className=" hover:bg-neon-cyan bg-transparent text-neon-cyan hover:text-black border border-neon-cyan px-8 py-4 rounded-lg font-bold text-lg hover:bg-opacity-80 transition-colors">
                  📧 Email Me
                </motion.a>

                <motion.a
                  href="/HunnyPatel_Resume.pdf"
                  download
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 }}
                  className="border border-neon-green text-neon-green px-8 py-4 rounded-lg font-bold text-lg hover:bg-neon-green hover:text-black transition-colors">
                  📄 Download Resume
                </motion.a>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="text-sm opacity-60"></motion.div>
            </div>
          </ElectricBorder>
        </div>
        <p className="mt-40 text-center">Hunny Patel • Full-Stack Digital Strategist • Bangalore, Karnataka</p>
      </div>
    </section>
  );
};

export default About;
