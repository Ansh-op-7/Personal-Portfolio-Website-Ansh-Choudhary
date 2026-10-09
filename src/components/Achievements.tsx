import React from "react";
import { motion } from "motion/react";
import { Trophy, Award, Sparkles, CheckCircle2, Medal, BookOpen, Star } from "lucide-react";

interface Achievement {
  title: string;
  event: string;
  institution?: string;
  team?: string;
  year: string;
  category: "coding" | "innovation" | "creative";
  description: string;
  image?: string;
  badgeType?: "gold" | "blue" | "emerald";
  highlight?: boolean;
}

interface Certification {
  title: string;
  issuer: string;
  highlight: string;
}

const ACHIEVEMENTS: Achievement[] = [
  {
    title: "Domain Winner & SIH 2026 Qualifier",
    event: "Techathon 5.0 — SIH 2026 Qualifiers",
    institution: "Chandigarh University",
    year: "2026",
    category: "coding",
    description: "Won in our domain and qualified for Smart India Hackathon (SIH) 2026 at Techathon 5.0 (internal hackathon of SIH 2026). Collaborated with teammates through brainstorming, development, debugging, presenting, and defending our technical solution.",
    image: "/images/ansh-tekathon-stage.jpg",
    badgeType: "gold",
    highlight: true,
  },
  {
    title: "Shortlisted for Round 2",
    event: "Chandigarh Police National Hackathon 2026",
    team: "Team Peak Performers",
    year: "2026",
    category: "coding",
    description: "Shortlisted for Round 2 in a national-level hackathon focused on developing high-impact solutions under pressure. Collaborated with team Peak Performers on innovation, rapid problem-solving, and solution development.",
    image: "/images/chd-police-hackathon.svg",
    badgeType: "blue",
    highlight: true,
  },
  {
    title: "Winner",
    event: "Chase the Code 2024",
    year: "2024",
    category: "coding",
    description: "Secured top position in rapid algorithmic coding and competitive problem solving.",
    badgeType: "gold",
  },
  {
    title: "Winner",
    event: "Science Exhibition 2025",
    year: "2025",
    category: "innovation",
    description: "Awarded 1st place for the IoT-Based Lift system with real-time virtual companion control app.",
    badgeType: "gold",
  },
  {
    title: "Two First Prizes",
    event: "CU Fest 2024 (Installation & Collage Making)",
    year: "2024",
    category: "creative",
    description: "Bagged double first prizes in creative Installation Art and Collage Making at Chandigarh University Fest.",
    badgeType: "gold",
  },
  {
    title: "First Prize",
    event: "IEEE Day 2026 Collage Making Competition",
    year: "2026",
    category: "creative",
    description: "Won 1st prize for visual representation and artistic collage creation under IEEE.",
    badgeType: "emerald",
  },
  {
    title: "First Prize",
    event: "Fresh Gen Fiesta Clay Modelling",
    year: "2024",
    category: "creative",
    description: "Recognized with 1st prize for creative 3D sculpting and clay model artistry.",
    badgeType: "emerald",
  },
  {
    title: "Participant & Innovator",
    event: "Zinnovation Hackathon 2025",
    year: "2025",
    category: "coding",
    description: "Collaborative product sprint building creative solutions for real-world technical problems.",
    badgeType: "blue",
  },
];

