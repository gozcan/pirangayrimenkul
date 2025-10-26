import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp, Rocket } from 'lucide-react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      const scrolled = window.scrollY;
      const winHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      // Show button after scrolling 300px
      setIsVisible(scrolled > 300);

      // Calculate scroll progress
      const totalScroll = docHeight - winHeight;
      const progress = (scrolled / totalScroll) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0, rotate: -180 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          exit={{ opacity: 0, scale: 0, rotate: 180 }}
          transition={{
            type: 'spring',
            stiffness: 260,
            damping: 20,
          }}
          className="fixed bottom-8 right-8 z-50"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <motion.button
            onClick={scrollToTop}
            className="relative group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {/* Circular Progress Ring */}
            <svg className="absolute inset-0 w-16 h-16 -rotate-90">
              {/* Background circle */}
              <circle
                cx="32"
                cy="32"
                r="28"
                fill="none"
                stroke="rgba(148, 163, 184, 0.2)"
                strokeWidth="3"
              />
              {/* Progress circle */}
              <motion.circle
                cx="32"
                cy="32"
                r="28"
                fill="none"
                stroke="url(#gradient)"
                strokeWidth="3"
                strokeLinecap="round"
                strokeDasharray={176}
                strokeDashoffset={176 - (176 * scrollProgress) / 100}
                style={{
                  filter: 'drop-shadow(0 0 8px rgba(59, 130, 246, 0.5))',
                }}
              />
              <defs>
                <linearGradient
                  id="gradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop
                    offset="0%"
                    stopColor="#3b82f6"
                  />
                  <stop
                    offset="50%"
                    stopColor="#8b5cf6"
                  />
                  <stop
                    offset="100%"
                    stopColor="#ec4899"
                  />
                </linearGradient>
              </defs>
            </svg>

            {/* Button Background with Glow */}
            <motion.div
              className="relative w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 shadow-xl"
              animate={{
                boxShadow: isHovering
                  ? '0 20px 40px rgba(59, 130, 246, 0.4), 0 0 30px rgba(139, 92, 246, 0.3)'
                  : '0 10px 30px rgba(59, 130, 246, 0.3)',
              }}
            >
              {/* Glass effect overlay */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-transparent backdrop-blur-sm"></div>

              {/* Icon Container */}
              <div className="absolute inset-0 flex items-center justify-center">
                <AnimatePresence mode="wait">
                  {isHovering ? (
                    <motion.div
                      key="rocket"
                      initial={{ y: 20, opacity: 0, rotate: -45 }}
                      animate={{ y: 0, opacity: 1, rotate: -45 }}
                      exit={{ y: -20, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Rocket className="w-6 h-6 text-white" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="arrow"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -20, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ArrowUp className="w-6 h-6 text-white" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Pulse Effect */}
              <motion.div
                className="absolute inset-0 rounded-full bg-blue-400"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </motion.div>

            {/* Tooltip */}
            <AnimatePresence>
              {isHovering && (
                <motion.div
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  className="absolute right-full mr-4 top-1/2 -translate-y-1/2 whitespace-nowrap"
                >
                  <div className="px-3 py-2 bg-slate-900/90 backdrop-blur-sm text-white text-sm rounded-lg shadow-xl border border-white/10">
                    <div className="flex items-center gap-2">
                      <Rocket className="w-4 h-4" />
                      <span className="font-medium">Başa Dön</span>
                    </div>
                    {/* Arrow pointer */}
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rotate-45 w-2 h-2 bg-slate-900/90 border-r border-t border-white/10"></div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>

          {/* Percentage Text */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: isHovering ? 1 : 0, y: isHovering ? 0 : 10 }}
            className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap"
          >
            <span className="px-2 py-1 bg-slate-900/80 backdrop-blur-sm text-white text-xs rounded-md font-medium">
              {Math.round(scrollProgress)}%
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
