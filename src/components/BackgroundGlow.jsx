import React, { useEffect, useState } from 'react';

export default function BackgroundGlow() {
  const [mousePos, setMousePos] = useState({ x: -500, y: -500 });

  useEffect(() => {
    let frameId;
    let targetX = -500;
    let targetY = -500;
    let currentX = -500;
    let currentY = -500;

    const handleMouseMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const updatePosition = () => {
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;
      setMousePos({ x: Math.round(currentX), y: Math.round(currentY) });
      frameId = requestAnimationFrame(updatePosition);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    frameId = requestAnimationFrame(updatePosition);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Micro-dot grid background pattern */}
      <div className="absolute inset-0 bg-grid-dots opacity-70" />

      {/* Interactive Cursor Spotlight Glow */}
      <div
        className="absolute w-[500px] h-[500px] rounded-full blur-[100px] pointer-events-none opacity-45 transition-opacity duration-500"
        style={{
          transform: `translate(${mousePos.x - 250}px, ${mousePos.y - 250}px)`,
          background: 'radial-gradient(circle, rgba(14, 165, 233, 0.25) 0%, rgba(37, 99, 235, 0.12) 40%, transparent 70%)',
        }}
      />

      {/* Ambient glowing gradient orbs in signature blueish/slate theme */}
      <div className="absolute -top-28 -left-28 w-[550px] h-[550px] rounded-full blur-[90px] bg-gradient-to-br from-sky-400/25 to-sky-600/15 pointer-events-none opacity-80 orb-drift-1" />
      <div className="absolute top-44 -right-36 w-[600px] h-[600px] rounded-full blur-[95px] bg-gradient-to-bl from-blue-600/20 to-sky-400/15 pointer-events-none opacity-75 orb-drift-2" />
      <div className="absolute bottom-1/4 left-[8%] w-[500px] h-[500px] rounded-full blur-[90px] bg-gradient-to-tr from-cyan-400/18 to-sky-600/12 pointer-events-none opacity-70 orb-drift-1" />
      <div className="absolute -bottom-36 right-[5%] w-[650px] h-[650px] rounded-full blur-[100px] bg-gradient-to-tl from-sky-600/20 to-slate-700/10 pointer-events-none opacity-80 orb-drift-2" />
    </div>
  );
}
