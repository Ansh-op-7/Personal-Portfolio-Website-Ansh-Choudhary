import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Code,
  Database,
  Terminal,
  Cpu,
  Layers,
  Sparkles,
  Brain,
  Globe,
  Wrench,
  CheckCircle2,
} from "lucide-react";

interface SkillItem {
  name: string;
  note?: string;
  description: string;
  highlight?: boolean;
}

interface SkillCategory {
  title: string;
  category: string;
  icon: React.ReactNode;
  skills: SkillItem[];
}

const TECH_CATEGORIES: SkillCategory[] = [
  {
    title: "Programming Languages",
    category: "languages",
    icon: <Code className="w-4 h-4 text-[#6C8CFF]" />,
    skills: [
      {
        name: "Python",
        description: "Core algorithms, computer vision pipelines, automation scripts, and data manipulation",
        highlight: true,
      },
      {
        name: "C++",
        description: "Data Structures & Algorithms, Object-Oriented Programming, and algorithmic problem solving",
        highlight: true,
      },
      {
        name: "C",
        description: "Foundational programming, memory management, pointers, and low-level CS principles",
      },
      {
        name: "Java",
        note: "Beginner",
        description: "Object-Oriented fundamentals, core syntax, class hierarchy, and algorithmic workflows",
      },
      {
        name: "JavaScript",
        description: "ES6+ syntax, asynchronous programming, DOM manipulation, and interactive client logic",
        highlight: true,
      },
      {
        name: "SQL",
        description: "Relational queries, structured schema design, table joins, indexing, and data filtering",
        highlight: true,
      },
    ],
  },
  {
    title: "Databases & Storage",
    category: "databases",
    icon: <Database className="w-4 h-4 text-sky-400" />,
    skills: [
      {
        name: "MySQL",
        description: "Relational table modeling, foreign keys, normalization, and structured CRUD operations",
        highlight: true,
      },
      {
        name: "RDBMS",
        description: "Relational Database Management Systems architecture, ACID compliance, and schema integrity",
        highlight: true,
      },
      {
        name: "Database Design & Queries",
        description: "Crafting optimized SQL queries, entity-relationship schemas, subqueries, and views",
      },
      {
        name: "Data Storage & Retrieval",
        description: "Designing persistent data pipelines, structured record indexing, and fast querying",
      },
      {
        name: "MongoDB",
        description: "Document-based NoSQL storage, collections, JSON/BSON schemas, and flexible data records",
      },
      {
        name: "Oracle",
        description: "Enterprise relational database concepts, SQL scripts, and structured database management",
      },
    ],
  },
  {
    title: "Web Development",
    category: "web",
    icon: <Globe className="w-4 h-4 text-indigo-400" />,
    skills: [
      {
        name: "Frontend UI Development",
        description: "Building responsive, accessible web interfaces and component-driven user experiences",
        highlight: true,
      },
      {
        name: "Responsive Web Design",
        description: "Fluid cross-device layouts using CSS Grid, Flexbox, media queries, and mobile-first design",
        highlight: true,
      },
      {
        name: "HTML",
        description: "Semantic HTML5 markup, document structure, accessibility standards, and SEO hygiene",
      },
      {
        name: "CSS",
        description: "Modern CSS3 styling, custom animations, transitions, and flexible layout systems",
      },
      {
        name: "JavaScript",
        description: "Dynamic frontend interactivity, event handling, and modern ES6+ browser APIs",
        highlight: true,
      },
      {
        name: "REST API Integration",
        description: "Connecting frontend interfaces with backend HTTP endpoints, asynchronous fetching, and JSON payloads",
      },
    ],
  },
  {
    title: "AI & Computer Vision",
    category: "ai",
    icon: <Brain className="w-4 h-4 text-purple-400" />,
    skills: [
      {
        name: "OpenCV",
        description: "Real-time webcam video stream processing, color masking, filtering, and contour analysis",
        highlight: true,
      },
      {
        name: "TensorFlow",
        description: "Machine learning model inference, neural network execution, and visual data pipelines",
        highlight: true,
      },
      {
        name: "Computer Vision",
        description: "Feature extraction, landmark tracking, real-time image analysis, and visual recognition",
        highlight: true,
      },
      {
        name: "Hand Gesture Recognition",
        description: "21-point skeletal tracking for gesture-based media control and human-computer interfaces",
        highlight: true,
      },
      {
        name: "Python for AI",
        description: "Applied Python libraries (OpenCV, MediaPipe, NumPy) for intelligent computer vision models",
      },
      {
        name: "Machine Learning Fundamentals",
        description: "Supervised learning models, classification, regression, and algorithmic decision boundaries",
      },
    ],
  },
  {
    title: "Developer Tools",
    category: "tools",
    icon: <Wrench className="w-4 h-4 text-emerald-400" />,
    skills: [
      {
        name: "Git",
        description: "Version control workflows, commit tracking, branching, merging, and change history",
        highlight: true,
      },
      {
        name: "GitHub",
        description: "Remote repository hosting, pull requests, collaborative workflows, and project management",
        highlight: true,
      },
      {
        name: "Linux",
        description: "Command-line environment, shell navigation, permissions, and file management",
        highlight: true,
      },
      {
        name: "Visual Studio Code",
        description: "Primary development IDE, extensions configuration, debugging, and integrated terminal",
      },
      {
        name: "Replit",
        description: "Cloud-based collaborative workspace, rapid prototyping, and instant testing environments",
      },
    ],
  },
  {
    title: "Computer Science Fundamentals",
    category: "cs",
    icon: <Layers className="w-4 h-4 text-amber-400" />,
    skills: [
      {
        name: "Data Structures & Algorithms",
        description: "Arrays, linked lists, stacks, queues, trees, binary search, sorting, and algorithmic complexity",
        highlight: true,
      },
      {
        name: "Object-Oriented Programming",
        description: "Encapsulation, inheritance, polymorphism, abstraction, and clean class architectures",
        highlight: true,
      },
      {
        name: "Database Management Systems",
        description: "Relational integrity, normalization, transactional workflows, and indexing concepts",
      },
      {
        name: "Problem Solving",
        description: "Algorithmic logic, analytical reasoning, and competitive programming challenges",
        highlight: true,
      },
      {
        name: "Debugging & Troubleshooting",
        description: "Systematic root-cause diagnosis, console error inspection, and code optimization",
      },
    ],
  },
];

