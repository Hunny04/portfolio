import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

interface HeroProps {
  onEnterControlRoom: () => void;
}

const Hero: React.FC<HeroProps> = ({ onEnterControlRoom }) => {
  const [showSubtext, setShowSubtext] = useState(false);
  const [systemBooted, setSystemBooted] = useState(false);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.to(".typewriter", {
      duration: 2,
      text: "Digital Growth. Engineered.",
      ease: "none",
      onComplete: () => setShowSubtext(true),
    });

    // Animated grid overlay
    if (gridRef.current) {
      gsap.to(gridRef.current, {
        backgroundPosition: "100px 100px",
        duration: 20,
        ease: "none",
        repeat: -1,
      });
    }

    // System boot sequence
    setTimeout(() => setSystemBooted(true), 1000);
  }, []);

  const systemIndicators = [
    { label: "Campaigns", status: "ONLINE", color: "text-green-400", icon: "📊" },
    { label: "Funnels", status: "OPTIMIZED", color: "text-cyan-400", icon: "🔄" },
    { label: "Growth Engine", status: "ACTIVE", color: "text-purple-400", icon: "⚡" },
    { label: "AI Analysis", status: "RUNNING", color: "text-green-400", icon: "🤖" },
    { label: "Data Streams", status: "CONNECTED", color: "text-cyan-400", icon: "📡" },
    { label: "Security", status: "ENGAGED", color: "text-purple-400", icon: "🔒" },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden">
      {/* Animated Grid Background */}
      <div
        ref={gridRef}
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Floating Control Panels */}
      <div className="absolute top-20 left-20 md:block hidden w-64 h-32 bg-black/30 backdrop-blur-sm border border-cyan-400/30 rounded-lg p-4">
        <div className="text-xs text-cyan-400 mb-2">SYSTEM STATUS</div>
        <div className="space-y-1">
          <div className="flex justify-between text-xs">
            <span>CPU Usage</span>
            <span className="text-green-400">23%</span>
          </div>
          <div className="w-full bg-black/50 rounded-full h-1">
            <div className="bg-green-400 h-1 rounded-full w-1/4"></div>
          </div>
        </div>
      </div>

      <div className="absolute top-20 right-20 md:block hidden w-64 h-32 bg-black/30 backdrop-blur-sm border border-purple-400/30 rounded-lg p-4">
        <div className="text-xs text-purple-400 mb-2">NETWORK TRAFFIC</div>
        <div className="space-y-1">
          <div className="flex justify-between text-xs">
            <span>Data Flow</span>
            <span className="text-cyan-400">1.2 GB/s</span>
          </div>
          <div className="w-full bg-black/50 rounded-full h-1">
            <motion.div
              className="bg-cyan-400 h-1 rounded-full"
              animate={{ width: ["20%", "80%", "20%"] }}
              transition={{ duration: 2, repeat: Infinity }}></motion.div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="text-center z-10 relative md:px-0 px-8">
        {/* Name Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="md:mb-8 mb-4 md:pt-0 pt-16">
          <h1 className="text-4xl md:text-6xl font-bold text-cyan-400 mb-2 font-mono">HUNNY PATEL</h1>
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto"></div>
        </motion.div>

        {/* System Boot Animation */}
        {systemBooted && (
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="mb-8">
            <div className="inline-flex items-center space-x-2 bg-black/40 backdrop-blur-sm border border-green-400/30 rounded-full px-4 py-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-400 text-sm font-mono">SYSTEM ONLINE</span>
            </div>
          </motion.div>
        )}

        <h1 className="text-5xl md:text-7xl font-bold mb-8">
          <span className="typewriter text-cyan-400 font-mono"></span>
          <motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1, repeat: Infinity }}
            className="text-cyan-400">
            _
          </motion.span>
        </h1>

        {showSubtext && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto font-mono">
            I build digital systems that scale brands through strategy, data, and creativity.
          </motion.p>
        )}

        {/* Enhanced System Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12 max-w-4xl mx-auto">
          {systemIndicators.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 2 + index * 0.1 }}
              className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-lg p-4 hover:border-cyan-400/50 transition-colors group cursor-pointer"
              whileHover={{ scale: 1.05 }}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-2xl">{item.icon}</span>
                <div className={`w-2 h-2 rounded-full ${item.color.replace("text-", "bg-")} animate-pulse`}></div>
              </div>
              <div className="text-xs opacity-70">{item.label}</div>
              <div className={`text-sm font-bold ${item.color} group-hover:animate-pulse`}>{item.status}</div>
            </motion.div>
          ))}
        </div>

        {/* Control Room Access Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.5 }}
          className="bg-gradient-to-r from-cyan-400 to-green-400 text-black px-8 py-4 rounded-lg font-bold text-lg hover:shadow-lg hover:shadow-cyan-400/50 transition-all duration-300 relative overflow-hidden group md:mb-0 mb-16"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onEnterControlRoom}>
          <span className="relative z-10">▶ Enter Control Room</span>
          <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </motion.button>
      </div>

      {/* Corner Decorations */}
      <div className="absolute md:top-8 top-4 md:left-8 left-4 w-16 h-16 border-l-2 border-t-2 border-cyan-400 opacity-50"></div>
      <div className="absolute md:top-8 top-4 md:right-8 right-4 w-16 h-16 border-r-2 border-t-2 border-purple-400 opacity-50"></div>
      <div className="absolute md:bottom-8 bottom-4 md:left-8 left-4 w-16 h-16 border-l-2 border-b-2 border-green-400 opacity-50"></div>
      <div className="absolute md:bottom-8 bottom-4 md:right-8 right-4 w-16 h-16 border-r-2 border-b-2 border-cyan-400 opacity-50"></div>
    </section>
  );
};

export default Hero;
