export default function SachaLivingCard() {
  const productImg = 'https://kiranabot.duckdns.org/img/sacha-product.jpg';

  const benefits = [
    {
      title: 'Jantung',
      desc: 'Bantu jantung kerja lebih ringan dengan omega alami tiap hari.',
    },
    {
      title: 'Kulit',
      desc: 'Jaga kelembapan kulit dari dalam, bukan cuma topical.',
    },
    {
      title: 'Diet',
      desc: 'Cocok buat yang mau mulai habit sehat tanpa ribet.',
    },
    {
      title: 'Stamina',
      desc: 'Badan nggak gampang drop di hari padat.',
    },
  ];

  const testimonials = [
    {
      name: 'Rina, 32',
      text: 'Tidur lebih nyenyak, badan juga nggak gampang capek. Sudah 3 bulan konsumsi.',
    },
    {
      name: 'Dedi, 41',
      text: 'Konsumsi tiap pagi, makan jadi lebih terkontrol tanpa diet ekstrem.',
    },
    {
      name: 'Maya, 29',
      text: 'Kulit nggak gampang kering pas musim AC kantor.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#f5f2ea] text-[#1f1f1f] font-sans pb-24">
      {/* HERO */}
      <section className="relative overflow-hidden px-6 py-16 md:px-16">
        <div className="absolute inset-0 bg-gradient-to-b from-[#d9e2cf]/40 to-transparent" />

        <div className="relative mx-auto max-w-6xl grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center rounded-full bg-white/80 px-4 py-2 text-sm shadow-sm backdrop-blur">
              Sacha Inchi Oil · Cold-Pressed
            </div>

            <h1 className="mt-6 text-5xl font-bold leading-tight tracking-tight md:text-6xl">
              Sacha Inchi Oil
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-[#4f4f4f] max-w-xl">
              Cold-pressed oil tinggi Omega 3, 6, 9. Buat yang mulai sadar pola makan modern bikin tubuh kekurangan lemak baik.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button className="rounded-2xl bg-black px-6 py-4 text-white text-sm font-medium shadow-xl transition hover:scale-105">
                Tanya via WA
              </button>

              <button className="rounded-2xl border border-black/10 bg-white px-6 py-4 text-sm font-medium shadow-sm transition hover:scale-105">
                Cara Konsumsi
              </button>
            </div>

            <div className="mt-10 flex gap-8 text-sm text-[#5f5f5f]">
              <div>
                <p className="text-2xl font-bold text-black">100%</p>
                <p>Cold Pressed</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-black">Omega</p>
                <p>3 • 6 • 9</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-black">Daily</p>
                <p>Routine</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative h-[500px] w-[320px] rounded-[40px] bg-[#dfe7d7] shadow-2xl flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent" />
              <img
                src={productImg}
                alt="Sacha Inchi Oil"
                className="relative h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="px-6 py-16 md:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-end justify-between flex-wrap gap-6">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-[#7a7a7a]">
                Wellness Benefit
              </p>
              <h2 className="mt-3 text-4xl font-bold">
                Kenapa customer repeat order?
              </h2>
            </div>

            <p className="max-w-md text-[#616161] leading-relaxed">
              Pola makan instan + stres harian bikin tubuh kekurangan lemak baik. Sacha Inchi bantu balikin yang hilang.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl bg-white p-6 shadow-lg transition hover:-translate-y-2"
              >
                <div className="h-12 w-12 rounded-2xl bg-[#dfe7d7]" />
                <h3 className="mt-6 text-2xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#5f5f5f]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CARA KONSUMSI */}
      <section className="px-6 py-16 md:px-16 bg-white">
        <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-[#7a7a7a]">
              Cara Konsumsi
            </p>

            <h2 className="mt-3 text-4xl font-bold leading-tight">
              Habit kecil tiap pagi.
            </h2>

            <div className="mt-8 space-y-5">
              <div className="rounded-3xl border border-black/5 p-5">
                <p className="font-semibold">1 sendok tiap pagi</p>
                <p className="mt-2 text-sm text-[#5f5f5f]">
                  Langsung sebelum makan, biar penyerapan maksimal.
                </p>
              </div>

              <div className="rounded-3xl border border-black/5 p-5">
                <p className="font-semibold">Atau campur ke smoothie/salad</p>
                <p className="mt-2 text-sm text-[#5f5f5f]">
                  Rasa nutty halus, nggak ngeganggu makanan.
                </p>
              </div>

              <div className="rounded-3xl border border-black/5 p-5">
                <p className="font-semibold">Konsisten yang penting</p>
                <p className="mt-2 text-sm text-[#5f5f5f]">
                  Hasilnya kerasa setelah 3-4 minggu rutin.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[40px] bg-[#eff3ea] p-8 shadow-xl overflow-hidden">
            <img
              src={productImg}
              alt="Sacha Inchi Oil"
              className="aspect-[4/5] w-full rounded-[30px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="px-6 py-16 md:px-16">
        <div className="mx-auto max-w-6xl">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-[#7a7a7a]">
              Apa kata customer
            </p>
            <h2 className="mt-3 text-4xl font-bold">
              Repeat order datang dari trust.
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {testimonials.map((item) => (
              <div key={item.name} className="rounded-3xl bg-white p-6 shadow-lg">
                <div className="flex gap-1 text-xl">★★★★★</div>
                <p className="mt-5 leading-relaxed text-[#4f4f4f]">
                  {item.text}
                </p>
                <p className="mt-6 font-semibold">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-32 md:px-16">
        <div className="mx-auto max-w-6xl rounded-[40px] bg-black px-8 py-14 text-white md:px-16">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-[#b8c7ab]">
                Mulai Wellness Routine
              </p>
              <h2 className="mt-4 text-5xl font-bold leading-tight">
                Konsultasi dulu sebelum konsumsi.
              </h2>
            </div>

            <div className="flex flex-col gap-4">
              <button className="rounded-2xl bg-white px-6 py-5 text-black font-semibold transition hover:scale-[1.02]">
                Chat WA →
              </button>

              <button className="rounded-2xl border border-white/20 px-6 py-5 font-semibold transition hover:scale-[1.02]">
                Lihat Produk
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FIXED BOTTOM */}
      <div className="fixed bottom-0 left-0 right-0 border-t border-black/5 bg-white/90 backdrop-blur-xl p-4">
        <div className="mx-auto flex max-w-3xl gap-3">
          <button className="flex-1 rounded-2xl bg-black py-4 text-sm font-semibold text-white">
            Chat WA
          </button>
          <button className="flex-1 rounded-2xl border border-black/10 bg-[#eef3e7] py-4 text-sm font-semibold">
            Beli di Shopee
          </button>
        </div>
      </div>
    </div>
  );
}
