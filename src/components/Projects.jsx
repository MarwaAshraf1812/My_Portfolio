import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { projectsData } from '../data/portfolioData'

const Github = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className} style={{ width: props.size || 24, height: props.size || 24 }}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
)

export default function Projects() {
  const [projectFilter, setProjectFilter] = useState('All')

  const filteredProjects = projectsData.filter(project => {
    if (projectFilter === 'All') {
      const latestProjects = ['Noor', 'Naqla AI', 'Personal Finance Tracker'];
      return latestProjects.includes(project.title);
    }
    return project.category.includes(projectFilter);
  });

  return (
    <section id="projects" className="py-20 border-t border-slate-100 dark:border-slate-900">
      <div className="mb-12">
        <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-center mb-4 text-slate-900 dark:text-white">
          What I've <span className="text-[#A78BFA]">Built.</span>
        </h2>
        <p className="text-slate-500 dark:text-[#9CA3AF] text-center max-w-md mx-auto">
          An overview of key platforms designed to showcase architecture, integrations, and user interfaces.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {['All', 'AI', 'Full-Stack', 'Backend', 'Frontend'].map(filter => (
          <button
            key={filter}
            onClick={() => setProjectFilter(filter)}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${projectFilter === filter
                ? 'bg-[#A78BFA] text-[#0D0D0F] shadow-lg shadow-[#A78BFA]/20'
                : 'bg-slate-100 dark:bg-[#1A1825] text-slate-600 dark:text-[#9CA3AF] hover:bg-slate-200 dark:hover:bg-[#A78BFA]/10 hover:text-slate-900 dark:hover:text-[#F5F3FF]'
              }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <motion.div
        layout
        className={`grid gap-6 w-full ${
          filteredProjects.length === 1
            ? 'grid-cols-1 max-w-[380px] mx-auto'
            : filteredProjects.length === 2
              ? 'grid-cols-1 md:grid-cols-2 max-w-[784px] mx-auto'
              : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
        }`}
      >
        <AnimatePresence>
          {filteredProjects.map((project, idx) => (
              <motion.div
                layout
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group flex flex-col p-4 rounded-xl border border-slate-200/50 dark:border-[#A78BFA]/15 bg-slate-50 dark:bg-[#1A1825] hover:-translate-y-2 hover:border-[#A78BFA]/50 hover:shadow-[0_0_20px_rgba(167,139,250,0.15)] transition-all duration-300 overflow-hidden mx-auto w-full max-w-[380px]"
              >
                <div className="w-full h-36 sm:h-40 rounded-lg overflow-hidden mb-3 bg-slate-200 dark:bg-[#13121A] relative border border-slate-200/50 dark:border-slate-800">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0F]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                    <div className="flex space-x-2 w-full justify-end">
                      <a href={project.github} target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-[#13121A]/80 backdrop-blur-sm border border-[#A78BFA]/30 flex items-center justify-center text-white hover:bg-[#A78BFA] hover:text-[#0D0D0F] transition-all" aria-label="GitHub link">
                        <Github size={16} />
                      </a>
                      <a href={project.demo} className="w-8 h-8 rounded-full bg-[#13121A]/80 backdrop-blur-sm border border-[#A78BFA]/30 flex items-center justify-center text-white hover:bg-[#A78BFA] hover:text-[#0D0D0F] transition-all" aria-label="Demo link">
                        <ExternalLink size={16} />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white group-hover:text-[#A78BFA] transition-colors">{project.title}</h3>
                  </div>
                  <p className="text-[10px] font-semibold text-[#A78BFA] mb-3 tracking-wider uppercase">{project.tag}</p>

                  <p className="text-xs text-slate-650 dark:text-[#9CA3AF] mb-4 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Metric Badge */}
                  <div className="mb-3 inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-md bg-[#A78BFA]/10 border border-[#A78BFA]/20 text-[#C4B5FD] text-[10px] font-semibold">
                    <span>🚀 {project.metric}</span>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-200/50 dark:border-slate-800/40">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-medium text-slate-700 dark:text-violet-200 bg-slate-200/50 dark:bg-[#13121A] border border-slate-300/50 dark:border-[#A78BFA]/10 px-2 py-0.5 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
        </AnimatePresence>
      </motion.div>

      <div className="mt-12 flex justify-center">
        <a
          href="https://github.com/MarwaAshraf1812"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center space-x-2 px-6 py-3 border-2 border-[#A78BFA] text-[#A78BFA] hover:bg-[#A78BFA] hover:text-[#0D0D0F] font-bold rounded-xl transition-all shadow-lg shadow-[#A78BFA]/10 hover:shadow-[#A78BFA]/30"
        >
          <span>View More Projects on GitHub</span>
          <Github size={18} />
        </a>
      </div>
    </section>
  )
}
