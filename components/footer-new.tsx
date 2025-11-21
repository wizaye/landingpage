"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CornerDownLeft } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "./ui/badge";
import { Icons } from "./utils/icons";
import { ThemeSwitcher } from "./theme";

function Metric({ label, value }: { label: string; value: any }) {
  return (
    <div className="flex flex-col">
      <span className="text-[11px] font-medium tracking-wide text-muted-foreground">
        {label}
      </span>
      <span className="text-sm font-semibold text-foreground">
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
    <footer className="relative w-full overflow-hidden bg-background py-12">
      <div className="absolute right-6 top-6 hidden md:block xl:right-12 xl:top-8">
        <div className="w-[260px] rounded-lg border border-border bg-card p-4 xl:w-[280px]">
          <div>
            <p className="mb-1 text-[11px] uppercase tracking-wider text-muted-foreground">
              Official Discord
            </p>
            <p className="text-sm font-semibold text-foreground">
              {error ? "Connection Error" : serverData?.guild?.name || "Loading..."}
            </p>
          </div>
          {error ? (
            <p className="mt-2 text-xs text-muted-foreground">Failed to fetch server data</p>
          ) : (
            <div className="mt-3 grid grid-cols-2 gap-3">
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
            className="mt-4 inline-flex items-center gap-2 text-xs font-medium text-primary transition-colors hover:text-primary/80"
          >
            <Icons.discord className="h-3.5 w-3.5" />
            Join Discord
          </Link>
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-start justify-center gap-4 text-left">
          <h2 className="text-xl font-semibold tracking-tight text-foreground md:text-3xl">
            Join the Community
          </h2>
          <p className="text-sm text-muted-foreground max-w-lg">
            Have suggestions or improvements? Share feedback, request features, and help us shape the roadmap.
          </p>
        </div>

        <motion.div
          className="mt-6 flex flex-col sm:flex-row items-center sm:items-start gap-3 md:gap-4"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
        >
          <Button className="h-12 w-full sm:w-48" asChild>
            <Link className="flex items-center gap-2" href="/docs">
              <span>Get Started</span>
              <Badge className="bg-accent p-1 text-foreground shadow-background/70">
                <CornerDownLeft className="h-4 w-4" />
              </Badge>
            </Link>
          </Button>

          <Button variant="secondary" className="h-12 w-full sm:w-48" asChild>
            <Link className="flex items-center gap-2" href="/docs/components">
              Github
              <Badge className="bg-accent text-foreground shadow-white/70">
                <Icons.github className="h-4 w-4" />
              </Badge>
            </Link>
          </Button>
        </motion.div>
      </div>
    </footer>
  );
}

const footerNavSections = [
  {
    title: "Use Cases",
    links: [
      { label: "Product Teams", href: "/announcements" },
      { label: "Open Source", href: "/#open-source" },
      { label: "Hacktoberfest", href: "/hacktoberfest" },
      { label: "Mentorship Circles", href: "/blog" },
    ],
  },
  {
    title: "Platform",
    links: [
      { label: "Features", href: "/#features" },
      { label: "Pricing", href: "/#pricing" },
      { label: "Status", href: "/status" },
      { label: "Book a Demo", href: "https://cal.com/aliimam/30min", external: true },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Announcements", href: "/announcements" },
      { label: "Changelog", href: "/changelog" },
      { label: "Community Handbook", href: "https://github.com/HXQLabs/helixque", external: true },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Contact", href: "mailto:hello@helixque.com", external: true },
      { label: "Discord", href: "https://discord.gg/dQUh6SY9Uk", external: true },
      { label: "GitHub Issues", href: "https://github.com/HXQLabs/helixque/issues", external: true },
      { label: "Status Updates", href: "/status" },
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

export function Footer2({
  logo = { url: "/", src: "/logo.svg", alt: "Helixque", title: "Helixque" },
  sections = footerNavSections,
  description = "Helixque is the builder-first network for pairing mentors, contributors, and teams around ambitious AI projects.",
  socialLinks = [],
  copyright,
  legalLinks = [
    { name: "Privacy Policy", href: "/legal/privacy-policy" },
    { name: "Terms & Conditions", href: "/legal/terms-condition" },
    { name: "License", href: "/legal/license" },
  ],
  statusLink = "/status",
  statusText = "All systems operational",
}: any = {}) {
  const currentYear = new Date().getFullYear();
  const copyrightText =
    copyright || `© ${currentYear} Helixque. All rights reserved.`;

  return (
    <footer className="border-t border-border bg-background pt-12 pb-8">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-10">

          {/* Logo + Description */}
          <div className="max-w-xs">
            <Link href={logo.url} aria-label={logo.title}>
              <Image
                src={logo.src}
                alt={logo.alt}
                width={85}
                height={30}
              />
              <span className="sr-only">{logo.title}</span>
            </Link>

            <p className="mt-4 text-sm text-muted-foreground">{description}</p>

            <div className="mt-4 flex items-center space-x-4">
              {socialLinks.map((s: any, i: number) => (
                <Link
                  key={i}
                  href={s.href}
                  target="_blank"
                  className="text-muted-foreground hover:text-primary"
                >
                  {s.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation Sections — Perfectly spaced grid */}
          <nav className="
            grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 
            gap-x-8 gap-y-12 w-full
          ">
            {sections.map((section: any, idx: number) => (
              <div key={idx}>
                <h3 className="text-sm font-semibold text-foreground mb-4">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link: any, i: number) => (
                    <li key={i}>
                      <Link
                        href={link.href}
                        target={link.external ? "_blank" : undefined}
                        rel={link.external ? "noopener noreferrer" : undefined}
                        className="text-xs text-muted-foreground hover:text-primary transition"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        {/* Status */}
        <div className="mt-12">
          <Link
            href={statusLink}
            className="inline-flex items-center gap-2 rounded-md border border-border bg-muted px-3 py-2 text-sm text-foreground hover:bg-muted/80"
          >
            <span className="h-2 w-2 rounded-full bg-green-500" />
            {statusText}
          </Link>
        </div>

        {/* Copyright & Theme */}
        <div className="mt-10 flex flex-col md:flex-row justify-between items-center gap-4 border-t border-border pt-6">
          <p className="text-sm text-muted-foreground">{copyrightText}</p>
          <ThemeSwitcher />
        </div>
      </div>
    </footer>
  );
}
