import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from './SocialIcons';
import {
  ArrowUp,
  FileDown,
} from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Profiles', href: '#profiles' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="border-t border-zinc-200/80 dark:border-white/[0.08] bg-white dark:bg-[#08090d] pt-16 pb-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-zinc-100 dark:border-white/[0.06] items-start">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 p-[1.5px] shadow-sm">
                <div className="w-full h-full bg-[#0d0e12] rounded-[9px] flex items-center justify-center">
                  <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 text-sm tracking-wider">
                    LJ
                  </span>
                </div>
              </div>
              <div>
                <h3 className="font-bold text-base text-zinc-900 dark:text-white">
                  {personalInfo.name}
                </h3>
                <p className="text-xs text-zinc-500">
                  Software Developer | Data Analyst
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 max-w-sm leading-relaxed">
              Computer Science Engineering undergraduate at Bennett University passionate about building practical software solutions and unlocking data insights.
            </p>

            <div className="pt-1 flex items-center gap-2">
              <a
                href={personalInfo.resumeUrl}
                download="Lavansh_Jindal_Resume.pdf"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-zinc-700 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 bg-zinc-100 dark:bg-white/[0.05] border border-zinc-200 dark:border-white/[0.06] transition-colors"
              >
                <FileDown className="w-3.5 h-3.5" />
                <span>Download Resume</span>
              </a>
            </div>
          </div>

          {/* Quick Nav Col */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-200">
              Quick Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Connect & Back to Top Col */}
          <div className="md:col-span-3 space-y-4 md:text-right flex flex-col md:items-end">
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-200">
              Profiles & Social
            </h4>
            <div className="flex items-center gap-2">
              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-zinc-100 dark:bg-white/[0.05] hover:bg-zinc-200 dark:hover:bg-white/[0.1] text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-zinc-100 dark:bg-white/[0.05] hover:bg-blue-50 dark:hover:bg-blue-950/40 text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.leetcodeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-zinc-100 dark:bg-white/[0.05] hover:bg-amber-50 dark:hover:bg-amber-950/40 text-zinc-600 dark:text-zinc-400 hover:text-amber-500 transition-colors"
                aria-label="LeetCode"
              >
                <LeetcodeIcon className="w-4 h-4" />
              </a>
            </div>

            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-semibold text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white bg-zinc-100 dark:bg-white/[0.05] hover:bg-zinc-200 dark:hover:bg-white/[0.1] border border-zinc-200 dark:border-white/[0.06] transition-all"
              aria-label="Scroll back to top of page"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 dark:text-zinc-400 gap-3">
          <div>
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-1.5">
            <span>Engineered with React, Vite, TypeScript & Tailwind CSS</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
