import React from 'react'
import { Github, Linkedin } from 'lucide-react'
import { PROFILE } from '../content/siteData'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-slate-950/60 border-b border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <a href="#" className="font-semibold tracking-tight text-white">
          {PROFILE.name}<span className="text-pink-400">.</span>
        </a>
        <nav className="flex items-center gap-5 text-sm">
          <a href="#about" className="hover:text-pink-300">About</a>
          <a href="#projects" className="hover:text-pink-300">Projects</a>
          <a href="#skills" className="hover:text-pink-300">Skills</a>
          <a href="#timeline" className="hover:text-pink-300">Timeline</a>
          <a href="#contact" className="hover:text-pink-300">Contact</a>
          <div className="ml-2 flex items-center gap-3">
            <a href={PROFILE.socials.github} target="_blank" rel="noreferrer" className="hover:text-pink-300"><Github size={18}/></a>
            <a href={PROFILE.socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-pink-300"><Linkedin size={18}/></a>
          </div>
        </nav>
      </div>
    </header>
  )
}
