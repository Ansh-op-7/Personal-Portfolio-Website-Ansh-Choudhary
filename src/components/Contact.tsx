import React, { useState } from "react";
import { motion } from "motion/react";
import {
  Mail,
  Send,
  Code2,
  Copy,
  Check,
  MessageSquare,
  AlertCircle,
  CheckCircle2,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/SocialIcons";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const emailAddress = "anshchaudhary8868@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus("error");
      setErrorMsg("Please fill out all required fields.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus("error");
      setErrorMsg("Please provide a valid email address.");
      return;
    }

    setStatus("submitting");
    setErrorMsg("");

    // Simulate sending message with direct confirmation
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#000000]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#6C8CFF]/10 border border-[#6C8CFF]/30 text-[#6C8CFF] text-xs font-mono mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>LET'S CONNECT</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-display tracking-tight text-white mb-4">
            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-[#6C8CFF]">Touch</span>
          </h2>
          <p className="max-w-2xl text-zinc-400 text-base sm:text-lg">
            Have an internship opportunity, project collaboration, or question? Send a message or reach out directly!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-5xl mx-auto items-start">
          {/* Left Column: Direct Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="bg-[#000000] p-6 sm:p-8 rounded-3xl border border-white/15 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#6C8CFF]/10 rounded-full blur-2xl pointer-events-none" />

              <h3 className="text-xl font-bold font-display text-white mb-2">
                Direct Contact
              </h3>
              <p className="text-xs sm:text-sm text-zinc-200 mb-6 leading-relaxed">
                Connect via email or professional profiles.
              </p>

              {/* Email item */}
              <div className="p-4 rounded-2xl bg-[#050505] border border-white/10 space-y-3 mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono text-zinc-300">EMAIL</span>
                  <button
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-1 text-xs text-[#6C8CFF] hover:text-[#5b7ce8] font-mono transition-colors"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>

                <a
                  href={`mailto:${emailAddress}`}
                  className="text-xs sm:text-sm font-mono font-medium text-white hover:text-[#6C8CFF] transition-colors block break-all"
                >
                  {emailAddress}
                </a>
              </div>

              {/* Social Channels */}
              <div className="space-y-3">
                <span className="text-xs font-mono text-zinc-300 uppercase tracking-wider block">
                  Profiles
                </span>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href="https://github.com/Ansh-op-7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-[#050505] border border-white/10 hover:border-[#6C8CFF]/40 flex items-center gap-2 text-xs text-white hover:text-white transition-all"
                  >
                    <GithubIcon className="w-4 h-4 text-[#6C8CFF]" />
                    <span>GitHub</span>
                  </a>

                  <a
                    href="https://leetcode.com/u/Ansh_Choudhary20/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-[#050505] border border-white/10 hover:border-amber-500/40 flex items-center gap-2 text-xs text-white hover:text-amber-400 transition-all"
                  >
                    <Code2 className="w-4 h-4 text-amber-500" />
                    <span>LeetCode</span>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/ansh-chaudhary-69286130b/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-[#050505] border border-white/10 hover:border-[#6C8CFF]/50 flex items-center gap-2 text-xs text-white hover:text-white transition-all col-span-2"
                  >
                    <LinkedinIcon className="w-4 h-4 text-[#6C8CFF]" />
                    <span>LinkedIn Profile</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <div className="bg-[#000000] p-6 sm:p-8 rounded-3xl border border-white/15 shadow-2xl relative">
              <h3 className="text-xl font-bold font-display text-white mb-2">
                Send a Message
              </h3>
              <p className="text-xs sm:text-sm text-zinc-200 mb-6">
                Fill out the form below to initiate an inquiry or discussion.
              </p>

              {status === "success" ? (
                <div className="p-8 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white font-display">Message Received!</h4>
                  <p className="text-xs sm:text-sm text-zinc-200">
                    Thank you for reaching out, Ansh will review your message soon.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-4 px-4 py-2 rounded-xl bg-emerald-500/20 text-emerald-300 text-xs font-mono hover:bg-emerald-500/30 transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {status === "error" && (
                    <div className="p-3 rounded-xl bg-red-950/40 border border-red-500/30 flex items-center gap-2 text-xs text-red-300">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-white mb-1.5 font-medium">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-[#050505] border border-white/15 text-white text-sm focus:outline-none focus:border-[#6C8CFF] placeholder:text-zinc-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-white mb-1.5 font-medium">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#050505] border border-white/15 text-white text-sm focus:outline-none focus:border-[#6C8CFF] placeholder:text-zinc-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-white mb-1.5 font-medium">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Internship / Project Inquiry / Discussion"
                      className="w-full px-4 py-3 rounded-xl bg-[#050505] border border-white/15 text-white text-sm focus:outline-none focus:border-[#6C8CFF] placeholder:text-zinc-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-white mb-1.5 font-medium">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Ansh, I'd like to connect regarding..."
                      className="w-full px-4 py-3 rounded-xl bg-[#050505] border border-white/15 text-white text-sm focus:outline-none focus:border-[#6C8CFF] placeholder:text-zinc-500 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full py-3.5 px-6 rounded-xl bg-[#6C8CFF] hover:bg-[#5b7ce8] text-white font-medium text-sm shadow-lg shadow-[#6C8CFF]/20 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
                  >
                    {status === "submitting" ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
