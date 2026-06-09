import React, { useState } from 'react'
import { Mail, Send } from 'lucide-react'
import { motion } from 'framer-motion'

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

export default function ContactMe() {
    const [submitted, setSubmitted] = useState(false)
      const handleContactSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

  return(
    <section id="contact" className="py-20 border-t border-slate-100 dark:border-slate-900">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-5 space-y-6">
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl">Let's <span className="text-[#A78BFA]">Connect</span></h2>
              <p className="text-slate-600 dark:text-[#9CA3AF] leading-relaxed">
                Have a job opportunity, a project proposal, or just want to chat about Node.js and React architectures? Drop a message here and I'll get back to you shortly.
              </p>

              <div className="space-y-4 pt-4">
                <a href="mailto:marwaashrafabdullah@gmail.com" className="flex items-center space-x-3 text-slate-650 dark:text-[#9CA3AF] hover:text-[#A78BFA] transition-colors">
                  <Mail size={18} />
                  <span>marwaashrafabdullah@gmail.com</span>
                </a>
                <div className="flex space-x-4 pt-2">
                  <a href="https://github.com/MarwaAshraf1812" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#13121A] flex items-center justify-center text-slate-600 dark:text-[#9CA3AF] hover:text-[#A78BFA] transition-all">
                    <Github size={18} />
                  </a>
                  <a href="https://www.linkedin.com/in/marwa-ashraf1/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#13121A] flex items-center justify-center text-slate-600 dark:text-[#9CA3AF] hover:text-[#A78BFA] transition-all">
                    <Linkedin size={18} />
                  </a>
                </div>
              </div>
            </div>

            <div className="md:col-span-7">
              <form onSubmit={handleContactSubmit} className="p-8 rounded-2xl border border-slate-200 dark:border-slate-850 bg-slate-55 dark:bg-[#13121A] space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-slate-700 dark:text-[#9CA3AF]">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#1A1825] focus:outline-none focus:ring-2 focus:ring-[#A78BFA]/50 focus:border-[#A78BFA] transition-all"
                    placeholder="Marwa Ashraf"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-slate-700 dark:text-[#9CA3AF]">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#1A1825] focus:outline-none focus:ring-2 focus:ring-[#A78BFA]/50 focus:border-[#A78BFA] transition-all"
                    placeholder="Marwa@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-slate-700 dark:text-[#9CA3AF]">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#1A1825] focus:outline-none focus:ring-2 focus:ring-[#A78BFA]/50 focus:border-[#A78BFA] transition-all resize-none"
                    placeholder="Write your message here..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#A78BFA] hover:bg-[#7C3AED] text-[#0D0D0F] hover:text-white font-semibold rounded-xl transition-all shadow-lg shadow-[#A78BFA]/20 flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <span>Send Message</span>
                  <Send size={16} />
                </button>

                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center text-sm text-[#A78BFA]"
                  >
                    Thank you! Your message has been sent.
                  </motion.div>
                )}
              </form>
            </div>
          </div>
        </section>
  )
}