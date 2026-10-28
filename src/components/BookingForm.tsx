import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Calendar, Clock, MapPin, Phone, User, Package, MessageSquare, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';

interface BookingFormProps {
  initialService?: string;
  initialNotes?: string;
}

export const BookingForm: React.FC<BookingFormProps> = ({ initialService, initialNotes }) => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    service: initialService || 'Executive Suit & Shirt Care',
    itemsCount: 3,
    preferredDate: '',
    preferredTime: '10:00 AM - 12:00 PM',
    notes: initialNotes || '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [successBooking, setSuccessBooking] = useState<any>(null);

  useEffect(() => {
    if (router.query.service) {
      setFormData(prev => ({ ...prev, service: router.query.service as string }));
    }
    if (router.query.notes) {
      setFormData(prev => ({ ...prev, notes: router.query.notes as string }));
    }
    // Set default date to tomorrow
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    setFormData(prev => ({ ...prev, preferredDate: tomorrow.toISOString().split('T')[0] }));
  }, [router.query]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setSuccessBooking(data.data);
      } else {
        setError(data.message || 'Something went wrong while booking. Please try again.');
      }
    } catch (err) {
      setError('Network error. Please check your internet connection or call us directly.');
    } finally {
      setLoading(false);
    }
  };

  const getWhatsAppLink = () => {
    if (!successBooking) return '#';
    const text = `Hello Utsav Cleaners! I just placed a pickup booking on your website.\n*Booking ID:* ${successBooking.id}\n*Name:* ${successBooking.name}\n*Service:* ${successBooking.service}\n*Pickup Date:* ${successBooking.preferredDate} (${successBooking.preferredTime})\n*Address:* ${successBooking.address}`;
    return `https://wa.me/919876543210?text=${encodeURIComponent(text)}`;
  };

  if (successBooking) {
    return (
      <div className="bg-white border border-accent/30 rounded-xl p-8 sm:p-10 text-center shadow-hover max-w-2xl mx-auto">
        <div className="w-16 h-16 bg-accent-light rounded-full flex items-center justify-center text-accent mx-auto mb-6">
          <CheckCircle className="w-10 h-10" />
        </div>
        
        <span className="text-xs font-bold uppercase tracking-wider text-accent bg-accent-light px-3 py-1 rounded-full">
          Booking Confirmed
        </span>

        <h3 className="text-2xl font-bold font-heading text-ink mt-3 mb-2">
          Pickup Successfully Scheduled!
        </h3>

        <p className="text-ink-muted text-sm max-w-md mx-auto mb-6">
          Thank you <span className="font-semibold text-ink">{successBooking.name}</span>. Your booking reference number is{' '}
          <strong className="text-accent">{successBooking.id}</strong>. Our delivery executive will arrive during your chosen slot.
        </p>

        <div className="bg-section rounded-xl p-5 border border-border text-left space-y-2 mb-8 text-xs text-ink-muted">
          <div className="flex justify-between border-b border-border pb-2">
            <span>Service Request:</span>
            <span className="font-semibold text-ink">{successBooking.service}</span>
          </div>
          <div className="flex justify-between border-b border-border pb-2">
            <span>Pickup Date & Slot:</span>
            <span className="font-semibold text-ink">{successBooking.preferredDate} ({successBooking.preferredTime})</span>
          </div>
          <div className="flex justify-between">
            <span>Pickup Location:</span>
            <span className="font-semibold text-ink">{successBooking.address}</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary bg-[#25D366] hover:bg-[#20ba5a] text-white border-none text-sm"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Send Confirmation to WhatsApp</span>
          </a>
          <button
            type="button"
            onClick={() => setSuccessBooking(null)}
            className="btn-secondary text-sm"
          >
            Book Another Pickup
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-border rounded-xl p-6 sm:p-10 shadow-subtle space-y-6">
      <div className="border-b border-border pb-4 mb-2">
        <h3 className="text-xl font-bold font-heading text-ink flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-accent" /> Book Doorstep Pickup
        </h3>
        <p className="text-xs text-ink-muted">Fill out your details below for instant free doorstep pickup in Noida & NCR</p>
      </div>

      {error && (
        <div className="p-4 bg-red-50 border border-red-200 text-red-700 text-xs rounded-lg">
          {error}
        </div>
      )}

      {/* Row 1: Name & Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-ink uppercase tracking-wider mb-1.5">
            Full Name *
          </label>
          <div className="relative">
            <User className="w-4 h-4 text-ink-subtle absolute left-3 top-3" />
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Anish Malhotra"
              className="w-full pl-9 pr-3 py-2.5 text-sm rounded-lg border border-border focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-ink uppercase tracking-wider mb-1.5">
            Mobile Number *
          </label>
          <div className="relative">
            <Phone className="w-4 h-4 text-ink-subtle absolute left-3 top-3" />
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="e.g. +91 98765 43210"
              className="w-full pl-9 pr-3 py-2.5 text-sm rounded-lg border border-border focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
            />
          </div>
        </div>
      </div>

      {/* Row 2: Address */}
      <div>
        <label className="block text-xs font-semibold text-ink uppercase tracking-wider mb-1.5">
          Pickup & Delivery Address *
        </label>
        <div className="relative">
          <MapPin className="w-4 h-4 text-ink-subtle absolute left-3 top-3" />
          <input
            type="text"
            name="address"
            required
            value={formData.address}
            onChange={handleChange}
            placeholder="Flat/House No, Building, Sector / Area, City"
            className="w-full pl-9 pr-3 py-2.5 text-sm rounded-lg border border-border focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
          />
        </div>
      </div>

      {/* Row 3: Service & Items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-ink uppercase tracking-wider mb-1.5">
            Primary Service *
          </label>
          <div className="relative">
            <Package className="w-4 h-4 text-ink-subtle absolute left-3 top-3" />
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full pl-9 pr-3 py-2.5 text-sm rounded-lg border border-border bg-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
            >
              <option value="Executive Suit & Shirt Care">Executive Suit & Shirt Care</option>
              <option value="Saree & Ethnic Wear Care">Saree & Designer Ethnic Care</option>
              <option value="Daily Wash & Fold Laundry">Daily Wash & Fold Laundry</option>
              <option value="Precision Steam Pressing">Precision Steam Pressing</option>
              <option value="Shoe & Leather Restoration">Shoe & Leather Restoration</option>
              <option value="Curtain & Carpet Deep Clean">Curtain & Carpet Deep Clean</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-ink uppercase tracking-wider mb-1.5">
            Approx Garment Quantity
          </label>
          <input
            type="number"
            name="itemsCount"
            min={1}
            max={50}
            value={formData.itemsCount}
            onChange={handleChange}
            className="w-full px-3 py-2.5 text-sm rounded-lg border border-border focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
          />
        </div>
      </div>

      {/* Row 4: Preferred Date & Slot */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-ink uppercase tracking-wider mb-1.5">
            Preferred Pickup Date *
          </label>
          <div className="relative">
            <Calendar className="w-4 h-4 text-ink-subtle absolute left-3 top-3" />
            <input
              type="date"
              name="preferredDate"
              required
              value={formData.preferredDate}
              onChange={handleChange}
              className="w-full pl-9 pr-3 py-2.5 text-sm rounded-lg border border-border focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-ink uppercase tracking-wider mb-1.5">
            Preferred Time Slot *
          </label>
          <div className="relative">
            <Clock className="w-4 h-4 text-ink-subtle absolute left-3 top-3" />
            <select
              name="preferredTime"
              value={formData.preferredTime}
              onChange={handleChange}
              className="w-full pl-9 pr-3 py-2.5 text-sm rounded-lg border border-border bg-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
            >
              <option value="08:00 AM - 10:00 AM">08:00 AM - 10:00 AM (Morning)</option>
              <option value="10:00 AM - 12:00 PM">10:00 AM - 12:00 PM (Mid Morning)</option>
              <option value="02:00 PM - 04:00 PM">02:00 PM - 04:00 PM (Afternoon)</option>
              <option value="04:00 PM - 06:00 PM">04:00 PM - 06:00 PM (Evening)</option>
              <option value="06:00 PM - 08:00 PM">06:00 PM - 08:00 PM (Late Evening)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Row 5: Notes */}
      <div>
        <label className="block text-xs font-semibold text-ink uppercase tracking-wider mb-1.5">
          Special Garment Instructions / Stain Notes (Optional)
        </label>
        <textarea
          name="notes"
          rows={3}
          value={formData.notes}
          onChange={handleChange}
          placeholder="e.g. Oil stain on suit sleeve, require extra starched collar..."
          className="w-full px-3 py-2.5 text-sm rounded-lg border border-border focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="btn-primary w-full text-base py-3.5 shadow-md disabled:opacity-50"
      >
        {loading ? (
          <span>Scheduling Your Pickup...</span>
        ) : (
          <>
            <span>Confirm Doorstep Pickup</span>
            <ArrowRight className="w-5 h-5" />
          </>
        )}
      </button>
    </form>
  );
};
