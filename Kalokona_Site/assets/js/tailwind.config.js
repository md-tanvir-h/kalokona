/* Tailwind (CDN) theme config — must load right after the Tailwind CDN script */
tailwind.config = {
  theme: {
    extend: {
      fontFamily: { sans: ['"Hind Siliguri"', '"Noto Sans Bengali"', 'system-ui', 'sans-serif'] },
      colors: {
        bg: 'var(--bg)', bg2: 'var(--bg2)', surface: 'var(--surface)',
        ink: 'var(--ink)', mute: 'var(--mute)', gold: 'var(--gold)', gold2: 'var(--gold2)', line: 'var(--line)'
      }
    }
  }
}
