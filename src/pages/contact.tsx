import React, { useState } from 'react';
import Head from 'next/head';
import { Phone, Mail, MapPin, Clock, MessageSquare, Send, CheckCircle, Sparkles } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setSuccess(true);
        setFormData({ name: '', phone: '', email: '', subject: 'General Inquiry', message: '' });
      } else {
        setError(data.message || 'Failed to submit message');
      }
    } catch (err) {
      setError('Network error. Please try calling us directly.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Contact Us | Utsav Cleaners Noida</title>
        <meta name="description" content="Get in touch with Utsav Cleaners. Phone, store location, working hours, and contact form for dry cleaning inquiries in Noida & NCR." />
      </Head>

      <section className="bg-section border-b border-border py-12 sm:py-16 text-center space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-accent bg-white px-3 py-1 rounded-full border border-border">
          We&apos;re Here to Help
        </span>
        <h1 className="text-3xl sm:text-5xl font-bold font-heading text-ink">
          Contact Utsav Cleaners
        </h1>
        <p className="text-sm sm:text-base text-ink-muted max-w-2xl mx-auto">
          Have a question about your garment care, bulk orders, or pickup timing? Reach out to us anytime!
        </p>
      </section>

      <section className="py-16 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Contact Information & Store Info */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <h3 className="text-2xl font-bold font-heading text-ink mb-2">Get In Touch</h3>
                <p className="text-sm text-ink-muted leading-relaxed">
                  Visit our central store facility in Noida or drop us a message below.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-accent-light flex items-center justify-center text-accent flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-ink">Store Address</h4>
                    <p className="text-xs text-ink-muted mt-1 leading-relaxed">
                      Shop #14, Central Market, Sector 62,<br />
                      Noida, Uttar Pradesh - 201309
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-accent-light flex items-center justify-center text-accent flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-ink">Phone & WhatsApp</h4>
                    <p className="text-xs text-ink-muted mt-1">
                      <a href="tel:+919876543210" className="hover:text-accent font-semibold transition-colors">
                        +91 98765 43210
                      </a>{' '}
                      / +91 98765 43211
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-accent-light flex items-center justify-center text-accent flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-ink">Email Support</h4>
                    <p className="text-xs text-ink-muted mt-1">
                      <a href="mailto:support@utsavcleaners.com" className="hover:text-accent font-medium transition-colors">
                        support@utsavcleaners.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-accent-light flex items-center justify-center text-accent flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-ink">Store Hours</h4>
                    <p className="text-xs text-ink-muted mt-1">
                      Monday – Sunday: 8:00 AM – 8:30 PM (All 7 Days Open)
                    </p>
                  </div>
                </div>
              </div>

              {/* WhatsApp Quick CTA */}
              <div className="bg-section border border-border rounded-xl p-5 flex items-center justify-between gap-4">
                <div>
                  <h4 className="text-sm font-bold text-ink flex items-center gap-1.5">
                    <MessageSquare className="w-4 h-4 text-[#25D366]" /> Fast WhatsApp Chat
                  </h4>
                  <p className="text-xs text-ink-muted">Instant response within 15 minutes</p>
                </div>
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary bg-[#25D366] hover:bg-[#20ba5a] text-white border-none text-xs py-2.5 px-4"
                >
                  Chat Now
                </a>
              </div>

            </div>

            {/* Form */}
            <div className="lg:col-span-7">
              <div className="custom-card !p-8">
                <h3 className="text-xl font-bold font-heading text-ink mb-2">Send Us a Message</h3>
                <p className="text-xs text-ink-muted mb-6">
                  Fill out the form below and our store desk will get back to you shortly.
                </p>

                {success && (
                  <div className="p-4 mb-6 bg-accent-light border border-accent/30 text-accent text-xs rounded-lg flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    <span>Thank you! Your message has been received. We will call you shortly.</span>
                  </div>
                )}

                {error && (
                  <div className="p-4 mb-6 bg-red-50 border border-red-200 text-red-700 text-xs rounded-lg">
                    {error}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-ink uppercase tracking-wider mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Rahul Sen"
                        className="w-full px-3 py-2.5 text-sm rounded-lg border border-border focus:outline-none focus:border-accent"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-ink uppercase tracking-wider mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. +91 98765 43210"
                        className="w-full px-3 py-2.5 text-sm rounded-lg border border-border focus:outline-none focus:border-accent"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-ink uppercase tracking-wider mb-1">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="rahul@example.com"
                        className="w-full px-3 py-2.5 text-sm rounded-lg border border-border focus:outline-none focus:border-accent"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-ink uppercase tracking-wider mb-1">
                        Inquiry Subject
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-3 py-2.5 text-sm rounded-lg border border-border bg-white focus:outline-none focus:border-accent"
                      >
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Booking Modification">Booking Modification</option>
                        <option value="Corporate Bulk Order">Corporate Bulk Order</option>
                        <option value="Feedback / Complaint">Feedback / Complaint</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-ink uppercase tracking-wider mb-1">
                      Your Message *
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Write your inquiry or question here..."
                      className="w-full px-3 py-2.5 text-sm rounded-lg border border-border focus:outline-none focus:border-accent"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full text-sm py-3 disabled:opacity-50"
                  >
                    {loading ? 'Sending Message...' : 'Submit Message'}
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Map Embed Section */}
      <section className="py-12 bg-section border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <h3 className="text-lg font-bold font-heading text-ink">Find Us on Google Maps</h3>
            <p className="text-xs text-ink-muted">Shop #14, Central Market, Sector 62, Noida</p>
          </div>
          <div className="bg-white border border-border rounded-2xl overflow-hidden h-72 sm:h-96 shadow-subtle flex items-center justify-center relative">
            {/* Embedded Google Map iframe placeholder for Sector 62 Noida */}
            <iframe
              title="Utsav Cleaners Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.562085731776!2d77.36214131508215!3d28.612908982424915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce56f5efefef5%3A0x8efefef5efefef5!2sSector%2062%2C%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1650000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}
