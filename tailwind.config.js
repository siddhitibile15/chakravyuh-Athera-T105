/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#060913',
          900: '#0b1120',
          850: '#0f172a',
          800: '#17223b',
          700: '#1e293b',
        },
        electric: {
          cyan: '#00f5d4',
          teal: '#06b6d4',
          violet: '#8b5cf6',
          purple: '#a855f7',
          amber: '#f59e0b',
        }
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'Cascadia Code', 'Consolas', 'monospace'],
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow-cyan': '0 0 20px -2px rgba(6, 182, 212, 0.45)',
        'glow-violet': '0 0 20px -2px rgba(139, 92, 246, 0.45)',
        'glow-emerald': '0 0 20px -2px rgba(16, 185, 129, 0.45)',
        'glow-amber': '0 0 20px -2px rgba(245, 158, 11, 0.45)',
      },
      animation: {
        'pulse-fast': 'pulse 1.2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'wire-glow': 'wirePulse 2s ease-in-out infinite',
      },
      keyframes: {
        wirePulse: {
          '0%, 100%': { strokeOpacity: '0.9', strokeWidth: '3px' },
          '50%': { strokeOpacity: '0.4', strokeWidth: '2px' },
        }
      }
    },
  },
  plugins: [],
}
