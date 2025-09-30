'use client';

import React, { useEffect, useState } from 'react';
import { CursorCard, CursorCardsContainer } from '@/components/ui/cursor-cards';
import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { useTheme } from 'next-themes';
import HelixqueConnection from '@/components/ui/helixque-connection';
import { MatchMingleThrive } from '@/components/ui/match-mingle-thrive';

// Removed dynamic map to avoid hydration issues

export const FeaturesSection = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
  <section className="container mx-auto flex w-full max-w-5xl flex-col items-center justify-start !px-4 py-16 text-center md:py-32">
    <div className="flex flex-col items-center text-center">
            <h2 className="leading-tighter font-gilroy max-w-2xl bg-gradient-to-b from-gray-900/90 via-gray-800 to-gray-700/80 dark:from-white/80 dark:via-white dark:to-white/60 bg-clip-text text-5xl font-semibold tracking-tight text-pretty text-transparent lg:leading-[1.1] xl:text-6xl/[4rem] xl:tracking-tighter">
        Grow Your Career
      </h2>
      <p className="text-muted-foreground text-base tracking-tight mt-4 max-w-2xl">
        Skip cold outreach. Set your skills and preferences, get matched in seconds, and have meaningful conversations mock interviews, mentoring, code reviews, or pitch practice.
      </p>
    </div>

    {/* Feature Cards Row 1 */}
    <div className="mt-10 flex w-full flex-col gap-4 md:mt-14">
      <CursorCardsContainer className="flex flex-col md:flex-row gap-6 md:h-[380px]">
        {/* Card 1: Anonymous Onboarding with LinkedIn Verification */}
        <CursorCard borderColor={theme === "dark" ? "#262626" : "#e5e5e5"} className="h-full md:w-[45%] w-full rounded-xl p-7 shadow-md bg-white dark:bg-neutral-950 border-gray-200 dark:border-neutral-800 overflow-hidden">
        <div className="h-full flex flex-col">
            <div className="mb-4 text-left">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Anonymous, Verified Onboarding</h3>
              <p className="text-muted-foreground text-sm">
                Sign in with LinkedIn to verify authenticity while staying anonymous. Your profile is validated in the background—reveal only when you choose.
              </p>
            </div>
            <div className="flex-1 flex items-center justify-center rounded-lg relative min-h-[240px] overflow-hidden">
              {/* Abstract avatar + floating tags (pattern inspired by Helixque connection visuals) */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-gradient-to-br from-blue-500/10 via-blue-600/10 to-indigo-500/10 blur-2xl" />
                <div className="absolute -bottom-12 -left-12 w-56 h-56 rounded-full bg-gradient-to-tr from-fuchsia-500/10 via-violet-500/10 to-sky-400/10 blur-2xl" />
              </div>

              <div className="relative z-[1] flex flex-col items-center gap-5">
                {/* Stylish avatar */}
                <div className="relative">
                  <div className="size-20 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 shadow-lg shadow-blue-500/20 ring-1 ring-white/10 dark:ring-white/5 grid place-items-center">
                    <div className="size-10 rounded-full bg-white/90 dark:bg-neutral-900/90 ring-1 ring-black/5 dark:ring-white/10" />
                  </div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-blue-500/10 to-indigo-500/10"
                  />
                  {/* LinkedIn Verified badge */}
                  <div className="absolute -bottom-2 -right-2 flex items-center gap-1 rounded-full border border-gray-200 dark:border-neutral-700 bg-white/80 dark:bg-neutral-900/70 backdrop-blur px-2 py-1">
                    <span className="inline-flex h-4 w-4 items-center justify-center rounded-[3px] bg-[#0A66C2] text-[9px] font-bold text-white leading-none">in</span>
                    <span className="text-[10px] text-gray-900 dark:text-white">Verified</span>
                    <ShieldCheck className="h-3 w-3 text-emerald-500" />
                  </div>
                </div>

                {/* Anonymous state + skill hints */}
                <div className="relative w-[280px] h-[120px]">
                  {/* Anonymous toggle-like chip */}
                  <motion.div
                    className="absolute left-1/2 -translate-x-1/2 -top-1 flex items-center gap-1.5 rounded-full border border-gray-200 dark:border-neutral-700 bg-white/80 dark:bg-neutral-900/70 backdrop-blur px-3 py-1 text-xs text-gray-900 dark:text-white"
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <span className="inline-block h-2.5 w-2.5 rounded-full bg-amber-500" />
                    Anonymous
                  </motion.div>
                  <motion.div
                    className="absolute left-2 top-3 rounded-full border border-gray-200 dark:border-neutral-700 bg-white/70 dark:bg-neutral-900/60 backdrop-blur px-3 py-1 text-xs text-gray-900 dark:text-white"
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    Design Systems
                  </motion.div>
                  <motion.div
                    className="absolute right-4 top-1 rounded-full border border-gray-200 dark:border-neutral-700 bg-white/70 dark:bg-neutral-900/60 backdrop-blur px-3 py-1 text-xs text-gray-900 dark:text-white"
                    animate={{ y: [0, 6, 0] }}
                    transition={{ duration: 2.8, repeat: Infinity, delay: 0.2 }}
                  >
                    AI/ML
                  </motion.div>
                  <motion.div
                    className="absolute left-8 bottom-3 rounded-full border border-gray-200 dark:border-neutral-700 bg-white/70 dark:bg-neutral-900/60 backdrop-blur px-3 py-1 text-xs text-gray-900 dark:text-white"
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 2.6, repeat: Infinity, delay: 0.4 }}
                  >
                    Product Strategy
                  </motion.div>
                  <motion.div
                    className="absolute right-8 bottom-1 rounded-full border border-gray-200 dark:border-neutral-700 bg-white/70 dark:bg-neutral-900/60 backdrop-blur px-3 py-1 text-xs text-gray-900 dark:text-white"
                    animate={{ y: [0, 7, 0] }}
                    transition={{ duration: 3.2, repeat: Infinity, delay: 0.1 }}
                  >
                    Fundraising
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </CursorCard>

        {/* Card 2: Match. Mingle. Thrive. */}
        <CursorCard borderColor={theme === "dark" ? "#262626" : "#e5e5e5"} className="h-full md:w-[55%] w-full rounded-xl p-7 shadow-md bg-white dark:bg-neutral-950 border-gray-200 dark:border-neutral-800 overflow-visible">
          <div className="h-full flex flex-col">
            <div className="mb-4 text-left">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Match. Mingle. Thrive.</h3>
              <p className="text-muted-foreground text-sm">Helixque's algorithm sparks authentic connections. Set your interests — get matched with inspiring professionals, founders, and VCs. Zero bias, just chemistry.</p>
            </div>
            <div className="flex-1 relative overflow-hidden rounded-lg min-h-[260px]">
              <MatchMingleThrive />
            </div>
          </div>
        </CursorCard>
      </CursorCardsContainer>

      {/* Feature Cards Row 2 */}
      <CursorCardsContainer className="flex flex-col md:flex-row gap-6 md:h-[380px]">
        {/* Card 3: Helixque Anonymous Connection */}
        <CursorCard borderColor={theme === "dark" ? "#262626" : "#e5e5e5"} className="h-full md:w-[55%] w-full rounded-xl p-7 shadow-md bg-white dark:bg-neutral-950 border-gray-200 dark:border-neutral-800 overflow-hidden">
          <div className="h-full flex flex-col">
            <div className="mb-4 text-left">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Professional Networking Sessions</h3>
              <p className="text-muted-foreground text-sm">
                Mock interviews (behavioral & technical), pair programming, portfolio critique, and startup pitch practice with feedback etc.
              </p>
            </div>
            <div className="flex-1 relative overflow-hidden rounded-lg min-h-[200px]">
              <HelixqueConnection />
            </div>
          </div>
        </CursorCard>

        {/* Card 4: Interactive Chat Component */}
        <CursorCard borderColor={theme === "dark" ? "#262626" : "#e5e5e5"} className="h-full md:w-[45%] w-full rounded-xl p-4 md:p-7 shadow-md bg-white dark:bg-neutral-950 border-gray-200 dark:border-neutral-800 overflow-hidden">
          <div className="h-full flex flex-col">
            <div className="mb-3 md:mb-4 text-left">
              <h3 className="text-base md:text-lg font-semibold text-gray-900 dark:text-white mb-1 md:mb-2">Real time chats</h3>
              <p className="text-muted-foreground text-xs md:text-sm">Instant professional connections.</p>
            </div>
            <div className="flex-1 flex flex-col rounded-lg overflow-hidden relative">
              <div className="flex-1 p-3 md:p-4 space-y-4 md:space-y-6 overflow-y-auto min-h-0">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.4 }}
                >
                  <div className="flex items-center gap-1.5 md:gap-2 mb-1.5 md:mb-2">
                    <span className="text-gray-900 dark:text-white text-[10px] md:text-xs font-medium">Peer</span>
                    <span className="text-muted-foreground text-[10px] md:text-xs">2:30 PM</span>
                  </div>
                                    <div className="rounded-lg bg-gray-200 dark:bg-neutral-800 w-fit max-w-[85%] border border-gray-300 dark:border-neutral-700 p-2 md:p-2.5 text-[10px] md:text-xs text-gray-900 dark:text-white text-left leading-relaxed">
                    Hey, are you ready to take interview? 
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                  className="mb-1 md:mb-2"
                >
                                    <div className="rounded-lg mb-1 ml-auto w-fit max-w-[85%] bg-blue-600 p-2 md:p-2.5 text-[10px] md:text-xs text-white text-left leading-relaxed">
                    Sure. Let's connect now!
                  </div>
                  <div className="flex items-center justify-end gap-1.5 md:gap-2">
                    <span className="text-gray-900 dark:text-white text-[10px] md:text-xs font-medium">You</span>
                    <span className="text-muted-foreground text-[10px] md:text-xs">2:31 PM</span>
                  </div>
                </motion.div>
              </div>

              <motion.div
                className="flex items-center gap-1.5 md:gap-2 p-3 md:p-3 pt-1.5 md:pt-2 shrink-0"
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.3 }}
              >
                <motion.input
                  type="text"
                  placeholder="Type your message..."
                  className="flex-1 rounded-lg border border-gray-300 dark:border-neutral-600 bg-white dark:bg-neutral-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-neutral-400 px-2.5 md:px-3 py-1.5 md:py-2 text-[10px] md:text-xs focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <motion.button
                  className="flex h-7 w-7 md:h-8 md:w-8 items-center justify-center rounded-lg bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 touch-manipulation"
                  initial={{ scale: 0, rotate: 180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.6, duration: 0.3, type: 'spring' }}
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ArrowRight className="h-3 w-3 md:h-4 md:w-4" />
                </motion.button>
              </motion.div>
            </div>
          </div>
        </CursorCard>
      </CursorCardsContainer>
    </div>
  </section>
  );
};

