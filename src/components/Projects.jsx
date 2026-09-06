import React, { useState } from 'react';
import { Layers, ExternalLink, FileText, Video, Cpu } from 'lucide-react';
import { GithubIcon } from './Icons';
import { projects } from '../data/resumeData';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All Projects');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = [
    'All Projects',
    'Featured (Resume)',
    'Full-Stack & SaaS',
    'Python & CV',
    'Web Applications',
  ];

  const getFilteredProjects = (cat) => {
    if (cat === 'All Projects') return projects;
    if (cat === 'Featured (Resume)') return projects.filter((p) => p.featured);
    if (cat === 'Full-Stack & SaaS') {
      return projects.filter(
        (p) => p.categories?.includes('Full-Stack SaaS') || p.category === 'Full-Stack SaaS'
      );
    }
    if (cat === 'Python & CV') {
      return projects.filter(
        (p) => p.categories?.includes('Python & CV') || p.category === 'Python & CV'
      );
    }
    if (cat === 'Web Applications') {
      return projects.filter(
        (p) => p.categories?.includes('Web Applications') || p.category === 'Web Applications'
      );
    }
    return projects;
  };

  const filteredProjects = getFilteredProjects(activeCategory);

  const getCategoryCount = (cat) => getFilteredProjects(cat).length;

  return (
    <section id="projects" className="relative py-20 sm:py-28 z-10">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 w-full">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs font-extrabold uppercase tracking-wider mb-3 shadow-xs">
            <Layers size={14} />
            <span>Featured Engineering</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Production & Showcase Projects
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            A comprehensive portfolio spanning production AI/RAG architectures, multi-tenant enterprise platforms, computer vision research, and full-stack web applications.
          </p>
        </div>

        {/* Filter Tabs with Counts */}
        <div className="flex justify-center flex-wrap gap-2 sm:gap-3 mb-12 sm:mb-16">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            const count = getCategoryCount(cat);
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full font-bold text-xs sm:text-sm transition-all duration-200 cursor-pointer inline-flex items-center gap-2 ${
                  isActive
                    ? 'bg-gradient-to-r from-sky-600 via-blue-600 to-sky-700 text-white shadow-md shadow-sky-500/25 -translate-y-0.5'
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-sky-400 hover:text-sky-600 shadow-xs'
                }`}
              >
                <span>{cat}</span>
                <span
                  className={`px-2 py-0.5 rounded-full text-[11px] font-extrabold transition-colors ${
                    isActive
                      ? 'bg-white/25 text-white'
                      : 'bg-slate-100 text-slate-600'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7 lg:gap-8">
          {filteredProjects.map((project) => {
            // Determine the links
            const repoLink = project.links?.github;
            let secondaryLink = null;
            if (project.links?.paper) {
              secondaryLink = { url: project.links.paper, label: 'Read Paper', icon: FileText };
            } else if (project.links?.live) {
              secondaryLink = { url: project.links.live, label: 'Live View', icon: ExternalLink };
            } else if (project.links?.youtube) {
              secondaryLink = {
                url: project.links.youtube,
                label: project.id === 'bank-locker' ? 'Demo Video' : 'Demo',
                icon: Video,
              };
            }

            return (
              <div
                key={project.id}
                className="rounded-[22px] overflow-hidden bg-white border border-slate-200/90 shadow-[0_4px_20px_rgba(15,23,42,0.04)] hover:shadow-[0_20px_40px_rgba(15,23,42,0.09)] hover:border-sky-300 transition-all duration-300 flex flex-col group hover:-translate-y-1.5"
              >
                {/* Image Container with Top Justification & Single Badge */}
                <div
                  className="relative w-full aspect-[16/10] bg-slate-100 overflow-hidden cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                  title="Click to view full architecture & technical specs"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement.style.background =
                        'linear-gradient(135deg, #0284c7 0%, #2563eb 100%)';
                    }}
                  />

                  {/* Architecture quick-view hover hint */}
                  <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none flex items-center justify-center">
                    <span className="bg-white/95 backdrop-blur-xs text-slate-800 text-xs font-bold px-3.5 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 border border-slate-200/80">
                      <Cpu size={14} className="text-sky-600" />
                      <span>View Architecture</span>
                    </span>
                  </div>

                  {/* Top-Right Badge (Matching Old design: Featured, Academic Final, Enterprise SaaS) */}
                  {project.badge && (
                    <span className="absolute top-3.5 right-3.5 bg-white/95 backdrop-blur-xs text-sky-600 font-extrabold text-[11px] tracking-wider uppercase px-3.5 py-1 rounded-full shadow-sm border border-sky-100/80 z-10">
                      {project.badge}
                    </span>
                  )}
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-7 flex flex-col flex-grow text-left">
                  <h3
                    onClick={() => setSelectedProject(project)}
                    className="text-xl font-extrabold text-slate-900 mb-2 leading-snug group-hover:text-sky-600 transition-colors cursor-pointer"
                  >
                    {project.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-4 flex-grow line-clamp-4 min-h-[4.5rem]">
                    {project.overview}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-100/90 text-slate-700 border border-slate-200/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Links Row (Matching Old clean 1-button or 2-button style) */}
                  <div className="mt-auto pt-2">
                    {repoLink && secondaryLink ? (
                      /* Dual Button Layout (e.g. Repository + Read Paper / Live View / Demo) */
                      <div className="grid grid-cols-2 gap-3 w-full">
                        <a
                          href={repoLink}
                          target="_blank"
                          rel="noreferrer"
                          className="py-2.5 px-3 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 hover:border-slate-300 hover:text-sky-600 text-slate-800 font-bold text-xs sm:text-sm text-center shadow-xs transition-all flex items-center justify-center gap-1.5"
                        >
                          <GithubIcon size={15} />
                          <span>Repository</span>
                        </a>
                        <a
                          href={secondaryLink.url}
                          target="_blank"
                          rel="noreferrer"
                          className="py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-sky-600 text-white font-bold text-xs sm:text-sm text-center shadow-xs hover:shadow-md transition-all flex items-center justify-center gap-1.5"
                        >
                          <secondaryLink.icon size={15} />
                          <span>{secondaryLink.label}</span>
                        </a>
                      </div>
                    ) : repoLink ? (
                      /* Single Button Layout (e.g. Restaurant Management System, Elective Allocation) */
                      <a
                        href={repoLink}
                        target="_blank"
                        rel="noreferrer"
                        className="w-full py-2.5 px-4 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 hover:border-slate-300 hover:text-sky-600 text-slate-800 font-bold text-sm text-center shadow-xs transition-all flex items-center justify-center gap-2"
                      >
                        <GithubIcon size={16} />
                        <span>Repository</span>
                      </a>
                    ) : secondaryLink ? (
                      /* Single Button Layout (e.g. Bank Locker Demo Video, Talk2Site Live Platform) */
                      <a
                        href={secondaryLink.url}
                        target="_blank"
                        rel="noreferrer"
                        className="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-sky-600 text-white font-bold text-sm text-center shadow-xs hover:shadow-md transition-all flex items-center justify-center gap-2"
                      >
                        <secondaryLink.icon size={16} />
                        <span>{secondaryLink.label}</span>
                      </a>
                    ) : (
                      /* In-House Platform Layout (Hospital SaaS, School Exam Platform) */
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-sky-50 to-blue-50 hover:from-sky-600 hover:to-blue-600 hover:text-white border border-sky-200 hover:border-transparent text-sky-700 font-bold text-sm text-center shadow-xs transition-all flex items-center justify-center gap-2 cursor-pointer group/btn"
                      >
                        <Cpu size={16} className="group-hover/btn:rotate-12 transition-transform" />
                        <span>Architecture & Specs</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Architecture Modal */}
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </div>
    </section>
  );
}