export default function TechStack() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredCategories = TECH_CATEGORIES.filter(
    (cat) => activeFilter === "all" || cat.category === activeFilter
  );

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#000000]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#6C8CFF]/10 border border-[#6C8CFF]/30 text-[#6C8CFF] text-xs font-mono mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>TECHNICAL SKILLS &amp; PROFICIENCIES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-display tracking-tight text-white mb-4">
            Skills &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-[#6C8CFF]">Databases</span>
          </h2>
          <p className="max-w-2xl text-zinc-400 text-base sm:text-lg">
            Core programming languages, databases, web development, AI &amp; computer vision, developer tools, and computer science fundamentals.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mt-8 p-1.5 rounded-2xl bg-[#000000] border border-white/15 max-w-4xl shadow-md">
            {[
              { id: "all", label: "All Skills" },
              { id: "languages", label: "Languages" },
              { id: "databases", label: "Databases" },
              { id: "web", label: "Web Dev" },
              { id: "ai", label: "AI & Vision" },
              { id: "tools", label: "Tools" },
              { id: "cs", label: "CS Fundamentals" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                  activeFilter === tab.id
                    ? "bg-[#6C8CFF] text-white shadow-md shadow-[#6C8CFF]/25"
                    : "text-zinc-200 hover:text-white hover:bg-white/10"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Categories Grid */}
        <div className="space-y-12 max-w-6xl mx-auto">
          {filteredCategories.map((cat, catIdx) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: catIdx * 0.08 }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2 rounded-xl bg-[#050505] border border-white/15">
                  {cat.icon}
                </div>
                <h3 className="text-xl font-bold font-display text-white">
                  {cat.title}
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {cat.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ y: -3, transition: { duration: 0.2 } }}
                    className="bg-[#000000] p-5 rounded-2xl border border-white/15 hover:border-[#6C8CFF]/50 transition-all group flex flex-col justify-between shadow-md"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <h4 className="text-base font-bold font-display text-white group-hover:text-[#6C8CFF] transition-colors">
                          {skill.name}
                        </h4>
                        {skill.note ? (
                          <span className="px-2 py-0.5 rounded text-[10px] font-mono font-medium text-amber-300 bg-amber-500/10 border border-amber-500/30">
                            {skill.note}
                          </span>
                        ) : skill.highlight ? (
                          <span className="w-1.5 h-1.5 rounded-full bg-[#6C8CFF]" />
                        ) : null}
                      </div>
                      <p className="text-xs text-white leading-relaxed">
                        {skill.description}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-zinc-300">
                      <span className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#6C8CFF]" />
                        <span className="text-white">Verified</span>
                      </span>
                      <span className="text-zinc-400">Core Skill</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
