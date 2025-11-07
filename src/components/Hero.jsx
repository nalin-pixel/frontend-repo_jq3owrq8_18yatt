import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden">
      {/* Glow accents that never block interaction */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-purple-400/20 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-[520px] w-[520px] rounded-full bg-cyan-400/20 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-8 lg:grid-cols-12 w-full">
        <div className="lg:col-span-7 flex flex-col items-start justify-center">
          <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium bg-white/70 dark:bg-white/10 backdrop-blur text-neutral-700 dark:text-neutral-200 ring-1 ring-black/5 dark:ring-white/10">
            Realtime SQL Agent
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
            Talk to your data.
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500">Instant insights.</span>
          </h1>
          <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl">
            A playful, trustworthy copilot for your databases. Ask in natural language and watch it reason about schema, generate SQL, and visualize results.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href="#chat" className="inline-flex items-center justify-center rounded-full bg-black text-white dark:bg-white dark:text-black px-5 py-3 text-sm font-medium shadow-sm hover:shadow-lg transition-all">
              Try the Demo
            </a>
            <a href="#features" className="inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium ring-1 ring-inset ring-black/10 dark:ring-white/20 text-neutral-800 dark:text-neutral-200 hover:bg-black/5 dark:hover:bg-white/10">
              Learn more
            </a>
          </div>
        </div>

        <div className="lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative aspect-video rounded-3xl border border-black/10 dark:border-white/10 bg-gradient-to-br from-white to-white/60 dark:from-white/5 dark:to-white/0 backdrop-blur p-6"
          >
            <div className="pointer-events-none absolute inset-0 rounded-3xl" style={{
              background: 'radial-gradient(60% 60% at 70% 30%, rgba(99,102,241,0.15) 0%, rgba(56,189,248,0.15) 30%, rgba(0,0,0,0) 70%)'
            }} />
            <div className="relative z-10 flex h-full items-center justify-center text-center">
              <div className="space-y-2">
                <p className="text-sm uppercase tracking-widest text-neutral-500 dark:text-neutral-400">Live SQL Reasoning</p>
                <p className="text-2xl font-semibold text-neutral-800 dark:text-neutral-200">Ask anything about your data</p>
                <p className="text-neutral-600 dark:text-neutral-400 max-w-md mx-auto">Natural language to SQL with explanations and safe execution. The floating droid follows you across the page.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Soft vignette that doesn’t block interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white dark:from-black/40 dark:via-transparent dark:to-black" />
    </section>
  );
}
