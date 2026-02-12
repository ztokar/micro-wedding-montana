'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { useEffect, useState } from 'react';

const packages = [
  {
    name: 'Elopement',
    tagline: 'Just the Two of You',
    price: '$2,500',
    duration: 'Half Day',
    guests: 'Up to 2',
    features: [
      'Scenic ceremony location',
      'Professional officiant',
      '2 hours venue access',
      'Basic setup & coordination',
      'Complimentary champagne',
    ],
    highlight: false,
  },
  {
    name: 'Intimate Gathering',
    tagline: 'Your Inner Circle',
    price: '$4,500',
    duration: 'Full Day',
    guests: 'Up to 20',
    features: [
      'Full-day venue access',
      'Choice of ceremony locations',
      'Professional officiant',
      'Tables, chairs & setup',
      'Bridal suite preparation area',
      'Cocktail hour space',
      'Sunset photography spots',
      'Bonfire setup available',
    ],
    highlight: true,
  },
  {
    name: 'Micro Wedding',
    tagline: 'Complete Celebration',
    price: '$7,500',
    duration: 'Full Day + Evening',
    guests: 'Up to 50',
    features: [
      'Exclusive venue access',
      'Multiple ceremony locations',
      'Professional officiant',
      'Premium setup & décor',
      'Bridal & groom suites',
      'Reception area with dance floor',
      'Fire pit & lounge areas',
      'Extended hours until midnight',
      'Preferred vendor coordination',
    ],
    highlight: false,
  },
];

export default function Packages() {
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

    const section = document.getElementById('packages');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="packages" className="py-24 md:py-32 bg-white grain">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-sage-600 font-body mb-4">
            Packages
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 leading-tight">
            Choose Your
            <span className="block italic font-normal mt-2 text-sage-700">Montana Moment</span>
          </h2>
          <p className="text-lg text-earth-700 leading-relaxed">
            Every package includes access to our breathtaking Montana venue,
            personalized planning support, and memories that last forever.
          </p>
        </motion.div>

        {/* Package Cards */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative p-8 lg:p-10 border-2 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                pkg.highlight
                  ? 'border-sage-600 bg-sage-50 scale-105 shadow-xl'
                  : 'border-earth-200 bg-white hover:border-sage-400'
              }`}
            >
              {pkg.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-sage-700 text-white px-6 py-1 text-sm tracking-wider uppercase font-body">
                  Most Popular
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-3xl font-light mb-2">{pkg.name}</h3>
                <p className="text-sage-600 italic mb-6">{pkg.tagline}</p>
                <div className="mb-4">
                  <span className="text-5xl font-light">{pkg.price}</span>
                </div>
                <div className="flex justify-center gap-4 text-sm text-earth-600 font-body">
                  <span>{pkg.duration}</span>
                  <span>•</span>
                  <span>{pkg.guests} guests</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-sage-600 flex-shrink-0 mt-0.5" />
                    <span className="text-earth-800">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block w-full py-4 text-center font-medium tracking-wide transition-all duration-300 ${
                  pkg.highlight
                    ? 'bg-sage-700 text-white hover:bg-sage-800'
                    : 'border-2 border-sage-600 text-sage-700 hover:bg-sage-600 hover:text-white'
                }`}
              >
                Inquire Now
              </a>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center max-w-2xl mx-auto"
        >
          <p className="text-earth-700 leading-relaxed">
            <span className="font-medium">Custom packages available.</span> We understand every love story is unique.
            Let's craft something perfectly tailored to your vision.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
