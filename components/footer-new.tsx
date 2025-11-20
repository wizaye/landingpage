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

import {
  TreeProvider,
  TreeView,
  TreeNode,
  TreeNodeTrigger,
  TreeNodeContent,
  TreeLabel,
  TreeExpander,
  TreeIcon,
} from "@/components/kibo-ui/tree";

type SocialLink = { label: string; href: string; icon: LucideIcon };

const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/HXQLabs", icon: Github },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/hxqlabs", icon: Linkedin },
  { label: "Twitter", href: "https://twitter.com/hxqlabs", icon: Twitter },
  { label: "YouTube", href: "https://www.youtube.com/@hxqlabs", icon: Youtube },
];

type FooterNode = {
  id: string;
  label: string;
  href?: string;
  external?: boolean;
  badge?: string;
  badgeVariant?: "default" | "secondary" | "outline" | "destructive";
  children?: FooterNode[];
};

type FooterColumn = {
  title: string;
  nodes: FooterNode[];
};

const buildFooterColumns = (discordUrl: string, hasDiscordInvite: boolean): FooterColumn[] => [
  {
    title: "Platform",
    nodes: [
      {
        id: "overview",
        label: "Overview",
        href: "/",
        children: [
          { id: "features", label: "Features", href: "/#features" },
          { id: "integrations", label: "Integrations", href: "/integrations" },
        ],
      },
      { id: "pricing", label: "Pricing", href: "#pricing" },
      { id: "announcements", label: "Announcements", href: "/announcements" },
      { id: "changelog", label: "Changelog", href: "/changelog" },
      { id: "status", label: "Status", href: "/status" },
    ],
  },
  {
    title: "Resources",
    nodes: [
      { id: "blog", label: "Blog", href: "/blog" },
      {
        id: "hacktoberfest",
        label: "Hacktoberfest",
        href: "/hacktoberfest",
        badge: "Seasonal",
        badgeVariant: "secondary",
      },
      {
        id: "feature-requests",
        label: "Feature Requests",
        href: "https://magicui.featurebase.app",
        external: true,
        badge: "Voting",
        badgeVariant: "outline",
      },
      {
        id: "support",
        label: "Support",
        href: "mailto:hello@helixque.com",
        external: true,
      },
    ],
  },
  {
    title: "Community",
    nodes: [
      {
        id: "discord",
        label: "Discord",
        href: discordUrl,
        external: true,
        badge: hasDiscordInvite ? "Live" : undefined,
        badgeVariant: "secondary",
      },
      { id: "github", label: "GitHub", href: "https://github.com/HXQLabs", external: true },
      { id: "twitter", label: "Twitter", href: "https://twitter.com/hxqlabs", external: true },
      { id: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/company/hxqlabs", external: true },
      { id: "youtube", label: "YouTube", href: "https://www.youtube.com/@hxqlabs", external: true },
    ],
  },
  {
    title: "Legal",
    nodes: [
      { id: "privacy", label: "Privacy Policy", href: "/legal/privacy-policy" },
      { id: "terms", label: "Terms & Conditions", href: "/legal/terms-condition" },
      { id: "license", label: "License", href: "/legal/license" },
    ],
  },
];

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
    <footer className="w-full h-80 overflow-hidden relative bg-background">

      {/* Right side: repositioned Discord panel (old layout style) */}
      <div className="absolute right-6 xl:right-12 top-6 xl:top-8 hidden md:block">
        <div className="w-[260px] xl:w-[280px] rounded-lg border border-border bg-card p-4">
          <div>
            <p className="text-[11px] uppercase tracking-wider text-muted-foreground mb-1">Official Discord</p>
            <p className="text-sm font-semibold truncate text-foreground">
              {error ? "Connection Error" : serverData?.guild?.name || "Loading..."}
            </p>
          </div>
          {error ? (
            <p className="text-xs text-muted-foreground mt-2">Failed to fetch server data</p>
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
            className="mt-4 inline-flex items-center gap-2 text-xs font-medium text-primary hover:text-primary/80 transition-colors"
          >
            <Icons.discord className="size-3.5" />
            Join Discord
          </Link>
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-start px-4 md:px-8 pt-2 pb-4 justify-between sm:justify-center h-full">
        <div className="relative flex flex-col items-start justify-start">
          <p className="text-foreground max-w-lg mt-3 tracking-tight font-semibold text-xl md:text-3xl text-left">
            Join the Community
          </p>
          <p className="text-sm pt-3 text-muted-foreground max-w-xl text-left">
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
            className="w-full md:w-52 h-12"
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
            className="w-full md:w-52 h-12"
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

const RecursiveTreeNode = ({
  node,
  level = 1,
  isLast = false,
  parentPath = [],
}: {
  node: FooterNode;
  level?: number;
  isLast?: boolean;
  parentPath?: boolean[];
}) => {
  const hasChildren = node.children && node.children.length > 0;

  // Calculate the path for the current node to pass to its children
  const currentPath = level === 0 ? [] : [...parentPath];
  if (level > 0 && parentPath.length < level - 1) {
    while (currentPath.length < level - 1) {
      currentPath.push(false);
    }
  }
  if (level > 0) {
    currentPath[level - 1] = isLast;
  }

  return (
    <TreeNode
      nodeId={node.id}
      level={level}
      isLast={isLast}
      parentPath={parentPath}
    >
      <TreeNodeTrigger
        className="px-0 py-1 hover:bg-transparent data-[state=selected]:bg-transparent w-full flex items-center gap-1"
      >
        <TreeExpander hasChildren={hasChildren} />
        {hasChildren ? (
          <span className="text-muted-foreground hover:text-primary text-sm font-medium truncate">
            {node.label}
          </span>
        ) : (
          <Link
            href={node.href || "#"}
            target={node.external ? "_blank" : undefined}
            rel={node.external ? "noreferrer" : undefined}
            className="text-muted-foreground hover:text-primary text-sm block w-full truncate"
          >
            <TreeLabel className="text-muted-foreground hover:text-primary">{node.label}</TreeLabel>
          </Link>
        )}
      </TreeNodeTrigger>
      {hasChildren && (
        <TreeNodeContent hasChildren={true}>
          {node.children!.map((child, index) => (
            <RecursiveTreeNode
              key={child.id}
              node={child}
              level={level + 1}
              isLast={index === node.children!.length - 1}
              parentPath={currentPath}
            />
          ))}
        </TreeNodeContent>
      )}
    </TreeNode>
  );
};

export function Footer2() {
  const discordInvite = process.env.NEXT_PUBLIC_DISCORD_INVITE_CODE;
  const discordUrl = `https://discord.gg/${discordInvite || "dQUh6SY9Uk"}`;
  const footerColumns = buildFooterColumns(discordUrl, Boolean(discordInvite));
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t bg-background">

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

            <Button
              className="text-blue-500 cursor-pointer hover:text-blue-500"
              variant={"ghost"}
            >
              <span className="block size-3 rounded-full border border-background bg-blue-500" />
              All systems normal.
            </Button>

            <div className="flex flex-wrap items-center gap-3">
              {socialLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors duration-150"
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
              <div key={column.title} className="space-y-3">
                <span className="block font-medium text-sm">
                  {column.title}
                </span>
                <TreeProvider
                  className="w-full"
                  showLines={false}
                  showIcons={false}
                  indent={16}
                >
                  <TreeView>
                    {column.nodes.map((node, index) => (
                      <RecursiveTreeNode
                        key={node.id}
                        node={node}
                        level={0}
                        isLast={index === column.nodes.length - 1}
                        parentPath={[]}
                      />
                    ))}
                  </TreeView>
                </TreeProvider>
              </div>
            ))}
          </nav>
        </div>

        <div className="mt-10 flex flex-wrap items-end justify-between gap-6 py-6">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} HXQLabs. All rights reserved.
          </p>
          <ThemeSwitcher />
        </div>
      </div>
    </footer>
  );
}
