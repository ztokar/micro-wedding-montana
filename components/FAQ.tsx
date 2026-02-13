'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'What is considered a micro wedding?',
    answer: 'A micro wedding typically includes 10–40 guests and focuses on an intimate, meaningful celebration rather than a large-scale event.',
  },
  {
    question: 'How many guests can attend a micro wedding at your venue?',
    answer: 'Our venue is designed for intimate gatherings, making it ideal for smaller wedding celebrations with close family and friends.',
  },
  {
    question: 'Do you host destination weddings in Montana?',
    answer: 'Yes. Many of our couples travel from out of state to celebrate their wedding in Whitefish, Montana.',
  },
  {
    question: 'How far is the venue from Glacier National Park?',
    answer: 'We are approximately 45 minutes from Glacier National Park and 25 minutes from Glacier Park International Airport.',
  },
  {
    question: 'Is lodging available nearby?',
    answer: 'Whitefish offers a variety of lodging options, and on-site accommodations may also be available depending on your event needs.',
  },
];

export default function FAQ() {
  const [isVisible, setIsVisible] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('faq');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="faq" className="py-24 md:py-32 bg-cream grain">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-sage-600 font-body mb-4">
            Common Questions
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 leading-tight">
            Montana Micro Wedding
            <span className="block italic font-normal mt-2 text-sage-700">FAQs</span>
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white border-2 border-earth-200"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-sage-50 transition-colors"
              >
                <span className="text-lg md:text-xl font-light pr-8">{faq.question}</span>
                <ChevronDown
                  className={`w-6 h-6 text-sage-600 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-5"
                >
                  <p className="text-earth-700 leading-relaxed text-lg">{faq.answer}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-earth-700 mb-6 text-lg">Have more questions?</p>
          <a
            href="#contact"
            className="inline-block px-10 py-4 bg-sage-700 text-white font-medium tracking-wide hover:bg-sage-800 transition-all duration-300 hover:scale-105"
          >
            Request Wedding Information
          </a>
        </motion.div>
      </div>
    </section>
  );
}
