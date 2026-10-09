import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Code2, Send, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/SocialIcons";

interface NavItem {
  name: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const handleSmoothScroll = useCallback((targetId: string, e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
    }
    const el = document.getElementById(targetId);
    if (el) {
      const navbarHeight = 70;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = NAV_ITEMS.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 250;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#000000]/95 backdrop-blur-xl border-b border-white/10 py-3 shadow-xl shadow-black/80"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#home"
          onClick={(e) => handleSmoothScroll("home", e)}
          className="group flex items-center gap-2.5 text-white font-display font-bold text-xl tracking-tight cursor-pointer"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#6C8CFF] to-indigo-600 p-[1px] shadow-lg shadow-[#6C8CFF]/20 group-hover:shadow-[#6C8CFF]/40 transition-all">
            <div className="w-full h-full bg-[#000000] rounded-[11px] flex items-center justify-center">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#6C8CFF] font-mono font-black text-lg">
                AC
              </span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-semibold leading-none text-white group-hover:text-[#6C8CFF] transition-colors text-sm sm:text-base">
              Ansh Choudhary
            </span>
            <span className="text-[10px] sm:text-[11px] font-mono text-zinc-300 tracking-wider">
              CSE • CHANDIGARH UNIV
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-[#000000]/90 p-1.5 rounded-full border border-white/15 backdrop-blur-md shadow-lg shadow-black/50">
          {NAV_ITEMS.map((item) => {
            const sectionId = item.href.substring(1);
            const isActive = activeSection === sectionId;
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleSmoothScroll(sectionId, e)}
                className={`relative px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "text-white font-semibold"
                    : "text-zinc-200 hover:text-white hover:bg-white/5"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 rounded-full bg-[#6C8CFF]/20 border border-[#6C8CFF]/40"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.name}</span>
              </a>
            );
          })}
        </nav>

        {/* Action Button & Social Links */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="https://github.com/Ansh-op-7"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-2 rounded-lg bg-[#000000] border border-white/15 text-zinc-200 hover:text-white hover:border-[#6C8CFF]/50 hover:bg-white/5 transition-all"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href="https://leetcode.com/u/Ansh_Choudhary20/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LeetCode Profile"
            className="p-2 rounded-lg bg-[#000000] border border-white/15 text-zinc-200 hover:text-amber-400 hover:border-amber-500/40 hover:bg-white/5 transition-all"
          >
            <Code2 className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/ansh-chaudhary-69286130b/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2 rounded-lg bg-[#000000] border border-white/15 text-zinc-200 hover:text-[#6C8CFF] hover:border-[#6C8CFF]/50 hover:bg-white/5 transition-all"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href="#contact"
            onClick={(e) => handleSmoothScroll("contact", e)}
            className="relative inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-[#6C8CFF] hover:bg-[#5b7ce8] shadow-md shadow-[#6C8CFF]/20 transition-all duration-200 active:scale-95 cursor-pointer"
          >
            <span>Let's Connect</span>
            <Send className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-[#000000] border border-white/15 text-white focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#000000]/98 border-b border-white/15 backdrop-blur-2xl px-6 py-5 shadow-2xl overflow-hidden"
          >
            <div className="flex flex-col gap-2">
              {NAV_ITEMS.map((item) => {
                const sectionId = item.href.substring(1);
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                      setMobileMenuOpen(false);
                      handleSmoothScroll(sectionId, e);
                    }}
                    className="px-3 py-2.5 rounded-lg text-sm font-medium text-white hover:text-white hover:bg-white/10 flex items-center justify-between cursor-pointer"
                  >
                    <span>{item.name}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-50" />
                  </a>
                );
              })}
              <div className="pt-4 mt-2 border-t border-white/10 flex items-center justify-between">
                <div className="flex gap-2">
                  <a
                    href="https://github.com/Ansh-op-7"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg bg-[#000000] border border-white/15 text-white"
                    aria-label="GitHub"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                  <a
                    href="https://leetcode.com/u/Ansh_Choudhary20/"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg bg-[#000000] border border-white/15 text-zinc-200"
                    aria-label="LeetCode"
                  >
                    <Code2 className="w-4 h-4" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/ansh-chaudhary-69286130b/"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg bg-[#000000] border border-white/15 text-[#6C8CFF]"
                    aria-label="LinkedIn"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                  </a>
                </div>
                <a
                  href="#contact"
                  onClick={(e) => {
                    setMobileMenuOpen(false);
                    handleSmoothScroll("contact", e);
                  }}
                  className="px-4 py-2 rounded-xl text-xs font-semibold bg-[#6C8CFF] text-white cursor-pointer"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
