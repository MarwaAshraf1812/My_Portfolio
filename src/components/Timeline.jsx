import React from 'react'
import { motion } from 'framer-motion'
import { Briefcase, GraduationCap } from 'lucide-react'
import { timelineData } from '../data/portfolioData'

export default function Timeline() {
  return (
    <section id="timeline" className="py-20 border-t border-slate-100 dark:border-slate-900">
      <div className="mb-16">
        <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-center mb-4 text-slate-900 dark:text-white">
          Experience & <span className="text-[#A78BFA]">Education.</span>
        </h2>
        <p className="text-slate-500 dark:text-[#9CA3AF] text-center max-w-md mx-auto">
          My chronological background in academic programs, backend software engineering tracks, and frontend roles.
        </p>
      </div>

      <div className="relative">
        {/* Center line (visible only on desktop) */}
        <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-[2px] bg-slate-100 dark:bg-slate-800/60" />

        <div className="space-y-12">
          {timelineData.map((item, idx) => {
            const isLeft = idx % 2 === 0
            return (
              <div key={idx} className={`relative flex flex-col md:flex-row items-stretch ${isLeft ? 'md:flex-row-reverse' : ''}`}>

                <div className="absolute left-8 md:left-1/2 transform -translate-y-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-[#A78BFA] border-4 border-white dark:border-[#0D0D0F] z-10" style={{ top: '24px' }} />
                <div className={`w-full md:w-1/2 pl-16 ${isLeft ? 'md:pl-5 md:pr-20' : 'md:pl-20 md:pr-5'}`}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.5 }}
                    className="p-6 rounded-2xl border border-slate-200/60 dark:border-slate-850/80 bg-slate-50 dark:bg-[#13121A] hover:border-[#A78BFA]/20 transition-all duration-300 shadow-sm shadow-black/5"
                  >
                    <span className="text-xs font-bold text-[#A78BFA] block mb-2">{item.year}</span>

                    <div className="flex items-start space-x-3">
                      <span className="mt-1 text-[#A78BFA] flex-shrink-0">
                        {item.type === 'work' ? <Briefcase size={17} /> : <GraduationCap size={17} />}
                      </span>
                      <div>
                        <h3 className="font-display font-bold text-lg leading-snug text-slate-900 dark:text-[#F5F3FF]">
                          {item.role}
                        </h3>
                        <h4 className="text-sm font-semibold text-slate-500 dark:text-slate-400 mt-0.5">{item.company}</h4>

                        <div className="mt-3">
                          {item.details ? (
                            <ul className="text-sm text-slate-650 dark:text-[#9CA3AF] space-y-1.5 list-disc pl-4">
                              {item.details.map((detail, dIdx) => (
                                <li key={dIdx} className="leading-relaxed">{detail}</li>
                              ))}
                            </ul>
                          ) : (
                            <p className="text-sm text-slate-650 dark:text-[#9CA3AF] leading-relaxed">
                              {item.description}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>

                  </motion.div>
                </div>

                {/* Empty placeholder for grid on desktop */}
                <div className="hidden md:block w-1/2" />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
