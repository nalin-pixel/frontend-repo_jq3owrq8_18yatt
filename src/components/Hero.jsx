import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden pt-16">
      {/* Background gradient accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-purple-400/20 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-[520px] w-[520px] rounded-full bg-cyan-400/20 blur-3xl" />
      </div>

      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/M4yE7MTeWshitQbr/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-8 lg:grid-cols-12 w-full">
        <div className="lg:col-span-6 flex flex-col items-start justify-center">
          <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium bg-white/70 dark:bg-white/10 backdrop-blur text-neutral-700 dark:text-neutral-200 ring-1 ring-black/5 dark:ring-white/10">
            Realtime SQL Agent
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
            Talk to your data.
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500">Instant insights.</span>
          </h1>
          <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-300 max-w-xl">
            Meet your AI database copilot. Ask questions in plain English and watch it generate, explain, and run SQL with safety checks and visual results.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href="#chat" className="inline-flex items-center justify-center rounded-full bg-black text-white dark:bg-white dark:text-black px-5 py-3 text-sm font-medium shadow-sm hover:shadow-lg transition-all">
              Start chatting
            </a>
            <a href="#features" className="inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium ring-1 ring-inset ring-black/10 dark:ring-white/20 text-neutral-800 dark:text-neutral-200 hover:bg-black/5 dark:hover:bg-white/10">
              Learn more
            </a>
          </div>
        </div>
      </div>

      {/* Non-blocking overlay for subtle vignette */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white dark:from-black/40 dark:via-transparent dark:to-black" />
    </section>
  );
}
