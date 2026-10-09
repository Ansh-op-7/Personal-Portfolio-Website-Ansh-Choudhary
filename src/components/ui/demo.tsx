// This is a file with a demo for your component 
// That's what users will see in the preview 
// Create new files in this directory to add more demos 
 
import FluidFlowGrid from "@/components/ui/fluid-flow-grid"; 
 
// ONLY DEFAULT EXPORT WILL BE TREATED AS A DEMO 
export default function DemoOne() { 
  return <FluidFlowGrid showOverlay={true} className="relative w-full h-screen overflow-hidden select-none bg-slate-950" />; 
} 
