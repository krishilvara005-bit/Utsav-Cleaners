import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, ArrowRight, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-section border-t border-border pt-16 pb-8 text-ink-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-border">
          
          {/* Col 1: Brand & Mission */}
          <div className="space-y-4">
            <Link href="/home" className="flex items-center gap-3">
              <img
                src="/logo.jpg"
                alt="Utsav Cleaners Logo"
                className="h-10 w-auto object-contain rounded-lg"
              />
              <span className="text-2xl font-bold font-heading text-ink tracking-tight">
                Utsav <span className="text-accent">Cleaners</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-ink-muted">
              Noida & NCR&apos;s most trusted eco-friendly dry cleaning and laundry service. Free doorstep pickup & 24-hour express delivery for your finest garments.
            </p>
            <div className="flex items-center gap-2 text-xs font-semibold text-accent bg-white p-2.5 rounded-lg border border-border w-fit">
              <ShieldCheck className="w-4 h-4" />
              <span>100% Non-Toxic Solvent Clean Guarantee</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-base font-semibold text-ink font-heading">Quick Links</h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { name: 'Introduction Page', href: '/' },
                { name: 'Home Page', href: '/home' },
                { name: 'Services & Price List', href: '/services' },
                { name: 'About Our Facility', href: '/about' },
                { name: 'How Pickup Works', href: '/how-it-works' },
                { name: 'Book Doorstep Pickup', href: '/book' },
                { name: 'Contact & Support', href: '/contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-accent flex items-center gap-1.5 transition-colors">
                    <ArrowRight className="w-3.5 h-3.5 text-accent opacity-70" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Popular Services */}
          <div className="space-y-4">
            <h4 className="text-base font-semibold text-ink font-heading">Our Services</h4>
            <ul className="space-y-2.5 text-sm">
              {[
                'Executive Suit Dry Cleaning',
                'Saree & Designer Lehenga Care',
                'Wash & Fold Daily Laundry',
                'Vacuum Steam Ironing',
                'Shoe & Leather Restoration',
                'Curtain & Carpet Sanitization',
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-2 text-sm text-ink-muted">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Hours */}
          <div className="space-y-4">
            <h4 className="text-base font-semibold text-ink font-heading">Store Info</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span>Shop #14, Central Market, Sector 62, Noida, Uttar Pradesh - 201309</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-accent flex-shrink-0" />
                <a href="tel:+919876543210" className="hover:text-accent font-medium transition-colors">
                  +91 98765 43210 / +91 98765 43211
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-accent flex-shrink-0" />
                <a href="mailto:support@utsavcleaners.com" className="hover:text-accent transition-colors">
                  support@utsavcleaners.com
                </a>
              </div>
              <div className="flex items-start gap-3 pt-1">
                <Clock className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                <div className="text-xs">
                  <p className="font-semibold text-ink">Store Hours:</p>
                  <p>Monday – Sunday: 8:00 AM – 8:30 PM</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ink-subtle">
          <p>© {new Date().getFullYear()} Utsav Cleaners. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/contact" className="hover:text-ink">Privacy Policy</Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-ink">Terms of Service</Link>
            <span>•</span>
            <Link href="/admin/login" className="hover:text-accent font-medium">Admin Staff Login</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
