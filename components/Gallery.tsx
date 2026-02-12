'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const images = [
  {
    src: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=2940&auto=format&fit=crop',
    alt: 'Montana mountain ceremony',
    span: 'col-span-2 row-span-2',
  },
  {
    src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2940&auto=format&fit=crop',
    alt: 'Outdoor wedding venue',
    span: 'col-span-1 row-span-1',
  },
  {
    src: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=2940&auto=format&fit=crop',
    alt: 'Montana ranch wedding',
    span: 'col-span-1 row-span-1',
  },
  {
    src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2669&auto=format&fit=crop',
    alt: 'Outdoor ceremony setup',
    span: 'col-span-1 row-span-2',
  },
  {
    src: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?q=80&w=2940&auto=format&fit=crop',
    alt: 'Montana landscape',
    span: 'col-span-2 row-span-1',
  },
  {
    src: 'https://images.unsplash.com/photo-1478146896981-b80fe463b330?q=80&w=2940&auto=format&fit=crop',
    alt: 'Mountain wedding celebration',
    span: 'col-span-1 row-span-1',
  },
];

export default function Gallery() {
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

    const section = document.getElementById('gallery');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="gallery" className="py-24 md:py-32 bg-earth-50 grain">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-sage-600 font-body mb-4">
            Gallery
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 leading-tight">
            Moments That
            <span className="block italic font-normal mt-2 text-sage-700">Take Your Breath Away</span>
          </h2>
          <p className="text-lg text-earth-700 leading-relaxed">
            Every image tells a story of love unfolding against Montana's majestic backdrop.
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] gap-4 md:gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative overflow-hidden group cursor-pointer ${image.span}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <a
            href="#contact"
            className="inline-block px-12 py-4 border-2 border-sage-600 text-sage-700 font-medium tracking-wide hover:bg-sage-600 hover:text-white transition-all duration-300 hover:scale-105"
          >
            Create Your Own Story
          </a>
        </motion.div>
      </div>
    </section>
  );
}
