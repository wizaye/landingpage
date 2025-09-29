"use client";
import { useState, useRef } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { Badge } from "../ui/badge";
import { GithubStarButton } from "./github-star-button";
import { DiscordButton } from "./discord-button";
import { SimpleThemeToggle } from "./simple-theme-toggle";
import { VerticalSeparator } from "./vertical-separator";

interface HelixQueHeaderProps {
  className?: string;
}

export default function HelixQueHeader({ className }: HelixQueHeaderProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [pillStyle, setPillStyle] = useState({ left: 0, width: 0 });
  const [isActionsOpen, setIsActionsOpen] = useState(false);
  const navItemsRef = useRef<(HTMLLIElement | null)[]>([]);

  const updatePillPosition = (index: number) => {
    const el = navItemsRef.current[index];
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const parentRect = el.parentElement?.getBoundingClientRect();
    if (!parentRect) return;
    setPillStyle({ left: rect.left - parentRect.left, width: rect.width });
  };

  const HelixQueLogo = () => (
    <div className="text-foreground flex items-end gap-2.5">
      <img src="/logo.svg" alt="HelixQue Logo" width={20} height={20} className="h-5 w-auto" />
      <div className="relative">
        <span className="hidden sm:block font-heading text-lg leading-none font-semibold">HelixQue</span>
        <Badge
          variant="secondary"
          className="hidden sm:block absolute -top-1 -right-1 translate-x-full text-[8px] px-0.5 py-0 h-auto"
        >
          Beta
        </Badge>
      </div>
    </div>
  );

  const navigationItems = [{ href: "/", label: "Hacktoberfest", isSpecial: true }];

  return (
    <div className={cn("bg-background theme-container", className)}>
      <div className="bg-background/70 sticky top-0 z-40 w-full backdrop-blur-sm">
        <div className="relative mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4">
          {/* Left: Logo */}
          <Link href="/" className="transition-opacity duration-200 hover:opacity-80">
            <HelixQueLogo />
          </Link>

          {/* Center: Inline/Centered Nav (mobile & desktop) */}
          <nav
            className="pointer-events-auto absolute left-1/2 -translate-x-1/2 transform"
            aria-label="Main navigation"
          >
            <ul className="border-border/70 relative flex w-fit rounded-full border p-1">
              {navigationItems.map((item, index) => (
                <li
                  key={item.href}
                  ref={(el) => { navItemsRef.current[index] = el; }}
                  className="hover:text-foreground text-muted-foreground z-10 block cursor-pointer px-5 py-1.5 text-sm font-medium tracking-tight transition-all duration-300 ease-out"
                  onMouseEnter={() => {
                    setHoveredIndex(index);
                    updatePillPosition(index);
                  }}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <Link
                    href={item.href}
                    className={`text-[13.5px] transition-all duration-300 ease-out relative ${
                      item.isSpecial
                        ? "text-orange-600 hover:text-orange-700 dark:text-orange-400 dark:hover:text-orange-300 font-semibold"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {item.label}
                    {item.isSpecial && " 🔥"}
                  </Link>
                </li>
              ))}
              {/* Hover pill (desktop nicety; harmless on touch) */}
              <motion.li
                className="bg-muted/80 absolute inset-0 my-1.5 rounded-full shadow-sm"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  hoveredIndex !== null
                    ? {
                        opacity: 1,
                        scale: 1,
                        left: `${pillStyle.left}px`,
                        width: `${pillStyle.width}px`,
                      }
                    : { opacity: 0, scale: 0.8 }
                }
                transition={{ type: "spring", stiffness: 400, damping: 30, mass: 0.8 }}
              />
            </ul>
          </nav>

          {/* Right: Actions */}
          <div className="flex items-center gap-2">
            {/* Always show theme toggle */}
           

            {/* Desktop actions inline */}
            <nav className="hidden md:flex items-center gap-3 text-sm font-medium" aria-label="Actions">
              <GithubStarButton />
              <DiscordButton />
              <VerticalSeparator />
            </nav>
             <SimpleThemeToggle className="h-[32px] w-[38px] justify-center" />

            {/* Mobile: toggle for just GitHub + Discord */}
            <button
              type="button"
              className="md:hidden inline-flex h-8 w-8 items-center justify-center rounded-md border border-border/60 bg-background/60 hover:bg-muted/50 transition"
              aria-label="Open actions"
              aria-controls="mobile-actions"
              aria-expanded={isActionsOpen}
              onClick={() => setIsActionsOpen((s) => !s)}
            >
              {/* simple 3-dots icon */}
              <span className="sr-only">Toggle actions</span>
              <div className="flex flex-col items-center justify-center gap-[3px]">
                <span className="h-[2px] w-3 bg-current rounded" />
                <span className="h-[2px] w-3 bg-current rounded" />
                <span className="h-[2px] w-3 bg-current rounded" />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile actions dropdown (GitHub + Discord only) */}
        <AnimatePresence>
          {isActionsOpen && (
            <motion.div
              id="mobile-actions"
              role="dialog"
              aria-modal="true"
              className="md:hidden absolute right-4 left-4 top-16 z-50 rounded-lg border border-border/60 bg-background/95 shadow-lg backdrop-blur-sm"
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.15 }}
            >
              <div className="p-3">
                <div className="flex items-center justify-center gap-3">
                  <GithubStarButton className="flex-1 justify-center h-10" />
                  <DiscordButton className="flex-1 justify-center h-10" />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
