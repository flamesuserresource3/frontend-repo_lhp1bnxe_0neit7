import React from 'react';
import { Code, Layout, Server, Shield } from 'lucide-react';

const services = [
  {
    icon: <Layout className="h-6 w-6 text-teal-300" />,
    title: 'Product Design & UI/UX',
    desc: 'Desain sistem, user flow, dan antarmuka yang fokus pada hasil bisnis dan pengalaman pengguna.',
  },
  {
    icon: <Code className="h-6 w-6 text-indigo-300" />,
    title: 'Web & Mobile Development',
    desc: 'React, React Native, dan arsitektur modular yang scalable serta mudah di-maintain.',
  },
  {
    icon: <Server className="h-6 w-6 text-pink-300" />,
    title: 'Backend & Cloud',
    desc: 'Node.js/FastAPI, microservices, MongoDB, pipeline CI/CD, dan observability yang matang.',
  },
  {
    icon: <Shield className="h-6 w-6 text-amber-300" />,
    title: 'Auth & Security',
    desc: 'OAuth, SSO, JWT, rate limiting, dan best practice keamanan untuk aplikasi production.',
  },
];

export default function ServicesGrid() {
  return (
    <section id="services" className="relative w-full bg-neutral-950 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Layanan Kami</h2>
            <p className="mt-2 max-w-2xl text-white/70">Kami membangun produk dari 0 sampai scale-up dengan fokus pada performa, reliability, dan delightful UX.</p>
          </div>
          <a href="#contact" className="inline-flex items-center justify-center rounded-md border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10">Minta Penawaran</a>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <div key={i} className="group rounded-xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.02] p-5 transition hover:border-white/20 hover:from-white/[0.06]">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/10 bg-white/5">
                {s.icon}
              </div>
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-white/70">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
