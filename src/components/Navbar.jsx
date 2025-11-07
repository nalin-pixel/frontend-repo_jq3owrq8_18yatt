import { useState } from 'react';
import { Rocket, Sparkles } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-white/60 dark:bg-black/40 border-b border-black/10 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-400 p-[2px]">
              <div className="h-full w-full rounded-[10px] bg-white dark:bg-neutral-900 flex items-center justify-center">
                <Sparkles className="h-5 w-5 text-purple-600 dark:text-purple-400" />
              </div>
            </div>
            <span className="text-xl font-semibold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-neutral-900 to-neutral-600 dark:from-white dark:to-neutral-300">NeuroSQL</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm text-neutral-600 dark:text-neutral-300">
            <a href="#features" className="hover:text-neutral-900 dark:hover:text-white transition-colors">Features</a>
            <a href="#chat" className="hover:text-neutral-900 dark:hover:text-white transition-colors">Chat</a>
            <a href="#docs" className="hover:text-neutral-900 dark:hover:text-white transition-colors">Docs</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="#chat"
              className="inline-flex items-center gap-2 rounded-full bg-black text-white dark:bg-white dark:text-black px-4 py-2 text-sm font-medium shadow-sm hover:shadow-lg transition-all"
            >
              <Rocket className="h-4 w-4" />
              Launch Agent
            </a>
          </div>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-xl p-2 hover:bg-black/5 dark:hover:bg-white/10"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <span className="i ri ri-menu text-2xl" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-6 w-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 space-y-2">
            <a href="#features" className="block rounded-lg px-3 py-2 hover:bg-black/5 dark:hover:bg-white/10">Features</a>
            <a href="#chat" className="block rounded-lg px-3 py-2 hover:bg-black/5 dark:hover:bg-white/10">Chat</a>
            <a href="#docs" className="block rounded-lg px-3 py-2 hover:bg-black/5 dark:hover:bg-white/10">Docs</a>
            <a href="#chat" className="block text-center rounded-lg px-3 py-2 bg-black text-white dark:bg-white dark:text-black">Launch Agent</a>
          </div>
        )}
      </div>
    </header>
  );
}
