import React from "react";
import { motion } from "motion/react";
import { GraduationCap, Calendar, MapPin, BookOpen, CheckCircle2 } from "lucide-react";

interface EducationEntry {
  degree: string;
  institution: string;
  location: string;
  period: string;
  current?: boolean;
  coursework?: string[];
  description?: string;
}

const EDUCATION_DATA: EducationEntry[] = [
  {
    degree: "Bachelor of Engineering — Computer Science Engineering",
    institution: "Chandigarh University",
    location: "Mohali, Punjab",
    period: "2024 – 2028",
    current: true,
    coursework: [
      "Data Structures",
      "Algorithms",
      "Database Management Systems",
      "Operating Systems",
      "Software Engineering",
    ],
    description:
      "Currently in 2nd year of CSE. Focused on foundational computer science theory, algorithmic problem solving, software design patterns, and database engineering.",
  },
  {
    degree: "12th Grade (Senior Secondary)",
    institution: "SS Children Academy",
    location: "Moradabad, Uttar Pradesh",
    period: "Completed",
    description:
      "Senior secondary education with strong emphasis on Mathematics, Physics, Chemistry, and Computer Science fundamentals.",
  },
  {
    degree: "10th Grade (Secondary School)",
    institution: "SS Children Academy",
    location: "Moradabad, Uttar Pradesh",
    period: "Completed",
    description:
      "Secondary school education establishing core analytical skills, sciences, and mathematics.",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 relative overflow-hidden bg-[#000000]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#6C8CFF]/10 border border-[#6C8CFF]/30 text-[#6C8CFF] text-xs font-mono mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>ACADEMIC BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-display tracking-tight text-white mb-4">
            Education <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-[#6C8CFF]">Timeline</span>
          </h2>
          <p className="max-w-2xl text-zinc-400 text-base sm:text-lg">
            Academic qualifications and computer science engineering coursework.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto space-y-6">
          {EDUCATION_DATA.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-[#000000] p-6 sm:p-8 rounded-3xl border ${
                item.current ? "border-[#6C8CFF]/50 shadow-lg shadow-[#6C8CFF]/15" : "border-white/15"
              } relative overflow-hidden shadow-md hover:border-[#6C8CFF]/40 transition-colors`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <div className="inline-flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-medium text-[#6C8CFF] bg-[#6C8CFF]/10 border border-[#6C8CFF]/30">
                    {item.period}
                  </span>
                  {item.current && (
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/30">
                      Current Degree
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-1 text-xs font-mono text-zinc-300">
                  <MapPin className="w-3.5 h-3.5 text-[#6C8CFF]" />
                  <span>{item.location}</span>
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold font-display text-white mb-1">
                {item.degree}
              </h3>
              <p className="text-sm font-semibold text-[#6C8CFF] mb-3">
                {item.institution}
              </p>

              {item.description && (
                <p className="text-xs sm:text-sm text-white leading-relaxed mb-4">
                  {item.description}
                </p>
              )}

              {item.coursework && (
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-300 mb-2">
                    Relevant Coursework
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {item.coursework.map((course, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono text-white bg-[#050505] border border-white/15"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
