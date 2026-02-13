'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function IntroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('intro');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="intro" className="py-24 md:py-32 bg-white grain">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-8 leading-tight">
            Intimate Montana
            <span className="block italic font-normal mt-2 text-sage-700">
              Micro Weddings in the Mountains
            </span>
          </h2>

          <p className="text-lg md:text-xl text-earth-800 leading-relaxed mb-12">
            Montana Micro Wedding offers intimate mountain wedding experiences just outside Whitefish, Montana.
            Surrounded by towering peaks, open skies, and 40 acres of private wilderness, our venue is designed
            for couples seeking a meaningful, small celebration in a breathtaking setting. Whether you're planning
            a destination elopement or a <strong>micro wedding</strong> with your closest family and friends, this is
            where simplicity meets unforgettable beauty.
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#contact"
              className="px-10 py-4 bg-sage-700 text-white font-medium tracking-wide hover:bg-sage-800 transition-all duration-300 hover:scale-105"
            >
              Check Availability
            </a>
            <a
              href="#contact"
              className="px-10 py-4 border-2 border-sage-700 text-sage-700 font-medium tracking-wide hover:bg-sage-700 hover:text-white transition-all duration-300 hover:scale-105"
            >
              Request Information
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
