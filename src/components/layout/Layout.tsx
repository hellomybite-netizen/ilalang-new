import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import WhatsAppButton from '../ui/WhatsAppButton';

export default function Layout() {
  const location = useLocation();
  const normalizedPath = location.pathname.replace(/\/+$/, '') || '/';
  const isLuxuryHouseLanding = normalizedPath === '/arsitek-rumah-mewah';

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="flex flex-col min-h-dvh">
      <Navbar />
      <main className="flex-grow pt-24 md:pt-32">
        <Outlet />
      </main>
      {isLuxuryHouseLanding ? (
        <>
          <footer className="border-t border-brand-border bg-brand-beige px-6 py-8 text-center md:hidden">
            <img src="/logo.png" alt="Ilalang Architect" className="mx-auto h-8 w-auto" />
            <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-dark/50">
              Malang • +62 811-3198-800
            </p>
            <p className="mt-3 text-[9px] uppercase tracking-widest text-brand-dark/35">
              © {new Date().getFullYear()} Ilalang Architect
            </p>
          </footer>
          <div className="hidden md:block">
            <Footer />
          </div>
        </>
      ) : (
        <Footer />
      )}
      <WhatsAppButton />
    </div>
  );
}
