import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Phone, Menu, X, Sparkles, Calendar, ShieldCheck } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const navLinks = [
    { name: 'Home', href: '/home' },
    { name: 'Services & Pricing', href: '/services' },
    { name: 'About Us', href: '/about' },
    { name: 'How It Works', href: '/how-it-works' },
    { name: 'Contact Us', href: '/contact' },
  ];

  const isActive = (path: string) => router.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-border shadow-subtle">
      {/* Top Notification Bar */}
      <div className="bg-section border-b border-border text-ink-muted text-xs py-1.5 px-4 hidden sm:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-accent font-medium">
              <Sparkles className="w-3.5 h-3.5" /> Eco-Friendly Dry Cleaning
            </span>
            <span className="text-border">|</span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-accent" /> 100% Fabric Safety Guarantee
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span>Hours: Mon - Sun: 8:00 AM - 8:30 PM</span>
            <span className="text-border">|</span>
            <Link href="/admin/login" className="hover:text-accent font-medium transition-colors">
              Admin Portal
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          
          {/* Brand Logo with the Official Logo Image */}
          <Link href="/home" className="flex items-center gap-3 group">
            <div className="h-10 sm:h-12 w-auto flex items-center justify-center overflow-hidden rounded-lg">
              <img
                src="/logo.jpg"
                alt="Utsav Cleaners Logo"
                className="h-full w-auto object-contain group-hover:scale-105 transition-transform duration-200"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-bold font-heading text-ink tracking-tight flex items-center gap-1">
                Utsav <span className="text-accent">Cleaners</span>
              </span>
              <span className="text-[10px] tracking-wider text-ink-muted uppercase font-semibold">
                Dry Cleaning & Clothes Pressing
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    active
                      ? 'text-accent bg-accent-light font-semibold'
                      : 'text-ink-muted hover:text-accent hover:bg-section'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+919876543210"
              className="btn-secondary text-sm !py-2.5 !px-3.5 flex items-center gap-2"
              title="Call Store"
            >
              <Phone className="w-4 h-4 text-accent" />
              <span className="hidden lg:inline text-xs font-semibold">+91 98765 43210</span>
            </a>
            <Link href="/book" className="btn-primary text-sm !py-2.5 !px-4">
              <Calendar className="w-4 h-4" />
              <span>Book a Pickup</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <Link href="/book" className="btn-primary text-xs !py-2 !px-3">
              Book
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-ink-muted hover:text-ink hover:bg-section transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-border px-4 pt-2 pb-6 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-2.5 rounded-lg text-base font-medium transition-colors ${
                isActive(link.href)
                  ? 'text-accent bg-accent-light font-semibold'
                  : 'text-ink-muted hover:text-accent hover:bg-section'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-2 border-t border-border flex flex-col gap-2">
            <a
              href="tel:+919876543210"
              className="btn-secondary text-center justify-center text-sm py-2.5"
            >
              <Phone className="w-4 h-4 text-accent" />
              <span>Call +91 98765 43210</span>
            </a>
            <Link
              href="/admin/login"
              onClick={() => setIsOpen(false)}
              className="text-xs text-center text-ink-subtle hover:text-accent py-1"
            >
              Admin Portal Login
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
