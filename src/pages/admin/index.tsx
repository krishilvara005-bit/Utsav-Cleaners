import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Booking, ContactMessage } from '@/lib/storage';
import { 
  Sparkles, 
  LogOut, 
  Package, 
  Clock, 
  CheckCircle, 
  Truck, 
  RefreshCw, 
  Search, 
  Phone, 
  MapPin, 
  Calendar, 
  MessageSquare,
  XCircle,
  Filter
} from 'lucide-react';

export default function AdminDashboard() {
  const router = useRouter();
  const [authenticated, setAuthenticated] = useState(false);
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [contacts, setContacts] = useState<ContactMessage[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'bookings' | 'contacts'>('bookings');
  const [statusFilter, setStatusFilter] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [updatingId, setUpdatingId] = useState<string | null>(null);

  useEffect(() => {
    const token = localStorage.getItem('utsav_admin_token');
    if (!token) {
      router.push('/admin/login');
    } else {
      setAuthenticated(true);
      fetchData();
    }
  }, [router]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const [resB, resC] = await Promise.all([
        fetch('/api/bookings'),
        fetch('/api/contact')
      ]);

      const dataB = await resB.json();
      const dataC = await resC.json();

      if (dataB.success) setBookings(dataB.data);
      if (dataC.success) setContacts(dataC.data);
    } catch (err) {
      console.error('Failed to load admin data', err);
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = async (id: string, newStatus: Booking['status']) => {
    setUpdatingId(id);
    try {
      const res = await fetch(`/api/bookings/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setBookings(prev => prev.map(b => (b.id === id ? { ...b, status: newStatus } : b)));
      }
    } catch (err) {
      alert('Failed to update status');
    } finally {
      setUpdatingId(null);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('utsav_admin_token');
    localStorage.removeItem('utsav_admin_user');
    router.push('/admin/login');
  };

  if (!authenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white text-ink font-semibold">
        Verifying admin authorization...
      </div>
    );
  }

  // Filtered Bookings
  const filteredBookings = bookings.filter(b => {
    const matchesStatus = statusFilter === 'All' || b.status === statusFilter;
    const q = searchQuery.toLowerCase();
    const matchesSearch = !q || 
      b.id.toLowerCase().includes(q) ||
      b.name.toLowerCase().includes(q) ||
      b.phone.toLowerCase().includes(q) ||
      b.service.toLowerCase().includes(q);
    return matchesStatus && matchesSearch;
  });

  // Metrics
  const totalBookings = bookings.length;
  const pendingCount = bookings.filter(b => b.status === 'Pending').length;
  const pickedCount = bookings.filter(b => b.status === 'Picked up').length;
  const inProcessCount = bookings.filter(b => b.status === 'In Process').length;
  const deliveredCount = bookings.filter(b => b.status === 'Delivered').length;
  const totalContacts = contacts.length;

  const getStatusBadge = (status: Booking['status']) => {
    switch (status) {
      case 'Pending':
        return <span className="bg-amber-100 text-amber-800 text-xs font-semibold px-2.5 py-1 rounded-full">Pending</span>;
      case 'Picked up':
        return <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-1 rounded-full">Picked Up</span>;
      case 'In Process':
        return <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2.5 py-1 rounded-full">In Processing</span>;
      case 'Delivered':
        return <span className="bg-emerald-100 text-emerald-800 text-xs font-semibold px-2.5 py-1 rounded-full">Delivered</span>;
      case 'Cancelled':
        return <span className="bg-red-100 text-red-800 text-xs font-semibold px-2.5 py-1 rounded-full">Cancelled</span>;
      default:
        return <span className="bg-gray-100 text-gray-800 text-xs font-semibold px-2.5 py-1 rounded-full">{status}</span>;
    }
  };

  return (
    <>
      <Head>
        <title>Admin Dashboard | Utsav Cleaners</title>
      </Head>

      <div className="bg-section min-h-screen pb-16">
        
        {/* Admin Header Bar */}
        <header className="bg-white border-b border-border py-4 px-4 sm:px-8 sticky top-0 z-30 shadow-subtle">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-accent text-white flex items-center justify-center font-bold">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h1 className="text-lg font-bold font-heading text-ink">Utsav Admin Portal</h1>
                <p className="text-[11px] text-ink-muted">Store Management & Order Dispatch</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={fetchData}
                disabled={loading}
                className="btn-secondary text-xs !py-2 !px-3"
                title="Refresh Data"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
                <span className="hidden sm:inline">Refresh</span>
              </button>
              
              <button
                onClick={handleLogout}
                className="btn-secondary text-xs !py-2 !px-3 text-red-600 hover:text-red-700 hover:border-red-300"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Sign Out</span>
              </button>
            </div>
          </div>
        </header>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-8">
          
          {/* Key Metrics Overview Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            <div className="bg-white border border-border p-4 rounded-xl shadow-subtle">
              <div className="text-xs text-ink-muted uppercase font-semibold">Total Orders</div>
              <div className="text-2xl font-extrabold font-heading text-ink mt-1">{totalBookings}</div>
              <div className="text-[10px] text-ink-subtle mt-0.5">All customer requests</div>
            </div>

            <div className="bg-white border border-amber-200 p-4 rounded-xl shadow-subtle bg-amber-50/30">
              <div className="text-xs text-amber-800 uppercase font-semibold flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" /> Pending
              </div>
              <div className="text-2xl font-extrabold font-heading text-amber-900 mt-1">{pendingCount}</div>
              <div className="text-[10px] text-amber-700 mt-0.5">Awaiting pickup dispatch</div>
            </div>

            <div className="bg-white border border-blue-200 p-4 rounded-xl shadow-subtle bg-blue-50/30">
              <div className="text-xs text-blue-800 uppercase font-semibold flex items-center gap-1">
                <Truck className="w-3.5 h-3.5" /> Picked Up
              </div>
              <div className="text-2xl font-extrabold font-heading text-blue-900 mt-1">{pickedCount}</div>
              <div className="text-[10px] text-blue-700 mt-0.5">Rider collected</div>
            </div>

            <div className="bg-white border border-purple-200 p-4 rounded-xl shadow-subtle bg-purple-50/30">
              <div className="text-xs text-purple-800 uppercase font-semibold flex items-center gap-1">
                <Package className="w-3.5 h-3.5" /> In Processing
              </div>
              <div className="text-2xl font-extrabold font-heading text-purple-900 mt-1">{inProcessCount}</div>
              <div className="text-[10px] text-purple-700 mt-0.5">Cleaning & pressing</div>
            </div>

            <div className="bg-white border border-emerald-200 p-4 rounded-xl shadow-subtle bg-emerald-50/30">
              <div className="text-xs text-emerald-800 uppercase font-semibold flex items-center gap-1">
                <CheckCircle className="w-3.5 h-3.5" /> Delivered
              </div>
              <div className="text-2xl font-extrabold font-heading text-emerald-900 mt-1">{deliveredCount}</div>
              <div className="text-[10px] text-emerald-700 mt-0.5">Completed orders</div>
            </div>
          </div>

          {/* Main Tab Controls */}
          <div className="bg-white border border-border rounded-xl p-6 shadow-subtle space-y-6">
            
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-border pb-4">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveTab('bookings')}
                  className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${
                    activeTab === 'bookings'
                      ? 'bg-accent text-white shadow-sm'
                      : 'bg-section text-ink-muted hover:text-ink border border-border'
                  }`}
                >
                  Pickup Bookings ({totalBookings})
                </button>
                <button
                  onClick={() => setActiveTab('contacts')}
                  className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${
                    activeTab === 'contacts'
                      ? 'bg-accent text-white shadow-sm'
                      : 'bg-section text-ink-muted hover:text-ink border border-border'
                  }`}
                >
                  Contact Messages ({totalContacts})
                </button>
              </div>

              {activeTab === 'bookings' && (
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  {/* Search */}
                  <div className="relative flex-grow sm:w-64">
                    <Search className="w-4 h-4 text-ink-subtle absolute left-3 top-2.5" />
                    <input
                      type="text"
                      placeholder="Search name, phone, ID..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-9 pr-3 py-1.5 text-xs rounded-lg border border-border focus:outline-none focus:border-accent"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* TAB 1: BOOKINGS TABLE */}
            {activeTab === 'bookings' && (
              <div className="space-y-4">
                
                {/* Status Filter Pills */}
                <div className="flex items-center gap-2 overflow-x-auto pb-2 text-xs">
                  <span className="text-ink-subtle font-semibold flex items-center gap-1">
                    <Filter className="w-3.5 h-3.5 text-accent" /> Filter:
                  </span>
                  {['All', 'Pending', 'Picked up', 'In Process', 'Delivered', 'Cancelled'].map((st) => (
                    <button
                      key={st}
                      onClick={() => setStatusFilter(st)}
                      className={`px-3 py-1 rounded-full font-medium transition-all ${
                        statusFilter === st
                          ? 'bg-ink text-white font-bold'
                          : 'bg-section text-ink-muted hover:bg-border'
                      }`}
                    >
                      {st}
                    </button>
                  ))}
                </div>

                {/* Table */}
                <div className="overflow-x-auto border border-border rounded-xl">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="bg-section border-b border-border text-ink uppercase font-bold tracking-wider">
                        <th className="py-3 px-4">Booking ID</th>
                        <th className="py-3 px-4">Customer Details</th>
                        <th className="py-3 px-4">Service & Quantity</th>
                        <th className="py-3 px-4">Pickup Date & Slot</th>
                        <th className="py-3 px-4">Current Status</th>
                        <th className="py-3 px-4">Update Status Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border text-ink-muted">
                      {filteredBookings.length === 0 ? (
                        <tr>
                          <td colSpan={6} className="py-8 text-center text-ink-subtle">
                            No bookings found matching filters.
                          </td>
                        </tr>
                      ) : (
                        filteredBookings.map((b) => (
                          <tr key={b.id} className="hover:bg-section/50 transition-colors">
                            <td className="py-3.5 px-4 font-bold text-accent font-mono">{b.id}</td>
                            
                            <td className="py-3.5 px-4 space-y-1">
                              <div className="font-bold text-ink text-sm">{b.name}</div>
                              <div className="flex items-center gap-1.5 text-ink-muted">
                                <Phone className="w-3 h-3 text-accent" />
                                <a href={`tel:${b.phone}`} className="hover:text-accent font-medium">
                                  {b.phone}
                                </a>
                              </div>
                              <div className="flex items-start gap-1 text-[11px] text-ink-subtle max-w-xs">
                                <MapPin className="w-3 h-3 text-accent flex-shrink-0 mt-0.5" />
                                <span className="line-clamp-2">{b.address}</span>
                              </div>
                            </td>

                            <td className="py-3.5 px-4 space-y-1">
                              <div className="font-semibold text-ink">{b.service}</div>
                              <div className="text-[11px] text-ink-subtle">Quantity: {b.itemsCount} item(s)</div>
                              {b.notes && (
                                <div className="text-[10px] text-amber-800 bg-amber-50 p-1.5 rounded border border-amber-200 mt-1 max-w-xs">
                                  Note: {b.notes}
                                </div>
                              )}
                            </td>

                            <td className="py-3.5 px-4 space-y-1">
                              <div className="font-medium text-ink flex items-center gap-1">
                                <Calendar className="w-3 h-3 text-accent" /> {b.preferredDate}
                              </div>
                              <div className="text-[11px] text-ink-subtle">{b.preferredTime}</div>
                            </td>

                            <td className="py-3.5 px-4">
                              {getStatusBadge(b.status)}
                            </td>

                            <td className="py-3.5 px-4">
                              <select
                                value={b.status}
                                disabled={updatingId === b.id}
                                onChange={(e) => handleStatusChange(b.id, e.target.value as Booking['status'])}
                                className="bg-white border border-border rounded px-2.5 py-1.5 text-xs font-semibold text-ink focus:outline-none focus:border-accent"
                              >
                                <option value="Pending">Set Pending</option>
                                <option value="Picked up">Set Picked up</option>
                                <option value="In Process">Set In Process</option>
                                <option value="Delivered">Set Delivered</option>
                                <option value="Cancelled">Set Cancelled</option>
                              </select>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>

              </div>
            )}

            {/* TAB 2: CONTACT MESSAGES */}
            {activeTab === 'contacts' && (
              <div className="space-y-4">
                <div className="overflow-x-auto border border-border rounded-xl">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="bg-section border-b border-border text-ink uppercase font-bold tracking-wider">
                        <th className="py-3 px-4">Msg ID</th>
                        <th className="py-3 px-4">Customer Name</th>
                        <th className="py-3 px-4">Phone / Email</th>
                        <th className="py-3 px-4">Subject</th>
                        <th className="py-3 px-4">Message Body</th>
                        <th className="py-3 px-4">Received Date</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border text-ink-muted">
                      {contacts.length === 0 ? (
                        <tr>
                          <td colSpan={6} className="py-8 text-center text-ink-subtle">
                            No contact messages received yet.
                          </td>
                        </tr>
                      ) : (
                        contacts.map((c) => (
                          <tr key={c.id} className="hover:bg-section/50 transition-colors">
                            <td className="py-3.5 px-4 font-mono font-bold text-ink-subtle">{c.id}</td>
                            <td className="py-3.5 px-4 font-bold text-ink text-sm">{c.name}</td>
                            <td className="py-3.5 px-4 space-y-0.5">
                              <div>
                                <a href={`tel:${c.phone}`} className="text-accent font-semibold hover:underline">
                                  {c.phone}
                                </a>
                              </div>
                              {c.email && <div className="text-ink-subtle">{c.email}</div>}
                            </td>
                            <td className="py-3.5 px-4 font-semibold text-ink">{c.subject}</td>
                            <td className="py-3.5 px-4 text-xs max-w-sm leading-relaxed">{c.message}</td>
                            <td className="py-3.5 px-4 text-[11px] text-ink-subtle">
                              {new Date(c.createdAt).toLocaleDateString()}
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </>
  );
}
