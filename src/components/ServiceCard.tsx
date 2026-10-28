import React from 'react';
import Link from 'next/link';
import { ServiceItem } from '@/lib/seedData';
import { Shirt, Sparkles, Package, Flame, Footprints, Home, Clock, Check, ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  service: ServiceItem;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Shirt': return <Shirt className="w-6 h-6 text-accent" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-accent" />;
      case 'Package': return <Package className="w-6 h-6 text-accent" />;
      case 'Flame': return <Flame className="w-6 h-6 text-accent" />;
      case 'Footprints': return <Footprints className="w-6 h-6 text-accent" />;
      case 'Home': return <Home className="w-6 h-6 text-accent" />;
      default: return <Sparkles className="w-6 h-6 text-accent" />;
    }
  };

  return (
    <div className="custom-card flex flex-col justify-between relative group">
      {service.popular && (
        <span className="absolute -top-3 right-4 bg-accent text-white text-[11px] font-bold px-3 py-0.5 rounded-full uppercase tracking-wider shadow-sm">
          Most Popular
        </span>
      )}

      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 rounded-xl bg-accent-light flex items-center justify-center border border-accent/20">
            {getIcon(service.iconName)}
          </div>
          <span className="flex items-center gap-1 text-xs text-ink-muted bg-section px-2.5 py-1 rounded-md border border-border">
            <Clock className="w-3.5 h-3.5 text-accent" />
            {service.turnaround}
          </span>
        </div>

        <h3 className="text-xl font-bold font-heading text-ink mb-2 group-hover:text-accent transition-colors">
          {service.title}
        </h3>
        
        <p className="text-sm text-ink-muted leading-relaxed mb-6">
          {service.description}
        </p>

        <div className="space-y-2 mb-6">
          {service.features.map((feat, idx) => (
            <div key={idx} className="flex items-center gap-2 text-xs text-ink-muted">
              <Check className="w-3.5 h-3.5 text-accent flex-shrink-0" />
              <span>{feat}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-4 border-t border-border flex items-center justify-between mt-auto">
        <div>
          <div className="text-xs text-ink-subtle uppercase font-semibold">Starting At</div>
          <div className="flex items-baseline gap-1">
            <span className="text-2xl font-bold text-ink font-heading">₹{service.price}</span>
            <span className="text-xs text-ink-muted font-medium">/ {service.unit}</span>
          </div>
        </div>

        <Link
          href={`/book?service=${encodeURIComponent(service.title)}`}
          className="btn-primary text-xs !py-2.5 !px-3.5 group/btn"
        >
          <span>Book Now</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};
