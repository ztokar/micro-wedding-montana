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
    <section id="vision" className="py-24 md:py-32 bg-cream grain">
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
              src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2940&auto=format&fit=crop"
              alt="Couple in Montana landscape"
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
                Imagine your wedding day beneath Montana's endless sky—where towering peaks frame your vows
                and wildflowers carpet the earth. No elaborate productions, no unnecessary excess.
              </p>
              <p>
                Just you, your beloved, and nature's cathedral. We believe the most profound moments
                emerge when we strip away the noise and let love speak for itself.
              </p>
              <p className="font-medium text-sage-700">
                This is where your story becomes legend.
              </p>
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
                Micro weddings aren't about limitation—they're about liberation. With your closest
                circle of loved ones, every moment becomes magnified, every conversation meaningful.
              </p>
              <p>
                Our Montana venue offers the perfect canvas: rustic elegance meets untamed wilderness.
                Say your vows as golden hour bathes the mountains. Toast under star-filled skies.
                Dance on weathered wood while aspens whisper their blessings.
              </p>
              <p className="italic text-sage-700">
                "We didn't just have a wedding—we had a once-in-a-lifetime experience."
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative h-[500px] md:h-[600px] overflow-hidden md:order-2"
          >
            <img
              src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=2940&auto=format&fit=crop"
              alt="Montana ranch sunset"
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
            "In Montana, we don't chase perfection.
            <span className="block mt-4 font-normal text-earth-700">We discover it."</span>
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}
