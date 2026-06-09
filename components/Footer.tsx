'use client';

import { Heart } from 'lucide-react';
import Link from 'next/link';

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
              A private 40-acre retreat near Whitefish with onsite lodging and easy access to Glacier National Park.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-medium mb-4 text-cream">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/#vision" className="text-earth-300 hover:text-cream transition-colors">
                  Our Vision
                </Link>
              </li>
              <li>
                <Link href="/guides" className="text-earth-300 hover:text-cream transition-colors">Planning Guides</Link>
              </li>
              <li>
                <Link href="/#contact" className="text-earth-300 hover:text-cream transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Location */}
          <div>
            <h4 className="text-lg font-medium mb-4 text-cream">North Star Ranch</h4>
            <p className="text-earth-300 leading-relaxed">355 Beaver Lake Rd<br />Whitefish, MT 59937<br />(406) 225-7268</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-earth-800 pt-8 text-sm text-earth-400">
          <p>© {new Date().getFullYear()} Montana Micro Wedding. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
