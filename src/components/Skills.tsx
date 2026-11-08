import React, { useState } from 'react';
import { skillCategories } from '../data/portfolioData';
import {
  Code2,
  Layers,
  Database,
  BarChart,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categoryIcons: Record<string, React.ReactNode> = {
    'Programming Languages': <Code2 className="w-4 h-4 text-blue-500" />,
    'Web & Backend Development': <Layers className="w-4 h-4 text-indigo-500" />,
    'Data Analytics & Engineering Tools': <BarChart className="w-4 h-4 text-cyan-500" />,
    'Databases & Core CS Concepts': <Database className="w-4 h-4 text-purple-500" />,
  };

  const filteredCategories =
    selectedCategory === 'all'
      ? skillCategories
      : skillCategories.filter((cat) => cat.title === selectedCategory);

  return (
    <section id="skills" className="py-20 relative bg-zinc-50/50 dark:bg-[#0c0d13]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800/50">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Verified Tooling</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
            Technical Skills & Tooling
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-2xl">
            A comprehensive overview of programming languages, frameworks, data analytics tools, and core computer science fundamentals directly grounded in my verified academic coursework and production projects.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            type="button"
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
              selectedCategory === 'all'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25'
                : 'bg-white dark:bg-[#12131b] text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white border border-zinc-200/80 dark:border-white/[0.08]'
            }`}
          >
            All Categories
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.title}
              type="button"
              onClick={() => setSelectedCategory(cat.title)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${
                selectedCategory === cat.title
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25'
                  : 'bg-white dark:bg-[#12131b] text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white border border-zinc-200/80 dark:border-white/[0.08]'
              }`}
            >
              {categoryIcons[cat.title]}
              <span>{cat.title}</span>
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {filteredCategories.map((cat) => (
            <div
              key={cat.title}
              className="p-7 rounded-2xl bg-white dark:bg-[#11131a] border border-zinc-200/80 dark:border-white/[0.08] shadow-sm hover:border-blue-500/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-zinc-100 dark:bg-white/[0.05] border border-zinc-200/60 dark:border-white/[0.08]">
                    {categoryIcons[cat.title] || <Code2 className="w-4 h-4 text-blue-500" />}
                  </div>
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
                    {cat.title}
                  </h3>
                </div>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-6">
                  {cat.description}
                </p>
              </div>

              {/* Skill Badges */}
              <div className="flex flex-wrap gap-2.5 pt-2">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium text-zinc-800 dark:text-zinc-200 bg-zinc-50 dark:bg-white/[0.03] hover:bg-blue-50/70 dark:hover:bg-blue-950/30 border border-zinc-200/80 dark:border-white/[0.06] hover:border-blue-500/30 dark:hover:border-blue-400/30 transition-all duration-200 group"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 dark:text-blue-400 group-hover:scale-110 transition-transform" />
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
