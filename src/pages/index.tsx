import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowRight, Sparkles, ShieldCheck, Truck, Clock, CheckCircle2 } from 'lucide-react';

export default function IntroductionPage() {
  return (
    <>
      <Head>
        <title>Welcome to Utsav Cleaners | Dry Cleaning & Clothes Pressing</title>
        <meta name="description" content="Welcome to Utsav Cleaners. Premium eco-friendly dry cleaning, designer saree care, steam pressing & doorstep laundry in Noida & NCR." />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-white via-section to-white py-12 sm:py-20 flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-light border border-accent/20 text-accent text-xs sm:text-sm font-semibold shadow-sm">
            <Sparkles className="w-4 h-4" />
            <span>Welcome to Utsav Cleaners Official Portal</span>
          </div>

          {/* Official Logo Display */}
          <div className="flex justify-center my-6">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-accent to-accent-hover rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
              <div className="relative bg-white p-4 sm:p-6 rounded-2xl border border-border shadow-hover">
                <img
                  src="/logo.jpg"
                  alt="Utsav Cleaners Logo"
                  className="w-56 sm:w-72 md:w-80 h-auto object-contain mx-auto transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>
          </div>

          {/* Title & Tagline */}
          <div className="space-y-4 max-w-2xl mx-auto">
            <h1 className="text-3xl sm:text-5xl font-bold font-heading text-ink tracking-tight">
              Dry Cleaning & <span className="text-accent">Clothes Pressing</span>
            </h1>
            <p className="text-sm sm:text-base text-ink-muted leading-relaxed">
              Noida & NCR&apos;s most trusted eco-friendly garment care service. Experience 100% organic solvent dry cleaning, crisp steam ironing, and free doorstep pickup & delivery.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto pt-2 text-left">
            {[
              { title: 'Executive Suit Care', desc: 'Crisp crease steam press', icon: ShieldCheck },
              { title: 'Saree & Ethnic Wear', desc: 'Delicate silk & zari care', icon: Sparkles },
              { title: 'Wash & Fold Laundry', desc: '100% Hygienic wash', icon: CheckCircle2 },
              { title: 'Doorstep Pickup', desc: 'Free pickup in 24-48h', icon: Truck },
            ].map((feat, idx) => (
              <div key={idx} className="bg-white border border-border p-3.5 rounded-xl shadow-subtle flex flex-col justify-between">
                <div className="w-8 h-8 rounded-lg bg-accent-light flex items-center justify-center text-accent mb-2">
                  <feat.icon className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-ink">{feat.title}</div>
                  <div className="text-[10px] text-ink-subtle mt-0.5">{feat.desc}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Single Prominent Home Page Button */}
          <div className="pt-6 flex justify-center">
            <Link
              href="/home"
              className="btn-primary text-base sm:text-lg py-4 px-10 shadow-hover font-bold tracking-wide group flex items-center gap-3"
            >
              <span>Visit Home Page</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
            </Link>
          </div>

          {/* Trust Guarantee Note */}
          <div className="pt-4 text-xs text-ink-subtle flex items-center justify-center gap-2">
            <Clock className="w-4 h-4 text-accent" />
            <span>Store Hours: Monday – Sunday: 8:00 AM – 8:30 PM | Sector 62, Noida</span>
          </div>

        </div>
      </div>
    </>
  );
}
