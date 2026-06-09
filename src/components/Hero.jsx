import React from 'react'
import { MapPin, Phone, Send, ArrowUpRight, Code } from 'lucide-react'

const Github = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className} style={{ width: props.size || 24, height: props.size || 24 }}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
)

const Linkedin = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className} style={{ width: props.size || 24, height: props.size || 24 }}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

export default function Hero() {
  return (
    <section id="about" className="py-12 md:py-20 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
      <div className="md:col-span-7 space-y-6">
        <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-[#A78BFA]/10 border border-[#A78BFA]/20 text-[#A78BFA] text-xs font-semibold uppercase tracking-wider">
          <span>Available for Hire</span>
        </div>

        <h1 className="font-display font-extrabold text-4xl sm:text-6xl tracking-tight leading-tight">
          Hi, I'm <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A78BFA] to-[#7C3AED]">
            Marwa Ashraf
          </span>
        </h1>

        <h2 className="text-xl sm:text-2xl font-bold font-display text-slate-700 dark:text-[#EDE9FE]">
          Full-Stack Developer
        </h2>

        <p className="text-base sm:text-lg text-slate-600 dark:text-[#9CA3AF] max-w-xl leading-relaxed">
          Full Stack Developer specializing in Node.js, Express.js, React.js and Angular, with hands-on experience building scalable RESTful APIs and responsive user interfaces. Experienced in UI/UX design using Figma, translating wireframes into clean, maintainable code. Adept at collaborating in agile teams to deliver production-ready web applications following SOLID principles and clean architecture.
        </p>

        {/* Direct Contact Badges */}
        <div className="flex flex-wrap gap-3 pt-2 text-sm text-slate-650 dark:text-slate-350">
          <span className="flex items-center space-x-1.5 bg-slate-105 dark:bg-[#1A1825] px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800">
            <MapPin size={14} className="text-[#A78BFA]" />
            <span>Cairo, Egypt</span>
          </span>
          <span className="flex items-center space-x-1.5 bg-slate-105 dark:bg-[#1A1825] px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800">
            <Phone size={14} className="text-[#A78BFA]" />
            <span>+20 103 263 2025</span>
          </span>
        </div>

        <div className="flex flex-wrap gap-4 pt-4">
          <a
            href="#contact"
            className="px-6 py-3 bg-[#A78BFA] hover:bg-[#7C3AED] text-[#0D0D0F] hover:text-white font-semibold rounded-xl transition-all shadow-lg shadow-[#A78BFA]/20 hover:shadow-[#7C3AED]/30 flex items-center space-x-2 cursor-pointer"
          >
            <span>Let's Talk</span>
            <Send size={16} />
          </a>
          <a
            href="#projects"
            className="px-6 py-3 border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#13121A] text-slate-700 dark:text-[#F5F3FF] hover:bg-slate-100 dark:hover:bg-[#1A1825] font-semibold rounded-xl transition-all flex items-center space-x-2 cursor-pointer"
          >
            <span>View Projects</span>
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>

      {/* Interactive Profile Decorative Card */}
      <div className="md:col-span-5 flex justify-center">
        <div className="relative w-72 h-72 sm:w-80 sm:h-80">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#7C3AED] to-[#A78BFA] rounded-3xl rotate-6 opacity-20 blur-xl"></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-[#7C3AED] to-[#A78BFA] rounded-3xl -rotate-3 opacity-10"></div>

          <div className="absolute inset-0 rounded-3xl bg-slate-50 dark:bg-[#13121A] border border-slate-200 dark:border-slate-850 p-6 flex flex-col justify-between shadow-2xl">
            <div className="flex justify-between items-start">
              <div className="w-12 h-12 rounded-2xl bg-[#A78BFA]/10 border border-[#A78BFA]/20 flex items-center justify-center p-2.5">
                <Code className="text-[#A78BFA]" />
              </div>
              <span className="text-xs font-semibold text-[#A78BFA]">Marwa.dev</span>
            </div>

            <div className="space-y-3">
              <p className="text-xs text-[#9CA3AF] uppercase font-bold tracking-widest">Connect Online</p>

              <div className="flex flex-col space-y-2.5">
                <a href="https://github.com/MarwaAshraf1812" target="_blank" rel="noreferrer" className="flex items-center space-x-2 text-sm text-slate-700 dark:text-[#F5F3FF] hover:text-[#A78BFA] transition-colors">
                  <Github size={16} />
                  <span>github.com/MarwaAshraf1812</span>
                </a>
                <a href="https://www.linkedin.com/in/marwa-ashraf1/" target="_blank" rel="noreferrer" className="flex items-center space-x-2 text-sm text-slate-700 dark:text-[#F5F3FF] hover:text-[#A78BFA] transition-colors">
                  <Linkedin size={16} />
                  <span>linkedin.com/in/marwa-ashraf1</span>
                </a>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-2">
                <span className="text-[10px] bg-slate-100 dark:bg-[#1A1825] px-2 py-0.5 rounded border border-slate-200 dark:border-[#A78BFA]/10">Node.js</span>
                <span className="text-[10px] bg-slate-100 dark:bg-[#1A1825] px-2 py-0.5 rounded border border-slate-200 dark:border-[#A78BFA]/10">React.js</span>
                <span className="text-[10px] bg-slate-100 dark:bg-[#1A1825] px-2 py-0.5 rounded border border-slate-200 dark:border-[#A78BFA]/10">Angular</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
