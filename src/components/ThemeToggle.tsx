'use client'

import { useTheme } from '@/context/ThemeContext'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="relative inline-flex h-12 w-24 items-center justify-center rounded-full bg-gray-200 p-1 transition-colors duration-300 dark:bg-gray-700"
      aria-label="Toggle theme"
    >
      <div
        className={`absolute left-1 top-1 h-10 w-10 rounded-full bg-white shadow-md transition-transform duration-300 dark:bg-gray-900 ${
          theme === 'dark' ? 'translate-x-12' : 'translate-x-0'
        }`}
      />
      <div className="flex w-full items-center justify-between px-3">
        <span className="text-lg">🌞</span>
        <span className="text-lg">🌙</span>
      </div>
    </button>
  )
}
