import React from 'react'

export default function Section({ id, title, children }) {
  return (
    <section id={id} className="scroll-mt-24 py-12 sm:py-16">
      <div className="mb-8 flex items-end justify-between">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">{title}</h2>
      </div>
      {children}
    </section>
  )
}
