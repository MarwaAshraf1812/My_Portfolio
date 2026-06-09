import React from 'react'

export default function Footer() {
  return (
    <footer className="border-t border-slate-100 dark:border-slate-900 py-8 bg-slate-50 dark:bg-[#0D0D0F]">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between text-sm text-slate-500 dark:text-[#9CA3AF] space-y-4 sm:space-y-0">
        <div className="flex items-center">
          <img src="/logo.png" alt="Marwa Ashraf Logo" className="h-6 w-auto rounded-md" />
        </div>
        <p>© {new Date().getFullYear()} Marwa Ashraf Abdullah All rights reserved.</p>
      </div>
    </footer>
  )
}
