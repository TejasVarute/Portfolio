import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { experiences } from '../data/resumeData';

export default function Experience() {
  return (
    <section id="experience" className="relative py-20 sm:py-28 z-10">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 w-full">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs font-extrabold uppercase tracking-wider mb-3 shadow-sm">
            <Briefcase size={14} />
            <span>Career Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Professional Experience
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Leading backend architecture, AI/RAG platform engineering, and high-velocity multi-tenant development in fast-paced production environments.
          </p>
        </div>

        {/* Interactive Vertical Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical spine line */}
          <div className="hidden md:block absolute left-8 top-10 bottom-10 w-0.5 bg-gradient-to-b from-sky-500 via-blue-400 to-slate-200" />

          <div className="flex flex-col gap-10">
            {experiences.map((exp, index) => (
              <div key={index} className="relative md:pl-20">
                {/* Node marker on timeline spine */}
                <div className="hidden md:flex absolute left-5.5 top-8 w-5 h-5 rounded-full bg-white border-2 border-sky-600 shadow-md shadow-sky-500/30 items-center justify-center -translate-x-1/2 z-20">
                  <span className={`w-2 h-2 rounded-full ${exp.isCurrent ? 'bg-emerald-500 animate-ping' : 'bg-sky-600'}`} />
                </div>

                <div
                  className={`rounded-3xl p-7 sm:p-10 bg-white/90 backdrop-blur-xl border shadow-md hover:shadow-2xl hover:border-sky-300 transition-all duration-300 relative overflow-hidden group hover:-translate-y-1 ${
                    exp.isCurrent
                      ? 'border-sky-300/90 shadow-sky-950/5 ring-1 ring-sky-500/10'
                      : 'border-slate-200/80'
                  }`}
                >
                  {/* Subtle hover gradient illumination */}
                  <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-sky-100/40 via-transparent to-transparent rounded-bl-full pointer-events-none group-hover:from-sky-200/40 transition-colors" />

                  <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-5 relative z-10">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-1 group-hover:text-sky-600 transition-colors">
                        {exp.role}
                      </h3>
                      <div className="text-base sm:text-lg font-bold text-sky-600">
                        {exp.company}
                      </div>
                    </div>

                    <div className="flex items-center gap-2.5 flex-wrap">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-slate-100/90 text-slate-600 border border-slate-200/60">
                        <MapPin size={13} />
                        <span>{exp.location}</span>
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-slate-100/90 text-slate-600 border border-slate-200/60">
                        <Calendar size={13} />
                        <span>{exp.period}</span>
                      </span>
                      {exp.isCurrent && (
                        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-extrabold bg-emerald-50 text-emerald-700 border border-emerald-200 shadow-xs">
                          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                          <span>Present</span>
                        </span>
                      )}
                    </div>
                  </div>

                  <p className="text-slate-600 text-sm sm:text-base mb-6 leading-relaxed relative z-10">
                    {exp.description}
                  </p>

                  <ul className="space-y-3 mb-6 list-none relative z-10">
                    {exp.highlights.map((item, idx) => (
                      <li
                        key={idx}
                        className="relative pl-6 text-sm sm:text-base text-slate-600 leading-relaxed before:content-['▹'] before:absolute before:left-0 before:text-sky-600 before:font-black before:text-lg"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 pt-2 relative z-10">
                    {exp.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-xs font-semibold px-3 py-1 rounded-lg bg-slate-50 border border-slate-200/80 text-slate-700 hover:border-sky-400 hover:text-sky-600 hover:bg-white transition-all shadow-2xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
