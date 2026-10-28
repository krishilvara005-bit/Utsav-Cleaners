import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { WhatsAppFloat } from '@/components/WhatsAppFloat';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  
  // On the Introduction page ('/'), do not render top Navbar, bottom Footer, or WhatsApp float
  const isIntroPage = router.pathname === '/';

  return (
    <div className="min-h-screen flex flex-col bg-white font-sans text-ink antialiased">
      {!isIntroPage && <Navbar />}
      <main className="flex-grow">
        <Component {...pageProps} />
      </main>
      {!isIntroPage && <Footer />}
      {!isIntroPage && <WhatsAppFloat />}
    </div>
  );
}
