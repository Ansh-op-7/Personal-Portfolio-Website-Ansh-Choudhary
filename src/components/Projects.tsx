import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  FolderGit2,
  ExternalLink,
  Sparkles,
  Layers,
  Award,
  ArrowUpRight,
  Eye,
  X,
  CheckCircle2,
} from "lucide-react";
import { GithubIcon } from "@/components/icons/SocialIcons";

interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  features: string[];
  githubUrl: string;
  badge?: string;
  gradient: string;
}

const PROJECTS: Project[] = [
  {
    id: "gesture-ai",
    title: "Gesture AI Model",
    subtitle: "Real-Time Hand Gesture Recognition & Media Control",
    category: "AI & Computer Vision",
    description:
      "A real-time hand gesture recognition system that detects and classifies hand signs to control media playback and adjust system volume seamlessly.",
    longDescription:
      "Engineered using Python, OpenCV, and TensorFlow/MediaPipe. The system captures live video stream from a webcam, performs high-speed hand landmark tracking, and classifies distinct gesture patterns (pinch, palm, fist, finger swipes) into system commands such as volume up/down, pause/play, and track skipping with near-zero latency.",
    image: "/images/projects/gesture-ai.svg",
    tags: ["Python", "OpenCV", "TensorFlow", "MediaPipe", "Computer Vision"],
    features: [
      "Real-time hand landmark estimation and 21-point skeletal tracking",
      "Dynamic gesture mapping for media playback and volume control",
      "Robust performance in diverse lighting conditions",
      "Lightweight CPU inference pipeline with high frame rates",
    ],
    githubUrl: "https://github.com/Ansh-op-7",
    gradient: "from-[#6C8CFF]/20 via-indigo-500/10 to-transparent",
  },
  {
    id: "resume-analyzer",
    title: "Smart Resume Analyzer",
    subtitle: "Automated Resume Parsing & SQL Storage Engine",
    category: "Python & Data Systems",
    description:
      "A resume analysis application developed as a semester mini project, featuring structured text extraction, keyword scoring, and SQL database storage.",
    longDescription:
      "Developed to automate candidate screening and resume evaluation. Built with Python text-processing modules and a robust SQL backend, the tool tokenizes uploaded resumes, extracts candidate details, scores keywords against domain requirements, and organizes records into normalized database tables for fast querying.",
    image: "/images/projects/resume-analyzer.svg",
    tags: ["Python", "SQL", "Database Design", "Text Extraction", "Data Analytics"],
    features: [
      "Automated PDF/DOCX document text extraction and tokenization",
      "Structured SQL database schema for persistent candidate records",
      "Keyword matching algorithms for skill qualification evaluation",
      "Query engine for rapid candidate filtering and reporting",
    ],
    githubUrl: "https://github.com/Ansh-op-7",
    badge: "Semester Mini Project",
    gradient: "from-blue-500/20 via-sky-500/10 to-transparent",
  },
  {
    id: "iot-lift",
    title: "IoT-Based Lift with Virtual Control App",
    subtitle: "Connected Hardware & Remote Lift Monitoring",
    category: "IoT & Hardware Automation",
    description:
      "An IoT-based lift system paired with a virtual app to control and monitor the lift in real-time, complete with safety logs and telemetry. Winner of the Science Exhibition 2025.",
    longDescription:
      "An award-winning hardware-software integration that simulates modern intelligent elevator controls. Equipped with microcontroller sensors for floor position, weight limits, and door status, the system transmits live status packets to a virtual companion app where users can trigger calls and administrators can inspect event logs.",
    image: "/images/projects/iot-lift.svg",
    tags: ["IoT Hardware", "Python", "Microcontroller", "Virtual App", "Sensors"],
    features: [
      "Virtual companion application for contactless floor selection and control",
      "Hardware sensor telemetry for position tracking and overload alerts",
      "Centralized event logging for diagnostics and emergency overrides",
      "Winner — Science Exhibition 2025 Award",
    ],
    githubUrl: "https://github.com/Ansh-op-7",
    badge: "Winner — Science Exhibition 2025",
    gradient: "from-amber-500/20 via-orange-500/10 to-transparent",
  },
  {
    id: "findit",
    title: "FindIt — Smart Campus Lost & Found",
    subtitle: "Campus-Wide Lost & Found Recovery Portal",
    category: "Full-Stack Web Platform",
    description:
      "A campus lost-and-found platform for reporting lost items, posting found items, and managing claims with secure student verification.",
    longDescription:
      "FindIt addresses the chaotic lost-and-found process across campus buildings. Students and faculty can post notices with photo attachments, filter by location or date, search categories, and securely process return claims through verifiable proof-of-ownership logs.",
    image: "/images/projects/findit.svg",
    tags: ["Web Technologies", "JavaScript", "SQL", "Database Design", "UI/UX"],
    features: [
      "Categorized cataloging for lost and found items with photo uploads",
      "Secure claim workflow and administrative resolution logging",
      "Campus department tags and instant item search filters",
      "Responsive, accessible design optimized for mobile & desktop",
    ],
    githubUrl: "https://github.com/Ansh-op-7",
    gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
  },
  {
    id: "emergency360",
    title: "Emergency360",
    subtitle: "Real-Time Emergency Dispatch & SOS Assistance",
    category: "Full-Stack & Cloud Safety",
    description:
      "An integrated emergency assistance and SOS alert platform designed for rapid incident reporting, live geolocation dispatch, and emergency contact broadcasting.",
    longDescription:
      "Emergency360 is engineered to reduce response times during critical incidents. Incorporating real-time GPS coordinate broadcasting, secure tokenized alert payloads, and instant dispatcher dashboard feeds, the platform coordinates instant alerts between distressed users, responders, and trusted family contacts.",
    image: "/images/projects/emergency360.svg",
    tags: ["Full-Stack", "JavaScript", "Node.js", "Geolocation API", "WebSockets"],
    features: [
      "One-touch instant SOS triggering with high-precision geolocation packet",
      "Real-time status updates and responder telemetry dashboard",
      "Automated multi-channel notification dispatch to designated emergency contacts",
      "Secure encrypted audit logs for incident verification and reporting",
    ],
    githubUrl: "https://github.com/Ansh-op-7",
    badge: "Real-Time SOS Platform",
    gradient: "from-rose-500/20 via-red-500/10 to-transparent",
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-[#000000]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#6C8CFF]/10 border border-[#6C8CFF]/30 text-[#6C8CFF] text-xs font-mono mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>PORTFOLIO PROJECTS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-display tracking-tight text-white mb-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-[#6C8CFF]">Projects</span>
          </h2>
          <p className="max-w-2xl text-white text-base sm:text-lg">
            Practical software, AI, IoT, and database systems engineered to solve genuine problems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#000000] rounded-3xl overflow-hidden border border-white/15 hover:border-[#6C8CFF]/50 transition-all duration-300 flex flex-col group shadow-xl"
            >
              {/* Image Preview with Hover Gradient */}
              <div className="relative h-60 w-full overflow-hidden bg-[#050505]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 select-none"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} to-transparent opacity-70`} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-[#000000]/40 to-transparent" />

                {/* Category & Achievement badge */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full text-[11px] font-mono font-medium text-[#6C8CFF] bg-[#000000]/90 border border-[#6C8CFF]/40 backdrop-blur-md">
                    {project.category}
                  </span>
                  {project.badge && (
                    <span className="px-3 py-1 rounded-full text-[11px] font-mono font-medium text-amber-300 bg-[#000000]/90 border border-amber-500/40 backdrop-blur-md flex items-center gap-1">
                      <Award className="w-3 h-3 text-amber-400" />
                      {project.badge}
                    </span>
                  )}
                </div>

                {/* Quick inspect button */}
                <button
                  onClick={() => setSelectedProject(project)}
                  className="absolute top-4 right-4 p-2 rounded-xl bg-[#000000]/80 border border-white/20 text-white opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-md hover:bg-[#6C8CFF] hover:border-[#6C8CFF]"
                  title="View Details"
                >
                  <Eye className="w-4 h-4" />
                </button>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold font-display text-white mb-1 group-hover:text-[#6C8CFF] transition-colors flex items-center justify-between">
                    <span>{project.title}</span>
                    <span className="text-xs font-mono text-zinc-300 font-normal">
                      0{index + 1}
                    </span>
                  </h3>
                  <p className="text-sm font-medium text-[#6C8CFF] mb-3">
                    {project.subtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-white leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono text-white bg-[#050505] border border-white/15"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-3 pt-4 border-t border-white/15">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#050505] hover:bg-[#111111] text-white border border-white/15 text-xs font-medium transition-colors"
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>GitHub Code</span>
                    </a>

                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#6C8CFF]/15 hover:bg-[#6C8CFF]/25 text-[#6C8CFF] border border-[#6C8CFF]/40 text-xs font-medium transition-colors"
                    >
                      <span>Overview</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-[#000000] border border-white/20 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh] z-10"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-[#111111] text-zinc-300 hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#6C8CFF]/10 text-[#6C8CFF] text-xs font-mono mb-2">
                {selectedProject.category}
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold font-display text-white mb-1">
                {selectedProject.title}
              </h3>
              <p className="text-sm text-[#6C8CFF] mb-6 font-medium">
                {selectedProject.subtitle}
              </p>

              <div className="space-y-6 text-sm text-white">
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-300 mb-2">
                    Project Overview
                  </h4>
                  <p className="leading-relaxed bg-[#050505] p-4 rounded-xl border border-white/15 text-white">
                    {selectedProject.longDescription}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-300 mb-2">
                    Key Features &amp; Technical Implementation
                  </h4>
                  <div className="space-y-2">
                    {selectedProject.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-white text-xs sm:text-sm">
                        <CheckCircle2 className="w-4 h-4 text-[#6C8CFF] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-300 mb-2">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-lg text-xs font-mono text-[#6C8CFF] bg-[#6C8CFF]/15 border border-[#6C8CFF]/40"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/15 flex flex-wrap items-center justify-between gap-3">
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#6C8CFF] text-white font-medium text-xs shadow-lg shadow-[#6C8CFF]/25 hover:bg-[#5b7ce8] transition-all"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>View on GitHub</span>
                </a>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-4 py-2.5 rounded-xl bg-[#111111] text-white hover:bg-[#222222] text-xs font-medium border border-white/10"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
