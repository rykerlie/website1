'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function HeroBackgroundAnimation() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Prevent hydration mismatch
  }

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Primary animated orb */}
      <motion.div
        className="absolute w-96 h-96 rounded-full opacity-10 blur-3xl"
        style={{
          background: 'radial-gradient(circle, var(--cta-vibrant) 0%, transparent 70%)',
          left: '50%',
          top: '50%',
        }}
        animate={{
          x: [-48, 48, -48],
          y: [-32, 32, -32],
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Secondary smaller orbs */}
      <motion.div
        className="absolute w-32 h-32 rounded-full opacity-5 blur-2xl"
        style={{
          background: 'radial-gradient(circle, var(--cta-vibrant) 0%, transparent 70%)',
          left: '30%',
          top: '30%',
        }}
        animate={{
          x: [0, 60, 0],
          y: [0, -40, 0],
          scale: [0.8, 1.1, 0.8],
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
      />

      <motion.div
        className="absolute w-48 h-48 rounded-full opacity-5 blur-2xl"
        style={{
          background: 'radial-gradient(circle, var(--cta-vibrant) 0%, transparent 70%)',
          right: '25%',
          bottom: '25%',
        }}
        animate={{
          x: [0, -80, 0],
          y: [0, 20, 0],
          scale: [0.9, 1.3, 0.9],
          opacity: [0.05, 0.12, 0.05],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
      />

      {/* Particle streams */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[var(--cta-vibrant)] rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 0.3, 0],
              scale: [0, 1, 0],
              x: [0, (Math.random() - 0.5) * 200],
              y: [0, (Math.random() - 0.5) * 200],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 8,
              ease: 'easeOut',
            }}
          />
        ))}
      </div>

      {/* Morphing geometric shapes */}
      <motion.div
        className="absolute left-1/4 top-1/3 w-2 h-2 opacity-10"
        style={{
          background: 'linear-gradient(45deg, var(--cta-vibrant), transparent)',
        }}
        animate={{
          rotate: [0, 360],
          scale: [1, 2, 1],
          borderRadius: ['0%', '50%', '0%'],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      <motion.div
        className="absolute right-1/3 bottom-1/3 w-3 h-3 opacity-8"
        style={{
          background: 'linear-gradient(135deg, var(--cta-vibrant), transparent)',
        }}
        animate={{
          rotate: [360, 0],
          scale: [1, 1.5, 1],
          borderRadius: ['50%', '0%', '50%'],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 3,
        }}
      />
    </div>
  );
}
