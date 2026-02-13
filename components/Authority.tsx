'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Authority() {
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

    const section = document.getElementById('authority');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="authority" className="py-24 md:py-32 bg-white grain">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-8 leading-tight">
            Hosted at
            <span className="block italic font-normal mt-2 text-sage-700">
              North Star Ranch
            </span>
          </h2>

          <p className="text-lg md:text-xl text-earth-800 leading-relaxed">
            Our Montana micro wedding venue is nestled on a 40-acre private ranch just outside Whitefish.
            With breathtaking views of the Swan Range and pristine wilderness, North Star Ranch provides
            an intimate, peaceful setting for couples who want to celebrate their love surrounded by nature.
            Whether you're planning an elopement or a small gathering with family and friends, our property
            offers the perfect backdrop for a meaningful, unforgettable wedding day in the heart of Montana.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
