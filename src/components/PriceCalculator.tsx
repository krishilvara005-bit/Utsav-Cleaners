import React, { useState } from 'react';
import Link from 'next/link';
import { Calculator, Plus, Minus, ArrowRight, ShieldCheck } from 'lucide-react';

interface ItemPrice {
  id: string;
  name: string;
  category: string;
  price: number;
  unit: string;
}

const PRICING_LIST: ItemPrice[] = [
  { id: 'shirt', name: 'Men Shirt / Trouser (Pressing)', category: 'Pressing', price: 35, unit: 'pc' },
  { id: 'dry-shirt', name: 'Shirt / Trouser (Dry Clean)', category: 'Dry Clean', price: 90, unit: 'pc' },
  { id: 'suit', name: '2-Piece Executive Suit', category: 'Dry Clean', price: 350, unit: 'set' },
  { id: 'saree-heavy', name: 'Heavy Designer Silk Saree', category: 'Ethnic Care', price: 450, unit: 'pc' },
  { id: 'lehenga', name: 'Bridal Lehenga / Sherwani', category: 'Ethnic Care', price: 750, unit: 'set' },
  { id: 'wash-fold', name: 'Daily Wash & Fold Laundry', category: 'Laundry', price: 99, unit: 'kg' },
  { id: 'blanket', name: 'Double Bed Blanket / Quilt', category: 'Specialty', price: 350, unit: 'pc' },
  { id: 'shoes', name: 'Sneakers / Leather Shoe Pair', category: 'Specialty', price: 599, unit: 'pair' },
];

export const PriceCalculator: React.FC = () => {
  const [quantities, setQuantities] = useState<Record<string, number>>({});

  const updateQuantity = (id: string, delta: number) => {
    setQuantities(prev => {
      const current = prev[id] || 0;
      const next = Math.max(0, current + delta);
      if (next === 0) {
        const copy = { ...prev };
        delete copy[id];
        return copy;
      }
      return { ...prev, [id]: next };
    });
  };

  const totalAmount = Object.entries(quantities).reduce((sum, [id, qty]) => {
    const item = PRICING_LIST.find(p => p.id === id);
    return sum + (item ? item.price * qty : 0);
  }, 0);

  const totalItems = Object.values(quantities).reduce((a, b) => a + b, 0);

  return (
    <div className="bg-white border border-border rounded-xl p-6 sm:p-8 shadow-subtle">
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-border">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-accent-light flex items-center justify-center text-accent">
            <Calculator className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl font-bold font-heading text-ink">Instant Price Estimator</h3>
            <p className="text-xs text-ink-muted">Select your items to estimate your total pickup bill</p>
          </div>
        </div>
        <span className="text-xs bg-section text-accent font-semibold px-3 py-1 rounded-full border border-border">
          Transparent Rates
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {PRICING_LIST.map((item) => {
          const qty = quantities[item.id] || 0;
          return (
            <div
              key={item.id}
              className={`p-3.5 rounded-lg border transition-all flex items-center justify-between ${
                qty > 0 ? 'border-accent bg-accent-light/30' : 'border-border hover:border-accent/40 bg-white'
              }`}
            >
              <div>
                <div className="text-sm font-semibold text-ink">{item.name}</div>
                <div className="text-xs text-ink-muted">
                  ₹{item.price} <span className="text-[10px]">/ {item.unit}</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => updateQuantity(item.id, -1)}
                  disabled={qty === 0}
                  className="w-7 h-7 rounded-md border border-border flex items-center justify-center text-ink disabled:opacity-30 hover:border-accent"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="w-6 text-center text-sm font-bold text-ink">{qty}</span>
                <button
                  type="button"
                  onClick={() => updateQuantity(item.id, 1)}
                  className="w-7 h-7 rounded-md bg-accent text-white flex items-center justify-center hover:bg-accent-hover"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Summary Box */}
      <div className="bg-section rounded-xl p-5 border border-border flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <div className="text-xs text-ink-muted uppercase font-semibold">Estimated Total ({totalItems} items)</div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-extrabold font-heading text-accent">₹{totalAmount}</span>
            <span className="text-xs text-ink-muted">*Final count verified at pickup</span>
          </div>
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto">
          <Link
            href={`/book?notes=${encodeURIComponent(
              `Estimated items: ${Object.entries(quantities)
                .map(([id, q]) => `${PRICING_LIST.find(p => p.id === id)?.name} (x${q})`)
                .join(', ')} | Est Total: ₹${totalAmount}`
            )}`}
            className={`btn-primary w-full sm:w-auto text-sm ${totalItems === 0 ? 'pointer-events-none opacity-50' : ''}`}
          >
            <span>Proceed to Book</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
      
      <div className="mt-3 flex items-center justify-center gap-1.5 text-xs text-ink-subtle">
        <ShieldCheck className="w-4 h-4 text-accent" />
        <span>Free Pickup & Delivery on orders above ₹499 in Noida & NCR</span>
      </div>
    </div>
  );
};
