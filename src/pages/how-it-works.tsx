import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Calendar, Truck, Sparkles, CheckCircle2, Clock, HelpCircle, ChevronDown, ChevronUp, ShieldCheck, ArrowRight } from 'lucide-react';

export default function HowItWorksPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Do I need to sort my clothes before handing them over?',
      a: 'No! Our pickup rider collects all your clothes in a sealed garment bag. Once received at our processing plant, our master laundry team tags each item, separates darks from lights, and assigns proper dry clean or wash cycles.'
    },
    {
      q: 'What is your typical turnaround time for orders?',
      a: 'Standard dry cleaning and wash & fold laundry is delivered within 24 to 48 hours. Express 24-hour service is available upon request during pickup booking.'
    },
    {
      q: 'How do you treat tough stains (e.g., wine, oil, ink, tea)?',
      a: 'We perform specialized pre-spotting stain treatment using targeted enzyme solutions prior to dry cleaning. While most fresh stains dissolve 100%, older set-in stains are lightened safely without degrading fabric fibers.'
    },
    {
      q: 'Are my clothes washed with other people’s clothes?',
      a: 'Never! At Utsav Cleaners, individual customer hygienic washing is strictly enforced. Your clothes are processed in an independent machine cycle.'
    },
    {
      q: 'What payment options do you accept?',
      a: 'You can pay via UPI (GPay, PhonePe, Paytm), Credit/Debit Cards, Net Banking, or Cash on Delivery (COD) once your clean garments are delivered.'
    }
  ];

  return (
    <>
      <Head>
        <title>How It Works | Utsav Cleaners Noida</title>
        <meta name="description" content="Understand our simple 4-step doorstep pickup and delivery process, garment turnaround times, and frequently asked questions." />
      </Head>

      {/* Header */}
      <section className="bg-section border-b border-border py-16 sm:py-20 text-center space-y-4">
        <span className="text-xs font-bold uppercase tracking-wider text-accent bg-white px-3 py-1 rounded-full border border-border">
          Seamless Experience
        </span>
        <h1 className="text-3xl sm:text-5xl font-bold font-heading text-ink">
          How Utsav Cleaners Works
        </h1>
        <p className="text-sm sm:text-base text-ink-muted max-w-2xl mx-auto">
          From doorstep pickup to expert fabric care and crisp delivery, discover our transparent step-by-step process.
        </p>
      </section>

      {/* Detailed Steps */}
      <section className="py-16 sm:py-24 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {[
              {
                num: '01',
                title: 'Schedule Your Doorstep Pickup',
                desc: 'Select your preferred date, time slot, and address on our interactive booking page or via WhatsApp. Specify any special care notes or stain alerts.',
                badge: '30 Second Booking',
                icon: Calendar
              },
              {
                num: '02',
                title: 'Courtesy Pickup Rider Collects Garments',
                desc: 'Our uniform rider arrives during your designated slot with reusable garment bags. You receive an instant SMS/WhatsApp invoice receipt confirming item count.',
                badge: 'Free Doorstep Service',
                icon: Truck
              },
              {
                num: '03',
                title: 'Inspection & Eco-Friendly Care',
                desc: 'Items are barcoded, inspected for defects, treated for stains, cleaned in zero-PERC organic solvents, and steam-ironed on automated tensioning forms.',
                badge: '100% Organic Clean',
                icon: Sparkles
              },
              {
                num: '04',
                title: 'Fresh & Crisp Doorstep Delivery',
                desc: 'Your clothes arrive back neatly folded or hung on protective hangers inside breathable dust covers. Inspect your clothes and pay via UPI or cash.',
                badge: '24-48h Delivery',
                icon: CheckCircle2
              }
            ].map((step, idx) => (
              <div key={idx} className="bg-section border border-border rounded-2xl p-6 sm:p-10 flex flex-col md:flex-row items-start gap-6 relative overflow-hidden">
                <div className="w-14 h-14 rounded-2xl bg-accent text-white flex items-center justify-center font-bold text-xl font-heading flex-shrink-0 shadow-md">
                  {step.num}
                </div>
                
                <div className="space-y-3 flex-grow">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold text-accent bg-accent-light px-3 py-0.5 rounded-full">
                      {step.badge}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-ink">{step.title}</h3>
                  <p className="text-sm text-ink-muted leading-relaxed max-w-3xl">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Turnaround Schedule Table */}
      <section className="py-16 bg-section border-b border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-ink">
              Turnaround Time Matrix
            </h2>
            <p className="text-xs sm:text-sm text-ink-muted mt-1">
              Estimated processing times by garment category
            </p>
          </div>

          <div className="bg-white border border-border rounded-xl overflow-hidden shadow-subtle">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="bg-section border-b border-border text-ink uppercase text-xs tracking-wider">
                    <th className="py-3.5 px-6 font-bold">Garment Category</th>
                    <th className="py-3.5 px-6 font-bold">Standard Turnaround</th>
                    <th className="py-3.5 px-6 font-bold">Express Slot Available</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border text-ink-muted text-xs sm:text-sm">
                  <tr>
                    <td className="py-3.5 px-6 font-semibold text-ink">Daily Wash & Fold Laundry</td>
                    <td className="py-3.5 px-6">24 Hours</td>
                    <td className="py-3.5 px-6 text-accent font-semibold">Yes (Same Day Delivery)</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-6 font-semibold text-ink">Executive Suit Dry Clean & Press</td>
                    <td className="py-3.5 px-6">24 - 48 Hours</td>
                    <td className="py-3.5 px-6 text-accent font-semibold">Yes (24 Hours)</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-6 font-semibold text-ink">Saree & Heavy Ethnic Lehengas</td>
                    <td className="py-3.5 px-6">48 Hours</td>
                    <td className="py-3.5 px-6 text-ink-subtle">No (Requires hand care)</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-6 font-semibold text-ink">Sneaker & Leather Shoe Spa</td>
                    <td className="py-3.5 px-6">48 - 72 Hours</td>
                    <td className="py-3.5 px-6 text-ink-subtle">No (Drying cycle required)</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-6 font-semibold text-ink">Curtains & Living Room Rugs</td>
                    <td className="py-3.5 px-6">48 Hours</td>
                    <td className="py-3.5 px-6 text-accent font-semibold">Yes (Doorstep unhanging)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-accent bg-accent-light px-3 py-1 rounded-full">
              Got Questions?
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold font-heading text-ink">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="border border-border rounded-xl overflow-hidden bg-white">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between font-bold text-ink hover:text-accent transition-colors"
                  >
                    <span className="text-sm sm:text-base pr-4">{faq.q}</span>
                    {isOpen ? <ChevronUp className="w-5 h-5 text-accent flex-shrink-0" /> : <ChevronDown className="w-5 h-5 text-ink-subtle flex-shrink-0" />}
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-ink-muted leading-relaxed border-t border-border/50 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <Link href="/book" className="btn-primary text-sm py-3 px-8">
              <span>Ready? Schedule Pickup Now</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
