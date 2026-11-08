import React, { useState } from 'react';
import { projectsData } from '../data/portfolioData';
import type { ProjectDetail } from '../types/portfolio';
import { ProjectModal } from './ProjectModal';
import { GithubIcon } from './SocialIcons';
import {
  ExternalLink,
  Sparkles,
  ArrowRight,
  BarChart3,
  Bot,
  PieChart,
  CheckCircle2,
} from 'lucide-react';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectDetail | null>(null);

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800/50">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Completed Production Implementations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
            Featured Projects
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-2xl">
            Strictly showcasing verified, completed projects reflecting both full-stack software engineering and data analytics & business intelligence.
          </p>
        </div>

        {/* Two Featured Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          
          {/* PROJECT 1: RoleReady AI */}
          {(() => {
            const project = projectsData[0];
            return (
              <div
                key={project.id}
                className="group rounded-3xl bg-white dark:bg-[#10111a] border border-zinc-200/80 dark:border-white/[0.08] shadow-sm hover:shadow-2xl hover:border-blue-500/40 transition-all duration-300 flex flex-col justify-between overflow-hidden relative"
              >
                {/* Visual Thumbnail: Mock Software Platform UI */}
                <div className="p-6 bg-gradient-to-br from-blue-950/40 via-indigo-950/20 to-purple-950/30 border-b border-zinc-100 dark:border-white/[0.06] relative overflow-hidden h-64 sm:h-72 flex flex-col justify-between">
                  {/* Ambient top light */}
                  <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />

                  {/* Top Bar with mock browser/terminal dots */}
                  <div className="flex items-center justify-between z-10">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                      <span className="ml-2 text-[11px] font-mono text-zinc-400">roleready-ai/engine</span>
                    </div>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-600 text-white tracking-wider uppercase">
                      GenAI + Web
                    </span>
                  </div>

                  {/* Mock Interactive Card Preview */}
                  <div className="my-auto z-10 space-y-2.5 transform transition-transform duration-500 group-hover:scale-[1.02]">
                    <div className="p-3.5 rounded-xl bg-[#0b0c13]/90 border border-white/[0.1] shadow-xl backdrop-blur-md space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Bot className="w-4 h-4 text-blue-400" />
                          <span className="text-xs font-semibold text-zinc-200">
                            Interview Synthesis Pipeline
                          </span>
                        </div>
                        <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/50 px-1.5 py-0.5 rounded border border-emerald-800/40">
                          Zod Validated
                        </span>
                      </div>
                      <div className="space-y-1.5 text-[11px] text-zinc-400 font-mono">
                        <div className="flex items-center justify-between bg-white/[0.03] p-1.5 rounded">
                          <span className="text-zinc-300">Resume PDF Parsing</span>
                          <span className="text-blue-400">Extracted</span>
                        </div>
                        <div className="flex items-center justify-between bg-white/[0.03] p-1.5 rounded">
                          <span className="text-zinc-300">Puppeteer ATS PDF Export</span>
                          <span className="text-purple-400">Compiled</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom category badge */}
                  <div className="z-10 flex items-center justify-between text-xs text-zinc-400 font-medium">
                    <span className="flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                      <span>Google GenAI & Node.js Engine</span>
                    </span>
                    <span className="text-blue-400 font-mono text-[11px]">JWT Auth + Mongo</span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-2.5 py-1 rounded-md text-xs font-semibold text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-800/40">
                        {project.category}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      {project.shortDescription}
                    </p>

                    {/* Verified feature bullets */}
                    <div className="pt-2 space-y-1.5">
                      <div className="flex items-center gap-2 text-xs text-zinc-700 dark:text-zinc-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span>PDF text extraction & Google GenAI report synthesis</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-zinc-700 dark:text-zinc-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span>Zod validation contracts & headless Puppeteer PDF export</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-zinc-700 dark:text-zinc-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span>JWT authentication & MongoDB candidate persistence</span>
                      </div>
                    </div>
                  </div>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-zinc-100 dark:border-white/[0.06]">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-zinc-100 dark:bg-white/[0.04] text-zinc-700 dark:text-zinc-300 border border-zinc-200/60 dark:border-white/[0.06]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="pt-2 flex items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-md shadow-blue-500/20 transition-all duration-200 active:scale-95"
                    >
                      <span>View Case Study</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white bg-zinc-100 dark:bg-white/[0.05] hover:bg-zinc-200 dark:hover:bg-white/[0.1] border border-zinc-200/80 dark:border-white/[0.08] transition-all"
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>GitHub</span>
                      <ExternalLink className="w-3 h-3 opacity-60" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })()}

          {/* PROJECT 2: Customer Shopping Behavior Analysis */}
          {(() => {
            const project = projectsData[1];
            return (
              <div
                key={project.id}
                className="group rounded-3xl bg-white dark:bg-[#10111a] border border-zinc-200/80 dark:border-white/[0.08] shadow-sm hover:shadow-2xl hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between overflow-hidden relative"
              >
                {/* Visual Thumbnail: Mock Analytics & Power BI Dashboard UI */}
                <div className="p-6 bg-gradient-to-br from-cyan-950/40 via-emerald-950/20 to-blue-950/30 border-b border-zinc-100 dark:border-white/[0.06] relative overflow-hidden h-64 sm:h-72 flex flex-col justify-between">
                  {/* Ambient top light */}
                  <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />

                  {/* Top Bar with mock analytics status */}
                  <div className="flex items-center justify-between z-10">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                      <span className="ml-2 text-[11px] font-mono text-zinc-400">bi-pipeline/sql-kpi</span>
                    </div>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-cyan-600 text-white tracking-wider uppercase">
                      Analytics + BI
                    </span>
                  </div>

                  {/* Mock Analytics Dashboard Preview */}
                  <div className="my-auto z-10 space-y-2.5 transform transition-transform duration-500 group-hover:scale-[1.02]">
                    <div className="p-3.5 rounded-xl bg-[#0b0c13]/90 border border-white/[0.1] shadow-xl backdrop-blur-md space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <BarChart3 className="w-4 h-4 text-cyan-400" />
                          <span className="text-xs font-semibold text-zinc-200">
                            Power BI KPI Dashboard
                          </span>
                        </div>
                        <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/50 px-1.5 py-0.5 rounded border border-cyan-800/40">
                          MySQL Aggregated
                        </span>
                      </div>
                      {/* Metric cards simulation */}
                      <div className="grid grid-cols-2 gap-2 text-[10px] font-mono">
                        <div className="bg-white/[0.03] p-1.5 rounded flex items-center justify-between">
                          <span className="text-zinc-400">Customer Segments</span>
                          <span className="text-emerald-400 font-semibold">Identified</span>
                        </div>
                        <div className="bg-white/[0.03] p-1.5 rounded flex items-center justify-between">
                          <span className="text-zinc-400">Revenue Drivers</span>
                          <span className="text-cyan-400 font-semibold">Analyzed</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom category badge */}
                  <div className="z-10 flex items-center justify-between text-xs text-zinc-400 font-medium">
                    <span className="flex items-center gap-1.5">
                      <PieChart className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Python, Pandas & NumPy Pipeline</span>
                    </span>
                    <span className="text-cyan-400 font-mono text-[11px]">SQL Aggregations</span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-2.5 py-1 rounded-md text-xs font-semibold text-cyan-700 dark:text-cyan-300 bg-cyan-50 dark:bg-cyan-950/50 border border-cyan-200 dark:border-cyan-800/40">
                        {project.category}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      {project.shortDescription}
                    </p>

                    {/* Verified feature bullets */}
                    <div className="pt-2 space-y-1.5">
                      <div className="flex items-center gap-2 text-xs text-zinc-700 dark:text-zinc-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-500 shrink-0" />
                        <span>Data cleaning & hygiene with Python, Pandas, and NumPy</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-zinc-700 dark:text-zinc-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-500 shrink-0" />
                        <span>Interactive Power BI dashboard visualizing metrics & segments</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-zinc-700 dark:text-zinc-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-500 shrink-0" />
                        <span>SQL KPI aggregation for revenue, frequency & demographics</span>
                      </div>
                    </div>
                  </div>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-zinc-100 dark:border-white/[0.06]">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-zinc-100 dark:bg-white/[0.04] text-zinc-700 dark:text-zinc-300 border border-zinc-200/60 dark:border-white/[0.06]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="pt-2 flex items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-cyan-600 hover:bg-cyan-500 shadow-md shadow-cyan-500/20 transition-all duration-200 active:scale-95"
                    >
                      <span>View Case Study</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white bg-zinc-100 dark:bg-white/[0.05] hover:bg-zinc-200 dark:hover:bg-white/[0.1] border border-zinc-200/80 dark:border-white/[0.08] transition-all"
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>GitHub</span>
                      <ExternalLink className="w-3 h-3 opacity-60" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })()}

        </div>

      </div>

      {/* Accessible Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
