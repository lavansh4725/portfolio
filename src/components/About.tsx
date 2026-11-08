import React from 'react';
import { aboutContent } from '../data/portfolioData';
import {
  Code,
  BarChart3,
  Award,
  GraduationCap,
  Sparkles,
  Terminal,
} from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800/50">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Professional Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
            About Me
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-2xl">
            Computer Science undergraduate at Bennett University with a strong problem-solving mindset and a passion for engineering practical software and discovering data-driven insights.
          </p>
        </div>

        {/* Quick Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {aboutContent.quickStats.map((stat, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#11131a] border border-zinc-200/80 dark:border-white/[0.08] shadow-sm hover:border-blue-500/40 transition-all duration-300 group"
            >
              <div className="text-xs font-semibold text-zinc-600 dark:text-zinc-400 uppercase tracking-wider mb-2">
                {stat.label}
              </div>
              <div className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {stat.value}
              </div>
              <div className="text-xs text-zinc-600 dark:text-zinc-400 mt-1 font-medium">
                {stat.highlight}
              </div>
            </div>
          ))}
        </div>

        {/* Main Content Layout: Summary + Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left: Detailed Summary Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-7 rounded-2xl bg-white dark:bg-[#11131a] border border-zinc-200/80 dark:border-white/[0.08] shadow-sm space-y-5">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400">
                  <Terminal className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-base text-zinc-900 dark:text-white">
                    Engineering Philosophy
                  </h3>
                  <span className="text-xs text-zinc-500">Problem-Solver & Builder</span>
                </div>
              </div>

              <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                {aboutContent.summary}
              </p>

              <div className="pt-2 border-t border-zinc-100 dark:border-white/[0.06] space-y-3">
                <div className="flex items-start gap-3">
                  <GraduationCap className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />
                  <div className="text-xs">
                    <span className="font-semibold text-zinc-900 dark:text-zinc-200">
                      Bennett University (Aug 2023 – Present)
                    </span>
                    <p className="text-zinc-600 dark:text-zinc-400 mt-0.5">
                      B.Tech in Computer Science and Engineering | Current CGPA: 8.37/10
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Award className="w-4 h-4 text-purple-500 mt-0.5 shrink-0" />
                  <div className="text-xs">
                    <span className="font-semibold text-zinc-900 dark:text-zinc-200">
                      Dean's List Honoree (2023)
                    </span>
                    <p className="text-zinc-600 dark:text-zinc-400 mt-0.5">
                      Formally awarded for maintaining high academic standing and academic excellence.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Core Capability Pillars */}
          <div className="lg:col-span-7 space-y-4">
            {aboutContent.corePillars.map((pillar, idx) => {
              const icons = [
                <Code key="0" className="w-5 h-5 text-blue-500" />,
                <BarChart3 key="1" className="w-5 h-5 text-indigo-500" />,
                <Terminal key="2" className="w-5 h-5 text-purple-500" />,
              ];

              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white dark:bg-[#11131a] border border-zinc-200/80 dark:border-white/[0.08] shadow-sm hover:border-zinc-300 dark:hover:border-white/[0.16] transition-all duration-200 flex items-start gap-4"
                >
                  <div className="p-3 rounded-xl bg-zinc-50 dark:bg-white/[0.04] border border-zinc-100 dark:border-white/[0.06] shrink-0">
                    {icons[idx]}
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="font-bold text-base text-zinc-900 dark:text-white">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
