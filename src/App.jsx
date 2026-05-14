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
    <div className="min-h-screen bg-[#f5f2ea] text-[#1f1f1f] font-sans">
      {/* HERO */}
      <section className="relative overflow-hidden px-6 py-20 md:px-12">
        <div className="absolute inset-0 bg-gradient-to-b from-[#d9e2cf]/30 to-transparent" />

        <div className="relative mx-auto max-w-7xl grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center rounded-full bg-white/80 px-4 py-2 text-sm shadow-sm backdrop-blur">
              Sacha Inchi Oil · Cold-Pressed
            </div>

            <h1 className="text-5xl font-bold leading-none tracking-tight md:text-6xl">
              Sacha Inchi Oil
            </h1>

            <p className="text-lg text-[#4f4f4f] max-w-2xl">
              Cold-pressed oil tinggi Omega 3, 6, 9. Buat yang mulai sadar pola makan modern bikin tubuh kekurangan lemak baik.
            </p>

            <div className="flex items-center gap-6 flex-wrap">
              <button className="rounded-2xl bg-black px-6 py-3 text-white text-sm font-medium shadow-md transition-all hover:bg-[#1a1a1a] hover:scale-[1.02]">
                Tanya via WA
              </button>

              <button className="rounded-2xl border border-black/10 bg-white px-6 py-3 text-sm font-medium shadow-md transition-all hover:bg-[#f8f9fa] hover:scale-[1.02]">
                Cara Konsumsi
              </button>
            </div>

            <div className="flex items-baseline gap-6 text-sm text-[#5f5f5f] mt-4">
              <div>
                <p className="text-2xl font-bold text-black">100%</p>
                <p className="text-xs uppercase tracking-wider">Cold Pressed</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-black">Omega</p>
                <p className="text-xs uppercase tracking-wider">3 • 6 • 9</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-black">Daily</p>
                <p className="text-xs uppercase tracking-wider">Routine</p>
              </div>
            </div>
          </div>

          <div className="relative h-[520px] w-[340px] rounded-[40px] bg-[#dfe7d7] shadow-2xl flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent" />
            <img
              src={productImg}
              alt="Sacha Inchi Oil"
              className="relative h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="px-6 py-20 md:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="space-y-12">
            <div className="text-center">
              <p className="text-sm uppercase tracking-[0.2em] text-[#7a7a7a]">
                Wellness Benefit
              </p>
              <h2 className="mt-4 text-4xl font-bold tracking-tight">
                Kenapa customer repeat order?
              </h2>
              <p className="mt-6 text-lg text-[#616161] max-w-3xl">
                Pola makan instan + stres harian bikin tubuh kekurangan lemak baik. Sacha Inchi bantu balikin yang hilang.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {benefits.map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl bg-white p-8 shadow-lg hover:-translate-y-1.5 transition-all duration-300"
                >
                  <div className="h-14 w-14 rounded-2xl bg-[#dfe7d7] flex items-center justify-center mb-6" />
                  <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                  <p className="text-sm text-[#5f5f5f] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CARA KONSUMSI */}
      <section className="px-6 py-20 md:px-12 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 md:grid-cols-2 items-center">
            <div className="space-y-8">
              <p className="text-sm uppercase tracking-[0.2em] text-[#7a7a7a]">
                Cara Konsumsi
              </p>

              <h2 className="mt-2 text-4xl font-bold leading-tight">
                Habit kecil tiap pagi.
              </h2>

              <div className="space-y-6">
                <div className="rounded-3xl border border-black/5 p-6">
                  <p className="font-semibold text-lg">1 sendok tiap pagi</p>
                  <p className="mt-2 text-sm text-[#5f5f5f]">
                    Langsung sebelum makan, biar penyerapan maksimal.
                  </p>
                </div>

                <div className="rounded-3xl border border-black/5 p-6">
                  <p className="font-semibold text-lg">Atau campur ke smoothie/salad</p>
                  <p className="mt-2 text-sm text-[#5f5f5f]">
                    Rasa nutty halus, nggak ngeganggu makanan.
                  </p>
                </div>

                <div className="rounded-3xl border border-black/5 p-6">
                  <p className="font-semibold text-lg">Konsisten yang penting</p>
                  <p className="mt-2 text-sm text-[#5f5f5f]">
                    Hasilnya kerasa setelah 3-4 minggu rutin.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[40px] bg-[#eff3ea] p-12 shadow-xl">
              <img
                src={productImg}
                alt="Sacha Inchi Oil"
                className="aspect-[4/5] w-full rounded-[30px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="px-6 py-20 md:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="space-y-10">
            <div className="text-center">
              <p className="text-sm uppercase tracking-[0.2em] text-[#7a7a7a]">
                Apa kata customer
              </p>
              <h2 className="mt-4 text-4xl font-bold tracking-tight">
                Repeat order datang dari trust.
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {testimonials.map((item) => (
                <div key={item.name} className="rounded-3xl bg-white p-8 shadow-lg">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-2xl text-[#ffd700]">★★★★★</span>
                  </div>
                  <p className="text-base text-[#4f4f4f] leading-relaxed mb-6">
                    {item.text}
                  </p>
                  <p className="font-semibold text-lg">{item.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24 md:px-12">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-black px-8 py-16 text-white">
          <div className="grid gap-10 md:grid-cols-2 items-center">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.3em] text-[#b8c7ab]">
                Mulai Wellness Routine
              </p>
              <h2 className="mt-2 text-5xl font-bold leading-none tracking-tight">
                Konsultasi dulu sebelum konsumsi.
              </h2>
            </div>

            <div className="flex flex-col gap-6">
              <button className="rounded-2xl bg-white px-8 py-4 text-black font-semibold shadow-md transition-all hover:bg-[#f8f9fa] hover:scale-[1.02]">
                Chat WA →
              </button>

              <button className="rounded-2xl border border-white/20 px-8 py-4 font-semibold shadow-md transition-all hover:bg-white/10 hover:scale-[1.02]">
                Lihat Produk
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FIXED BOTTOM */}
      <div className="fixed bottom-0 left-0 right-0 border-t border-black/5 bg-white/90 backdrop-blur-xl p-4">
        <div className="mx-auto flex max-w-3xl gap-4">
          <button className="flex-1 rounded-2xl bg-black py-3 text-sm font-semibold text-white shadow-md transition-all hover:bg-[#1a1a1a] hover:scale-[1.02]">
            Chat WA
          </button>
          <button className="flex-1 rounded-2xl border border-black/10 bg-[#eef3e7] py-3 text-sm font-semibold shadow-md transition-all hover:bg-[#d4d9d0] hover:scale-[1.02]">
            Beli di Shopee
          </button>
        </div>
      </div>
    </div>
  );
}
