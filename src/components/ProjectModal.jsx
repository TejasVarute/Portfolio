import React, { useEffect } from 'react';
import { X, ExternalLink, FileText, Video, Cpu, CheckCircle2, ShieldCheck } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow || '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  const hasLinks = Boolean(
    project.links?.github ||
    project.links?.live ||
    project.links?.paper ||
    project.links?.youtube
  );

  return (
    <div
      className="fixed inset-0 bg-slate-950/70 backdrop-blur-md z-50 flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      <div
        className="relative max-w-3xl w-full max-h-[90vh] overflow-y-auto rounded-3xl p-6 sm:p-9 bg-white border border-sky-200/80 shadow-2xl shadow-slate-950/20"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-5 right-5 w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 flex items-center justify-center transition-colors cursor-pointer z-10"
          onClick={onClose}
          aria-label="Close Project Details"
        >
          <X size={20} />
        </button>

        {/* Project Image Preview Banner */}
        <div className="relative w-full aspect-[21/9] sm:aspect-[2.2/1] rounded-2xl overflow-hidden mb-6 border border-slate-200/80 bg-slate-100 shadow-xs">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-top"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              e.currentTarget.parentElement.style.background = 'linear-gradient(135deg, #0284c7 0%, #2563eb 100%)';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent" />
          <span className="absolute bottom-3 left-3 px-3 py-1 rounded-full text-xs font-extrabold bg-white/95 backdrop-blur-md text-sky-800 border border-sky-200 shadow-xs">
            {project.badge}
          </span>
          {project.statusBadge && (
            <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-white/90 backdrop-blur-md text-slate-700 border border-slate-200 shadow-xs">
              {project.statusBadge}
            </span>
          )}
        </div>

        <div className="mb-5 pr-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-1">
            {project.title}
          </h2>
          <p className="text-sm sm:text-base font-bold text-sky-600">
            {project.subtitle}
          </p>
        </div>

        <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
          {project.overview}
        </p>

        {/* System Architecture Flow Diagram */}
        <div className="my-6">
          <div className="flex items-center gap-2 font-extrabold text-sm text-slate-900 mb-2">
            <Cpu size={18} className="text-sky-600" />
            <span>Architecture & Data Flow</span>
          </div>
          <div className="p-5 rounded-2xl bg-slate-50 border border-dashed border-sky-300 font-mono text-xs sm:text-sm text-slate-800 leading-relaxed">
            {project.architectureHighlights}
          </div>
        </div>

        {/* Key Engineering Highlights */}
        <div className="mb-6">
          <h4 className="font-extrabold text-sm text-slate-900 mb-3">
            Key Engineering Highlights
          </h4>
          <ul className="space-y-2.5 list-none">
            {project.bulletPoints.map((bp, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-600">
                <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                <span>{bp}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies */}
        <div className="mb-8">
          <h4 className="font-extrabold text-sm text-slate-900 mb-3">
            Technologies & Libraries
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((t, idx) => (
              <span
                key={idx}
                className="text-xs font-semibold px-3 py-1 rounded-lg bg-slate-50 border border-slate-200 text-slate-700"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Action Links */}
        <div className="pt-5 border-t border-slate-100">
          {hasLinks ? (
            <div className="flex flex-wrap items-center gap-3">
              {project.links?.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-500 hover:to-blue-500 text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-full shadow-md shadow-sky-500/25 transition-all"
                >
                  <ExternalLink size={16} />
                  <span>Open Live Application</span>
                </a>
              )}
              {project.links?.paper && (
                <a
                  href={project.links.paper}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-500 hover:to-pink-500 text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-full shadow-md shadow-rose-500/25 transition-all"
                >
                  <FileText size={16} />
                  <span>Read Published Paper</span>
                </a>
              )}
              {project.links?.youtube && (
                <a
                  href={project.links.youtube}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-amber-50 hover:bg-amber-100 text-amber-800 border border-amber-200 font-bold text-xs sm:text-sm px-5 py-2.5 rounded-full transition-all"
                >
                  <Video size={16} />
                  <span>Watch Demo Video</span>
                </a>
              )}
              {project.links?.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs sm:text-sm px-5 py-2.5 rounded-full transition-all"
                >
                  <GithubIcon size={16} />
                  <span>GitHub Repository</span>
                </a>
              )}
            </div>
          ) : (
            <div className="flex items-center gap-3 p-4 rounded-2xl bg-sky-50/70 border border-sky-200/80 text-sky-900 text-xs sm:text-sm">
              <ShieldCheck size={20} className="text-sky-600 shrink-0" />
              <span>
                <strong>Enterprise In-House Platform:</strong> Production infrastructure and source repository are internal client assets protected under enterprise privacy & deployment protocols.
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
