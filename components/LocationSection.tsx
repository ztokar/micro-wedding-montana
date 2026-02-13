'use client';

import { motion } from 'framer-motion';
import { MapPin, Plane, Mountain } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function LocationSection() {
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

    const section = document.getElementById('location');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="location" className="py-24 md:py-32 bg-earth-50 grain">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-8 leading-tight">
            A Private Whitefish Wedding Venue
            <span className="block italic font-normal mt-2 text-sage-700">
              Near Glacier National Park
            </span>
          </h2>

          <p className="text-lg md:text-xl text-earth-800 leading-relaxed max-w-4xl mx-auto mb-12">
            Located just 8 miles from downtown Whitefish and 25 minutes from Glacier Park International Airport,
            our <strong>Montana micro wedding venue</strong> is perfectly positioned for destination couples.
            We are approximately 45 minutes from Glacier National Park, making it easy for you and your guests
            to explore one of the most beautiful landscapes in the country while celebrating your
            <strong> intimate mountain wedding</strong> in Montana's mountains.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center p-8 bg-white shadow-lg"
          >
            <MapPin className="w-12 h-12 mx-auto mb-4 text-sage-600" />
            <h3 className="text-2xl font-light mb-3">Downtown Whitefish</h3>
            <p className="text-earth-700 text-lg">8 miles away</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center p-8 bg-white shadow-lg"
          >
            <Plane className="w-12 h-12 mx-auto mb-4 text-sage-600" />
            <h3 className="text-2xl font-light mb-3">Glacier Park Airport</h3>
            <p className="text-earth-700 text-lg">25 minutes away</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center p-8 bg-white shadow-lg"
          >
            <Mountain className="w-12 h-12 mx-auto mb-4 text-sage-600" />
            <h3 className="text-2xl font-light mb-3">Glacier National Park</h3>
            <p className="text-earth-700 text-lg">45 minutes away</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="#contact"
            className="inline-block px-10 py-4 bg-sage-700 text-white font-medium tracking-wide hover:bg-sage-800 transition-all duration-300 hover:scale-105"
          >
            Schedule a Tour
          </a>
        </motion.div>
      </div>
    </section>
  );
}
