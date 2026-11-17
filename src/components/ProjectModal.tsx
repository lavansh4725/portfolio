import React, { useEffect, useRef, useState } from 'react';
import type { ProjectDetail } from '../types/portfolio';
import { GithubIcon } from './SocialIcons';
import {
  X,
  ExternalLink,
  Layers,
  Cpu,
  Database,
  CheckCircle2,
  AlertCircle,
  Lightbulb,
  FileCode,
  ArrowRight,
  ShieldCheck,
  Workflow,
} from 'lucide-react';

interface ProjectModalProps {
  project: ProjectDetail | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [activeTab, setActiveTab] = useState<'overview' | 'architecture' | 'implementation' | 'challenges'>('overview');

  useEffect(() => {
    const dialogNode = dialogRef.current;
    if (!dialogNode) return;

    if (project) {
      if (!dialogNode.open) {
        dialogNode.showModal();
      }
      setActiveTab('overview');
    } else {
      if (dialogNode.open) {
        dialogNode.close();
      }
    }
  }, [project]);

  // Handle native cancel (Esc key)
  const handleCancel = (e: React.SyntheticEvent) => {
    e.preventDefault();
    onClose();
  };

  // Close when clicking directly on backdrop
  const handleBackdropClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    if (e.target === dialogRef.current) {
      onClose();
    }
  };

  if (!project) return null;

  const getBadgeStyle = (badgeType: string) => {
    switch (badgeType) {
      case 'warehouse':
        return 'bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800/40';
      case 'engineering':
        return 'bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800/40';
      default:
        return 'bg-cyan-100 dark:bg-cyan-950/60 text-cyan-700 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-800/40';
    }
  };

  return (
    <dialog
      ref={dialogRef}
      onCancel={handleCancel}
      onClick={handleBackdropClick}
      aria-labelledby="project-modal-title"
      className="m-auto w-[92vw] max-w-4xl max-h-[90vh] rounded-2xl bg-white dark:bg-[#0e0f17] text-zinc-900 dark:text-zinc-100 p-0 border border-zinc-200 dark:border-white/[0.1] shadow-2xl backdrop:bg-black/75 backdrop:backdrop-blur-sm overflow-hidden flex flex-col"
    >
      {/* Modal Header */}
      <div className="p-6 border-b border-zinc-100 dark:border-white/[0.08] flex items-start justify-between bg-zinc-50/70 dark:bg-white/[0.02]">
        <div className="space-y-1.5 pr-4">
          <div className="flex flex-wrap items-center gap-2">
            <span
              className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider ${getBadgeStyle(project.badgeType)}`}
            >
              {project.category}
            </span>
          </div>
          <h2 id="project-modal-title" className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            {project.title}
          </h2>
          <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">
            {project.shortDescription}
          </p>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="p-2 rounded-xl text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white hover:bg-zinc-200 dark:hover:bg-white/[0.08] transition-colors"
          aria-label="Close project modal"
          autoFocus
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Navigation Tabs */}
      <div className="flex border-b border-zinc-100 dark:border-white/[0.08] px-6 bg-zinc-50/30 dark:bg-white/[0.01] overflow-x-auto gap-4">
        {[
          { id: 'overview', label: 'Overview & Objectives' },
          { id: 'architecture', label: 'System Architecture' },
          { id: 'implementation', label: 'Technical Stack' },
          { id: 'challenges', label: 'Challenges & Learnings' },
        ].map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id as typeof activeTab)}
            className={`py-3 text-xs sm:text-sm font-semibold whitespace-nowrap border-b-2 transition-colors ${
              activeTab === tab.id
                ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                : 'border-transparent text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-300'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Modal Content Scroll Area */}
      <div className="p-6 sm:p-8 overflow-y-auto space-y-8 flex-1">
        {/* TAB 1: OVERVIEW */}
        {activeTab === 'overview' && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div className="space-y-3">
              <h3 className="text-sm font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                Project Overview
              </h3>
              <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                {project.overview}
              </p>
            </div>

            <div className="space-y-3 p-5 rounded-xl bg-zinc-50 dark:bg-white/[0.03] border border-zinc-200/60 dark:border-white/[0.06]">
              <h3 className="text-sm font-bold text-zinc-900 dark:text-white flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-amber-500" />
                <span>Problem Statement</span>
              </h3>
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {project.problemStatement}
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-900 dark:text-white">
                Key Objectives
              </h3>
              <ul className="grid grid-cols-1 gap-2.5">
                {project.objectives.map((obj, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-600 dark:text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                    <span>{obj}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-900 dark:text-white">
                Key Highlights
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.features.map((feat, i) => (
                  <div
                    key={i}
                    className="p-3.5 rounded-xl bg-white dark:bg-[#13141f] border border-zinc-200/80 dark:border-white/[0.06] text-xs text-zinc-700 dark:text-zinc-300"
                  >
                    {feat}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: ARCHITECTURE */}
        {activeTab === 'architecture' && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div className="space-y-3">
              <h3 className="text-sm font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 flex items-center gap-2">
                <Layers className="w-4 h-4" />
                <span>End-to-End System Architecture</span>
              </h3>
              <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                {project.systemArchitecture}
              </p>
            </div>

            {/* Visual Flow diagram container */}
            <div className="p-5 rounded-xl bg-[#0a0b0f] border border-white/[0.08] text-zinc-300 space-y-4">
              <div className="text-xs font-semibold uppercase tracking-wider text-zinc-400 border-b border-white/[0.06] pb-2">
                Execution Workflow & Component Hierarchy
              </div>
              <div className="space-y-3">
                {project.architecturePoints.map((point, i) => (
                  <div key={i} className="flex items-start gap-3 text-xs sm:text-sm">
                    <span className="w-6 h-6 rounded-full bg-blue-900/60 text-blue-300 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 border border-blue-700/50">
                      {i + 1}
                    </span>
                    <span className="text-zinc-300 leading-relaxed">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              {project.metricsOrInsights.map((metric, i) => (
                <div
                  key={i}
                  className="p-3 rounded-xl bg-zinc-50 dark:bg-white/[0.03] border border-zinc-200 dark:border-white/[0.06] text-center"
                >
                  <span className="text-xs font-semibold text-blue-600 dark:text-blue-400">
                    {metric}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: IMPLEMENTATION */}
        {activeTab === 'implementation' && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div className="space-y-3">
              <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-900 dark:text-white">
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-zinc-100 dark:bg-white/[0.06] text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-white/[0.08]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                Subsystem Breakdown
              </h3>

              {project.technicalImplementation.medallionArchitecture && (
                <div className="p-4 rounded-xl bg-zinc-50 dark:bg-white/[0.02] border border-zinc-200/80 dark:border-white/[0.06] space-y-1">
                  <span className="text-xs font-bold text-zinc-900 dark:text-white uppercase tracking-wider flex items-center gap-1.5">
                    <Workflow className="w-3.5 h-3.5 text-amber-500" />
                    Medallion Architecture (Bronze, Silver & Gold)
                  </span>
                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                    {project.technicalImplementation.medallionArchitecture}
                  </p>
                </div>
              )}

              {project.technicalImplementation.storedProcedures && (
                <div className="p-4 rounded-xl bg-zinc-50 dark:bg-white/[0.02] border border-zinc-200/80 dark:border-white/[0.06] space-y-1">
                  <span className="text-xs font-bold text-zinc-900 dark:text-white uppercase tracking-wider flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5 text-blue-500" />
                    ETL Stored Procedures & Bulk Loading
                  </span>
                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                    {project.technicalImplementation.storedProcedures}
                  </p>
                </div>
              )}

              {project.technicalImplementation.dataQuality && (
                <div className="p-4 rounded-xl bg-zinc-50 dark:bg-white/[0.02] border border-zinc-200/80 dark:border-white/[0.06] space-y-1">
                  <span className="text-xs font-bold text-zinc-900 dark:text-white uppercase tracking-wider flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                    Automated Data Quality & Referential Integrity Tests
                  </span>
                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                    {project.technicalImplementation.dataQuality}
                  </p>
                </div>
              )}
              
              {project.technicalImplementation.frontend && (
                <div className="p-4 rounded-xl bg-zinc-50 dark:bg-white/[0.02] border border-zinc-200/80 dark:border-white/[0.06] space-y-1">
                  <span className="text-xs font-bold text-zinc-900 dark:text-white uppercase tracking-wider flex items-center gap-1.5">
                    <FileCode className="w-3.5 h-3.5 text-blue-500" />
                    Frontend Layer (React & Vite)
                  </span>
                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                    {project.technicalImplementation.frontend}
                  </p>
                </div>
              )}

              {project.technicalImplementation.backend && (
                <div className="p-4 rounded-xl bg-zinc-50 dark:bg-white/[0.02] border border-zinc-200/80 dark:border-white/[0.06] space-y-1">
                  <span className="text-xs font-bold text-zinc-900 dark:text-white uppercase tracking-wider flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5 text-indigo-500" />
                    Backend API Layer (Node.js & Express)
                  </span>
                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                    {project.technicalImplementation.backend}
                  </p>
                </div>
              )}

              {project.technicalImplementation.aiIntegration && (
                <div className="p-4 rounded-xl bg-zinc-50 dark:bg-white/[0.02] border border-zinc-200/80 dark:border-white/[0.06] space-y-1">
                  <span className="text-xs font-bold text-zinc-900 dark:text-white uppercase tracking-wider flex items-center gap-1.5">
                    <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
                    Generative AI Synthesis (Google GenAI & Zod)
                  </span>
                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                    {project.technicalImplementation.aiIntegration}
                  </p>
                </div>
              )}

              {project.technicalImplementation.database && (
                <div className="p-4 rounded-xl bg-zinc-50 dark:bg-white/[0.02] border border-zinc-200/80 dark:border-white/[0.06] space-y-1">
                  <span className="text-xs font-bold text-zinc-900 dark:text-white uppercase tracking-wider flex items-center gap-1.5">
                    <Database className="w-3.5 h-3.5 text-emerald-500" />
                    Data Storage (MongoDB)
                  </span>
                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                    {project.technicalImplementation.database}
                  </p>
                </div>
              )}

              {project.technicalImplementation.authAndPdf && (
                <div className="p-4 rounded-xl bg-zinc-50 dark:bg-white/[0.02] border border-zinc-200/80 dark:border-white/[0.06] space-y-1">
                  <span className="text-xs font-bold text-zinc-900 dark:text-white uppercase tracking-wider flex items-center gap-1.5">
                    <FileCode className="w-3.5 h-3.5 text-purple-500" />
                    Authentication & Headless PDF Pipeline
                  </span>
                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                    {project.technicalImplementation.authAndPdf}
                  </p>
                </div>
              )}

              {project.technicalImplementation.dataPipeline && (
                <div className="p-4 rounded-xl bg-zinc-50 dark:bg-white/[0.02] border border-zinc-200/80 dark:border-white/[0.06] space-y-1">
                  <span className="text-xs font-bold text-zinc-900 dark:text-white uppercase tracking-wider flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5 text-cyan-500" />
                    Data Wrangling Pipeline (Python, Pandas, NumPy)
                  </span>
                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                    {project.technicalImplementation.dataPipeline}
                  </p>
                </div>
              )}

              {project.technicalImplementation.sqlAndMetrics && (
                <div className="p-4 rounded-xl bg-zinc-50 dark:bg-white/[0.02] border border-zinc-200/80 dark:border-white/[0.06] space-y-1">
                  <span className="text-xs font-bold text-zinc-900 dark:text-white uppercase tracking-wider flex items-center gap-1.5">
                    <Database className="w-3.5 h-3.5 text-blue-500" />
                    Relational Storage & KPI Calculations (SQL & T-SQL)
                  </span>
                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                    {project.technicalImplementation.sqlAndMetrics}
                  </p>
                </div>
              )}

              {project.technicalImplementation.dashboardDesign && (
                <div className="p-4 rounded-xl bg-zinc-50 dark:bg-white/[0.02] border border-zinc-200/80 dark:border-white/[0.06] space-y-1">
                  <span className="text-xs font-bold text-zinc-900 dark:text-white uppercase tracking-wider flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-indigo-500" />
                    Interactive Business Intelligence Dashboard (Power BI)
                  </span>
                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                    {project.technicalImplementation.dashboardDesign}
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* TAB 4: CHALLENGES */}
        {activeTab === 'challenges' && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div className="space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-900 dark:text-white">
                Engineering Challenges & Technical Solutions
              </h3>
              {project.challengesAndSolutions.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-zinc-50 dark:bg-white/[0.02] border border-zinc-200/80 dark:border-white/[0.06] space-y-2"
                >
                  <div className="flex items-start gap-2 text-sm font-semibold text-rose-600 dark:text-rose-400">
                    <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                    <span>Challenge: {item.challenge}</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 pl-6">
                    <ArrowRight className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-1" />
                    <span>Solution: {item.solution}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-3 pt-2">
              <h3 className="text-sm font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 flex items-center gap-2">
                <Lightbulb className="w-4 h-4" />
                <span>Key Technical Learnings</span>
              </h3>
              <ul className="space-y-2">
                {project.learnings.map((learning, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-600 dark:text-zinc-300"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{learning}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>

      {/* Modal Footer */}
      <div className="p-4 sm:p-6 border-t border-zinc-100 dark:border-white/[0.08] bg-zinc-50/70 dark:bg-white/[0.02] flex items-center justify-between">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-white bg-zinc-900 hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200 transition-colors shadow-sm"
        >
          <GithubIcon className="w-4 h-4" />
          <span>View GitHub Repository</span>
          <ExternalLink className="w-3.5 h-3.5 opacity-70" />
        </a>

        <button
          type="button"
          onClick={onClose}
          className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-white/[0.06] transition-colors"
        >
          Close Case Study
        </button>
      </div>
    </dialog>
  );
};
