import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Sparkles, ShieldCheck, Award, Heart, CheckCircle2, Users, Leaf, Droplet, ArrowRight } from 'lucide-react';

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Us | Utsav Cleaners Noida</title>
        <meta name="description" content="Learn about Utsav Cleaners, our eco-friendly dry cleaning technology, facility standards, and mission for garment care excellence in Noida & NCR." />
      </Head>

      {/* Hero */}
      <section className="bg-section border-b border-border py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-accent bg-white px-3 py-1 rounded-full border border-border">
            Our Story & Values
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold font-heading text-ink">
            Craftsmanship in Every Crease.
          </h1>
          <p className="text-sm sm:text-base text-ink-muted max-w-2xl mx-auto">
            Founded with a passion for fabric longevity and environmental safety, Utsav Cleaners has grown to become Noida&apos;s most reliable doorstep garment care provider.
          </p>
        </div>
      </section>

      {/* Main Content & Story */}
      <section className="py-16 sm:py-24 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-accent">Est. 2018</span>
              <h2 className="text-2xl sm:text-4xl font-bold font-heading text-ink leading-tight">
                Redefining Laundry with Eco-Friendly Innovation
              </h2>
              <p className="text-sm text-ink-muted leading-relaxed">
                Traditional dry cleaners rely on harsh petroleum solvents (like PERC) that degrade delicate fabrics over time, cause chemical odors, and harm the environment.
              </p>
              <p className="text-sm text-ink-muted leading-relaxed">
                At Utsav Cleaners, we invested in 100% organic, biodegradable cleaning systems imported from Europe. Our process combines soft non-toxic solvents with gentle mechanical action to preserve fabric elasticity, color brightness, and intricate embroidery work.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-section border border-border text-center">
                  <div className="text-2xl sm:text-3xl font-extrabold font-heading text-accent">10,000+</div>
                  <div className="text-xs text-ink-muted mt-1 font-medium">Garments Processed Monthly</div>
                </div>
                <div className="p-4 rounded-xl bg-section border border-border text-center">
                  <div className="text-2xl sm:text-3xl font-extrabold font-heading text-accent">99.4%</div>
                  <div className="text-xs text-ink-muted mt-1 font-medium">Customer Satisfaction Rate</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <div className="bg-section border border-border rounded-2xl p-8 space-y-6">
                <h3 className="text-xl font-bold font-heading text-ink flex items-center gap-2">
                  <ShieldCheck className="w-6 h-6 text-accent" /> Our Core Promises
                </h3>

                <div className="space-y-4">
                  {[
                    {
                      title: '100% Individual Hygiene',
                      desc: 'Your garments are never mixed with another customer’s laundry. Every wash load is processed separately in disinfected drums.'
                    },
                    {
                      title: 'Zero Harsh Odor',
                      desc: 'Our eco-friendly solvents leave zero chemical smell — just clean, fresh fabric scent.'
                    },
                    {
                      title: 'Hand Inspection & Touch-Up',
                      desc: 'Every button, zipper, seam, and cuff is manually inspected by trained master craftsmen before final packaging.'
                    },
                    {
                      title: 'Transparent Doorstep Convenience',
                      desc: 'Real-time order tracking, clear digital billing, and punctual pickup/delivery riders.'
                    }
                  ].map((promise, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-sm font-bold text-ink">{promise.title}</h4>
                        <p className="text-xs text-ink-muted mt-0.5 leading-relaxed">{promise.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Eco Pillars */}
      <section className="py-16 bg-section border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold font-heading text-ink mb-12">
            Our Environmental Commitment
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="custom-card text-center space-y-3">
              <div className="w-12 h-12 rounded-xl bg-accent-light flex items-center justify-center text-accent mx-auto">
                <Leaf className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold font-heading text-ink">Organic Solvents</h3>
              <p className="text-xs text-ink-muted leading-relaxed">
                We use 100% biodegradable hydrocarbon solvents that decompose naturally without polluting groundwater or urban drains.
              </p>
            </div>

            <div className="custom-card text-center space-y-3">
              <div className="w-12 h-12 rounded-xl bg-accent-light flex items-center justify-center text-accent mx-auto">
                <Droplet className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold font-heading text-ink">Water Recycling System</h3>
              <p className="text-xs text-ink-muted leading-relaxed">
                Our plant features a closed-loop water filtration system that recycles up to 70% of wash water for secondary industrial uses.
              </p>
            </div>

            <div className="custom-card text-center space-y-3">
              <div className="w-12 h-12 rounded-xl bg-accent-light flex items-center justify-center text-accent mx-auto">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold font-heading text-ink">Eco Garment Covers</h3>
              <p className="text-xs text-ink-muted leading-relaxed">
                We use 100% recyclable, reusable non-woven fabric bags for suit and saree deliveries to minimize plastic waste.
              </p>
            </div>
          </div>

          <div className="mt-12">
            <Link href="/book" className="btn-primary text-sm py-3 px-8">
              <span>Book Your Eco Pickup</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
