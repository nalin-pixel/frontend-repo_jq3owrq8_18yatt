import { Shield, Terminal, Database, BarChart3 } from 'lucide-react';

const features = [
  {
    icon: Terminal,
    title: 'Natural language to SQL',
    desc: 'Type a question and get production-grade SQL with explanations and edge-case handling.'
  },
  {
    icon: Shield,
    title: 'Safety first',
    desc: 'Built-in read/write guards, schema-awareness, and dry-run diffs to prevent mistakes.'
  },
  {
    icon: Database,
    title: 'Works with your stack',
    desc: 'Postgres, MySQL, MSSQL, Snowflake and more with secure connection vaults.'
  },
  {
    icon: BarChart3,
    title: 'Instant visualizations',
    desc: 'Auto-detect result types and render beautiful charts and tables that you can export.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">Designed for data teams</h2>
          <p className="mt-3 text-neutral-600 dark:text-neutral-300">Everything you need to go from question to query to insight, fast.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur p-6 hover:shadow-xl transition-all">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 text-white flex items-center justify-center shadow-md">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-neutral-900 dark:text-white">{title}</h3>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 -bottom-24 h-48 bg-gradient-to-b from-transparent to-white dark:to-black" />
    </section>
  );
}
