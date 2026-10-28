import React, { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Lock, User, ArrowRight, ShieldAlert } from 'lucide-react';

export default function AdminLoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        localStorage.setItem('utsav_admin_token', data.token);
        localStorage.setItem('utsav_admin_user', JSON.stringify(data.user));
        router.push('/admin');
      } else {
        setError(data.message || 'Invalid username or password');
      }
    } catch (err) {
      setError('Connection error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Admin Staff Login | Utsav Cleaners</title>
      </Head>

      <section className="min-h-[80vh] flex items-center justify-center bg-section py-12 px-4">
        <div className="bg-white border border-border rounded-2xl p-8 sm:p-10 shadow-subtle w-full max-w-md space-y-6">
          
          <div className="text-center space-y-2">
            <img
              src="/logo.jpg"
              alt="Utsav Cleaners Logo"
              className="h-16 w-auto object-contain mx-auto rounded-lg"
            />
            <h1 className="text-2xl font-bold font-heading text-ink pt-2">Admin Staff Portal</h1>
            <p className="text-xs text-ink-muted">Sign in to manage bookings, orders & customer inquiries</p>
          </div>

          {error && (
            <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-lg flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 flex-shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-ink uppercase tracking-wider mb-1.5">
                Username
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-ink-subtle absolute left-3 top-3" />
                <input
                  type="text"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="e.g. admin"
                  className="w-full pl-9 pr-3 py-2.5 text-sm rounded-lg border border-border focus:outline-none focus:border-accent"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-ink uppercase tracking-wider mb-1.5">
                Password
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-ink-subtle absolute left-3 top-3" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-9 pr-3 py-2.5 text-sm rounded-lg border border-border focus:outline-none focus:border-accent"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full text-sm py-3 shadow-md disabled:opacity-50"
            >
              {loading ? 'Authenticating...' : 'Sign In to Dashboard'}
            </button>
          </form>

          <div className="p-3.5 bg-accent-light/50 border border-accent/20 rounded-lg text-center text-xs text-ink-muted">
            <span className="font-semibold text-accent">Default Seed Credentials:</span><br />
            Username: <code className="font-mono text-ink font-bold">admin</code> | Password: <code className="font-mono text-ink font-bold">utsav123</code>
          </div>

        </div>
      </section>
    </>
  );
}
