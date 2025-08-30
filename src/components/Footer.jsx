import React from 'react'
import { PROFILE } from '../content/siteData'

export default function Footer() {
  return (
    <footer className="mt-10 border-t border-white/10 py-8 text-center text-sm text-gray-400">
      <div className="mx-auto max-w-6xl px-4">
        <p>© {new Date().getFullYear()} {PROFILE.name}. Built with React & Tailwind.</p>
      </div>
    </footer>
  )
}
