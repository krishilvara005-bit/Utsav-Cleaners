import React from 'react';
import Head from 'next/head';
import { BookingForm } from '@/components/BookingForm';
import { Truck, ShieldCheck, Clock, Phone, Sparkles, Star } from 'lucide-react';

export default function BookPage() {
  return (
    <>
      <Head>
        <title>Book a Pickup | Utsav Cleaners Noida</title>
        <meta name="description" content="Schedule free doorstep laundry & dry cleaning pickup in Noida & NCR in under 30 seconds." />
      </Head>

      <section className="bg-section border-b border-border py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-accent bg-white px-3 py-1 rounded-full border border-border">
            Fast & Convenient
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold font-heading text-ink">
            Schedule Your Doorstep Pickup
          </h1>
          <p className="text-sm sm:text-base text-ink-muted max-w-2xl mx-auto">
            Select your service, choose a date & time slot, and our delivery executive will be at your door.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Main Booking Form */}
            <div className="lg:col-span-8">
              <BookingForm />
            </div>

            {/* Side Info Cards */}
            <div className="lg:col-span-4 space-y-6">
              
              {/* Store Callout */}
              <div className="bg-section border border-border rounded-xl p-6 space-y-4 shadow-subtle">
                <h4 className="text-base font-bold font-heading text-ink flex items-center gap-2">
                  <Phone className="w-4 h-4 text-accent" /> Need Phone Booking?
                </h4>
                <p className="text-xs text-ink-muted leading-relaxed">
                  Prefer placing your pickup request over phone or WhatsApp directly? Speak with our customer care desk.
                </p>
                <div className="pt-1">
                  <a
                    href="tel:+919876543210"
                    className="btn-secondary w-full text-xs font-bold py-2.5 justify-center"
                  >
                    Call Store: +91 98765 43210
                  </a>
                </div>
              </div>

              {/* Guarantees List */}
              <div className="bg-white border border-border rounded-xl p-6 space-y-4">
                <h4 className="text-base font-bold font-heading text-ink">Service Assurance</h4>
                
                <div className="space-y-3.5 text-xs text-ink-muted">
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-lg bg-accent-light flex items-center justify-center text-accent flex-shrink-0 mt-0.5">
                      <Truck className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-semibold text-ink">Free Pickup & Delivery</p>
                      <p className="text-[11px] text-ink-subtle">On all orders above ₹499 in Noida & NCR</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-lg bg-accent-light flex items-center justify-center text-accent flex-shrink-0 mt-0.5">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-semibold text-ink">Fabric Safety Guarantee</p>
                      <p className="text-[11px] text-ink-subtle">Zero chemical residue or fiber damage</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-lg bg-accent-light flex items-center justify-center text-accent flex-shrink-0 mt-0.5">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-semibold text-ink">On-Time Rider Arrival</p>
                      <p className="text-[11px] text-ink-subtle">Rider calls 15 mins prior to arrival</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Rating Box */}
              <div className="bg-accent-light/40 border border-accent/20 rounded-xl p-6 text-center space-y-2">
                <div className="flex justify-center text-amber-500 text-xs">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <div className="text-lg font-bold font-heading text-ink">Rated 4.9 / 5.0 Stars</div>
                <p className="text-xs text-ink-muted">
                  By over 10,000+ happy households in Noida Sector 62, Indirapuram & NCR.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>
    </>
  );
}
