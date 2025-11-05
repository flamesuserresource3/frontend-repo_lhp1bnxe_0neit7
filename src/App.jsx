import React from 'react';
import Hero3D from './components/Hero3D';
import ServicesGrid from './components/ServicesGrid';
import OAuthCTA from './components/OAuthCTA';
import ContactSection from './components/ContactSection';

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 font-inter text-white">
      <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-neutral-950/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <a href="#home" className="text-sm font-semibold tracking-tight">
            <span className="bg-gradient-to-r from-teal-300 to-indigo-400 bg-clip-text text-transparent">Flames Studio</span>
          </a>
          <nav className="hidden items-center gap-6 text-sm text-white/80 md:flex">
            <a href="#services" className="hover:text-white">Layanan</a>
            <a href="#auth" className="hover:text-white">OAuth</a>
            <a href="#contact" className="hover:text-white">Kontak</a>
          </nav>
          <a href="#contact" className="inline-flex items-center rounded-md bg-white px-3 py-1.5 text-xs font-medium text-black transition hover:bg-white/90 md:text-sm">Mulai Proyek</a>
        </div>
      </header>

      <main>
        <Hero3D />
        <ServicesGrid />
        <OAuthCTA />
        <ContactSection />
      </main>

      <footer className="border-t border-white/10 bg-neutral-950 py-8 text-white/60">
        <div className="mx-auto max-w-6xl px-6 text-sm">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <p>© {new Date().getFullYear()} Flames Studio — Software house untuk produk digital yang berdampak.</p>
            <div className="flex items-center gap-4">
              <a href="#home" className="hover:text-white">Beranda</a>
              <a href="#services" className="hover:text-white">Layanan</a>
              <a href="#auth" className="hover:text-white">OAuth</a>
              <a href="#contact" className="hover:text-white">Kontak</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
