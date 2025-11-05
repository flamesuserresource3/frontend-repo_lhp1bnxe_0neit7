import Spline from '@splinetool/react-spline';

export default function Hero3D() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-28 grid lg:grid-cols-2 gap-10 items-center">
        <div className="relative z-10">
          <span className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-4 py-1.5 text-indigo-700 text-sm font-medium">
            <span className="inline-block h-2 w-2 rounded-full bg-indigo-600" />
            Tech • Interactive • Modern
          </span>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight">
            Bangun Produk Digital yang Cepat, Aman, dan Scalable
          </h1>
          <p className="mt-5 text-lg text-gray-600 max-w-xl">
            Kami adalah software house end-to-end: desain, pengembangan, hingga deployment di cloud. Fokus pada kualitas, performa, dan pengalaman pengguna.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="#contact"
              className="inline-flex justify-center items-center rounded-md bg-indigo-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2"
            >
              Mulai Konsultasi
            </a>
            <a
              href="#services"
              className="inline-flex justify-center items-center rounded-md border border-gray-300 bg-white px-6 py-3 text-base font-semibold text-gray-800 hover:bg-gray-50"
            >
              Jelajahi Layanan
            </a>
          </div>
          <p className="mt-4 text-sm text-gray-500">OAuth siap untuk Google & GitHub melalui backend Node/FastAPI sesuai kebutuhan Anda.</p>
        </div>
        <div className="relative h-[420px] sm:h-[520px] lg:h-[560px] w-full rounded-2xl shadow-lg">
          <Spline
            scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
        </div>
      </div>
    </section>
  );
}
