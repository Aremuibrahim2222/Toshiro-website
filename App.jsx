import { useEffect, useState } from 'react'

const links = [
  {
    label: 'X',
    href: 'https://x.com/aremu_ibrah1m',
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
        <path d="M18.9 2H22l-7.6 8.7L23.3 22h-7.1l-5.5-7.2L4.4 22H1.3l8.1-9.3L1 2h7.3l5 6.6L18.9 2zm-1.2 18h1.9L7.4 4H5.4l12.3 16z" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    href: 'https://github.com/Aremuibrahim2222',
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
        <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.42c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.36-3.88-1.36-.53-1.33-1.29-1.69-1.29-1.69-1.05-.72.08-.7.08-.7 1.17.08 1.78 1.2 1.78 1.2 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.77.12 3.06.74.81 1.18 1.84 1.18 3.1 0 4.43-2.7 5.4-5.28 5.69.42.36.78 1.07.78 2.15v3.19c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5z" />
      </svg>
    ),
  },
  {
    label: 'Portfolio',
    href: 'https://portfolio.com',
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c2.5 2.6 3.8 5.7 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.7-3.8-9s1.3-6.4 3.8-9z" />
      </svg>
    ),
  },
  {
    label: 'Email',
    href: 'mailto:Ibrahimabdullateef2007@gmail.com',
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3.5 6 8.5 7 8.5-7" />
      </svg>
    ),
  },
]

export default function App() {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle('dark', isDark)
    root.classList.toggle('light', !isDark)
  }, [isDark])

  return (
    <div className="min-h-screen bg-ink-50 dark:bg-ink-950 flex items-center justify-center px-6 py-16 transition-colors">
      <button
        onClick={() => setIsDark((d) => !d)}
        aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        className="fixed top-5 right-5 h-9 w-9 rounded-full border border-ink-700/40 dark:border-ink-200/15 flex items-center justify-center text-ink-700 dark:text-ink-200 hover:border-gold-500/60 dark:hover:border-gold-400/50 transition-colors"
      >
        {isDark ? (
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
            <path d="M12 4.5a1 1 0 0 1-1-1V2a1 1 0 1 1 2 0v1.5a1 1 0 0 1-1 1zm0 15a1 1 0 0 1 1 1V22a1 1 0 1 1-2 0v-1.5a1 1 0 0 1 1-1zm7.5-7.5a1 1 0 0 1 1-1H22a1 1 0 1 1 0 2h-1.5a1 1 0 0 1-1-1zm-15 0a1 1 0 0 1 1 1H2a1 1 0 1 1 0-2h1.5a1 1 0 0 1 1 1zm12.02-6.36a1 1 0 0 1 1.42 0l.7.7a1 1 0 1 1-1.42 1.42l-.7-.7a1 1 0 0 1 0-1.42zM4.36 17.62a1 1 0 0 1 1.42 0l.7.7a1 1 0 1 1-1.42 1.42l-.7-.7a1 1 0 0 1 0-1.42zm14.34 1.42a1 1 0 0 1-1.42 0l-.7-.7a1 1 0 1 1 1.42-1.42l.7.7a1 1 0 0 1 0 1.42zM6.48 6.48a1 1 0 0 1-1.42 0l-.7-.7A1 1 0 1 1 5.78 4.36l.7.7a1 1 0 0 1 0 1.42zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10z" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
            <path d="M20.4 14.7A8.5 8.5 0 0 1 9.3 3.6a.6.6 0 0 0-.75-.8A9 9 0 1 0 21.2 15.4a.6.6 0 0 0-.8-.7z" />
          </svg>
        )}
      </button>

      <main className="w-full max-w-xs">
        <div className="text-center">
          <h1 className="font-display text-4xl font-medium tracking-tight text-ink-950 dark:text-ink-50">
            Toshiro
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-ink-700 dark:text-ink-200">
            Developer, content creator.
          </p>
          <div className="mt-6 h-px w-10 bg-gold-500 dark:bg-gold-400 mx-auto" />
        </div>

        <nav className="mt-8 flex flex-col divide-y divide-ink-700/15 dark:divide-ink-200/10 border-t border-b border-ink-700/15 dark:border-ink-200/10">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between py-3.5 text-ink-700 dark:text-ink-200 hover:text-ink-950 dark:hover:text-ink-50 transition-colors"
            >
              <span className="flex items-center gap-3 text-sm">
                <span className="text-gold-500 dark:text-gold-400">{link.icon}</span>
                {link.label}
              </span>
              <span className="text-ink-500 group-hover:text-gold-500 dark:group-hover:text-gold-400 transition-colors">
                ↗
              </span>
            </a>
          ))}
        </nav>
      </main>
    </div>
  )
}
