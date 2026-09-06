import React from 'react';
import {
  GraduationCap,
  BookOpen,
  FileText,
  ExternalLink,
  BadgeCheck
} from 'lucide-react';
import { education, publications, certifications } from '../data/resumeData';

export default function Education() {
  return (
    <section id="education" className="relative py-20 sm:py-28 z-10">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 w-full">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs font-extrabold uppercase tracking-wider mb-3 shadow-sm">
            <GraduationCap size={14} />
            <span>Academic & Research</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Education, Research & Certifications
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Strong foundational engineering background, published academic research in computer vision, and recognized technical certifications.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
          {/* Left Column: Published Paper & Certifications */}
          <div className="flex flex-col gap-8">
            <div>
              <h3 className="text-xl font-extrabold text-slate-900 mb-5 flex items-center gap-2.5">
                <BookOpen size={22} className="text-sky-600" />
                <span>Published Research Paper</span>
              </h3>

              {publications.map((pub, idx) => (
                <div
                  key={idx}
                  className="rounded-3xl p-7 sm:p-9 bg-white/85 backdrop-blur-xl border border-sky-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col gap-4"
                >
                  <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold bg-rose-50 text-rose-700 border border-rose-200 w-fit">
                    <FileText size={14} />
                    <span>Peer-Reviewed Journal Publication</span>
                  </div>

                  <h4 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-snug">
                    {pub.title}
                  </h4>
                  <div className="text-sm font-bold text-sky-600">
                    {pub.journal}
                  </div>
                  <div className="text-xs text-slate-500 font-medium">
                    {pub.issue}
                  </div>

                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    {pub.summary}
                  </p>

                  <div className="flex flex-wrap items-center gap-3 pt-3">
                    <a
                      href={pub.doiUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-500 hover:to-blue-500 text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-full shadow-md shadow-sky-500/25 transition-all"
                    >
                      <span>View DOI Paper</span>
                      <ExternalLink size={14} />
                    </a>

                    <a
                      href={pub.researchGateUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-700 font-bold text-xs sm:text-sm px-5 py-2.5 rounded-full border border-slate-300 hover:border-sky-400 transition-all shadow-sm"
                    >
                      <span>ResearchGate</span>
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-xl font-extrabold text-slate-900 mb-5 flex items-center gap-2.5">
                <BadgeCheck size={22} className="text-sky-600" />
                <span>Verified Certifications</span>
              </h3>

              <div className="flex flex-col gap-4">
                {certifications.map((cert, cIdx) => (
                  <div
                    key={cIdx}
                    className="rounded-2xl p-5 bg-white/85 backdrop-blur-xl border border-slate-200/80 shadow-sm hover:shadow-md hover:border-sky-300 flex items-center justify-between gap-4 transition-all"
                  >
                    <div>
                      <h4 className="font-bold text-sm sm:text-base text-slate-900 mb-0.5">
                        {cert.title}
                      </h4>
                      <p className="text-xs text-slate-500 font-medium">
                        {cert.issuer} • {cert.date}
                      </p>
                    </div>

                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-700 bg-sky-50 hover:bg-sky-600 hover:text-white px-3.5 py-1.5 rounded-full border border-sky-200 transition-all"
                    >
                      <span>Verify</span>
                      <ExternalLink size={12} />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Academic Timeline */}
          <div>
            <h3 className="text-xl font-extrabold text-slate-900 mb-5 flex items-center gap-2.5">
              <GraduationCap size={22} className="text-sky-600" />
              <span>Academic Timeline</span>
            </h3>

            <div className="flex flex-col gap-5">
              {education.map((edu, eIdx) => (
                <div
                  key={eIdx}
                  className="rounded-3xl p-6 sm:p-7 bg-white/85 backdrop-blur-xl border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex items-start gap-4 sm:gap-5"
                >
                  <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-200 text-sky-600 flex items-center justify-center shrink-0 shadow-sm">
                    <GraduationCap size={22} />
                  </div>

                  <div className="flex flex-col gap-1 flex-grow">
                    <h4 className="text-base sm:text-lg font-extrabold text-slate-900">
                      {edu.degree}
                    </h4>
                    <div className="text-xs sm:text-sm font-bold text-sky-600">
                      {edu.field}
                    </div>
                    <div className="text-xs sm:text-sm text-slate-600">
                      {edu.institution}
                    </div>
                    <div className="text-xs text-slate-400">
                      {edu.location} • {edu.year}
                    </div>

                    <div className="flex items-center gap-2 flex-wrap pt-2">
                      <span className="inline-flex items-center text-xs font-extrabold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200/60">
                        {edu.score}
                      </span>
                      <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-sky-50 text-sky-700 border border-sky-200/60">
                        {edu.badge}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
