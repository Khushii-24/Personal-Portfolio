import React from 'react'
import Section from './Section'
import { SKILL_GROUPS } from '../content/siteData'

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {SKILL_GROUPS.map((group, i) => (
          <div key={i} className="glass p-5">
            <h4 className="font-semibold text-purple-300">{group.label}</h4>
            <div className="mt-3 flex flex-wrap gap-2">
              {group.items.map((s, j) => (
                <span key={j} className="rounded-full bg-purple-500/10 px-3 py-1 text-sm">{s}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
