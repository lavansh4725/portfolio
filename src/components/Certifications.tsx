import React, { useState } from 'react';
import { certificationsData } from '../data/portfolioData';
import {
  Award,
  Sparkles,
  BookOpen,
  Calendar,
  ExternalLink,
  ShieldCheck,
  Hash,
} from 'lucide-react';

export const Certifications: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Credentials', count: certificationsData.length },
    {
      id: 'Algorithms & Core CS',
      label: 'Algorithms & Core CS',
      count: certificationsData.filter((c) => c.category === 'Algorithms & Core CS').length,
    },
    {
      id: 'Data Science & AI',
      label: 'Data Science & AI',
      count: certificationsData.filter((c) => c.category === 'Data Science & AI').length,
    },
    {
      id: 'Systems & Networking',
      label: 'Systems & Networking',
      count: certificationsData.filter((c) => c.category === 'Systems & Networking').length,
    },
    {
      id: 'Project & Business',
      label: 'Project & Business',
      count: certificationsData.filter((c) => c.category === 'Project & Business').length,
    },
    {
      id: 'Mathematics & Tools',
      label: 'Math & Tools',
      count: certificationsData.filter((c) => c.category === 'Mathematics & Tools').length,
    },
  ];

  const filteredCerts =
    activeCategory === 'all'
      ? certificationsData
      : certificationsData.filter((c) => c.category === activeCategory);

  return (
    <section id="certifications" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800/50">
            <Sparkles className="w-3.5 h-3.5" />
            <span>25+ Verified Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
            Licenses & Professional Certifications
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-2xl">
            Verified technical credentials and specialized coursework completed across world-class institutions including UC San Diego, Johns Hopkins University, Google, IBM, University of Michigan, and UIUC.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-1.5 ${
                activeCategory === cat.id
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25'
                  : 'bg-white dark:bg-[#12131b] text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white border border-zinc-200/80 dark:border-white/[0.08]'
              }`}
            >
              <span>{cat.label}</span>
              <span
                className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                  activeCategory === cat.id
                    ? 'bg-white/20 text-white'
                    : 'bg-zinc-100 dark:bg-white/[0.08] text-zinc-500 dark:text-zinc-400'
                }`}
              >
                {cat.count}
              </span>
            </button>
          ))}
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCerts.map((cert, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white dark:bg-[#11131a] border border-zinc-200/80 dark:border-white/[0.08] shadow-sm hover:border-blue-500/40 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-2">
                  <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 border border-blue-200/60 dark:border-blue-800/40 shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-200 dark:border-emerald-800/40">
                      <ShieldCheck className="w-3 h-3" />
                      <span>Verified</span>
                    </span>
                    {cert.issueDate && (
                      <span className="flex items-center gap-1 text-[11px] text-zinc-400 font-medium">
                        <Calendar className="w-3 h-3" />
                        <span>{cert.issueDate}</span>
                      </span>
                    )}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <h3 className="font-bold text-base text-zinc-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug">
                    {cert.title}
                  </h3>
                  <p className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                    <span>{cert.issuer}</span>
                  </p>
                </div>

                {cert.credentialId && (
                  <div className="flex items-center gap-1 text-[11px] font-mono text-zinc-500 dark:text-zinc-400 bg-zinc-50 dark:bg-white/[0.03] px-2 py-1 rounded border border-zinc-200/60 dark:border-white/[0.04]">
                    <Hash className="w-3 h-3 text-zinc-400" />
                    <span>ID: {cert.credentialId}</span>
                  </div>
                )}
              </div>

              {/* Competency badges & Verification Link */}
              <div className="pt-4 border-t border-zinc-100 dark:border-white/[0.04] mt-4 space-y-3">
                <div className="flex flex-wrap gap-1">
                  {cert.skillsCovered.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2 py-0.5 rounded text-[10px] font-medium bg-zinc-50 dark:bg-white/[0.03] text-zinc-700 dark:text-zinc-300 border border-zinc-200/60 dark:border-white/[0.06]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {cert.verifyUrl && (
                  <div className="pt-1">
                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors group/link"
                    >
                      <span>Show Credential</span>
                      <ExternalLink className="w-3 h-3 group-hover/link:translate-x-0.5 transition-transform" />
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
