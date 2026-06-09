import React from 'react'

export default function Footer() {
  return (
    <footer className="border-t border-slate-100 dark:border-slate-900 py-8 bg-slate-50 dark:bg-[#0D0D0F]">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between text-sm text-slate-500 dark:text-[#9CA3AF] space-y-4 sm:space-y-0">
        <h1 className="font-display font-black text-xl tracking-tight text-slate-900 dark:text-white">
          M<span className="text-[#A78BFA]">.</span>
        </h1>
        <p>© {new Date().getFullYear()} Marwa Ashraf Abdullah All rights reserved.</p>
      </div>
    </footer>
  )
}
