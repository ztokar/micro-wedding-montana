'use client';

import { Heart, Instagram, Facebook, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-earth-900 text-cream py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-display font-light mb-4 flex items-center gap-2">
              Montana Micro Wedding
              <Heart className="w-5 h-5 text-terracotta" />
            </h3>
            <p className="text-earth-300 leading-relaxed">
              Where love stories unfold beneath Montana's endless skies.
              Creating intimate, unforgettable wedding experiences in nature's grandest cathedral.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-medium mb-4 text-cream">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#vision" className="text-earth-300 hover:text-cream transition-colors">
                  Our Vision
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-earth-300 hover:text-cream transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#contact" className="text-earth-300 hover:text-cream transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-lg font-medium mb-4 text-cream">Stay Connected</h4>
            <p className="text-earth-300 mb-4">
              Follow our journey and see real Montana micro weddings unfold.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-earth-800 hover:bg-sage-700 transition-colors flex items-center justify-center"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-earth-800 hover:bg-sage-700 transition-colors flex items-center justify-center"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="mailto:hello@microweddingmontana.com"
                className="w-10 h-10 bg-earth-800 hover:bg-sage-700 transition-colors flex items-center justify-center"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-earth-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-earth-400">
          <p>© {new Date().getFullYear()} Montana Micro Wedding. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-cream transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-cream transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
