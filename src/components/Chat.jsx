import { useEffect, useRef, useState } from 'react';
import { Send, Loader2 } from 'lucide-react';

const exampleMessages = [
  { role: 'assistant', text: 'Ask me anything about your database. I speak SQL.' },
  { role: 'user', text: "What were weekly active users over the last 12 weeks?" },
  { role: 'assistant', text: 'I will generate a safe SQL query and an explanation, then visualize the results.' }
];

export default function Chat() {
  const [messages, setMessages] = useState(exampleMessages);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const listRef = useRef(null);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages, loading]);

  const handleSend = async (e) => {
    e.preventDefault();
    const content = input.trim();
    if (!content) return;

    const next = [...messages, { role: 'user', text: content }];
    setMessages(next);
    setInput('');
    setLoading(true);

    // NOTE: This is a UI-only demo. Hook up your backend later.
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          text: 'SELECT date_trunc(\'week\', occurred_at) AS week, COUNT(DISTINCT user_id) AS wau FROM events WHERE occurred_at > now() - interval \"12 weeks\" GROUP BY 1 ORDER BY 1;\n\nThis groups events by week and counts distinct active users per week.'
        }
      ]);
      setLoading(false);
    }, 900);
  };

  return (
    <section id="chat" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl rounded-2xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur">
          <div className="border-b border-black/10 dark:border-white/10 p-4 sm:p-6">
            <h3 className="text-lg sm:text-xl font-semibold text-neutral-900 dark:text-white">Chat with the SQL Agent</h3>
            <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">Natural language in. SQL and insights out.</p>
          </div>

          <div ref={listRef} className="h-[380px] overflow-y-auto p-4 sm:p-6 space-y-4">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm shadow-sm ${
                  m.role === 'user'
                    ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900'
                    : 'bg-white text-neutral-900 dark:bg-neutral-900 dark:text-neutral-100'
                }`}>{m.text}</div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="max-w-[80%] rounded-2xl px-4 py-3 text-sm shadow-sm bg-white text-neutral-900 dark:bg-neutral-900 dark:text-neutral-100 inline-flex items-center gap-2">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Thinking...
                </div>
              </div>
            )}
          </div>

          <form onSubmit={handleSend} className="border-t border-black/10 dark:border-white/10 p-4 sm:p-6 flex items-center gap-3">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a question about your data…"
              className="flex-1 rounded-xl border border-black/10 dark:border-white/10 bg-white/80 dark:bg-neutral-900/80 backdrop-blur px-4 py-3 text-sm outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 text-neutral-900 dark:text-white"
            />
            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center gap-2 rounded-xl bg-black text-white dark:bg-white dark:text-black px-4 py-3 text-sm font-medium shadow-sm hover:shadow-lg transition-all disabled:opacity-50"
            >
              <Send className="h-4 w-4" />
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
