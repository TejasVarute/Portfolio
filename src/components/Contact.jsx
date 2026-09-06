import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Copy,
  Check,
  Download,
  ExternalLink,
  MessageCircle,
  ArrowUpRight
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/resumeData';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [toastMsg, setToastMsg] = useState('');

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    showToast('Email address copied to clipboard!');
    setTimeout(() => setCopied(false), 2500);
  };

  const showToast = (msg) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(''), 3000);
  };

  const handleDownloadResume = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.8 },
      colors: ['#0284c7', '#2563eb', '#0ea5e9', '#38bdf8']
    });
  };

  return (
    <section id="contact" className="relative py-20 sm:py-28 z-10">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 w-full">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs font-extrabold uppercase tracking-wider mb-3 shadow-sm">
            <Mail size={14} />
            <span>Connect & Collaborate</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Let's Build Something Impactful
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Currently open to senior engineering roles, technical lead opportunities, AI/RAG consulting, and high-impact full-stack collaborations.
          </p>
        </div>

        {/* 4 Professional Direct Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto mb-10">
          {/* Card 1: Email */}
          <div className="rounded-3xl p-7 sm:p-8 bg-white/85 backdrop-blur-xl border border-slate-200/80 shadow-md hover:shadow-xl hover:border-sky-300/80 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-200 text-sky-600 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                  <Mail size={22} />
                </div>
                <button
                  onClick={copyEmailToClipboard}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold text-slate-600 bg-slate-50 hover:bg-white border border-slate-200 hover:border-sky-400 hover:text-sky-600 transition-all cursor-pointer shadow-sm"
                  title="Copy email to clipboard"
                >
                  {copied ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
                  <span>{copied ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>

              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                Email Address
              </div>
              <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-2">
                {personalInfo.email}
              </h3>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-6">
                Fastest response channel for technical opportunities, platform architecture inquiries, and project discussions.
              </p>
            </div>

            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-500 hover:to-blue-500 text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-full shadow-md shadow-sky-500/25 hover:shadow-lg transition-all"
            >
              <span>Send Direct Email</span>
              <ArrowUpRight size={16} />
            </a>
          </div>

          {/* Card 2: LinkedIn */}
          <div className="rounded-3xl p-7 sm:p-8 bg-white/85 backdrop-blur-xl border border-slate-200/80 shadow-md hover:shadow-xl hover:border-sky-300/80 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-200 text-sky-600 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                  <LinkedinIcon size={22} color="#0284c7" />
                </div>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-sky-50 text-sky-700 border border-sky-200/60">
                  <span>Professional Profile</span>
                </span>
              </div>

              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                LinkedIn Network
              </div>
              <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-2">
                linkedin.com/in/tejasvarute
              </h3>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-6">
                Connect for professional updates, endorsements, career engagements, and technical discussions.
              </p>
            </div>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white text-slate-800 hover:text-sky-600 font-bold text-xs sm:text-sm px-6 py-3 rounded-full border border-slate-300 hover:border-sky-400 shadow-sm hover:shadow-md transition-all"
            >
              <span>Connect on LinkedIn</span>
              <ExternalLink size={15} />
            </a>
          </div>

          {/* Card 3: Phone & WhatsApp */}
          <div className="rounded-3xl p-7 sm:p-8 bg-white/85 backdrop-blur-xl border border-slate-200/80 shadow-md hover:shadow-xl hover:border-sky-300/80 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-200 text-sky-600 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                  <Phone size={22} />
                </div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Available</span>
                </span>
              </div>

              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                Phone / WhatsApp
              </div>
              <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-2">
                {personalInfo.phone}
              </h3>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-6">
                Direct mobile line available for urgent calls, scheduled discussions, or quick messaging over WhatsApp.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <a
                href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                className="inline-flex items-center justify-center gap-1.5 bg-white text-slate-800 hover:text-sky-600 font-bold text-xs sm:text-sm px-4 py-3 rounded-full border border-slate-300 hover:border-sky-400 shadow-sm transition-all"
              >
                <Phone size={14} />
                <span>Call Now</span>
              </a>
              <a
                href={`https://wa.me/${personalInfo.phone.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm px-4 py-3 rounded-full shadow-md shadow-emerald-600/25 transition-all"
              >
                <MessageCircle size={15} />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Card 4: GitHub */}
          <div className="rounded-3xl p-7 sm:p-8 bg-white/85 backdrop-blur-xl border border-slate-200/80 shadow-md hover:shadow-xl hover:border-sky-300/80 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-200 text-sky-600 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                  <GithubIcon size={22} />
                </div>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-700">
                  <span>Open Source</span>
                </span>
              </div>

              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                GitHub Repositories
              </div>
              <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-2">
                github.com/tejasvarute
              </h3>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-6">
                Explore production repositories, Agentic RAG implementations, scraping pipelines, and full-stack solutions.
              </p>
            </div>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white text-slate-800 hover:text-sky-600 font-bold text-xs sm:text-sm px-6 py-3 rounded-full border border-slate-300 hover:border-sky-400 shadow-sm hover:shadow-md transition-all"
            >
              <span>Explore GitHub</span>
              <ExternalLink size={15} />
            </a>
          </div>
        </div>

        {/* Bottom Banner: Location & Resume Downloads */}
        <div className="max-w-5xl mx-auto rounded-3xl p-6 sm:p-8 bg-white/80 backdrop-blur-xl border border-sky-200/60 shadow-md flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-200 text-sky-600 flex items-center justify-center shrink-0">
              <MapPin size={22} />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Current Location
              </div>
              <div className="text-base font-extrabold text-slate-900">
                {personalInfo.location}
              </div>
            </div>
          </div>
        </div>

        {/* Toast Alert */}
        {toastMsg && (
          <div className="fixed bottom-6 right-6 bg-slate-900 text-white px-5 py-3 rounded-full text-sm font-bold shadow-2xl z-50 flex items-center gap-2">
            <Check size={16} className="text-emerald-400" />
            <span>{toastMsg}</span>
          </div>
        )}
      </div>
    </section>
  );
}
