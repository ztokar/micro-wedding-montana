'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { useEffect, useState } from 'react';

const reasons = [
  'More meaningful time with your closest guests',
  'Less stress and more intention',
  'A stunning natural backdrop without overproduction',
  'Flexible timelines and relaxed celebrations',
  'A true Montana mountain experience',
];

export default function WhyChoose() {
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

    const section = document.getElementById('why-choose');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="why-choose" className="py-24 md:py-32 bg-white grain">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 leading-tight">
            Why Couples Choose
            <span className="block italic font-normal mt-2 text-sage-700">
              a Montana Micro Wedding
            </span>
          </h2>
        </motion.div>

        <motion.ul
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6 mb-12"
        >
          {reasons.map((reason, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="flex items-start gap-4"
            >
              <Check className="w-7 h-7 text-sage-600 flex-shrink-0 mt-1" />
              <span className="text-lg md:text-xl text-earth-800">{reason}</span>
            </motion.li>
          ))}
        </motion.ul>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <a
            href="#contact"
            className="inline-block px-10 py-4 border-2 border-sage-700 text-sage-700 font-medium tracking-wide hover:bg-sage-700 hover:text-white transition-all duration-300 hover:scale-105"
          >
            View Available Dates
          </a>
        </motion.div>
      </div>
    </section>
  );
}
