import React from "react";
import { motion } from "motion/react";
import {
  ArrowDown,
  Sparkles,
  Code2,
  Terminal,
  Layers,
  GraduationCap,
  ExternalLink,
  ChevronRight,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/SocialIcons";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Background Ambient Glows & Grids */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      
      {/* Dynamic ambient orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-cyan-500/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[300px] bg-indigo-500/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-[450px] h-[250px] bg-purple-500/10 rounded-full blur-[110px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 flex flex-col items-center">
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#000000] border border-white/15 backdrop-blur-md shadow-xl mb-8 group hover:border-[#6C8CFF]/50 transition-colors"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
          </span>
          <span className="text-xs font-mono text-zinc-200 font-medium tracking-wide">
            2nd Year CSE @ <span className="text-white font-semibold">Chandigarh University</span>
          </span>
          <span className="text-zinc-500 text-xs">•</span>
          <span className="text-xs font-mono text-[#6C8CFF]">Available for Opportunities</span>
        </motion.div>

        {/* Name Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-6 relative"
        >
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black font-display tracking-tight text-white uppercase select-none">
            <span className="inline-block bg-clip-text text-transparent bg-gradient-to-b from-white via-slate-100 to-slate-400 drop-shadow-sm">
              ANSH
            </span>{" "}
            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-[#6C8CFF]">
              CHOUDHARY
            </span>
          </h1>
        </motion.div>

        {/* Subtitle & Role */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="space-y-4 max-w-2xl mx-auto mb-10"
        >
          <div className="flex items-center justify-center gap-2 text-lg sm:text-2xl font-display font-medium text-white">
            <span className="text-[#6C8CFF] font-mono">&lt;</span>
            <span className="text-white">Full-Stack Developer</span>
            <span className="text-zinc-500">|</span>
            <span className="text-[#6C8CFF]">CSE Student</span>
            <span className="text-[#6C8CFF] font-mono">/&gt;</span>
          </div>

          <p className="text-base sm:text-lg text-zinc-200 leading-relaxed font-normal">
            "Building digital experiences that solve real problems."
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <a
            href="#projects"
            className="group relative inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-medium text-sm text-white bg-[#6C8CFF] hover:bg-[#587bf5] shadow-lg shadow-[#6C8CFF]/25 hover:shadow-[#6C8CFF]/40 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Explore My Work</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#contact"
            className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-medium text-sm text-white bg-[#000000] border border-white/15 hover:border-[#6C8CFF]/50 hover:bg-[#111111] backdrop-blur-md shadow-md transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Contact Me</span>
            <Sparkles className="w-4 h-4 text-[#6C8CFF] group-hover:rotate-12 transition-transform" />
          </a>
        </motion.div>

        {/* Social Links & Coding Profile Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-3 pt-4 border-t border-white/10 max-w-xl"
        >
          <a
            href="https://github.com/Ansh-op-7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#000000] border border-white/15 text-xs font-mono text-zinc-200 hover:text-white hover:border-[#6C8CFF]/50 transition-all group"
          >
            <GithubIcon className="w-3.5 h-3.5 group-hover:text-[#6C8CFF] transition-colors" />
            <span>GitHub</span>
            <ExternalLink className="w-3 h-3 opacity-50 group-hover:opacity-100" />
          </a>

          <a
            href="https://leetcode.com/u/Ansh_Choudhary20/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#000000] border border-white/15 text-xs font-mono text-zinc-200 hover:text-amber-400 hover:border-amber-500/50 transition-all group"
          >
            <Code2 className="w-3.5 h-3.5 text-amber-500" />
            <span>LeetCode</span>
            <ExternalLink className="w-3 h-3 opacity-50 group-hover:opacity-100" />
          </a>

          <a
            href="https://www.linkedin.com/in/ansh-chaudhary-69286130b/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#000000] border border-white/15 text-xs font-mono text-zinc-200 hover:text-blue-400 hover:border-blue-500/50 transition-all group"
          >
            <LinkedinIcon className="w-3.5 h-3.5 text-blue-400" />
            <span>LinkedIn</span>
            <ExternalLink className="w-3 h-3 opacity-50 group-hover:opacity-100" />
          </a>
        </motion.div>

        {/* Scroll down indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-14"
        >
          <a
            href="#about"
            className="inline-flex flex-col items-center gap-2 text-xs font-mono text-slate-500 hover:text-slate-300 transition-colors"
          >
            <span>DISCOVER MORE</span>
            <ArrowDown className="w-4 h-4 animate-bounce text-cyan-400" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
