import React from "react";
import { motion } from "motion/react";
import { Code2, ExternalLink, Activity, Terminal } from "lucide-react";
import { GithubIcon } from "@/components/icons/SocialIcons";

export default function CodingProfiles() {
  return (
    <section id="profiles" className="py-24 relative overflow-hidden bg-[#000000]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#6C8CFF]/10 border border-[#6C8CFF]/30 text-[#6C8CFF] text-xs font-mono mb-3">
            <Activity className="w-3.5 h-3.5" />
            <span>ALGORITHMS & OPEN SOURCE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-display tracking-tight text-white mb-4">
            Coding <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-[#6C8CFF]">Profiles</span>
          </h2>
          <p className="max-w-2xl text-zinc-400 text-base sm:text-lg">
            Direct access to my open-source repositories on GitHub and problem-solving journey on LeetCode.
          </p>
        </div>

        {/* Profile Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* GitHub Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-[#000000] rounded-3xl p-8 border border-white/15 hover:border-[#6C8CFF]/50 relative overflow-hidden flex flex-col justify-between group shadow-2xl"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#6C8CFF]/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-[#050505] border border-white/15 text-[#6C8CFF] group-hover:bg-[#6C8CFF]/10 transition-colors">
                    <GithubIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold font-display text-white">GitHub</h3>
                    <p className="text-xs font-mono text-zinc-300">@Ansh-op-7</p>
                  </div>
                </div>

                <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold text-[#6C8CFF] bg-[#6C8CFF]/10 border border-[#6C8CFF]/20">
                  Open Source
                </span>
              </div>

              <p className="text-white text-sm leading-relaxed mb-6">
                Explore my repositories featuring Python scripts, AI models, campus lost-and-found systems, semester mini projects, and collaborative code.
              </p>

              <div className="space-y-3 mb-8">
                <div className="p-3.5 rounded-xl bg-[#050505] border border-white/10 flex items-center justify-between text-xs">
                  <span className="text-white font-medium">Primary Repositories</span>
                  <span className="font-mono text-[#6C8CFF]">Gesture AI, Resume Analyzer</span>
                </div>
                <div className="p-3.5 rounded-xl bg-[#050505] border border-white/10 flex items-center justify-between text-xs">
                  <span className="text-white font-medium">Languages</span>
                  <span className="font-mono text-zinc-200">Python, C++, SQL, Web</span>
                </div>
              </div>
            </div>

            <a
              href="https://github.com/Ansh-op-7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-[#050505] hover:bg-[#6C8CFF] text-white hover:text-white border border-white/15 hover:border-[#6C8CFF] font-medium text-xs transition-all duration-200 shadow-md"
            >
              <span>View GitHub Profile</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </motion.div>

          {/* LeetCode Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-[#000000] rounded-3xl p-8 border border-white/15 hover:border-amber-500/50 relative overflow-hidden flex flex-col justify-between group shadow-2xl"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-[#050505] border border-white/15 text-amber-400 group-hover:bg-amber-500/10 transition-colors">
                    <Code2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold font-display text-white">LeetCode</h3>
                    <p className="text-xs font-mono text-zinc-300">@Ansh_Choudhary20</p>
                  </div>
                </div>

                <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold text-amber-400 bg-amber-500/10 border border-amber-500/20">
                  Problem Solving
                </span>
              </div>

              <p className="text-white text-sm leading-relaxed mb-6">
                Active problem solving focused on data structures, algorithmic logic, time complexity optimization, and coding competitions in Java, C++, and Python.
              </p>

              <div className="space-y-3 mb-8">
                <div className="p-3.5 rounded-xl bg-[#050505] border border-white/10 flex items-center justify-between text-xs">
                  <span className="text-white font-medium">Focus Areas</span>
                  <span className="font-mono text-amber-400">Arrays, Strings, Trees, Logic</span>
                </div>
                <div className="p-3.5 rounded-xl bg-[#050505] border border-white/10 flex items-center justify-between text-xs">
                  <span className="text-white font-medium">Core Languages</span>
                  <span className="font-mono text-zinc-200">Java, C++, Python</span>
                </div>
              </div>
            </div>

            <a
              href="https://leetcode.com/u/Ansh_Choudhary20/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-[#050505] hover:bg-amber-500 hover:text-black text-amber-300 border border-white/15 hover:border-amber-400 font-medium text-xs transition-all duration-200 shadow-md"
            >
              <span>View LeetCode Profile</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
