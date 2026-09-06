import React from 'react';

export default function MotionObject() {
  return (
    <div className="absolute inset-0 pointer-events-none flex items-center justify-center -z-10 overflow-visible">
      {/* Radiant Ambient Core Glow */}
      <div className="absolute w-[380px] h-[380px] sm:w-[480px] sm:h-[480px] rounded-full bg-gradient-to-tr from-sky-400/25 via-blue-500/15 to-cyan-300/20 blur-3xl opacity-70 animate-pulse" />

      {/* Primary Cyber Orbit Track */}
      <div
        className="absolute w-[360px] h-[360px] sm:w-[460px] sm:h-[460px] rounded-full border border-sky-400/25 animate-spin"
        style={{ animationDuration: '30s' }}
      >
        {/* Orbiting Tech Nodes */}
        <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-white border-2 border-sky-500 shadow-[0_0_12px_#0284c7]" />
        <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_10px_#2563eb]" />
      </div>

      {/* Secondary Reverse Orbit Track */}
      <div
        className="absolute w-[300px] h-[300px] sm:w-[390px] sm:h-[390px] rounded-full border border-dashed border-sky-300/30 animate-spin"
        style={{
          animationDuration: '22s',
          animationDirection: 'reverse',
        }}
      >
        <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_10px_#06b6d4]" />
        <div className="absolute top-1/2 -left-1.5 -translate-y-1/2 w-2 h-2 rounded-full bg-sky-400 shadow-[0_0_8px_#38bdf8]" />
      </div>

      {/* Inner Decorative Grid Ring */}
      <div
        className="absolute w-[240px] h-[240px] sm:w-[320px] sm:h-[320px] rounded-full border border-sky-200/40"
        style={{
          background: 'radial-gradient(circle, rgba(14, 165, 233, 0.05) 0%, transparent 70%)'
        }}
      />
    </div>
  );
}
