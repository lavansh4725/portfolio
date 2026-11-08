import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from './SocialIcons';
import {
  Mail,
  Phone,
  Copy,
  Check,
  Send,
  Sparkles,
  ExternalLink,
} from 'lucide-react';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  // Form states for pre-filling mailto
  const [name, setName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch {
      // Fallback
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    }
  };

  const handleCopyPhone = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.phone);
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2500);
    } catch {
      // Fallback
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2500);
    }
  };

  const handleSubmitMailto = (e: React.FormEvent) => {
    e.preventDefault();
    const mailSubject = encodeURIComponent(
      subject.trim() || `Portfolio Inquiry from ${name || 'Recruiter/Collaborator'}`
    );
    const bodyContent = encodeURIComponent(
      `Hi Lavansh,\n\n${message}\n\n---\nFrom: ${name || 'Sender'} (${senderEmail || 'No email provided'})\n`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${mailSubject}&body=${bodyContent}`;
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800/50">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white max-w-2xl">
            Have an opportunity or an interesting idea? Let's connect.
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-xl">
            I am currently open to Software Developer, Full-Stack Engineer, and Data Analyst roles, internships, and technical collaborations.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Info & Quick Actions (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Email Card */}
            <div className="p-6 rounded-2xl bg-white dark:bg-[#11131a] border border-zinc-200/80 dark:border-white/[0.08] shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-zinc-600 dark:text-zinc-400 uppercase tracking-wider block">
                      Email Address
                    </span>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-sm sm:text-base font-bold text-zinc-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-2 border-t border-zinc-100 dark:border-white/[0.04]">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold text-zinc-700 dark:text-zinc-300 bg-zinc-100 dark:bg-white/[0.05] hover:bg-zinc-200 dark:hover:bg-white/[0.1] transition-all"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      <span className="text-emerald-600 dark:text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-all shadow-sm"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Email</span>
                </a>
              </div>
            </div>

            {/* Phone Card */}
            <div className="p-6 rounded-2xl bg-white dark:bg-[#11131a] border border-zinc-200/80 dark:border-white/[0.08] shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-zinc-600 dark:text-zinc-400 uppercase tracking-wider block">
                      Phone Number
                    </span>
                    <a
                      href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                      className="text-sm sm:text-base font-bold text-zinc-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-2 border-t border-zinc-100 dark:border-white/[0.04]">
                <button
                  type="button"
                  onClick={handleCopyPhone}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold text-zinc-700 dark:text-zinc-300 bg-zinc-100 dark:bg-white/[0.05] hover:bg-zinc-200 dark:hover:bg-white/[0.1] transition-all"
                  aria-label="Copy phone number"
                >
                  {copiedPhone ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      <span className="text-emerald-600 dark:text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Phone</span>
                    </>
                  )}
                </button>

                <a
                  href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold text-white bg-purple-600 hover:bg-purple-500 transition-all shadow-sm"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Now</span>
                </a>
              </div>
            </div>

            {/* Social channels card */}
            <div className="p-6 rounded-2xl bg-white dark:bg-[#11131a] border border-zinc-200/80 dark:border-white/[0.08] shadow-sm space-y-3">
              <span className="text-xs font-semibold text-zinc-600 dark:text-zinc-400 uppercase tracking-wider block">
                Direct Profiles
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={personalInfo.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 p-3 rounded-xl bg-zinc-50 dark:bg-white/[0.03] hover:bg-blue-50 dark:hover:bg-blue-950/40 border border-zinc-200/60 dark:border-white/[0.06] text-xs font-semibold text-zinc-700 dark:text-zinc-300 hover:text-blue-600 flex items-center justify-center gap-2 transition-all"
                >
                  <LinkedinIcon className="w-4 h-4 text-blue-500" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={personalInfo.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 p-3 rounded-xl bg-zinc-50 dark:bg-white/[0.03] hover:bg-zinc-100 dark:hover:bg-white/[0.08] border border-zinc-200/60 dark:border-white/[0.06] text-xs font-semibold text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white flex items-center justify-center gap-2 transition-all"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <a
                  href={personalInfo.leetcodeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 p-3 rounded-xl bg-zinc-50 dark:bg-white/[0.03] hover:bg-amber-50 dark:hover:bg-amber-950/40 border border-zinc-200/60 dark:border-white/[0.06] text-xs font-semibold text-zinc-700 dark:text-zinc-300 hover:text-amber-500 flex items-center justify-center gap-2 transition-all"
                >
                  <LeetcodeIcon className="w-4 h-4 text-amber-500" />
                  <span>LeetCode</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Pre-filled Mail Composer (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-8 rounded-2xl bg-white dark:bg-[#11131a] border border-zinc-200/80 dark:border-white/[0.08] shadow-sm space-y-6">
              <div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
                  Compose a Message
                </h3>
                <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                  Fill in your note below and click Send Message to open your default email app with pre-filled details. No sign-ups or paid intermediaries required.
                </p>
              </div>

              <form onSubmit={handleSubmitMailto} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label
                      htmlFor="sender-name"
                      className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 uppercase tracking-wider"
                    >
                      Your Name
                    </label>
                    <input
                      id="sender-name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Sarah Jenkins"
                      required
                      className="w-full px-3.5 py-2.5 rounded-xl text-sm bg-zinc-50 dark:bg-white/[0.03] text-zinc-900 dark:text-white border border-zinc-200 dark:border-white/[0.1] focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all placeholder:text-zinc-400"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="sender-email"
                      className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 uppercase tracking-wider"
                    >
                      Your Email / Company
                    </label>
                    <input
                      id="sender-email"
                      type="text"
                      value={senderEmail}
                      onChange={(e) => setSenderEmail(e.target.value)}
                      placeholder="e.g. sarah@company.com"
                      className="w-full px-3.5 py-2.5 rounded-xl text-sm bg-zinc-50 dark:bg-white/[0.03] text-zinc-900 dark:text-white border border-zinc-200 dark:border-white/[0.1] focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all placeholder:text-zinc-400"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="message-subject"
                    className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 uppercase tracking-wider"
                  >
                    Subject
                  </label>
                  <input
                    id="message-subject"
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="e.g. Interview Opportunity / Software Developer Role"
                    required
                    className="w-full px-3.5 py-2.5 rounded-xl text-sm bg-zinc-50 dark:bg-white/[0.03] text-zinc-900 dark:text-white border border-zinc-200 dark:border-white/[0.1] focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all placeholder:text-zinc-400"
                  />
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="message-body"
                    className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 uppercase tracking-wider"
                  >
                    Message
                  </label>
                  <textarea
                    id="message-body"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe the opportunity, role requirements, or project you'd like to discuss..."
                    required
                    className="w-full px-3.5 py-2.5 rounded-xl text-sm bg-zinc-50 dark:bg-white/[0.03] text-zinc-900 dark:text-white border border-zinc-200 dark:border-white/[0.1] focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all placeholder:text-zinc-400 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-500/25 active:scale-[0.99] transition-all duration-200"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message via Email Client</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-60 ml-1" />
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
