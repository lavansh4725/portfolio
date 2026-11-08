import React from 'react';
import { educationData, achievementsData } from '../data/portfolioData';
import {
  GraduationCap,
  Award,
  Calendar,
  MapPin,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 relative bg-zinc-50/50 dark:bg-[#0c0d13]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800/50">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Academic Qualifications</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
            Education & Honors
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-2xl">
            My foundational computer science education, academic milestones, and scholastic recognitions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Education Timeline (8 cols) */}
          <div className="lg:col-span-8 space-y-6">
            <div className="relative border-l-2 border-zinc-200 dark:border-white/[0.1] ml-4 sm:ml-6 pl-6 sm:pl-8 space-y-8">
              {educationData.map((edu, idx) => (
                <div key={idx} className="relative group">
                  {/* Timeline Node dot */}
                  <div className="absolute -left-[33px] sm:-left-[41px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-[#0a0b0e] border-2 border-blue-500 group-hover:scale-125 transition-transform" />

                  <div className="p-6 rounded-2xl bg-white dark:bg-[#11131a] border border-zinc-200/80 dark:border-white/[0.08] shadow-sm hover:border-blue-500/30 transition-all duration-300 space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800/40">
                        {edu.grade}
                      </span>
                      <div className="flex items-center gap-1.5 text-xs text-zinc-500">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{edu.period}</span>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
                        {edu.institution}
                      </h3>
                      <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mt-0.5">
                        {edu.degree}
                      </p>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs text-zinc-500">
                      <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                      <span>{edu.location}</span>
                    </div>

                    <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed pt-1 border-t border-zinc-100 dark:border-white/[0.04]">
                      {edu.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Academic Achievements Card (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-purple-950/20 via-blue-950/20 to-transparent bg-white dark:bg-[#11131a] border border-purple-500/20 dark:border-purple-500/30 shadow-md space-y-5">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 border border-purple-200 dark:border-purple-800/40">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
                    Scholastic Honors
                  </h3>
                  <span className="text-xs text-purple-500 dark:text-purple-400 font-medium">
                    Verified Distinction
                  </span>
                </div>
              </div>

              {achievementsData.map((ach, idx) => (
                <div key={idx} className="space-y-3 pt-2">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-base text-zinc-900 dark:text-white">
                      {ach.title}
                    </span>
                    <span className="text-xs px-2 py-0.5 rounded bg-purple-100 dark:bg-purple-950/50 text-purple-700 dark:text-purple-300 font-semibold border border-purple-200 dark:border-purple-800/40">
                      {ach.year}
                    </span>
                  </div>

                  <p className="text-xs text-zinc-500 font-medium">
                    Issued by: {ach.organization}
                  </p>

                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                    {ach.description}
                  </p>

                  <div className="flex items-center gap-2 pt-2 text-xs font-medium text-emerald-600 dark:text-emerald-400">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>Academic Year 2023 Standing</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick summary highlight */}
            <div className="p-6 rounded-2xl bg-white dark:bg-[#11131a] border border-zinc-200/80 dark:border-white/[0.08] shadow-sm space-y-3">
              <div className="flex items-center gap-2 text-sm font-semibold text-zinc-900 dark:text-white">
                <GraduationCap className="w-4 h-4 text-blue-500" />
                <span>Undergraduate Focus</span>
              </div>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Dedicated student in Computer Science and Engineering actively applying theoretical algorithms to full-stack and analytical engineering projects.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