const CERTIFICATIONS: Certification[] = [
  {
    title: "Google AI Professional Certificate",
    issuer: "Google",
    highlight: "Comprehensive professional credential in machine learning, neural networks, and applied AI systems.",
  },
  {
    title: "AI for App Building",
    issuer: "Google / Coursera",
    highlight: "Practical AI integration patterns, model deployment, and building intelligent web and mobile apps.",
  },
  {
    title: "Introduction to Machine Learning",
    issuer: "IIT Madras",
    highlight: "Rigorous theoretical and mathematical foundation in supervised learning, regression, classification, and clustering.",
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 relative overflow-hidden bg-[#000000]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#6C8CFF]/10 border border-[#6C8CFF]/30 text-[#6C8CFF] text-xs font-mono mb-3">
            <Trophy className="w-3.5 h-3.5" />
            <span>HONORS &amp; CREDENTIALS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-display tracking-tight text-white mb-4">
            Achievements &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-[#6C8CFF]">Certifications</span>
          </h2>
          <p className="max-w-2xl text-zinc-400 text-base sm:text-lg">
            Hackathon victories, national shortlistings, competitive programming honors, and certified AI coursework.
          </p>
        </div>

        {/* Two-Column Grid: Achievements on Left, Certifications on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Achievements */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-2xl font-bold font-display text-white mb-6 flex items-center gap-2.5">
              <Medal className="w-5 h-5 text-amber-400" />
              <span>Hackathons &amp; Competitions</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {ACHIEVEMENTS.map((item, index) => {
                const isFeatured = Boolean(item.highlight && item.image);
                const badgeColorClass =
                  item.badgeType === "gold"
                    ? "text-amber-300 bg-amber-500/10 border-amber-500/30"
                    : item.badgeType === "emerald"
                    ? "text-emerald-300 bg-emerald-500/10 border-emerald-500/30"
                    : "text-[#6C8CFF] bg-[#6C8CFF]/10 border-[#6C8CFF]/30";

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.4, delay: index * 0.06 }}
                    className={`bg-[#000000] rounded-2xl border ${
                      isFeatured
                        ? "border-[#6C8CFF]/40 hover:border-[#6C8CFF]/70 sm:col-span-2"
                        : "border-white/15 hover:border-[#6C8CFF]/50"
                    } overflow-hidden transition-all group flex flex-col justify-between shadow-md hover:shadow-xl`}
                  >
                    {/* Optional Supporting Visual */}
                    {item.image && (
                      <div className="relative h-44 w-full overflow-hidden bg-[#050505]">
                        <img
                          src={item.image}
                          alt={item.event}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105 select-none"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-[#000000]/30 to-transparent" />
                        <div className="absolute top-3 right-3 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium text-white bg-black/85 backdrop-blur-md border border-white/20">
                          {item.year}
                        </div>
                        {item.team && (
                          <div className="absolute bottom-3 left-3 px-2.5 py-0.5 rounded-md text-[10px] font-mono font-semibold text-[#6C8CFF] bg-black/90 backdrop-blur-md border border-[#6C8CFF]/50">
                            {item.team}
                          </div>
                        )}
                        {item.institution && (
                          <div className="absolute bottom-3 left-3 px-2.5 py-0.5 rounded-md text-[10px] font-mono font-semibold text-white bg-black/90 backdrop-blur-md border border-white/30">
                            {item.institution}
                          </div>
                        )}
                      </div>
                    )}

                    <div className="p-5 flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <span
                            className={`px-2.5 py-0.5 rounded-md text-[11px] font-mono font-semibold border ${badgeColorClass}`}
                          >
                            {item.title}
                          </span>
                          {!item.image && (
                            <span className="text-xs font-mono text-zinc-300">
                              {item.year}
                            </span>
                          )}
                        </div>

                        <h4 className="text-base font-bold font-display text-white group-hover:text-[#6C8CFF] transition-colors mb-1.5">
                          {item.event}
                        </h4>

                        <p className="text-xs text-white leading-relaxed">
                          {item.description}
                        </p>
                      </div>

                      <div className="mt-4 pt-2.5 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-zinc-300">
                        <span className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#6C8CFF]" />
                          <span className="text-white">Verified Honor</span>
                        </span>
                        <span className="text-zinc-400 font-sans text-[10px] uppercase tracking-wider">
                          {item.category}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Certifications */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-2xl font-bold font-display text-white mb-6 flex items-center gap-2.5">
              <Award className="w-5 h-5 text-[#6C8CFF]" />
              <span>Verified Certifications</span>
            </h3>

            <div className="space-y-4">
              {CERTIFICATIONS.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-[#000000] p-6 rounded-2xl border border-white/15 hover:border-[#6C8CFF]/50 transition-all group shadow-md"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-[#050505] border border-white/15 text-[#6C8CFF] group-hover:bg-[#6C8CFF]/15 transition-colors shrink-0">
                      <BookOpen className="w-5 h-5" />
                    </div>

                    <div>
                      <div className="inline-block px-2 py-0.5 rounded text-[10px] font-mono font-medium text-[#6C8CFF] bg-[#6C8CFF]/10 border border-[#6C8CFF]/30 mb-1.5">
                        {cert.issuer}
                      </div>
                      <h4 className="text-base font-bold font-display text-white group-hover:text-[#6C8CFF] transition-colors mb-2">
                        {cert.title}
                      </h4>
                      <p className="text-xs text-white leading-relaxed">
                        {cert.highlight}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
