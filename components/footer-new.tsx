"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Badge } from "./ui/badge";
import { motion } from "framer-motion";
import { CornerDownLeft, HeartIcon, TwitterIcon } from "lucide-react";
// import { LogoMark } from "./svgs/logo-mark";
import { Icons } from "./utils/icons";
import Image from "next/image";
// New footer dependencies
import {
  SquareArrowOutUpRight,
  ChevronDown,
  Github,
  Linkedin,
  Twitter,
  Youtube,
  Monitor,
  Moon,
  Sun,
  Triangle
} from "lucide-react";
import { Instrument_Serif } from "next/font/google";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ThemeSwitcher } from "@/components/theme";

type FooterLinkGroup = { group: string; items: { title: string; href: string }[] };

const linksPro: FooterLinkGroup[] = [
  {
    group: "Product",
    items: [
      { title: "AI", href: "#" },
      { title: "Enterprise", href: "#" },
      { title: "Fluid Compute", href: "#" },
      { title: "Next.js", href: "#" },
      { title: "Observability", href: "#" },
      { title: "Previews", href: "#" },
      { title: "Rendering", href: "#" },
      { title: "Security", href: "#" },
      { title: "Turbo", href: "#" },
      { title: "Domains", href: "#" },
    ],
  },
];

const linksRes: FooterLinkGroup[] = [
  {
    group: "Resources",
    items: [
      { title: "Docs", href: "#" },
      { title: "Guides", href: "#" },
      { title: "Academy", href: "#" },
      { title: "Help", href: "#" },
      { title: "Integrations", href: "#" },
      { title: "Pricing", href: "#" },
      { title: "Resources", href: "#" },
      { title: "Solution Partners", href: "#" },
      { title: "Startups", href: "#" },
      { title: "Templates", href: "#" },
    ],
  },
];

