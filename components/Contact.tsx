'use client';

import { motion } from 'framer-motion';
import { Phone, MapPin } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Contact() {
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

    const section = document.getElementById('contact');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" className="py-24 md:py-32 bg-sage-900 text-white grain">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
          {/* Left Column - Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm tracking-[0.3em] uppercase text-sage-300 font-body mb-6">
              Let's Connect
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-8 leading-tight">
              Begin Your
              <span className="block italic font-normal mt-2 text-cream">Montana Journey</span>
            </h2>
            <p className="text-lg text-sage-100 leading-relaxed mb-12">
              We're honored you're considering North Star Ranch for your special day.
              Let's talk about bringing your vision to life—whether it's an intimate elopement
              or a celebration with your closest friends and family.
            </p>

            <div className="space-y-6 mb-12">
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-cream flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-cream mb-1">Phone</p>
                  <a
                    href="tel:+14062257268"
                    className="text-sage-200 hover:text-cream transition-colors"
                  >
                    (406) 225-7268
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-cream flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-cream mb-1">Location</p>
                  <p className="text-sage-200">
                    355 Beaver Lake Rd<br />
                    Whitefish, MT 59937
                  </p>
                  <p className="text-sage-300 text-sm mt-2">
                    8 miles from downtown Whitefish • 25 min from airport
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-sage-700 pt-8">
              <p className="text-sage-300 italic text-lg leading-relaxed">
                "From our first conversation, we knew this was the place. The team made
                planning effortless, and the day itself was pure magic."
              </p>
              <p className="text-sage-400 mt-4">— Sarah & James</p>
            </div>

            <div className="mt-12 pt-8 border-t border-sage-700">
              <h3 className="text-xl font-light text-cream mb-4">About Our Venue</h3>
              <ul className="space-y-3 text-sage-200">
                <li>• 40 acres of pristine wilderness</li>
                <li>• 25 minutes from Glacier Park Airport</li>
                <li>• 45 minutes to Glacier National Park</li>
                <li>• Chalet, Cabins & Bunkhouse available</li>
                <li>• Borders National Forest</li>
              </ul>
            </div>
          </motion.div>

          {/* Right Column - Tally Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white rounded-lg overflow-hidden shadow-2xl" style={{ height: '700px' }}>
              <iframe
                src="https://tally.so/embed/OD59y8?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                width="100%"
                height="100%"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                title="Montana Micro Wedding Inquiry"
                style={{ border: 'none' }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
