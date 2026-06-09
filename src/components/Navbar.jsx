import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sun, Moon, Menu, X, ChevronRight } from 'lucide-react'

export default function Navbar({ isDark, setIsDark, activeSection }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#timeline' }
  ]

  return (
    <>
      <div className="fixed top-4 left-0 w-full z-50 px-4 flex justify-center">
        <motion.nav
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className={`w-full max-w-2xl px-6 py-2.5 rounded-full flex items-center justify-between transition-all duration-300 ${scrolled
              ? 'glass-nav bg-white/80 dark:bg-[#13121A]/85 border border-[#A78BFA]/25 shadow-xl shadow-purple-500/5'
              : 'bg-white/95 dark:bg-[#13121A] border border-slate-200/50 dark:border-slate-800/80 shadow-md'
            }`}
        >
          <a
            href="#about"
            className="flex items-center hover:opacity-95 transition-opacity"
          >
            <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Marwa Ashraf Logo" className="h-6 w-auto rounded-md" />
          </a>

          <div className="hidden sm:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative py-1 text-sm font-medium transition-colors hover:text-[#A78BFA] text-slate-600 dark:text-[#9CA3AF] hover:dark:text-[#F5F3FF]"
              >
                {link.label}

                {/* Active Link Underline */}
                {activeSection === link.href.slice(1) && (
                  <motion.div
                    layoutId="activeUnderline"
                    className="absolute bottom-[-4px] left-0 right-0 h-[2px] bg-[#A78BFA] rounded-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </div>

          {/* Right actions: Theme Toggle & Let's Talk Button */}
          <div className="flex items-center space-x-3.5">
            {/* Theme Toggle */}
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-1.5 rounded-full text-slate-500 dark:text-[#A78BFA] hover:text-[#A78BFA] dark:hover:text-violet-350 transition-colors cursor-pointer"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Let's Talk Button */}
            <a
              href="#contact"
              className="bg-slate-900 text-white dark:bg-white dark:text-[#0D0D0F] hover:bg-slate-800 dark:hover:bg-slate-100 font-semibold px-4.5 py-1.5 rounded-full text-xs transition-all shadow-sm cursor-pointer"
            >
              Let's Talk
            </a>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="sm:hidden p-1 text-slate-700 dark:text-[#F5F3FF] cursor-pointer"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </motion.nav>
      </div>

      {/* Mobile Drawer (placed just under the navbar) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed top-20 left-4 right-4 z-45 sm:hidden overflow-hidden bg-white/95 dark:bg-[#13121A]/95 backdrop-blur-md rounded-2xl border border-slate-200 dark:border-[#A78BFA]/20 shadow-xl"
          >
            <div className="p-6 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-base font-semibold py-2 px-3 rounded-lg transition-colors flex items-center justify-between ${activeSection === link.href.slice(1)
                      ? 'bg-[#A78BFA]/10 text-[#A78BFA]'
                      : 'text-slate-600 dark:text-[#9CA3AF] hover:bg-slate-50 dark:hover:bg-slate-800/30'
                    }`}
                >
                  <span>{link.label}</span>
                  <ChevronRight size={16} className={activeSection === link.href.slice(1) ? 'text-[#A78BFA]' : 'text-slate-400'} />
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 w-full py-3 bg-[#A78BFA] text-[#0D0D0F] font-bold rounded-xl text-center shadow-lg"
              >
                Let's Talk
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
