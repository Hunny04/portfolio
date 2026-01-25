import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PageLoaderProps {
  onLoadingComplete: () => void;
}

const PageLoader: React.FC<PageLoaderProps> = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => onLoadingComplete(), 1000); // Wait 1s after reaching 100%
          return 100;
        }
        return prev + Math.random() * 15; // Random progress increment
      });
    }, 100);

    // Show text after a short delay
    setTimeout(() => setShowText(true), 500);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
      >
        {/* Animated Background Grid */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px',
              animation: 'gridMove 8s linear infinite'
            }}
          />
        </div>

        {/* Main Content */}
        <div className="text-center z-10">
          {/* Animated Logo/Icon */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-8"
          >
            <div className="w-24 h-24 mx-auto bg-gradient-to-r from-cyan-400 to-green-400 rounded-full flex items-center justify-center shadow-lg shadow-cyan-400/50">
              <span className="text-3xl">⚡</span>
            </div>
          </motion.div>

          {/* Welcome Text */}
          <AnimatePresence>
            {showText && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-8"
              >
                <h1 className="text-4xl md:text-6xl font-bold text-cyan-400 mb-4 font-mono">
                  Welcome to
                </h1>
                <h2 className="text-3xl md:text-5xl font-bold text-green-400 font-mono">
                  Hunny's Control Room
                </h2>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Loading Bar */}
          <div className="w-80 max-w-sm mx-auto mb-4">
            <div className="w-full bg-black/30 rounded-full h-2 overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-cyan-400 to-green-400 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>

          {/* Loading Text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-gray-400 font-mono text-sm"
          >
            Initializing systems... {Math.round(progress)}%
          </motion.p>

          {/* Animated Dots */}
          <div className="flex justify-center mt-4 space-x-2">
            {[0, 1, 2].map((index) => (
              <motion.div
                key={index}
                className="w-2 h-2 bg-cyan-400 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: index * 0.2
                }}
              />
            ))}
          </div>
        </div>

        {/* Corner Decorations */}
        <div className="absolute top-8 left-8 w-12 h-12 border-l-2 border-t-2 border-cyan-400 opacity-50"></div>
        <div className="absolute top-8 right-8 w-12 h-12 border-r-2 border-t-2 border-green-400 opacity-50"></div>
        <div className="absolute bottom-8 left-8 w-12 h-12 border-l-2 border-b-2 border-purple-400 opacity-50"></div>
        <div className="absolute bottom-8 right-8 w-12 h-12 border-r-2 border-b-2 border-cyan-400 opacity-50"></div>
      </motion.div>
    </AnimatePresence>
  );
};

export default PageLoader;
