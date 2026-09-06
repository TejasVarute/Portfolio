import React, { useState, useEffect } from 'react';
import {
  Download,
  ArrowRight,
  Mail,
  Bot,
  Globe,
  Layers,
  BookOpen,
  Award
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/resumeData';
import MotionObject from './MotionObject';

const TITLES = [
  "Full Stack Python Developer",
  "AI & Agentic RAG Engineer",
  "FastAPI & React Developer",
  "Backend Systems Architect",
];

const STATS_DATA = [
  {
    icon: Globe,
    value: "1+",
    label: "Professional Experience",
    sub: "Full stack Python developer "
  },
  {
    icon: Layers,
    value: "10+",
    label: "Systems & Apps Built",
    sub: "Production SaaS, AI, and desktop platforms"
  },
  {
    icon: BookOpen,
    value: "1",
    label: "Published Research Paper",
    sub: "Peer-reviewed journal paper in IJEAST"
  },
  {
    icon: Award,
    value: "8.4",
    label: "B.Tech CGPA",
    sub: "ECE Graduate • Top 15% class rank"
  }
];

const CORE_STACK = [
  { name: "Python", color: "text-sky-700 bg-sky-50 border-sky-200" },
  { name: "FastAPI", color: "text-emerald-700 bg-emerald-50 border-emerald-200" },
  { name: "Django", color: "text-slate-800 bg-slate-100 border-slate-200" },
  { name: "React.js", color: "text-blue-700 bg-blue-50 border-blue-200" },
  { name: "Qdrant DB", color: "text-rose-700 bg-rose-50 border-rose-200" },
  { name: "PostgreSQL", color: "text-indigo-700 bg-indigo-50 border-indigo-200" },
];

export default function Hero() {
  const [avatarPose, setAvatarPose] = useState('waving');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const currentFullText = TITLES[currentTextIndex];

    if (isDeleting) {
      timer = setTimeout(() => {
        setDisplayText(currentFullText.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % TITLES.length);
        }
      }, 35);
    } else {
      timer = setTimeout(() => {
        setDisplayText(currentFullText.substring(0, displayText.length + 1));
        if (displayText === currentFullText) {
          timer = setTimeout(() => setIsDeleting(true), 2200);
        }
      }, 65);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentTextIndex]);

  const handleDownloadResume = () => {
    confetti({
      particleCount: 90,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#0284c7', '#2563eb', '#0ea5e9', '#38bdf8', '#334155']
    });
  };

  return (
    <section id="home" className="relative pt-32 sm:pt-40 lg:pt-44 pb-16 sm:pb-24 min-h-[90vh] flex items-center z-10">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 xl:gap-20 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            
            {/* Live Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-sky-200 shadow-sm text-slate-800 text-xs sm:text-sm font-semibold mb-6">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span>Available for Full-Time Roles & Consulting</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black tracking-tight text-slate-900 leading-[1.12] mb-3">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-slate-950 via-sky-800 to-sky-600 bg-clip-text text-transparent">
                Tejas Varute
              </span>
            </h1>

            {/* Dynamic Typewriter Role */}
            <div className="flex items-center justify-center lg:justify-start gap-2 text-xl sm:text-2xl xl:text-3xl font-extrabold text-sky-600 mb-5 min-h-[2.6rem]">
              <span>{displayText}</span>
              <span className="inline-block w-1 h-6 sm:h-7 bg-sky-600 animate-blink" />
            </div>

            {/* Narrative Bio */}
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mb-8">
              Independent <strong className="text-slate-900 font-extrabold">Full Stack Python Developer</strong> crafting
              high-performance web applications, resilient <strong className="text-slate-900 font-extrabold">FastAPI & Django REST APIs</strong>,
              and intelligent <strong className="text-slate-900 font-extrabold">Agentic RAG & Qdrant</strong> search workflows.
              Experienced in delivering end-to-end architectures from scalable multi-tenant platforms to autonomous data pipelines.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8 w-full sm:w-auto">
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-sky-600 via-blue-600 to-sky-700 hover:from-sky-500 hover:to-blue-600 text-white font-bold text-sm sm:text-base px-8 py-3.5 rounded-full shadow-lg shadow-sky-500/30 hover:shadow-xl hover:shadow-sky-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
              >
                <span>Explore Featured Work</span>
                <ArrowRight size={18} />
              </a>

              <a
                href={personalInfo.localResumePdf}
                download="Tejas_Varute_Resume.pdf"
                onClick={handleDownloadResume}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white text-slate-700 hover:text-sky-600 hover:border-sky-400 font-bold text-sm sm:text-base px-7 py-3.5 rounded-full border border-slate-300 hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
              >
                <Download size={18} />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Social Channels */}
            <div className="flex items-center gap-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-sky-600 hover:border-sky-400 hover:shadow-md hover:-translate-y-0.5 transition-all shadow-sm"
                aria-label="GitHub Profile"
                title="GitHub"
              >
                <GithubIcon size={20} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-sky-600 hover:border-sky-400 hover:shadow-md hover:-translate-y-0.5 transition-all shadow-sm"
                aria-label="LinkedIn Profile"
                title="LinkedIn"
              >
                <LinkedinIcon size={20} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="w-11 h-11 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-sky-600 hover:border-sky-400 hover:shadow-md hover:-translate-y-0.5 transition-all shadow-sm"
                aria-label="Send Email"
                title="Email Me"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Hero Right Visuals: Authentic 3D Avatar with Motion Glow */}
          <div className="lg:col-span-5 relative flex flex-col items-center justify-center order-first lg:order-last my-6 lg:my-0">
            
            {/* 3D Motion Object: Clean Orbital Ambient Tracks */}
            <MotionObject />

            {/* Stage Container */}
            <div className="relative w-full max-w-[340px] sm:max-w-[400px] flex flex-col items-center">
              
              {/* Floating Live Architecture Widget (Top Right) */}
              <div className="absolute top-2 -right-2 sm:-right-4 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-xl border border-sky-200/90 shadow-lg shadow-sky-950/10 z-30 animate-float-1 pointer-events-none">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-extrabold text-slate-800">FastAPI & Python</span>
              </div>

              {/* Floating AI & Vector DB Widget (Bottom Left) */}
              <div className="absolute bottom-16 -left-2 sm:-left-4 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-xl border border-sky-200/90 shadow-lg shadow-sky-950/10 z-30 animate-float-2 pointer-events-none">
                <Bot size={13} className="text-sky-600" />
                <span className="text-xs font-extrabold text-slate-800">Agentic RAG & Qdrant</span>
              </div>

              {/* Avatar Showcase Container with Smooth Float & Glowing Frame */}
              <div className="relative w-[290px] h-[290px] sm:w-[350px] sm:h-[350px] flex items-center justify-center animate-float-1">
                {/* Radiant Ambient Core Glow */}
                <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-sky-400/35 via-blue-500/25 to-cyan-400/30 blur-2xl animate-pulse -z-10" />
                
                {/* Gradient Ring Frame */}
                <div className="absolute -inset-1.5 rounded-full bg-gradient-to-tr from-sky-400 via-blue-600 to-sky-400 opacity-60 blur-xs -z-10" />

                {/* Avatar Image Card */}
                <div className="relative w-full h-full rounded-full p-2.5 bg-white shadow-2xl shadow-sky-500/20 border-4 border-white overflow-hidden transition-transform duration-500 hover:scale-[1.02] group">
                  <img
                    src={avatarPose === 'waving' ? personalInfo.avatarAnimated : personalInfo.avatarIcon}
                    alt="Tejas Varute Avatar"
                    className="w-full h-full object-cover rounded-full select-none transition-all duration-300 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.src = personalInfo.profileImage;
                    }}
                  />
                </div>
              </div>

              {/* Integrated Tech Stack Ribbon */}
              <div className="mt-3 flex items-center justify-center flex-wrap gap-1.5 px-4 py-2 rounded-full bg-white/90 backdrop-blur-md border border-sky-200/80 shadow-md shadow-slate-900/5 z-20">
                {CORE_STACK.map((tech, idx) => (
                  <span
                    key={idx}
                    className={`text-[11px] font-extrabold px-2.5 py-0.5 rounded-full border shadow-2xs ${tech.color}`}
                  >
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 4-Column Balanced Personal Metrics Bar */}
        <div className="mt-16 sm:mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6 sm:p-8 rounded-3xl bg-white/90 backdrop-blur-xl border border-sky-200/70 shadow-xl shadow-slate-900/5">
          {STATS_DATA.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div
                key={idx}
                className="flex items-start gap-4 p-3 rounded-2xl hover:bg-sky-50/50 transition-colors border-b sm:border-b-0 border-slate-100 last:border-b-0 sm:border-r-0 lg:border-r lg:border-slate-200/80 lg:last:border-r-0 lg:pr-6"
              >
                <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-200 text-sky-600 flex items-center justify-center shrink-0 shadow-sm">
                  <IconComp size={22} />
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl sm:text-3xl font-black tracking-tight bg-gradient-to-r from-sky-600 via-blue-600 to-sky-700 bg-clip-text text-transparent">
                    {item.value}
                  </span>
                  <span className="text-sm font-bold text-slate-900 mt-0.5">
                    {item.label}
                  </span>
                  <span className="text-xs text-slate-500 mt-0.5">
                    {item.sub}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
