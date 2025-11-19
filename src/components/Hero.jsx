import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] w-full overflow-hidden border-b-4 border-black bg-[#F5F7FF]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative pointer-events-none">
        <div className="max-w-6xl mx-auto px-4 pt-24 pb-28 grid md:grid-cols-12 gap-8">
          <div className="md:col-span-7">
            <div className="inline-block bg-white border-2 border-black rounded-md px-3 py-1 shadow-[4px_4px_0_#000]">
              <span className="text-xs font-semibold tracking-wider uppercase">Personal Portfolio</span>
            </div>
            <h2 className="mt-6 text-5xl md:text-6xl font-black leading-[1.05]">
              Minimal. Intentional. Premium.
            </h2>
            <p className="mt-4 max-w-lg text-black/70 text-lg">
              A curated collection across finance, AI, media, thoughts, and dev. Built with a modern neo‑brutalist aesthetic.
            </p>
          </div>
          <div className="md:col-span-5 md:self-end">
            <div className="bg-white border-2 border-black rounded-xl p-4 shadow-[8px_8px_0_#000] inline-flex gap-4 items-center">
              <div className="size-12 rounded-lg bg-black text-white grid place-items-center border-2 border-black">
                <span className="font-black">★</span>
              </div>
              <div>
                <p className="text-sm font-semibold">Now exploring</p>
                <p className="text-black/70">Fintech x AI interfaces</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* gradient accents */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#F5F7FF] to-transparent" />
    </section>
  )
}
