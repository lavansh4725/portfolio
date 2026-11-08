import React from 'react';
import { codingProfilesData } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from './SocialIcons';
import {
  ExternalLink,
  Sparkles,
  ArrowUpRight,
} from 'lucide-react';

export const CodingProfiles: React.FC = () => {
  const getIcon = (platform: string) => {
    switch (platform) {
      case 'GitHub':
        return <GithubIcon className="w-6 h-6 text-zinc-900 dark:text-white" />;
      case 'LeetCode':
        return <LeetcodeIcon className="w-6 h-6 text-amber-500" />;
      case 'LinkedIn':
        return <LinkedinIcon className="w-6 h-6 text-blue-500" />;
      default:
        return <ExternalLink className="w-6 h-6 text-blue-500" />;
    }
  };

  return (
    <section id="profiles" className="py-20 relative bg-zinc-50/50 dark:bg-[#0c0d13]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800/50">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Developer Presence</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
            Coding & Professional Profiles
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-2xl">
            Explore my verified public code repositories, algorithm practice profiles, and professional network.
          </p>
        </div>

        {/* Profiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {codingProfilesData.map((profile, idx) => (
            <div
              key={idx}
              className="p-7 rounded-2xl bg-white dark:bg-[#11131a] border border-zinc-200/80 dark:border-white/[0.08] shadow-sm hover:border-blue-500/40 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-2xl bg-zinc-50 dark:bg-white/[0.04] border border-zinc-200/60 dark:border-white/[0.06] group-hover:scale-105 transition-transform">
                    {getIcon(profile.platform)}
                  </div>
                  <span className="text-xs font-mono px-2.5 py-1 rounded bg-zinc-100 dark:bg-white/[0.05] text-zinc-600 dark:text-zinc-400 border border-zinc-200/60 dark:border-white/[0.06]">
                    @{profile.username}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {profile.platform}
                  </h3>
                  <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 mt-0.5">
                    {profile.tagline}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {profile.description}
                </p>
              </div>

              <div className="pt-6 border-t border-zinc-100 dark:border-white/[0.04] mt-6">
                <a
                  href={profile.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-zinc-800 dark:text-zinc-200 bg-zinc-100 dark:bg-white/[0.05] hover:bg-zinc-200 dark:hover:bg-white/[0.1] border border-zinc-200/80 dark:border-white/[0.08] transition-all group/btn"
                >
                  <span>Visit {profile.platform}</span>
                  <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
