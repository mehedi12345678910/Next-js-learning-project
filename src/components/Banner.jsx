"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Banner = () => {
  const router = useRouter();

  const handleBtn = () => {
    const password = prompt("Enter Your password");
    if (password === "1234") {
      router.push("/dashboard");
    }
  };

  return (
    <section className="relative min-h-[400px] flex items-center justify-center overflow-hidden rounded-3xl mx-4 my-10">
      {/* Background Decor - Animated Orbs */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 bg-slate-50 dark:bg-slate-950 transition-colors duration-500" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-sky-400/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl animate-pulse delay-700" />

      {/* Main Content Card */}
      <div className="relative z-10 w-full max-w-4xl p-12 text-center border border-white/20 dark:border-white/5 
                      backdrop-blur-xl bg-white/40 dark:bg-slate-900/40 rounded-[2rem] shadow-2xl">
        
        <div className="space-y-8">
          {/* Badge */}
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-widest uppercase 
                           bg-sky-500/10 text-sky-600 dark:text-sky-400 rounded-full border border-sky-500/20">
            Community Driven
          </span>

          {/* Heading with Gradient */}
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-tight">
            Welcome to <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-600 to-indigo-500 dark:from-sky-400 dark:to-indigo-300">
              Dev-Story
            </span>
          </h2>

          {/* Subtext */}
          <p className="max-w-xl mx-auto text-slate-600 dark:text-slate-400 text-lg md:text-xl font-medium leading-relaxed">
            Every developer has a journey. Share your struggles, triumphs, and the code that changed your life.
          </p>

          {/* Action Button */}
          <div className="pt-4">
            <button
              onClick={handleBtn}
              className="group relative inline-flex items-center justify-center px-10 py-4 font-bold text-white transition-all duration-200 
                         bg-sky-600 rounded-full hover:bg-slate-900 dark:hover:bg-white dark:hover:text-black 
                         focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 shadow-lg shadow-sky-500/30"
            >
              <span className="relative flex items-center gap-2 text-lg">
                Share Your Story
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 -z-10 opacity-[0.03] dark:opacity-[0.05] pointer-events-none" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2v-4h4v-2h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2v-4h4v-2H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}>
      </div>
    </section>
  );
};

export default Banner;