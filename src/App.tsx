import React from "react";
import Navbar from "@/components/Navbar";
import StackSpread from "@/components/ui/stack-spread";
import FluidFlowGrid from "@/components/ui/fluid-flow-grid";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";
import Achievements from "@/components/Achievements";
import Education from "@/components/Education";
import CodingProfiles from "@/components/CodingProfiles";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MouseSpotlight from "@/components/MouseSpotlight";

export default function App() {
  return (
    <div className="min-h-screen bg-[#000000] text-white relative selection:bg-[#6C8CFF]/30 selection:text-white">
      {/* Global Interactive Fluid Flow Grid Background across the entire website */}
      <FluidFlowGrid className="fixed inset-0 pointer-events-none z-0" showOverlay={false} />

      {/* Subtle cursor-following ambient light */}
      <MouseSpotlight />

      {/* Unobtrusive Glassmorphic Navigation Bar */}
      <Navbar />

      {/* Main Content */}
      <main className="relative z-10 bg-transparent">
        {/* 1. Main Homepage — Dark StackSpread Scroll-Driven Scattering Animation */}
        <StackSpread
          scrollLength={340}
          bgColor="#000000"
          textColor="#FFFFFF"
          clusterRotation={true}
          stackScale={0.84}
          cardRadius={12}
          showScrollHint={true}
        />

        {/* 2. About Me Section */}
        <About />

        {/* 3. Work Experience Section */}
        <Experience />

        {/* 4. Featured Projects Section */}
        <Projects />

        {/* 5. Technical Skills Matrix */}
        <TechStack />

        {/* 6. Achievements & Certifications Section */}
        <Achievements />

        {/* 7. Academic Education Timeline */}
        <Education />

        {/* 8. Coding Profiles Section */}
        <CodingProfiles />

        {/* 9. Contact Section */}
        <Contact />
      </main>

      {/* 10. Minimal Dark Footer */}
      <Footer />
    </div>
  );
}