const linksCom: FooterLinkGroup[] = [
  {
    group: "Company",
    items: [
      { title: "About", href: "#" },
      { title: "Blog", href: "#" },
      { title: "Careers", href: "#" },
      { title: "Changelog", href: "#" },
      { title: "Contact Us", href: "#" },
      { title: "Customers", href: "#" },
      { title: "Events", href: "#" },
      { title: "Partners", href: "#" },
      { title: "Shipped", href: "#" },
      { title: "Privacy Policy", href: "#" },
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
        {value === null || value === undefined ? '-' : value}
      </span>
    </div>
  );
}

export function Footer() {
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
    <footer className="w-full h-[20rem] border rounded-2xl overflow-hidden relative">
      {/* Subtle dark grey gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-800" />
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
            className="w-full md:w-52 h-12 text-primary-foreground before:from-primary-foreground/20 after:from-primary-foreground/10 relative isolate inline-flex items-center justify-center overflow-hidden rounded-md px-3 text-left text-sm font-medium  before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:rounded-md before:bg-gradient-to-b before:opacity-80 before:transition-opacity before:duration-300 before:ease-[cubic-bezier(0.4,0.36,0,1)] after:pointer-events-none after:absolute after:inset-0 after:-z-10 after:rounded-md after:bg-gradient-to-b after:to-transparent after:mix-blend-overlay hover:cursor-pointer"
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
            className="bg-secondary w-full md:w-52 h-12 text-secondary-foreground ring-accent hover:ring-2  relative isolate inline-flex items-center justify-center overflow-hidden rounded-md px-3 text-left text-sm font-medium ring-1 before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:rounded-md before:bg-gradient-to-b before:opacity-80 before:transition-opacity before:duration-300 before:ease-[cubic-bezier(0.4,0.36,0,1)] after:pointer-events-none after:absolute after:inset-0 after:-z-10 after:rounded-md after:bg-gradient-to-b after:to-transparent after:mix-blend-overlay hover:cursor-pointer"
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
  // const instrumentSerif = Instrument_Serif({ subsets: ["latin"], weight: "400" });
  // New Footer layout inspired by provided design, with brand/logo moved left
  // and link sections aligned to the right. Integrates new ThemeSwitcher component.
  return (
    <footer className="py-16">
      <div className="mx-auto max-w-7xl px-6">
        {/* Use 2-column layout at large screens to create deliberate horizontal separation */}
        <div className="grid gap-10 lg:gap-24 lg:grid-cols-[minmax(0,2.2fr)_minmax(0,5fr)]">
          {/* Brand / Logo and description */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Image src="/logo.svg" alt="Helixque Logo" width={120} height={36} className="h-9 w-auto" />
              <span className={cn("text-2xl tracking-tight")}>Helixque</span>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground max-w-xs">
              Helixque helps teams build, deploy & scale AI-first experiences with speed,
              reliability and delightful developer ergonomics.
            </p>
            <div>
              <Button className="text-blue-500 cursor-pointer hover:text-blue-500" variant="ghost">
                <span className="block size-3 rounded-full border border-background bg-blue-500 mr-2" />
                All systems normal.
              </Button>
            </div>
          </div>
          {/* Link groups container with responsive internal grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-10 lg:gap-14">
            {/* Product */}
            {linksPro.map((link) => (
              <div key={link.group} className="space-y-3 text-sm">
                <span className="block font-medium">{link.group}</span>
                {link.items.map((item) => (
                  <Link key={item.title} href={item.href} className="text-muted-foreground hover:text-primary block duration-150">
                    <span>{item.title}</span>
                  </Link>
                ))}
                <Link href="#" className="text-muted-foreground flex gap-1 items-center text-sm hover:text-primary duration-150">
                  v0 <SquareArrowOutUpRight strokeWidth={2} size={16} />
                </Link>
              </div>
            ))}
            {/* Resources */}
            {linksRes.map((link) => (
              <div key={link.group} className="space-y-3 text-sm">
                <span className="block font-medium">{link.group}</span>
                <Link href="#" className="text-muted-foreground flex gap-1 items-center text-sm hover:text-primary duration-150">
                  Community <SquareArrowOutUpRight strokeWidth={2} size={16} />
                </Link>
                {link.items.map((item) => (
                  <Link key={item.title} href={item.href} className="text-muted-foreground hover:text-primary block duration-150">
                    <span>{item.title}</span>
                  </Link>
                ))}
                <DropdownMenu>
                  <DropdownMenuTrigger className="text-muted-foreground flex gap-1 items-center hover:text-primary text-sm">
                    SDKs by Vercel <ChevronDown strokeWidth={2} size={16} />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent side="top" align="start" className="w-60 p-1">
                    {['AI SDK','Flags SDK','Chat SDK','Streamdown AI'].map((sdk) => (
                      <DropdownMenuItem key={sdk} className="h-10 px-4">
                        {sdk} <SquareArrowOutUpRight strokeWidth={2} size={16} />
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            ))}
            {/* Company */}
            {linksCom.map((link) => (
              <div key={link.group} className="space-y-3 text-sm">
                <span className="block font-medium">{link.group}</span>
                {link.items.map((item) => (
                  <Link key={item.title} href={item.href} className="text-muted-foreground hover:text-primary block duration-150">
                    <span>{item.title}</span>
                  </Link>
                ))}
                <DropdownMenu>
                  <DropdownMenuTrigger className="text-muted-foreground flex gap-1 items-center hover:text-primary text-sm">
                    Legal <ChevronDown strokeWidth={2} size={16} />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent side="top" align="start" className="w-60 p-1">
                    {[
                      'Cookie Policy','Cookie Preferences','DMCA Policy','DORA Addendum','DPA','Domain Name Registration and Services Terms','Event Code of Conduct','Event Terms and Conditions','Inactivity Policy','Job Applicant Privacy Notice','Privacy Policy','SLA','Sub-processors','Support Terms','Terms of Service','Trademark Policy'
                    ].map(item => (
                      <DropdownMenuItem key={item} className={`px-4 ${item.length > 25 ? 'h-16' : 'h-10'}`}>
                        {item}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            ))}
            {/* Social */}
            <div className="space-y-3 text-sm">
              <span className="block font-medium">Social</span>
              <Link href="#" className="text-muted-foreground hover:text-primary block duration-150">
                <span className="flex gap-2 items-center"><Github size={14}/> Github</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary block duration-150">
                <span className="flex gap-2 items-center"><Linkedin className="grayscale" size={14}/> LinkedIn</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary block duration-150">
                <span className="flex gap-2 items-center"><Twitter size={14}/> Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary block duration-150">
                <span className="flex gap-2 items-center"><Youtube className="grayscale" size={14}/> YouTube</span>
              </Link>
            </div>
          </div>
        </div>
        {/* Bottom bar */}
        <div className="mt-14 border-t border-border/50 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs md:text-sm text-muted-foreground">© {new Date().getFullYear()} HXQLabs. All rights reserved.</p>
          <ThemeSwitcher />
        </div>
      </div>
    </footer>
  );
}