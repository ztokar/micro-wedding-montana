'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Vision() {
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

    const section = document.getElementById('vision');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="vision" className="overflow-hidden py-24 md:py-32 bg-cream grain">
      <div className="max-w-7xl mx-auto px-6">
        {/* First Block - Image Left */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative h-[500px] md:h-[600px] overflow-hidden"
          >
            <img
              src="/images/montana-scenic-wedding.jpg"
              alt="Montana wedding setup at North Star Ranch"
              className="w-full h-full object-cover shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-sage-900/20 to-transparent" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-sm tracking-[0.3em] uppercase text-sage-600 font-body">Our Vision</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
              Love, Naturally
              <span className="block italic font-normal mt-2 text-sage-700">Unfolding</span>
            </h2>
            <div className="space-y-4 text-earth-800 leading-relaxed text-lg">
              <p>
                Imagine your wedding day beneath Montana's endless sky, where towering peaks frame your vows
                and wildflowers carpet the earth. No elaborate productions, no unnecessary excess.
              </p>
              <p>
                Just you, your beloved, and nature's cathedral. We believe the most profound moments
                emerge when we strip away the noise and let love speak for itself.
              </p>
              <p className="font-medium text-sage-700">A private place for the people you most want beside you.</p>
            </div>
          </motion.div>
        </div>

        {/* Second Block - Image Right */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6 md:order-1"
          >
            <p className="text-sm tracking-[0.3em] uppercase text-sage-600 font-body">The Experience</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
              Intimate
              <span className="block italic font-normal mt-2 text-sage-700">By Design</span>
            </h2>
            <div className="space-y-4 text-earth-800 leading-relaxed text-lg">
              <p>
                Micro weddings are not about limitation. With your closest
                circle of loved ones, every moment becomes magnified, every conversation meaningful.
              </p>
              <p>
                A private Montana venue gives a small group room to slow down.
                Plan the ceremony, meal, and guest time around one gathering place instead of a long series of transfers.
              </p>
              <p className="italic text-sage-700">Keep the guest list close and give the weekend room to breathe.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative h-[500px] md:h-[600px] overflow-hidden md:order-2"
          >
            <img
              src="/images/ranch-wedding.jpg"
              alt="Outdoor wedding gathering at North Star Ranch"
              className="w-full h-full object-cover shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-tl from-earth-900/20 to-transparent" />
          </motion.div>
        </div>

        {/* Third Block - Full Width Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center max-w-4xl mx-auto py-16"
        >
          <blockquote className="text-3xl md:text-4xl lg:text-5xl font-light italic leading-relaxed text-sage-800">
            The best part of a smaller wedding is not doing less.
            <span className="block mt-4 font-normal text-earth-700">It is having more time with your people.</span>
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}
