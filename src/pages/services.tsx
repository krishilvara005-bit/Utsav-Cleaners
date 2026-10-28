import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ServiceCard } from '@/components/ServiceCard';
import { PriceCalculator } from '@/components/PriceCalculator';
import { INITIAL_SERVICES } from '@/lib/seedData';
import { Sparkles, Calendar, ShieldCheck, HelpCircle } from 'lucide-react';

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', name: 'All Services' },
    { id: 'dry-cleaning', name: 'Dry Cleaning' },
    { id: 'ethnic', name: 'Saree & Ethnic Wear' },
    { id: 'laundry', name: 'Wash & Fold Laundry' },
    { id: 'pressing', name: 'Steam Pressing' },
    { id: 'specialty', name: 'Shoe & Home Care' },
  ];

  const filteredServices = selectedCategory === 'all'
    ? INITIAL_SERVICES
    : INITIAL_SERVICES.filter(s => s.category === selectedCategory);

  return (
    <>
      <Head>
        <title>Services & Pricing | Utsav Cleaners Noida</title>
        <meta name="description" content="Transparent pricing for dry cleaning, saree care, suit pressing, shoe cleaning, and daily laundry in Noida & NCR." />
      </Head>

      {/* Header */}
      <section className="bg-section border-b border-border py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-accent bg-white px-3 py-1 rounded-full border border-border">
            Transparent Pricing
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold font-heading text-ink">
            Our Services & Price List
          </h1>
          <p className="text-sm sm:text-base text-ink-muted max-w-2xl mx-auto">
            Clean, clear pricing with zero hidden charges. All services include quality fabric inspection, customized stain treatment, and protective packaging.
          </p>
        </div>
      </section>

      {/* Interactive Price Estimator Section */}
      <section className="py-12 bg-white border-b border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <PriceCalculator />
        </div>
      </section>

      {/* Main Service Catalog */}
      <section className="py-16 sm:py-20 bg-section border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Category Filter Tabs */}
          <div className="flex items-center justify-center gap-2 flex-wrap mb-12">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-accent text-white shadow-sm'
                    : 'bg-white text-ink-muted border border-border hover:border-accent hover:text-accent'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

        </div>
      </section>

      {/* Commercial & Bulk Quote Callout */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-accent-light/40 border border-accent/20 rounded-2xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-accent uppercase tracking-wider">
                <Sparkles className="w-4 h-4" /> Commercial & Corporate Care
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-heading text-ink">
                Need Bulk Laundry for Hotel, Gym, Spa or Office?
              </h3>
              <p className="text-xs sm:text-sm text-ink-muted">
                We offer custom monthly invoicing, discounted bulk rates, and dedicated pickup slots for businesses in Noida & NCR.
              </p>
            </div>
            <Link href="/contact?type=corporate" className="btn-primary text-sm py-3 px-6 whitespace-nowrap">
              Request Corporate Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
