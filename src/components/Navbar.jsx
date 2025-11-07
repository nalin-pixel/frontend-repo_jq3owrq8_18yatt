import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-3 rounded-2xl border border-black/10 dark:border-white/10 bg-white/80 dark:bg-black/60 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-black/50">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#" className="flex items-center gap-2">
              <div className="h-6 w-6 rounded-lg bg-gradient-to-br from-purple-500 to-cyan-400" />
              <span className="font-semibold text-neutral-900 dark:text-white">Droid SQL</span>
            </a>
            <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-700 dark:text-neutral-300">
              <a href="#features" className="hover:text-neutral-900 dark:hover:text-white">Features</a>
              <a href="#chat" className="hover:text-neutral-900 dark:hover:text-white">Demo</a>
              <a href="#" className="inline-flex items-center rounded-full bg-neutral-900 text-white dark:bg-white dark:text-black px-4 py-2">
                Launch Agent
              </a>
            </nav>
            <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-neutral-700 dark:text-neutral-300">
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
          {open && (
            <div className="md:hidden border-t border-black/10 dark:border-white/10 px-4 py-3 text-sm">
              <a href="#features" className="block py-2 text-neutral-700 dark:text-neutral-300">Features</a>
              <a href="#chat" className="block py-2 text-neutral-700 dark:text-neutral-300">Demo</a>
              <a href="#" className="mt-2 inline-flex items-center rounded-full bg-neutral-900 text-white dark:bg-white dark:text-black px-4 py-2">
                Launch Agent
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
