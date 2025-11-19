"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Badge } from "./ui/badge";
import { motion } from "framer-motion";
import {
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
import {
  TreeProvider,
  TreeView,
  TreeNode,
  TreeNodeTrigger,
  TreeNodeContent,
  TreeExpander,
  TreeIcon,
  TreeLabel,
} from "@/components/kibo-ui/tree";

type SocialLink = { label: string; href: string; icon: LucideIcon };

const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/HXQLabs", icon: Github },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/hxqlabs", icon: Linkedin },
  { label: "Twitter", href: "https://twitter.com/hxqlabs", icon: Twitter },
  { label: "YouTube", href: "https://www.youtube.com/@hxqlabs", icon: Youtube },
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

type FooterNode = {
  id: string;
  label: string;
  href?: string;
  children?: FooterNode[];
};

const footerLinks: FooterNode[] = [
  {
    id: "company",
    label: "Company",
    children: [
      { id: "about", label: "About", href: "#" },
      { id: "blog", label: "Blog", href: "#" },
      { id: "careers", label: "Careers", href: "#" },
      { id: "contact", label: "Contact Us", href: "#" },
    ],
  },
  {
    id: "resources",
    label: "Resources",
    children: [
      { id: "docs", label: "Documentation", href: "#" },
      { id: "guides", label: "Guides", href: "#" },
      { id: "help", label: "Help Center", href: "#" },
    ],
  },
  {
    id: "legal",
    label: "Legal",
    children: [
      { id: "privacy", label: "Privacy Policy", href: "/legal/privacy-policy" },
      { id: "terms", label: "Terms & Conditions", href: "/legal/terms-condition" },
      { id: "cookie", label: "Cookie Policy", href: "/legal/cookie-policy" },
    ],
  },
  {
    id: "social",
    label: "Social",
    children: [
      { id: "twitter", label: "Twitter", href: "https://twitter.com/hxqlabs" },
      { id: "github", label: "GitHub", href: "https://github.com/HXQLabs" },
      { id: "discord", label: "Discord", href: "https://discord.gg/hxqlabs" },
    ],
  },
];

export function Footer2() {
  return (
    <footer className="bg-background border-t border-border/40 py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-12">
          {/* Branding Section */}
          <div className="space-y-8 max-w-sm">
            <div className="space-y-4">
              <Link
                href="/"
                className="flex items-center gap-3"
                aria-label="Navigate to homepage"
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
                Helixque helps teams build, deploy, and scale AI-first experiences with speed,
                reliability, and a delightful developer workflow.
              </p>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-300">
              <span className="size-2 animate-pulse rounded-full bg-emerald-300" />
              All systems normal
            </div>
          </div>

          {/* Tree Navigation Section */}
          <div className="flex-1 lg:max-w-2xl w-full">
            <TreeProvider className="w-full" defaultExpandedIds={["company", "resources", "legal", "social"]}>
              <TreeView className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 p-0">
                {footerLinks.map((section) => (
                  <div key={section.id} className="flex flex-col gap-2">
                    <TreeNode nodeId={section.id}>
                      <TreeNodeTrigger className="px-0 hover:bg-transparent cursor-default">
                        <TreeLabel className="font-semibold text-foreground text-base">
                          {section.label}
                        </TreeLabel>
                      </TreeNodeTrigger>
                      <TreeNodeContent className="pl-0">
                        <div className="flex flex-col gap-2 mt-2">
                          {section.children?.map((item) => (
                            <TreeNode key={item.id} nodeId={item.id}>
                              <Link href={item.href || "#"} className="block">
                                <TreeNodeTrigger className="px-0 py-1 hover:bg-transparent text-muted-foreground hover:text-foreground transition-colors">
                                  <TreeLabel className="text-sm cursor-pointer">
                                    {item.label}
                                  </TreeLabel>
                                </TreeNodeTrigger>
                              </Link>
                            </TreeNode>
                          ))}
                        </div>
                      </TreeNodeContent>
                    </TreeNode>
                  </div>
                ))}
              </TreeView>
            </TreeProvider>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start gap-4 border-t border-border/60 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} HXQLabs. All rights reserved.
          </p>
          <ThemeSwitcher />
        </div>
      </div>
    </footer>
  );
}
