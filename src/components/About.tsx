import React from "react";
import { motion } from "motion/react";
import {
  GraduationCap,
  Code,
  Sparkles,
  Cpu,
  CheckCircle2,
  Terminal,
  Brain,
  Layers,
} from "lucide-react";

export default function About() {
  const pillars = [
    {
      icon: <Brain className="w-5 h-5 text-[#6C8CFF]" />,
      title: "Java & Software Engineering",
      description:
        "Building reliable applications, robust Object-Oriented architectures, and scalable backend workflows using Java.",
    },
    {
      icon: <Code className="w-5 h-5 text-indigo-400" />,
      title: "Software Development",
      description:
        "Engineering practical web applications and full-stack solutions with modern UI architectures and clean code standards.",
    },
    {
      icon: <Cpu className="w-5 h-5 text-sky-400" />,
      title: "Problem Solving & DSA",
      description:
        "Passionate about algorithmic efficiency, data structures in Java & C++, and competitive programming challenges.",
    },
    {
      icon: <GraduationCap className="w-5 h-5 text-emerald-400" />,
      title: "Academic Background",
      description:
        "Computer Science Engineering student at Chandigarh University (2024–2028), mastering core computer science principles.",
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#000000]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#6C8CFF]/10 border border-[#6C8CFF]/30 text-[#6C8CFF] text-xs font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-display tracking-tight text-white mb-4">
            Passionate About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-[#6C8CFF]">
              Building Practical Tech
            </span>
          </h2>
          <p className="max-w-2xl text-zinc-400 text-base sm:text-lg">
            A developer dedicated to turning real-world problems into elegant software solutions.
          </p>
        </div>

        {/* Top Grid: Portrait + Biography */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-10">
          {/* Portrait Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 flex flex-col"
          >
            <div className="relative group w-full h-full min-h-[380px] rounded-3xl overflow-hidden bg-[#000000] border border-[#6C8CFF]/40 shadow-2xl shadow-[#6C8CFF]/10 hover:border-[#6C8CFF]/70 transition-all duration-300 flex flex-col justify-end p-6">
              {/* Actual Facial Portrait Photo */}
              <img
                src="/images/profile.jpg"
                alt="Ansh Choudhary Portrait"
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105 select-none"
              />
              {/* Subtle Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-[#000000]/30 to-transparent pointer-events-none" />
              <div className="absolute inset-0 border border-white/10 rounded-3xl pointer-events-none" />

              {/* Restrained Overlay Tag */}
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#000000]/90 border border-[#6C8CFF]/50 text-[#6C8CFF] text-xs font-mono font-semibold backdrop-blur-md mb-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Ansh Choudhary</span>
                </div>
                <p className="text-white text-sm font-semibold font-display drop-shadow">
                  CSE Student • Chandigarh University
                </p>
                <p className="text-zinc-200 text-xs font-mono">
                  Java &amp; Full-Stack Developer
                </p>
              </div>
            </div>
          </motion.div>

          {/* Biography Narrative Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8 bg-[#000000] p-8 sm:p-10 rounded-3xl border border-white/15 relative overflow-hidden shadow-2xl flex flex-col justify-between"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#6C8CFF]/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              <h3 className="text-2xl font-bold font-display text-white mb-5 flex items-center gap-3">
                <span className="w-2.5 h-8 bg-gradient-to-b from-[#6C8CFF] to-indigo-500 rounded-full inline-block" />
                Engineering Real-World Impact
              </h3>

              <div className="space-y-4 text-white leading-relaxed text-sm sm:text-base">
                <p className="text-lg text-white font-medium">
                  "I'm <strong className="text-[#6C8CFF]">Ansh Choudhary</strong>, a Computer Science Engineering student at <strong>Chandigarh University</strong>. I'm interested in software development, Java, artificial intelligence, and building practical applications that solve real-world problems."
                </p>
                <p className="text-zinc-100">
                  My approach to software engineering centers on simplicity, responsiveness, and algorithmic precision. Whether developing scalable applications in Java, structuring data workflows in SQL, or designing connected IoT solutions, I focus on crafting reliable, user-friendly experiences.
                </p>
                <p className="text-zinc-100">
                  I actively combine theoretical computer science fundamentals—data structures, algorithms, and database management—with fast-paced hands-on project creation and hackathon problem solving.
                </p>
              </div>
            </div>

            {/* Core Competency Badges */}
            <div className="mt-8 pt-6 border-t border-white/15 flex flex-wrap gap-2.5">
              {[
                "Java & OOP",
                "C++ & Data Structures",
                "Web Technologies",
                "SQL & Relational DBs",
                "Computer Vision & AI",
                "IoT & Hardware Control",
              ].map((pill, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#050505] border border-white/15 text-xs font-mono text-white"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#6C8CFF]" />
                  {pill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Grid: Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {pillars.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#000000] p-5 rounded-2xl border border-white/15 hover:border-[#6C8CFF]/50 transition-all group shadow-md"
            >
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-[#050505] border border-white/15 group-hover:bg-[#6C8CFF]/15 group-hover:border-[#6C8CFF]/40 transition-colors shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-base font-semibold font-display text-white group-hover:text-[#6C8CFF] transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-zinc-200 mt-1 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
