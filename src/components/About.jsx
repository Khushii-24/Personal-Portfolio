import React from 'react'
import Section from './Section'
import { PROFILE } from '../content/siteData'

export default function About() {
  return (
    <Section id="about" title="About Me">
      <div className="glass p-6 md:p-8">
        <p className="text-gray-300 leading-relaxed">
          {PROFILE.summary} Customize this in <code className="text-pink-300">src/content/siteData.js</code>.
        </p>
      </div>
    </Section>
  )
}
