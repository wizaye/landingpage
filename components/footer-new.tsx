"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Badge } from "./ui/badge";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CornerDownLeft,
  Github,
  Linkedin,
  Twitter,
  Youtube,
  type LucideIcon,
} from "lucide-react";
import { Icons } from "./utils/icons";
import Image from "next/image";
import { ThemeSwitcher } from "@/components/theme";

type SocialLink = { label: string; href: string; icon: LucideIcon };

const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/HXQLabs", icon: Github },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/hxqlabs", icon: Linkedin },
  { label: "Twitter", href: "https://twitter.com/hxqlabs", icon: Twitter },
  { label: "YouTube", href: "https://www.youtube.com/@hxqlabs", icon: Youtube },
];

type FooterColumnLink = {
  label: string;
  href: string;
  external?: boolean;
  badge?: string;
  badgeVariant?: "default" | "secondary" | "outline" | "destructive";
};

type FooterColumn = {
  title: string;
  links: FooterColumnLink[];
};

const buildFooterColumns = (discordUrl: string, hasDiscordInvite: boolean): FooterColumn[] => [
  {
    title: "Platform",
    links: [
      { label: "Overview", href: "/" },
      { label: "Pricing", href: "/#pricing" },
      { label: "Announcements", href: "/announcements" },
      { label: "Changelog", href: "/changelog" },
      { label: "Status", href: "/status" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/blog" },
      {
        label: "Hacktoberfest",
        href: "/hacktoberfest",
        badge: "Seasonal",
        badgeVariant: "secondary",
      },
      {
        label: "Feature Requests",
        href: "https://magicui.featurebase.app",
        external: true,
        badge: "Voting",
        badgeVariant: "outline",
      },
      {
        label: "Support",
        href: "mailto:hello@helixque.com",
        external: true,
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        label: "Discord",
        href: discordUrl,
        external: true,
        badge: hasDiscordInvite ? "Live" : undefined,
        badgeVariant: "secondary",
      },
      { label: "GitHub", href: "https://github.com/HXQLabs", external: true },
      { label: "Twitter", href: "https://twitter.com/hxqlabs", external: true },
      { label: "LinkedIn", href: "https://www.linkedin.com/company/hxqlabs", external: true },
      { label: "YouTube", href: "https://www.youtube.com/@hxqlabs", external: true },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/legal/privacy-policy" },
      { label: "Terms & Conditions", href: "/legal/terms-condition" },
      { label: "License", href: "/legal/license" },
    ],
  },
];

function Metric({ label, value }: { label: string; value: any }) {
  return (
    <div className="flex flex-col">
      <span className="text-[11px] font-medium tracking-wide text-white/50">
        {label}
      </span>
      <span className="text-sm font-semibold text-white">
        {value === null || value === undefined ? "-" : value}
      </span>
    </div>
  );
}

export function CTANEW() {
  const [serverData, setServerData] = useState<any>(null);
  const [error, setError] = useState(false);
  const hasRequiredEnvVars =
    process.env.NEXT_PUBLIC_DISCORD_INVITE_CODE &&
    process.env.NEXT_PUBLIC_GITHUB_REPO;

  useEffect(() => {
    if (!hasRequiredEnvVars) {
      setError(true);
      return;
    }
    async function fetchData() {
      try {
        const res = await fetch("/api/discord");
        if (!res.ok) throw new Error(`Failed to fetch: ${res.status}`);
        const data = await res.json();
        setServerData(data);
        setError(false);
      } catch (e) {
        setError(true);
      }
    }
    fetchData();
  }, []);

  return (
    <footer className="w-full h-80 border rounded-2xl overflow-hidden relative">
      {/* Subtle dark grey gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-linear-to-br from-neutral-950 via-neutral-900 to-neutral-800" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.06),transparent_60%)]" />
        <div className="absolute inset-0 backdrop-blur-[2px]" />
        <div className="absolute inset-0 pointer-events-none opacity-15 mix-blend-overlay bg-[linear-gradient(140deg,transparent,rgba(255,255,255,0.05),transparent)]" />
      </div>

      {/* Right side: repositioned Discord panel (old layout style) */}
      <div className="absolute right-6 xl:right-12 top-6 xl:top-8 hidden md:block">
        <div className="w-[260px] xl:w-[280px] rounded-xl border border-white/15 bg-white/5 backdrop-blur-sm p-4 shadow-[0_0_0_1px_rgba(255,255,255,0.05),0_4px_24px_-4px_rgba(0,0,0,0.4)]">
          <div>
            <p className="text-[11px] uppercase tracking-wider text-white/60 mb-1">Official Discord</p>
            <p className="text-sm font-semibold truncate text-white">
              {error ? "Connection Error" : serverData?.guild?.name || "Loading..."}
            </p>
          </div>
          {error ? (
            <p className="text-xs text-white/60 mt-2">Failed to fetch server data</p>
          ) : (
            <div className="grid grid-cols-2 gap-3 mt-3">
              <Metric label="Online" value={serverData?.counts?.approximate_presence_count} />
              <Metric label="Members" value={serverData?.counts?.approximate_member_count} />
              <Metric label="Channels" value={serverData?.counts?.channels_count} />
              <Metric label="Listed" value={serverData?.counts?.members_listed} />
            </div>
          )}
          <Link
            href={`https://discord.gg/${process.env.NEXT_PUBLIC_DISCORD_INVITE_CODE}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-xs font-medium text-indigo-200 hover:text-white transition-colors"
          >
            <Icons.discord className="size-3.5" />
            Join Discord
          </Link>
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-start px-4 md:px-8 pt-2 pb-4 justify-between sm:justify-center h-full">
        <div className="relative flex flex-col items-start justify-start">
          <p className="text-white max-w-lg mt-3 tracking-tight font-semibold text-xl md:text-3xl text-left">
            Join the Community
          </p>
          <p className="text-sm pt-3 text-neutral-200 max-w-xl text-left">
            Have suggestions or improvements? Share feedback, request features, and help us shape the roadmap.
          </p>
        </div>
        <motion.div
          className="w-full flex flex-row md:gap-4 gap-2 flex-wrap md:justify-start justify-center items-stretch md:items-start mt-6"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
        >
          <Button
            className="w-full md:w-52 h-12 text-primary-foreground before:from-primary-foreground/20 after:from-primary-foreground/10 relative isolate inline-flex items-center justify-center overflow-hidden rounded-md px-3 text-left text-sm font-medium  before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:rounded-md before:bg-linear-to-b before:opacity-80 before:transition-opacity before:duration-300 before:ease-[cubic-bezier(0.4,0.36,0,1)] after:pointer-events-none after:absolute after:inset-0 after:-z-10 after:rounded-md after:bg-linear-to-b after:to-transparent after:mix-blend-overlay hover:cursor-pointer"
            asChild
          >
            <Link className="flex group items-center gap-2" href="/docs">
              <span>Get Started</span>
              <Badge className="bg-accent p-1 text-foreground transition-all duration-200 ease-in-out group-hover:shadow-xl shadow-background/70">
                <CornerDownLeft className="size-4" />
              </Badge>
            </Link>
          </Button>
          <Button
            variant="secondary"
            className="bg-secondary w-full md:w-52 h-12 text-secondary-foreground ring-accent hover:ring-2  relative isolate inline-flex items-center justify-center overflow-hidden rounded-md px-3 text-left text-sm font-medium ring-1 before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:rounded-md before:bg-linear-to-b before:opacity-80 before:transition-opacity before:duration-300 before:ease-[cubic-bezier(0.4,0.36,0,1)] after:pointer-events-none after:absolute after:inset-0 after:-z-10 after:rounded-md after:bg-linear-to-b after:to-transparent after:mix-blend-overlay hover:cursor-pointer"
          >
            <Link
              className="flex group items-center gap-2"
              href="/docs/components"
            >
              <span>Github</span>
              <Badge className="bg-accent text-foreground transition-all duration-200 group-hover:shadow-xl shadow-white/70">
                <Icons.github className="size-4" />
              </Badge>
            </Link>
          </Button>
        </motion.div>
      </div>
    </footer>
  );
}

export function Footer2() {
  const discordInvite = process.env.NEXT_PUBLIC_DISCORD_INVITE_CODE;
  const discordUrl = `https://discord.gg/${discordInvite || "hxqlabs"}`;
  const footerColumns = buildFooterColumns(discordUrl, Boolean(discordInvite));
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-border/40 bg-background/95">
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(120%_120%_at_50%_-20%,rgba(99,102,241,0.12),transparent)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 xl:grid-cols-[minmax(0,1.2fr)_minmax(0,2fr)]">
          <div className="space-y-8">
            <div className="space-y-4">
              <Link
                href="/"
                className="flex items-center gap-3"
                aria-label="Navigate to homepage"
                prefetch={false}
              >
                <Image
                  src="/logo.svg"
                  alt="Helixque Logo"
                  width={120}
                  height={36}
                  className="h-9 w-auto"
                />
                <span className="text-2xl font-semibold tracking-tight">Helixque</span>
              </Link>
              <p className="text-base leading-relaxed text-muted-foreground">
                Build, iterate, and launch AI-first experiences without friction. Helixque combines
                polished UI kits, production-grade templates, and thoughtful tooling so your team can
                ship faster.
              </p>
            </div>

            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-300">
              <span className="size-2 animate-pulse rounded-full bg-emerald-300" />
              All systems normal
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {socialLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex size-10 items-center justify-center rounded-full border border-border/60 bg-background/60 text-muted-foreground transition-colors hover:border-primary/40 hover:bg-primary/10 hover:text-primary"
                  prefetch={false}
                >
                  <span className="sr-only">{item.label}</span>
                  <item.icon className="size-4" />
                </Link>
              ))}
            </div>
          </div>

          <nav className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
            {footerColumns.map((column) => (
              <div key={column.title} className="space-y-4">
                <p className="text-sm font-semibold uppercase tracking-wide text-foreground/80">
                  {column.title}
                </p>
                <ul className="space-y-3">
                  {column.links.map((link) => {
                    const content = (
                      <>
                        <span>{link.label}</span>
                        {link.badge ? (
                          <Badge variant={link.badgeVariant ?? "default"}>{link.badge}</Badge>
                        ) : null}
                        <ArrowUpRight className="size-4 translate-y-[1px] opacity-0 transition-all duration-200 group-hover:translate-x-1 group-hover:opacity-100" />
                      </>
                    );

                    return (
                      <li key={`${column.title}-${link.label}`} className="">
                        {link.external ? (
                          <a
                            href={link.href}
                            target="_blank"
                            rel="noreferrer"
                            className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                          >
                            {content}
                          </a>
                        ) : (
                          <Link
                            href={link.href}
                            className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                            prefetch={false}
                          >
                            {content}
                          </Link>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-border/60 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} HXQLabs. All rights reserved.
          </p>
          <div className="flex items-center">
            <ThemeSwitcher />
          </div>
        </div>
      </div>
    </footer>
  );
}
