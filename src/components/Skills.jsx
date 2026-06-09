import React from 'react'
import {
  Layers,
  Code,
  Brain,
  Terminal,
  Database,
  Server,
  GitBranch,
  Globe
} from 'lucide-react'
import { skillsCategories } from '../data/portfolioData'

const renderCategoryIcon = (iconName, gradient) => {
  const props = { stroke: gradient, size: 24, className: "flex-shrink-0" };
  switch (iconName) {
    case 'Layers': return <Layers {...props} />
    case 'Code': return <Code {...props} />
    case 'Brain': return <Brain {...props} />
    case 'Terminal': return <Terminal {...props} />
    case 'Database': return <Database {...props} />
    case 'Server': return <Server {...props} />
    case 'GitBranch': return <GitBranch {...props} />
    case 'Globe': return <Globe {...props} />
    default: return <Code {...props} />
  }
}

export default function Skills() {
  // Split 7 skills into two rows: top with 4 categories, bottom with 3
  const topRowSkills = [
    skillsCategories[0], // Frontend Technologies
    skillsCategories[1], // Backend Technologies
    skillsCategories[2], // AI
    skillsCategories[3]  // Programming Languages
  ]

  const bottomRowSkills = [
    skillsCategories[4], // Database Management
    skillsCategories[5], // DevOps Tools
    skillsCategories[6]  // Software Engineering
  ]

  // Repeat the sets 4 times to ensure seamless infinite looping on all screen resolutions
  const topRowRepeated = [...topRowSkills, ...topRowSkills, ...topRowSkills, ...topRowSkills]
  const bottomRowRepeated = [...bottomRowSkills, ...bottomRowSkills, ...bottomRowSkills, ...bottomRowSkills]

  return (
    <section id="skills" className="py-20 border-t border-slate-100 dark:border-slate-900">
      <style>{`
        @keyframes marquee-to-left {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-25%); }
        }
        @keyframes marquee-to-right {
          0% { transform: translateX(-25%); }
          100% { transform: translateX(0%); }
        }
        .animate-marquee-left {
          display: flex;
          width: max-content;
          animation: marquee-to-left 40s linear infinite;
        }
        .animate-marquee-right {
          display: flex;
          width: max-content;
          animation: marquee-to-right 40s linear infinite;
        }
        .marquee-wrapper:hover .animate-marquee-left,
        .marquee-wrapper:hover .animate-marquee-right {
          animation-play-state: paused;
        }
      `}</style>

      <div className="mb-16">
        <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-center mb-4 text-slate-900 dark:text-white">
          Technical <span className="text-[#A78BFA]">Toolkit.</span>
        </h2>
        <p className="text-slate-500 dark:text-[#9CA3AF] text-center max-w-md mx-auto">
          A comprehensive catalog of front-end capabilities, AI tools, backend databases, and DevOps utilities.
        </p>
      </div>

      {/* Edge-to-edge marquee breakout container */}
      <div className="w-screen relative left-1/2 -translate-x-1/2 overflow-hidden py-4 space-y-8 marquee-wrapper">
        {/* Left & Right overlay gradient masks for a smooth fade out effect */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-white dark:from-[#0D0D0F] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-white dark:from-[#0D0D0F] to-transparent z-10 pointer-events-none" />

        {/* Top Row: Left-to-Right Scrolling Marquee */}
        <div className="overflow-hidden flex">
          <div className="animate-marquee-right flex items-stretch gap-6 px-3">
            {topRowRepeated.map((category, idx) => (
              <div
                key={`top-${category.title}-${idx}`}
                className="w-[290px] sm:w-[340px] p-6 rounded-2xl border border-slate-200/50 dark:border-slate-800 bg-[#F9FAFB] dark:bg-[#1A1825] hover:border-[#A78BFA]/40 hover:shadow-lg hover:shadow-purple-500/5 transition-all duration-300 flex flex-col justify-between flex-shrink-0"
              >
                <div>
                  <div className="flex items-center space-x-3 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-[#13121A] flex items-center justify-center shadow-inner">
                      {renderCategoryIcon(category.icon, category.gradient)}
                    </div>
                    <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white">
                      {category.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs bg-[#E5E7EB] dark:bg-[#13121A] text-slate-700 dark:text-[#A78BFA] border border-slate-300/50 dark:border-[#A78BFA]/40 hover:bg-[#A78BFA] hover:text-white dark:hover:bg-[#A78BFA] dark:hover:text-white transition-all duration-300 px-3 py-1.5 rounded-full font-medium cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Row: Right-to-Left Scrolling Marquee */}
        <div className="overflow-hidden flex">
          <div className="animate-marquee-left flex items-stretch gap-6 px-3">
            {bottomRowRepeated.map((category, idx) => (
              <div
                key={`bottom-${category.title}-${idx}`}
                className="w-[290px] sm:w-[340px] p-6 rounded-2xl border border-slate-200/50 dark:border-slate-800 bg-[#F9FAFB] dark:bg-[#1A1825] hover:border-[#A78BFA]/40 hover:shadow-lg hover:shadow-purple-500/5 transition-all duration-300 flex flex-col justify-between flex-shrink-0"
              >
                <div>
                  <div className="flex items-center space-x-3 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-[#13121A] flex items-center justify-center shadow-inner">
                      {renderCategoryIcon(category.icon, category.gradient)}
                    </div>
                    <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white">
                      {category.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs bg-[#E5E7EB] dark:bg-[#13121A] text-slate-700 dark:text-[#A78BFA] border border-slate-300/50 dark:border-[#A78BFA]/40 hover:bg-[#A78BFA] hover:text-white dark:hover:bg-[#A78BFA] dark:hover:text-white transition-all duration-300 px-3 py-1.5 rounded-full font-medium cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
