import React from 'react'
import Section from './Section'
import { TIMELINE } from '../content/siteData'

export default function Timeline() {
  return (
    <Section id="timeline" title="Experience & Education">
      <div className="relative border-l border-white/10 pl-6">
        {TIMELINE.map((item, i) => (
          <div key={i} className="mb-8">
            <div className="absolute -left-[7px] mt-1 h-3 w-3 rounded-full bg-pink-400"></div>
            <p className="text-sm text-gray-400">{item.period}</p>
            <h4 className="font-semibold mt-1">{item.title}</h4>
            <p className="text-gray-300">{item.detail}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
