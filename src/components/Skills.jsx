import React, { useState } from 'react';
import {
  Server,
  Brain,
  Layers,
  Bot,
  Layout,
  Database,
  Sparkles
} from 'lucide-react';
import { skillCategories } from '../data/resumeData';

const iconMap = {
  Server: Server,
  Brain: Brain,
  Layers: Layers,
  Bot: Bot,
  Layout: Layout,
  Database: Database,
};

const gradientStyles = [
  'from-sky-600 to-blue-700',
  'from-sky-500 to-indigo-600',
  'from-blue-600 to-cyan-600',
  'from-slate-700 to-sky-700',
  'from-cyan-600 to-blue-600',
  'from-sky-700 to-slate-800'
];

const LEVEL_PROGRESS = {
  Expert: 'w-[95%] bg-gradient-to-r from-emerald-500 to-teal-500',
  Advanced: 'w-[85%] bg-gradient-to-r from-sky-500 to-blue-600',
  Intermediate: 'w-[70%] bg-gradient-to-r from-indigo-500 to-purple-500',
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState('All');

  const filteredCategories = activeTab === 'All'
    ? skillCategories
    : skillCategories.filter((cat) => cat.title.toLowerCase().includes(activeTab.toLowerCase()));

  return (
    <section id="skills" className="relative py-20 sm:py-28 z-10">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 w-full">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs font-extrabold uppercase tracking-wider mb-3 shadow-xs">
            <Sparkles size={14} />
            <span>Technical Mastery</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Skills & Engineering Stack
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            A comprehensive overview of production technologies, architecture patterns, and tools I utilize to construct scalable enterprise systems.
          </p>
        </div>

        {/* Quick Filter Tabs */}
        <div className="flex justify-center flex-wrap gap-2 mb-12">
          {['All', 'Backend', 'AI, LLM', 'Architecture', 'Scraping', 'Frontend'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-1.5 rounded-full text-xs font-extrabold transition-all cursor-pointer ${
                activeTab === tab
                  ? 'bg-sky-600 text-white shadow-md shadow-sky-500/25 -translate-y-0.5'
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-sky-300 hover:text-sky-600 shadow-2xs'
              }`}
            >
              {tab === 'All' ? 'All Skills' : tab}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredCategories.map((cat, idx) => {
            const IconComponent = iconMap[cat.icon] || Server;
            const grad = gradientStyles[idx % gradientStyles.length];

            return (
              <div
                key={idx}
                className="rounded-3xl p-7 sm:p-8 bg-white/90 backdrop-blur-xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-sky-300 transition-all duration-300 flex flex-col group hover:-translate-y-1"
              >
                <div className="flex items-center gap-3.5 mb-6">
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center text-white bg-gradient-to-r ${grad} shadow-md shadow-sky-500/20 group-hover:scale-105 transition-transform`}
                  >
                    <IconComponent size={22} />
                  </div>
                  <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-sky-600 transition-colors">
                    {cat.title}
                  </h3>
                </div>

                <div className="flex flex-col gap-4">
                  {cat.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="flex flex-col gap-1.5 pb-3.5 border-b border-slate-100 last:border-b-0 last:pb-0"
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-sm sm:text-base text-slate-900">
                          {skill.name}
                        </span>
                        <span className="text-[11px] font-extrabold px-2.5 py-0.5 rounded-full bg-sky-50 text-sky-700 border border-sky-200/70 shadow-2xs">
                          {skill.level}
                        </span>
                      </div>
                      
                      {/* Interactive Proficiency Bar */}
                      <div className="w-full h-1.5 rounded-full bg-slate-100 overflow-hidden mt-0.5">
                        <div
                          className={`h-full rounded-full transition-all duration-500 ${
                            LEVEL_PROGRESS[skill.level] || 'w-[80%] bg-sky-500'
                          }`}
                        />
                      </div>

                      <p className="text-xs text-slate-500 leading-relaxed mt-0.5">
                        {skill.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
