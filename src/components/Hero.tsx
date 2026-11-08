import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from './SocialIcons';
import {
  ArrowRight,
  FileDown,
  Mail,
  Sparkles,
  MapPin,
  CheckCircle2,
} from 'lucide-react';

export const Hero: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  const roles = [
    'Software Developer',
    'Data Analyst',
    'Full-Stack Developer',
    'Business Intelligence Analyst',
  ];

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timer: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayText === currentRole) {
      // Pause at full word
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === '') {
      // Done deleting, switch to next word
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      setTypingSpeed(100);
    } else {
      // Typing or deleting characters
      timer = setTimeout(() => {
        setDisplayText((prev) =>
          isDeleting
            ? currentRole.substring(0, prev.length - 1)
            : currentRole.substring(0, prev.length + 1)
        );
        setTypingSpeed(isDeleting ? 45 : 90);
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex, typingSpeed, roles]);

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* Ambient background light glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-gradient-to-tr from-blue-600/15 via-indigo-500/10 to-purple-600/15 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-cyan-500/10 blur-[100px] pointer-events-none rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & Call to Actions */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            
            {/* Status pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-zinc-200 dark:border-white/[0.08] bg-white/80 dark:bg-zinc-900/60 backdrop-blur-md shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-medium text-zinc-700 dark:text-zinc-300">
                {personalInfo.availability}
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-white leading-[1.15]">
                {personalInfo.headline}
              </h1>

              {/* Animated Dual Role Display */}
              <div className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight text-zinc-600 dark:text-zinc-300 flex flex-wrap items-center justify-center lg:justify-start gap-2 min-h-[40px]">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-300 dark:to-purple-400">
                  {displayText}
                </span>
                <span className="inline-block w-[3px] h-7 bg-blue-500 animate-pulse ml-0.5" />
              </div>
            </div>

            {/* Supporting Description */}
            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
              {personalInfo.bio}
            </p>

            {/* Institutional badge */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-4 text-xs font-medium text-zinc-500 dark:text-zinc-400">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-blue-500" />
                <span>Bennett University (Greater Noida, India)</span>
              </div>
              <span className="hidden sm:inline text-zinc-300 dark:text-zinc-700">•</span>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                <span>CGPA: 8.37/10 (Dean's List 2023)</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3 w-full sm:w-auto">
              {/* View Projects */}
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 active:scale-95 transition-all duration-200"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* Download Resume */}
              <a
                href={personalInfo.resumeUrl}
                download="Lavansh_Jindal_Resume.pdf"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-zinc-800 dark:text-zinc-200 bg-zinc-100 hover:bg-zinc-200 dark:bg-white/[0.06] dark:hover:bg-white/[0.1] border border-zinc-200/80 dark:border-white/[0.08] active:scale-95 transition-all duration-200"
              >
                <FileDown className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>Download Resume</span>
              </a>

              {/* Let's Connect */}
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-zinc-700 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-zinc-50 dark:hover:bg-white/[0.04] transition-all duration-200"
              >
                <Mail className="w-4 h-4" />
                <span>Let's Connect</span>
              </a>
            </div>

            {/* Social quick access */}
            <div className="pt-4 flex items-center justify-center lg:justify-start gap-3 w-full">
              <span className="text-xs uppercase tracking-wider font-semibold text-zinc-600 dark:text-zinc-400">
                Connect:
              </span>
              <div className="flex items-center gap-2">
                <a
                  href={personalInfo.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white bg-zinc-100 dark:bg-white/[0.05] hover:bg-zinc-200 dark:hover:bg-white/[0.1] border border-zinc-200/60 dark:border-white/[0.06] transition-all"
                  aria-label="GitHub Profile"
                  title="GitHub: lavansh4725"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 bg-zinc-100 dark:bg-white/[0.05] hover:bg-zinc-200 dark:hover:bg-white/[0.1] border border-zinc-200/60 dark:border-white/[0.06] transition-all"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn: lavansh-jindal"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.leetcodeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg text-zinc-600 dark:text-zinc-400 hover:text-amber-500 bg-zinc-100 dark:bg-white/[0.05] hover:bg-zinc-200 dark:hover:bg-white/[0.1] border border-zinc-200/60 dark:border-white/[0.06] transition-all"
                  aria-label="LeetCode Profile"
                  title="LeetCode: lavansh_0395"
                >
                  <LeetcodeIcon className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Real LinkedIn Profile Image & Floating Cards */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            
            {/* Ambient circular halo */}
            <div className="absolute w-72 h-72 sm:w-80 sm:h-80 bg-gradient-to-tr from-blue-500/20 via-indigo-500/20 to-purple-500/20 rounded-full blur-2xl animate-pulse pointer-events-none" />

            <div className="relative group">
              {/* Decorative border ring */}
              <div className="p-1.5 rounded-full bg-gradient-to-tr from-blue-500 via-indigo-500 to-purple-500 shadow-2xl shadow-blue-500/20 group-hover:shadow-blue-500/35 transition-all duration-500 group-hover:scale-[1.02]">
                <div className="p-1 rounded-full bg-[#0a0b0e] dark:bg-[#0a0b0e]">
                  {/* Real LinkedIn Profile Picture */}
                  <img
                    src={personalInfo.profileImageUrl}
                    alt="Lavansh Jindal - Software Developer and Data Analyst"
                    className="w-64 h-64 sm:w-72 sm:h-72 object-cover object-top rounded-full transition-transform duration-500 group-hover:scale-[1.03]"
                    loading="eager"
                    width={288}
                    height={288}
                  />
                </div>
              </div>

              {/* Floating verified badge 1 (Top Right) */}
              <div className="absolute -top-3 -right-3 sm:-right-4 px-3 py-1.5 rounded-xl border border-zinc-200 dark:border-white/[0.1] bg-white/95 dark:bg-[#12131a]/90 backdrop-blur-md shadow-lg flex items-center gap-2 transform transition-transform duration-300 hover:scale-105">
                <Sparkles className="w-3.5 h-3.5 text-blue-500" />
                <span className="text-xs font-semibold text-zinc-800 dark:text-zinc-200">
                  Full-Stack & BI
                </span>
              </div>

              {/* Floating badge 2 (Bottom Left) */}
              <div className="absolute -bottom-3 -left-3 sm:-left-4 px-3.5 py-1.5 rounded-xl border border-zinc-200 dark:border-white/[0.1] bg-white/95 dark:bg-[#12131a]/90 backdrop-blur-md shadow-lg flex items-center gap-2 transform transition-transform duration-300 hover:scale-105">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                <span className="text-xs font-semibold text-zinc-800 dark:text-zinc-200">
                  Bennett Univ (8.37 CGPA)
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
