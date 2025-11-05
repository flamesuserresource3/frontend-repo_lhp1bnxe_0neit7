import React from 'react';
import { Send, Phone, Mail } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="w-full bg-neutral-950 py-20 text-white">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-8">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Diskusikan Proyek Anda</h2>
          <p className="mt-2 max-w-2xl text-white/70">Ceritakan kebutuhan Anda—kami akan kembali dengan estimasi waktu & biaya, serta rekomendasi arsitektur terbaik.</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-5">
          <form className="md:col-span-3 rounded-xl border border-white/10 bg-white/[0.04] p-6">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="text-sm text-white/70">Nama</label>
                <input type="text" placeholder="Nama lengkap" className="mt-1 w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder-white/40 outline-none focus:border-teal-400" />
              </div>
              <div>
                <label className="text-sm text-white/70">Email</label>
                <input type="email" placeholder="email@domain.com" className="mt-1 w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder-white/40 outline-none focus:border-teal-400" />
              </div>
            </div>
            <div className="mt-4">
              <label className="text-sm text-white/70">Pesan</label>
              <textarea rows={5} placeholder="Ceritakan ringkas tentang kebutuhan Anda" className="mt-1 w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder-white/40 outline-none focus:border-teal-400" />
            </div>
            <div className="mt-5 flex items-center gap-3">
              <a href="mailto:hello@yourstudio.dev" className="inline-flex items-center gap-2 rounded-md bg-teal-500 px-4 py-2 text-sm font-medium text-black shadow transition hover:bg-teal-400">
                <Send className="h-4 w-4" />
                Kirim via Email
              </a>
              <a href="tel:+628123456789" className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10">
                <Phone className="h-4 w-4" />
                Jadwalkan Panggilan
              </a>
            </div>
          </form>

          <div className="md:col-span-2 rounded-xl border border-white/10 bg-white/[0.02] p-6">
            <div className="flex items-center gap-2 text-sm text-white/80">
              <Mail className="h-4 w-4 text-teal-300" />
              Kontak Langsung
            </div>
            <div className="mt-4 space-y-2 text-sm">
              <p className="text-white/70">Email: <span className="text-white">hello@yourstudio.dev</span></p>
              <p className="text-white/70">Telepon: <span className="text-white">+62 812-3456-789</span></p>
              <p className="text-white/70">Alamat: Remote-first, Jakarta & Bandung</p>
            </div>
            <div className="mt-6 rounded-lg border border-white/10 bg-black/30 p-4 text-xs text-white/70">
              Kami mendukung NDA dan proses procurement enterprise. Penawaran detail tersedia setelah sesi discovery singkat.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
