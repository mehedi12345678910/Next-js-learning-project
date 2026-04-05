import React from 'react'

const Title = ({ children }) => {
  return (
    <div className="relative group py-10 px-6 overflow-hidden">
      {/* Background with Subtle Gradient and Adaptive Colors */}
      <div className="absolute inset-0 transition-all duration-500 
                      bg-gradient-to-br from-white/50 via-sky-50/30 to-white
                      dark:from-slate-900 dark:via-slate-800 dark:to-slate-950" />

      {/* Modern Decorative Accent (Left Border) */}
      <div className="absolute left-0 top-1/4 h-1/2 w-1.5 rounded-r-full
                      bg-sky-500 shadow-[0_0_15px_rgba(14,165,233,0.5)]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-black tracking-tighter 
                       bg-clip-text text-transparent transition-all duration-500
                       bg-gradient-to-r from-slate-900 to-slate-700
                       dark:from-white dark:to-slate-400">
          {children}
        </h2>
        
        {/* Decorative Underline */}
        <div className="mt-2 h-1 w-70 bg-sky-500 rounded-full 
                        transform origin-left transition-transform duration-500 
                        group-hover:scale-x-150" />
      </div>
    </div>
  )
}

export default Title;