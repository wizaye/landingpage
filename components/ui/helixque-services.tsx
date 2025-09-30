"use client";
import React from "react";
import HelixqueLogo from "@/components/ui/helixque-logo";
import { BrainCircuit, Code2, FolderGit2, Presentation } from "lucide-react";
import { motion } from "motion/react";

// 
// Connect Globally. No Paywalls.
// Meet peers across continents without subscriptions or barriers. Discover, connect, and grow—free and open.

// HelixQue


export default function HelixqueServices() {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-lg">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.12]">
        <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-gradient-to-br from-blue-500/20 via-cyan-400/15 to-indigo-500/15 blur-2xl" />
        <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-gradient-to-tr from-fuchsia-500/15 via-violet-500/15 to-sky-400/15 blur-2xl" />
      </div>

      {/* Content grid */}
      <div className="relative z-[1] grid grid-cols-2 gap-4 md:gap-6 h-full p-6 md:p-8">
        {/* Center logo overlay */}
        <div className="absolute inset-6 md:inset-8 grid place-items-center pointer-events-none">
          <div className="rounded-full bg-white/70 dark:bg-neutral-900/60 ring-1 ring-gray-200 dark:ring-neutral-800 p-3 backdrop-blur">
            <HelixqueLogo size={40} />
          </div>
        </div>

        <ServiceCard
          icon={<BrainCircuit className="h-4 w-4 text-blue-600" />}
          title="Behavioral Interviews"
          desc=""
          floatAnim={[0, -6, 0]}
          className="transform -translate-y-6"
        />
        <HeadlineCard
          headline="Match. Mingle. Thrive."
          description="Helixque's algorithm sparks authentic connections. Set your interests — get matched with inspiring professionals, founders, and VCs. Zero bias, just chemistry."
          className="transform -translate-y-6"
          delay={0.15}
        />
        <ServiceCard
          icon={<FolderGit2 className="h-4 w-4 text-emerald-600" />}
          title="Portfolio Critique"
          desc=""
          floatAnim={[0, -5, 0]}
          delay={0.25}
          className="transform translate-y-6"
        />
        <ServiceCard
          icon={<Presentation className="h-4 w-4 text-fuchsia-600" />}
          title="Startup Pitch Practice"
          desc=""
          floatAnim={[0, 7, 0]}
          delay={0.35}
          className="transform translate-y-6"
        />
      </div>
    </div>
  );
}

function ServiceCard({
  icon,
  title,
  desc,
  floatAnim,
  delay = 0,
  className = "",
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  floatAnim: number[];
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={`relative rounded-lg border border-gray-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/60 backdrop-blur p-2 md:p-3 text-left shadow-sm hover:shadow-md transition ${className}`}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
    >
      <div>
        <div className="flex items-center gap-2 mb-1">
          <div className="grid place-items-center size-5 rounded-md bg-white dark:bg-neutral-950 ring-1 ring-gray-200 dark:ring-neutral-800">
            {icon}
          </div>
          <div className="text-[11px] md:text-[12px] font-medium text-gray-900 dark:text-white">
            {title}
          </div>
        </div>
        <div className="text-[10px] md:text-[11px] text-gray-600 dark:text-neutral-300 leading-tight truncate">
          {desc}
        </div>
      </div>
    </motion.div>
  );
}

function HeadlineCard({
  headline,
  description,
  className = "",
  delay = 0,
}: {
  headline: string;
  description: string;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={`relative rounded-lg border border-gray-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/60 backdrop-blur p-3 md:p-4 text-left shadow-sm hover:shadow-md transition ${className}`}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
    >
      <div>
        <div className="text-sm md:text-base font-semibold text-gray-900 dark:text-white mb-2 leading-tight">
          {headline}
        </div>
        <div className="text-xs md:text-sm text-gray-600 dark:text-neutral-300 leading-relaxed">
          {description}
        </div>
      </div>
    </motion.div>
  );
}


