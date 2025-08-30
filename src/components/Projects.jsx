import React from 'react'
import Section from './Section'
import { PROJECTS } from '../content/siteData'
import { Github, ExternalLink } from 'lucide-react'

function ProjectCard({ p }) {
  return (
    <div className="glass p-6 transition hover:scale-[1.01]">
      <h3 className="text-xl font-semibold text-pink-300">{p.title}</h3>
      <p className="mt-2 text-gray-300">{p.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {p.tech.map((t, i) => (
          <span key={i} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs">{t}</span>
        ))}
      </div>
      <div className="mt-5 flex gap-4">
        {p.repo && <a className="hover:text-pink-300 inline-flex items-center gap-1" href={p.repo} target="_blank" rel="noreferrer"><Github size={18}/>Code</a>}
        {p.live && <a className="hover:text-green-300 inline-flex items-center gap-1" href={p.live} target="_blank" rel="noreferrer"><ExternalLink size={18}/>Live</a>}
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <Section id="projects" title="Featured Projects">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PROJECTS.map((p, idx) => <ProjectCard key={idx} p={p} />)}
      </div>
    </Section>
  )
}
