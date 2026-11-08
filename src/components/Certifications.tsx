import React from 'react';
import { certificationsData } from '../data/portfolioData';
import {
  Award,
  CheckCircle2,
  Sparkles,
  BookOpen,
} from 'lucide-react';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800/50">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Verified Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
            Licenses & Certifications
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-2xl">
            Specialized technical credentials earned across algorithms, data structures, programming languages, and project management.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationsData.map((cert, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white dark:bg-[#11131a] border border-zinc-200/80 dark:border-white/[0.08] shadow-sm hover:border-blue-500/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 border border-blue-200/60 dark:border-blue-800/40">
                    <Award className="w-5 h-5" />
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-200 dark:border-emerald-800/40">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Verified</span>
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="font-bold text-base text-zinc-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-zinc-400" />
                    <span>{cert.issuer}</span>
                  </p>
                </div>
              </div>

              {/* Skills Tags */}
              <div className="pt-4 border-t border-zinc-100 dark:border-white/[0.04] mt-4">
                <span className="text-[11px] uppercase tracking-wider font-semibold text-zinc-400 block mb-2">
                  Competencies
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {cert.skillsCovered.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2 py-0.5 rounded text-[11px] font-medium bg-zinc-50 dark:bg-white/[0.03] text-zinc-700 dark:text-zinc-300 border border-zinc-200/60 dark:border-white/[0.06]"
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
    </section>
  );
};
