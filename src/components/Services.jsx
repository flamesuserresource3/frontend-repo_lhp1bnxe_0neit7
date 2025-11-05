import { Code2, Paintbrush, ShieldCheck, ServerCog } from 'lucide-react';

const services = [
  {
    icon: Code2,
    title: 'Web & Mobile App',
    desc: 'React, Next.js, React Native dengan praktik terbaik dan performa tinggi.',
  },
  {
    icon: ServerCog,
    title: 'Backend & API',
    desc: 'Node.js/FastAPI, arsitektur bersih, integrasi database, dan cloud CI/CD.',
  },
  {
    icon: Paintbrush,
    title: 'UI/UX Design',
    desc: 'Desain modern berbasis riset, prototyping interaktif, dan design system.',
  },
  {
    icon: ShieldCheck,
    title: 'Keamanan & OAuth',
    desc: 'Implementasi OAuth 2.0, SSO, dan standar keamanan aplikasi modern.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Layanan Kami</h2>
          <p className="mt-3 text-gray-600">
            Paket lengkap untuk membawa ide Anda menjadi produk digital kelas dunia.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200 hover:shadow-md"
            >
              <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-indigo-50 text-indigo-600">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-semibold text-gray-900 text-lg">{title}</h3>
              <p className="mt-2 text-gray-600 text-sm leading-relaxed">{desc}</p>
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
