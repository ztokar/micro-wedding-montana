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
            North Star Ranch is a private 40-acre retreat eight miles from downtown Whitefish.
            Its five-bedroom chalet, four cabins, and eight-room lodge give destination groups
            a place to stay together near Glacier National Park and Glacier Park International Airport.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
