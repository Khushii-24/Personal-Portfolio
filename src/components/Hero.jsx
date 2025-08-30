import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, Mail, Phone } from 'lucide-react'
import { PROFILE } from '../content/siteData'

export default function Hero() {
  return (
    <section className="pt-16 pb-10 text-center">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400"
      >
        {PROFILE.name}
      </motion.h1>
      <p className="mt-3 text-lg text-gray-300">{PROFILE.role}</p>
      <div className="mt-3 flex items-center justify-center gap-5 text-sm text-gray-300">
        <span className="inline-flex items-center gap-1"><MapPin size={16}/>{PROFILE.location}</span>
        <a href={`mailto:${PROFILE.email}`} className="inline-flex items-center gap-1 hover:text-pink-300"><Mail size={16}/>{PROFILE.email}</a>
        <a href={`tel:${PROFILE.phone}`} className="inline-flex items-center gap-1 hover:text-pink-300"><Phone size={16}/>{PROFILE.phone}</a>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="mx-auto mt-6 max-w-2xl text-gray-300"
      >
        {PROFILE.summary}
      </motion.p>

      <div className="mt-8 flex justify-center">
        <a
          href={PROFILE.resumeUrl}
          className="rounded-full bg-gradient-to-r from-pink-500 to-purple-500 px-6 py-3 font-semibold shadow-glow hover:opacity-90"
        >
          Download Resume
        </a>
      </div>
    </section>
  )
}
