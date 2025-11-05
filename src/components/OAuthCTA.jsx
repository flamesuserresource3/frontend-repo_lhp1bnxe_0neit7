import React from 'react';
import { Lock, Github, Mail, ShieldCheck } from 'lucide-react';

export default function OAuthCTA() {
  const baseUrl = import.meta.env.VITE_BACKEND_URL?.replace(/\/$/, '');

  const providers = [
    { key: 'google', label: 'Sign in with Google', icon: <Mail className="h-4 w-4" /> },
    { key: 'github', label: 'Continue with GitHub', icon: <Github className="h-4 w-4" /> },
  ];

  const isEnabled = Boolean(baseUrl);

  return (
    <section id="auth" className="w-full bg-neutral-950 py-20 text-white">
      <div className="mx-auto max-w-3xl px-6">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
          <Lock size={14} className="text-teal-300" />
          OAuth Ready
        </div>
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Login Cepat & Aman</h2>
        <p className="mt-2 text-white/70">
          Integrasi OAuth siap pakai. Aktifkan dengan menambahkan variabel lingkungan <span className="font-mono text-white">VITE_BACKEND_URL</span> yang mengarah ke server Anda.
        </p>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {providers.map((p) => {
            const href = isEnabled ? `${baseUrl}/auth/${p.key}` : undefined;
            return (
              <a
                key={p.key}
                href={href}
                className={`inline-flex items-center justify-center gap-2 rounded-md px-4 py-2.5 text-sm font-medium transition ${
                  isEnabled
                    ? 'bg-white text-black hover:bg-white/90'
                    : 'pointer-events-none cursor-not-allowed border border-white/15 bg-white/5 text-white/60'
                }`}
                aria-disabled={!isEnabled}
              >
                {p.icon}
                {p.label}
              </a>
            );
          })}
        </div>

        <div className="mt-6 rounded-lg border border-white/10 bg-white/[0.04] p-4">
          <div className="flex items-center gap-2 text-sm text-white/80">
            <ShieldCheck className="h-4 w-4 text-teal-300" />
            Rekomendasi konfigurasi lingkungan
          </div>
          <pre className="mt-3 overflow-x-auto rounded bg-black/40 p-3 text-xs leading-relaxed text-teal-200">
VITE_BACKEND_URL=https://api.domain-anda.com
OAUTH_GOOGLE_CLIENT_ID=...    # (server)
OAUTH_GOOGLE_CLIENT_SECRET=... # (server)
OAUTH_GITHUB_CLIENT_ID=...     # (server)
OAUTH_GITHUB_CLIENT_SECRET=... # (server)
          </pre>
          {!isEnabled && (
            <p className="mt-3 text-xs text-amber-300/90">
              Tip: Setel VITE_BACKEND_URL untuk mengaktifkan tombol login di atas.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
