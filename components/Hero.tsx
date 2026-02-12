'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const scrollToNext = () => {
    const nextSection = document.getElementById('vision');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen w-full overflow-hidden grain">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50 z-10" />
        <img
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2940&auto=format&fit=crop"
          alt="Montana Mountains"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center px-6 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="max-w-5xl"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-sm md:text-base tracking-[0.3em] uppercase mb-6 font-body text-cream/90"
          >
            Where Mountains Meet Forever
          </motion.p>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light mb-8 leading-tight">
            Montana
            <span className="block italic font-normal mt-2">Micro Wedding</span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg md:text-2xl font-light mb-12 max-w-3xl mx-auto leading-relaxed text-cream/95"
          >
            Intimate celebrations beneath endless skies. Natural beauty,
            heartfelt moments, and the magic of Montana's wilderness—
            all yours to cherish.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="#contact"
              className="px-10 py-4 bg-white text-earth-900 font-medium tracking-wide hover:bg-cream transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              Book Your Wedding
            </a>
            <a
              href="#gallery"
              className="px-10 py-4 border-2 border-white text-white font-medium tracking-wide hover:bg-white hover:text-earth-900 transition-all duration-300 hover:scale-105"
            >
              View Gallery
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.button
          onClick={scrollToNext}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer group"
          aria-label="Scroll to next section"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs tracking-widest uppercase text-cream/80 font-body">Discover</span>
            <ChevronDown className="w-6 h-6 animate-bounce text-cream/80 group-hover:text-cream transition-colors" />
          </div>
        </motion.button>
      </div>
    </section>
  );
}
