import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const BlogifyLoading = () => {
  const colors = {
    bg: '#F5F5DC',
    text: '#4A7C59',
    accentGreen: '#81B29A',
    accentBrown: '#B08968',
    secondaryBg: '#F3EAC2',
    secondaryText: '#A3B18A',
    highlight: '#D9C5B2',
  };

  // Letter animation variants
  const letterVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <div 
      className="fixed inset-0 flex items-center justify-center"
      style={{ backgroundColor: colors.bg }}
    >
      <div className="relative w-96 h-96">
        {/* Flowing background shapes */}
        {[...Array(5)].map((_, index) => (
          <motion.div
            key={`shape-${index}`}
            className="absolute rounded-full blur-lg"
            style={{
              background: index % 2 === 0 ? colors.accentGreen : colors.highlight,
              width: `${100 + index * 20}px`,
              height: `${100 + index * 20}px`,
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              opacity: 0.1,
            }}
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 4,
              delay: index * 0.3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Blogify text animation */}
        <motion.div 
          className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        >
          <div className="relative flex justify-center items-center">
            {'BLOGIFY'.split('').map((letter, index) => (
              <motion.span
                key={index}
                className="text-5xl font-bold mx-1"
                style={{ color: colors.text }}
                variants={letterVariants}
                initial="hidden"
                animate="visible"
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  repeat: Infinity,
                  repeatDelay: 2
                }}
              >
                {letter}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Inspire Ideas tagline */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 text-2xl font-light"
          style={{ color: colors.accentBrown }}
          animate={{
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          Inspire Ideas
        </motion.div>

        {/* Sparkle effects */}
        {[...Array(6)].map((_, index) => (
          <motion.div
            key={`sparkle-${index}`}
            className="absolute"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: 2,
              delay: index * 0.3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Sparkles 
              size={24} 
              color={colors.accentGreen}
              className="transform rotate-45"
            />
          </motion.div>
        ))}

        {/* Progressive loading bar */}
        <motion.div
          className="absolute bottom-16 left-1/2 transform -translate-x-1/2 w-48 h-1 rounded-full overflow-hidden"
          style={{ background: colors.secondaryBg }}
        >
          <motion.div
            className="h-full rounded-full"
            style={{ background: colors.accentGreen }}
            animate={{
              x: ['-100%', '0%', '100%'],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>

        {/* Floating dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {[...Array(3)].map((_, index) => (
            <motion.div
              key={`dot-${index}`}
              className="w-2 h-2 rounded-full"
              style={{ background: colors.text }}
              animate={{
                y: [-4, 4, -4],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 1.5,
                delay: index * 0.2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogifyLoading;