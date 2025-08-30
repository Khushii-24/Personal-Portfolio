import React from 'react'
import Section from './Section'
import { PROFILE } from '../content/siteData'

export default function Contact() {
  return (
    <Section id="contact" title="Contact">
      <div className="glass p-6">
        <p className="text-gray-300">Want to collaborate or say hi? Reach out:</p>
        <div className="mt-4 flex flex-wrap gap-4 text-sm">
          <a className="rounded-full bg-white/10 px-4 py-2 hover:bg-white/20" href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a>
          <a className="rounded-full bg-white/10 px-4 py-2 hover:bg-white/20" href={`tel:${PROFILE.phone}`}>{PROFILE.phone}</a>
          <a className="rounded-full bg-white/10 px-4 py-2 hover:bg-white/20" href={PROFILE.socials.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="rounded-full bg-white/10 px-4 py-2 hover:bg-white/20" href={PROFILE.socials.github} target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </div>
    </Section>
  )
}
