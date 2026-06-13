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
            <p className="text-sm tracking-[0.3em] uppercase text-sage-600 font-body">The Setting</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
              A Private Montana Wedding Venue
              <span className="block italic font-normal mt-2 text-sage-700">With Room to Stay Together</span>
            </h2>
            <div className="space-y-4 text-earth-800 leading-relaxed text-lg">
              <p>
                North Star Ranch sits on 40 private acres near Whitefish. Meadows and wooded areas give a
                small wedding group space to gather without depending on a hotel ballroom or public park for
                every part of the day.
              </p>
              <p>
                Onsite lodging changes the shape of a destination wedding. Guests can arrive, settle in,
                share meals, and spend time together without treating every part of the celebration as a
                separate trip.
              </p>
              <p className="font-medium text-sage-700">A private gathering place near Whitefish, the airport, and Glacier.</p>
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
            <p className="text-sm tracking-[0.3em] uppercase text-sage-600 font-body">The Guest Experience</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
              Plan the Wedding Day
              <span className="block italic font-normal mt-2 text-sage-700">Around One Home Base</span>
            </h2>
            <div className="space-y-4 text-earth-800 leading-relaxed text-lg">
              <p>
                A Montana micro wedding can feel like a shared trip instead of a shortened traditional
                wedding. Start with the people you want there, where they will stay, and how much time you
                want to spend together.
              </p>
              <p>
                A private wedding venue with lodging makes the ceremony, reception meal, and guest time easier
                to connect. Glacier National Park and Whitefish can stay part of the plan without making the
                whole group move between locations all day.
              </p>
              <p className="italic text-sage-700">Keep the guest list close and give the wedding weekend room to breathe.</p>
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
