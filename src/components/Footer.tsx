import { ArrowUp, Code2 } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/SocialIcons";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 border-t border-white/10 bg-[#000000] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Details */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#6C8CFF]" />
              <span className="font-display font-bold text-white tracking-tight">
                Ansh Choudhary
              </span>
              <span className="text-xs font-mono text-zinc-400">| CSE Portfolio</span>
            </div>
            <p className="text-xs text-zinc-300 font-mono">
              Chandigarh University • Computer Science Engineering
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/Ansh-op-7"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-[#000000] border border-white/15 text-zinc-300 hover:text-white hover:border-[#6C8CFF]/60 transition-all"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href="https://leetcode.com/u/Ansh_Choudhary20/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-[#000000] border border-white/15 text-zinc-300 hover:text-amber-400 hover:border-amber-500/60 transition-all"
              aria-label="LeetCode Profile"
            >
              <Code2 className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/ansh-chaudhary-69286130b/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-[#000000] border border-white/15 text-zinc-300 hover:text-[#6C8CFF] hover:border-[#6C8CFF]/60 transition-all"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
          </div>

          {/* Back to Top */}
          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#000000] hover:bg-[#111111] border border-white/15 hover:border-[#6C8CFF]/50 text-xs font-mono text-white transition-all group cursor-pointer"
            >
              <span>BACK TO TOP</span>
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform text-[#6C8CFF]" />
            </button>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-400 gap-2 font-mono">
          <p>© {new Date().getFullYear()} Ansh Choudhary. All rights reserved.</p>
          <p className="flex items-center gap-1 text-zinc-300">
            Engineered with React, TypeScript & Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
