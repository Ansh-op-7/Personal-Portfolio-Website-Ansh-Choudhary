import React, { useEffect, useState } from "react";

export default function MouseSpotlight() {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [isPointerDevice, setIsPointerDevice] = useState(false);

  useEffect(() => {
    // Only activate for fine pointer devices (desktop mouse)
    const mq = window.matchMedia("(pointer: fine)");
    setIsPointerDevice(mq.matches);

    if (!mq.matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  if (!isPointerDevice) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
      style={{
        background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(56, 189, 248, 0.05), transparent 80%)`,
      }}
    />
  );
}
