import React from "react";
import { motion } from "motion/react";
import { Briefcase, Calendar, MapPin, CheckCircle2, Sparkles, Building2 } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      role: "Frontend Engineer Intern",
      company: "Octaphores Pvt Ltd",
      period: "June 2026 – Present",
      location: "India",
      type: "Internship",
      highlights: [
        "Developed and improved frontend user interfaces for live products with responsive web layouts.",
        "Assisted with API integrations, data parsing, and backend data flow coordination.",
        "Wrote clean, maintainable code and documented engineering processes for scalable feature delivery.",
        "Collaborated closely with developers and designers to troubleshoot issues, refine UI/UX, and optimize workflows.",
      ],
      tags: ["Frontend Engineering", "UI/UX", "API Integration", "Clean Code", "Collaboration"],
    },
  ];

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-[#000000]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#6C8CFF]/10 border border-[#6C8CFF]/30 text-[#6C8CFF] text-xs font-mono mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>WORK EXPERIENCE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-display tracking-tight text-white mb-4">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-[#6C8CFF]">Experience</span>
          </h2>
          <p className="max-w-2xl text-zinc-400 text-base sm:text-lg">
            Hands-on industry engineering experience building user interfaces and integrating production APIs.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-[#000000] border border-white/15 rounded-3xl p-8 sm:p-10 relative overflow-hidden shadow-2xl hover:border-[#6C8CFF]/50 transition-all group"
            >
              {/* Subtle top indicator bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#6C8CFF] to-indigo-500 opacity-80 group-hover:opacity-100 transition-opacity" />

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-white/15">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-medium text-[#6C8CFF] bg-[#6C8CFF]/10 border border-[#6C8CFF]/30">
                      {exp.type}
                    </span>
                    <span className="text-xs font-mono text-zinc-300 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#6C8CFF]" />
                      {exp.period}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold font-display text-white">
                    {exp.role}
                  </h3>
                  <div className="flex items-center gap-2 text-zinc-200 text-sm font-medium mt-1">
                    <Building2 className="w-4 h-4 text-[#6C8CFF]" />
                    <span className="text-white font-semibold">{exp.company}</span>
                    <span>•</span>
                    <span className="text-zinc-300">{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Responsibilities */}
              <div className="space-y-3.5 mb-8">
                {exp.highlights.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm sm:text-base text-white">
                    <CheckCircle2 className="w-4 h-4 text-[#6C8CFF] shrink-0 mt-1" />
                    <span className="leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>

              {/* Skill Tags */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                {exp.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-lg text-xs font-mono text-white bg-[#050505] border border-white/15"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
