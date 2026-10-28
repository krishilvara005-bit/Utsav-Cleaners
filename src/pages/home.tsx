import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ServiceCard } from '@/components/ServiceCard';
import { INITIAL_SERVICES, INITIAL_TESTIMONIALS } from '@/lib/seedData';
import { 
  Sparkles, 
  Truck, 
  ShieldCheck, 
  Clock, 
  Calendar, 
  ArrowRight, 
  Star, 
  CheckCircle2, 
  Check, 
  Award,
  Zap
} from 'lucide-react';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Home | Utsav Cleaners Noida - Eco-Friendly Dry Cleaning & Laundry</title>
        <meta name="description" content="Noida's top-rated dry cleaning & laundry service. Free doorstep pickup, 24-hour express delivery, eco-friendly solvents & 100% fabric care guarantee." />
      </Head>

      {/* HERO SECTION */}
      <section className="relative bg-white pt-8 pb-16 lg:pt-16 lg:pb-24 overflow-hidden border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-light border border-accent/20 text-accent text-xs font-semibold">
                <Sparkles className="w-4 h-4" />
                <span>#1 Trusted Laundry & Dry Cleaners in Noida & NCR</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-heading text-ink tracking-tight leading-[1.15]">
                Spotless Garments, <br className="hidden sm:inline" />
                <span className="text-accent">Delivered to Your Door.</span>
              </h1>

              <p className="text-base sm:text-lg text-ink-muted leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Experience premium eco-friendly dry cleaning, designer saree care, suit pressing, and daily wash & fold with free doorstep pickup and 24-hour express delivery.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <Link href="/book" className="btn-primary text-base py-3.5 px-7 shadow-md w-full sm:w-auto">
                  <Calendar className="w-5 h-5" />
                  <span>Book a Doorstep Pickup</span>
                </Link>
                <Link href="/services" className="btn-secondary text-base py-3.5 px-7 w-full sm:w-auto">
                  <span>Explore Services & Pricing</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>

              {/* Quick Trust Badges */}
              <div className="pt-6 border-t border-border grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0 text-left">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-section flex items-center justify-center text-accent">
                    <Truck className="w-4 h-4" />
                  </div>
                  <div className="text-xs">
                    <p className="font-bold text-ink">Free Pickup</p>
                    <p className="text-ink-subtle">Doorstep service</p>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-section flex items-center justify-center text-accent">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div className="text-xs">
                    <p className="font-bold text-ink">24-48 Hours</p>
                    <p className="text-ink-subtle">Fast turnaround</p>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-section flex items-center justify-center text-accent">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div className="text-xs">
                    <p className="font-bold text-ink">100% Eco Safe</p>
                    <p className="text-ink-subtle">Non-toxic clean</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Showcase Card */}
            <div className="lg:col-span-5 relative">
              <div className="bg-section border border-border rounded-2xl p-6 sm:p-8 shadow-subtle relative overflow-hidden">
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-border">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center font-bold font-heading">
                      4.9★
                    </div>
                    <div>
                      <div className="flex text-amber-500 text-xs">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-current" />
                        ))}
                      </div>
                      <span className="text-xs font-medium text-ink-muted">10,000+ Garments Processed</span>
                    </div>
                  </div>
                  <span className="bg-accent-light text-accent text-xs font-bold px-3 py-1 rounded-full">
                    Noida Sector 62
                  </span>
                </div>

                <h3 className="text-lg font-bold font-heading text-ink mb-4">
                  Why Customers Love Utsav Cleaners:
                </h3>

                <ul className="space-y-3 mb-6 text-xs sm:text-sm text-ink-muted">
                  {[
                    'Custom stain removal treatment for delicate silks & suits',
                    'Zero-odor organic dry cleaning solvents',
                    'Individual wash cycles per customer (100% hygienic)',
                    'Sanitized packaging & crease-free hangers',
                    'Real-time WhatsApp order status updates',
                  ].map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/book"
                  className="block text-center w-full btn-primary text-sm py-3"
                >
                  Schedule Your First Pickup Today
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SERVICES OVERVIEW SECTION */}
      <section className="py-16 sm:py-24 bg-section border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-accent bg-accent-light px-3 py-1 rounded-full">
              Our Cleaning Expertise
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold font-heading text-ink">
              Comprehensive Laundry & Fabric Care
            </h2>
            <p className="text-sm sm:text-base text-ink-muted">
              From everyday shirts and jeans to delicate wedding sarees and leather shoes, we bring specialized garment care techniques to every item.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {INITIAL_SERVICES.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/services" className="btn-secondary text-sm py-3 px-6">
              <span>View Full Price List & Estimator</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* HOW IT WORKS SECTION */}
      <section className="py-16 sm:py-24 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-accent bg-accent-light px-3 py-1 rounded-full">
              Simple 4-Step Process
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold font-heading text-ink">
              How Doorstep Laundry Works
            </h2>
            <p className="text-sm sm:text-base text-ink-muted">
              We make laundry effortless. Book in 30 seconds and let our experts handle the rest.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Schedule Online',
                desc: 'Pick a date and convenient time slot on our simple booking form.',
                icon: Calendar
              },
              {
                step: '02',
                title: 'Doorstep Pickup',
                desc: 'Our courteous rider collects your garments right at your doorstep.',
                icon: Truck
              },
              {
                step: '03',
                title: 'Eco Cleaning',
                desc: 'Garments undergo fabric inspection, stain care & eco-solvent cleaning.',
                icon: Sparkles
              },
              {
                step: '04',
                title: 'Fresh Delivery',
                desc: 'Clean, pressed & neatly packed clothes delivered back to you in 24-48 hours.',
                icon: CheckCircle2
              }
            ].map((item, idx) => (
              <div key={idx} className="custom-card relative group text-center space-y-4">
                <span className="absolute top-4 right-4 text-3xl font-extrabold font-heading text-accent/15">
                  {item.step}
                </span>
                
                <div className="w-14 h-14 rounded-2xl bg-accent-light flex items-center justify-center text-accent mx-auto">
                  <item.icon className="w-7 h-7" />
                </div>

                <h3 className="text-lg font-bold font-heading text-ink">{item.title}</h3>
                <p className="text-xs text-ink-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/how-it-works" className="btn-secondary text-sm py-2.5 px-5">
              <span>Read Garment Care Guidelines</span>
            </Link>
          </div>

        </div>
      </section>

      {/* WHY CHOOSE US / TRUST PILLARS */}
      <section className="py-16 sm:py-24 bg-section border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-accent bg-accent-light px-3 py-1 rounded-full">
                The Utsav Standard
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold font-heading text-ink leading-tight">
                Why Thousands of NCR Residents Choose Us
              </h2>
              <p className="text-sm text-ink-muted leading-relaxed">
                We combine traditional garment care craftsmanship with state-of-the-art European laundry machinery to give your clothes a fresh, brand-new look and feel.
              </p>

              <div className="space-y-3">
                {[
                  'Hygienic Single-Customer Wash Cycles',
                  'Organic Solvents (Safe for Sensitive Skin & Children)',
                  'Customized Collar & Cuff Stain Removal',
                  'Transparent Price List (No Hidden Charges)',
                ].map((point, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-accent text-white flex items-center justify-center text-xs">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-sm font-semibold text-ink">{point}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <Link href="/about" className="btn-primary text-sm py-3 px-6">
                  <span>Learn About Our Process</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  title: 'Eco-Friendly Solvents',
                  desc: 'We never use harsh PERC chemicals. Our solvents are non-toxic, gentle on silk/wool, and environment safe.',
                  icon: Sparkles
                },
                {
                  title: '24-48 Hours Express',
                  desc: 'Need suit pressing or laundry urgently? Opt for our express pickup & delivery window.',
                  icon: Zap
                },
                {
                  title: '100% Quality Guarantee',
                  desc: 'If you are not satisfied with any press or stain removal, we re-clean it free of charge.',
                  icon: Award
                },
                {
                  title: 'Free Pickup Above ₹499',
                  desc: 'Enjoy free doorstep pickup and delivery across Noida, Ghaziabad, and nearby NCR sectors.',
                  icon: Truck
                }
              ].map((card, idx) => (
                <div key={idx} className="custom-card space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-accent-light flex items-center justify-center text-accent">
                    <card.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold font-heading text-ink">{card.title}</h3>
                  <p className="text-xs text-ink-muted leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="py-16 sm:py-24 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-accent bg-accent-light px-3 py-1 rounded-full">
              Customer Reviews
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold font-heading text-ink">
              What Our Customers Say
            </h2>
            <p className="text-sm sm:text-base text-ink-muted">
              Over 10,000+ satisfied customers trust Utsav Cleaners with their daily clothes and festive wear.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {INITIAL_TESTIMONIALS.map((t) => (
              <div key={t.id} className="custom-card flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex text-amber-500 text-xs">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-ink-muted italic leading-relaxed">
                    &ldquo;{t.comment}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-border flex items-center justify-between text-xs">
                  <div>
                    <div className="font-bold font-heading text-ink">{t.name}</div>
                    <div className="text-ink-subtle">{t.location}</div>
                  </div>
                  <span className="bg-section text-accent font-medium px-2.5 py-1 rounded border border-border">
                    {t.service}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CALL TO ACTION BANNER */}
      <section className="py-16 bg-accent text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="inline-block bg-white/10 text-white text-xs font-semibold px-3 py-1 rounded-full">
            Special Offer: Free Pickup & Delivery
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold font-heading">
            Ready for Fresh, Crisp Garments?
          </h2>
          <p className="text-sm sm:text-base text-white/80 max-w-xl mx-auto">
            Book your pickup in under 30 seconds. Our rider will collect your garments at your specified slot.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/book"
              className="bg-white text-accent hover:bg-section font-semibold px-8 py-3.5 rounded-lg text-base shadow-md transition-colors"
            >
              Book Doorstep Pickup Now
            </Link>
            <a
              href="tel:+919876543210"
              className="border border-white/40 hover:bg-white/10 text-white font-medium px-8 py-3.5 rounded-lg text-base transition-colors"
            >
              Call +91 98765 43210
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
