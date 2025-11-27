"use client";
import type {
  ComponentPropsWithoutRef,
  Dispatch,
  ReactNode,
  SetStateAction,
} from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
// import { FaGithub } from "react-icons/fa";
// import GitHubStarBadge from "./GitHubStarBadge";
// import { Badge } from "../ui/badge";
import { Badge } from "./ui/badge";
import {
  CircleCheckIcon,
  CircleHelpIcon,
  CircleIcon,
  CornerDownLeft,
  Menu,
  X,
} from "lucide-react";
import { Icons } from "./utils/icons";
import GitHubStarBadge from "./githubstar-badge";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const componentShowcase = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "Interrupt the flow with critical information and capture a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description: "Let users peek at additional content before committing.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Communicate task completion status with determinate indicators.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Keep dense lists scrollable without losing context.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description: "Layer content views and keep navigation effortless.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description: "Offer concise hints on hover or focus interactions.",
  },
];

const docsHighlights = [
  {
    title: "Introduction",
    href: "/docs",
    description:
      "Re-usable HelixQue primitives powered by Radix UI and Tailwind CSS.",
  },
  {
    title: "Installation",
    href: "/docs/installation",
    description: "Wire up the SDK, configure auth, and scaffold your project.",
  },
  {
    title: "Typography",
    href: "/docs/primitives/typography",
    description: "Consistent scales for headings, paragraphs, and lists.",
  },
];

const resourceLinks = [
  {
    heading: "Components",
    description: "Browse every HelixQue building block in one place.",
    href: "/components",
  },
  {
    heading: "Documentation",
    description: "Learn how to compose flows and ship integrations faster.",
    href: "/docs",
  },
  {
    heading: "Blog",
    description: "Product updates, release notes, and contributor stories.",
    href: "/blog",
  },
];

const quickLinks = [
  { label: "Components", href: "/components" },
  { label: "Documentation", href: "/docs" },
  { label: "Blocks", href: "/blocks" },
];

const mobileNavLinks = [
  {
    label: "Overview",
    href: "/",
    description: "What HelixQue is building and why teams switch.",
  },
  {
    label: "Components",
    href: "/components",
    description: "Ready-made building blocks for product surfaces.",
  },
  {
    label: "Documentation",
    href: "/docs",
    description: "Implementation guides, SDK references, and tutorials.",
  },
];

const boardStatuses = [
  { label: "Backlog", href: "/roadmap", icon: CircleHelpIcon },
  { label: "To Do", href: "/roadmap#todo", icon: CircleIcon },
  { label: "Done", href: "/roadmap#done", icon: CircleCheckIcon },
];

const navTriggerClasses =
  "bg-transparent text-muted-foreground hover:bg-muted/60 hover:text-foreground data-[state=open]:bg-muted/70 data-[state=open]:text-foreground";

type ListItemProps = ComponentPropsWithoutRef<"li"> & {
  title: string;
  href: string;
  children: ReactNode;
};

function ListItem({ title, children, href, ...props }: ListItemProps) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href} className="rounded-md p-3 no-underline">
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}

export const Logo = () => {
  return (
    <div className="flex items-center justify-center gap-2">
        <Image
        src="/logo.svg"
        alt="Billing SDK"
        width={28}
        height={28}
        className="h-5 w-auto"
      />
       <span className="text-2xl font-display">HelixQue</span>
    </div>
  );
};

const BuildWithHelixQueCard = ({
  onLinkClick,
}: {
  onLinkClick?: () => void;
}) => {
  return (
    <div className="rounded-2xl border border-border/70 bg-linear-to-br from-primary/10 via-background to-background p-5 shadow-inner">
      <div className="space-y-1.5">
        <p className="text-sm font-semibold text-foreground">Build with HelixQue</p>
        <p className="text-xs text-muted-foreground">
          Sign in to sync your workspace and star us to follow releases.
        </p>
      </div>
      <div className="mt-4 flex flex-col gap-2 sm:flex-row">
        <Button className="w-full" asChild>
          <Link href="/docs" onClick={onLinkClick}>
            Login
          </Link>
        </Button>
        <Button variant="outline" className="w-full" asChild>
          <Link
            href="https://github.com/HXQLabs/Helixque"
            target="_blank"
            rel="noopener noreferrer"
            onClick={onLinkClick}
          >
            <Icons.github className="mr-2 size-4" />
            Star on GitHub
          </Link>
        </Button>
      </div>
    </div>
  );
};

const MobileHeader = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.setProperty("overflow", "hidden");
    } else {
      document.body.style.removeProperty("overflow");
    }

    return () => {
      document.body.style.removeProperty("overflow");
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/95 py-2 backdrop-blur-md md:hidden">
      <div className="relative mx-auto w-full px-4">
        <div className="flex w-full items-center justify-between">
          <Link href="/">
            <Logo />
          </Link>
          <div className="flex items-center justify-center gap-2">
            <div className="relative">
              <button
                aria-expanded={isOpen}
                onClick={toggleMenu}
                className={cn(
                  "relative inline-flex items-center justify-center rounded-xl border border-border/70 bg-muted px-4 py-2 text-sm font-medium text-muted-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                  isOpen ? "bg-foreground text-background" : "hover:text-foreground"
                )}
              >
                <span className="sr-only">
                  {isOpen ? "Close menu" : "Open menu"}
                </span>
                <div className="relative size-6">
                  <Menu
                    className={cn(
                      "absolute inset-0 transition-all duration-300 ease-in-out",
                      isOpen ? "scale-75 -rotate-90 opacity-0" : "scale-100 rotate-0 opacity-100"
                    )}
                  />
                  <X
                    className={cn(
                      "absolute inset-0 transition-all duration-300 ease-in-out",
                      isOpen ? "scale-100 rotate-0 opacity-100" : "scale-75 -rotate-90 opacity-0"
                    )}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
        <AnimatePresence>
          {isOpen && (
            <>
              <motion.div
                key="mobile-nav-overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.85 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 z-40 bg-background/80 backdrop-blur-[2px] md:hidden"
                onClick={closeMenu}
              />

              <motion.div
                key="mobile-nav-panel"
                initial={{ opacity: 0, y: -12, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.98 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="absolute left-0 right-0 top-full z-50 pt-3"
              >
                <div className="rounded-[28px] border border-border/70 bg-background/95 p-5 shadow-2xl ring-1 ring-border/40 backdrop-blur-xl">
                  <div className="space-y-5">
                    <div className="flex items-end justify-between gap-3">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-muted-foreground/80">
                          Browse
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Navigate HelixQue surfaces
                        </p>
                      </div>
                      <Badge className="rounded-full bg-primary/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-primary shadow-sm">
                        Live
                      </Badge>
                    </div>

                    <Accordion
                      type="single"
                      collapsible
                      defaultValue="primary"
                      className="space-y-3"
                    >
                      <AccordionItem
                        value="primary"
                        className="overflow-hidden rounded-2xl border border-border/60 bg-muted/30 shadow-sm backdrop-blur"
                      >
                        <AccordionTrigger className="px-4 py-3 text-base font-semibold text-foreground">
                          <div className="flex flex-col text-left leading-tight">
                            <span>Product</span>
                            <span className="text-xs font-normal uppercase tracking-[0.25em] text-muted-foreground">
                              Overview · Components · Docs
                            </span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="px-2 pb-4">
                          <ul className="flex flex-col gap-2">
                            {mobileNavLinks.map((link) => (
                              <li key={link.label}>
                                <Link
                                  href={link.href}
                                  className="group flex items-center justify-between rounded-2xl border border-transparent bg-background/80 px-4 py-3 transition-all hover:-translate-y-px hover:border-border hover:bg-background"
                                  onClick={closeMenu}
                                >
                                  <div>
                                    <div className="text-sm font-semibold text-foreground">
                                      {link.label}
                                    </div>
                                    <p className="text-xs text-muted-foreground">
                                      {link.description}
                                    </p>
                                  </div>
                                  <CornerDownLeft className="size-4 text-muted-foreground transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:text-foreground" />
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem
                        value="resources"
                        className="overflow-hidden rounded-2xl border border-border/60 bg-muted/30 shadow-sm backdrop-blur"
                      >
                        <AccordionTrigger className="px-4 py-3 text-base font-semibold text-foreground">
                          <div className="flex flex-col text-left leading-tight">
                            <span>Resources</span>
                            <span className="text-xs font-normal uppercase tracking-[0.25em] text-muted-foreground">
                              Docs · Blog · Library
                            </span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="px-2 pb-4">
                          <ul className="flex flex-col gap-2">
                            {resourceLinks.map((resource) => (
                              <li key={resource.heading}>
                                <Link
                                  href={resource.href}
                                  className="group block rounded-2xl border border-transparent bg-background/80 px-4 py-3 transition-all hover:-translate-y-px hover:border-border hover:bg-background"
                                  onClick={closeMenu}
                                >
                                  <div className="text-sm font-semibold text-foreground">
                                    {resource.heading}
                                  </div>
                                  <p className="text-xs text-muted-foreground">
                                    {resource.description}
                                  </p>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem
                        value="status"
                        className="overflow-hidden rounded-2xl border border-border/60 bg-muted/30 shadow-sm backdrop-blur"
                      >
                        <AccordionTrigger className="px-4 py-3 text-base font-semibold text-foreground">
                          <div className="flex flex-col text-left leading-tight">
                            <span>Roadmap</span>
                            <span className="text-xs font-normal uppercase tracking-[0.25em] text-muted-foreground">
                              Track updates & checklists
                            </span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="px-2 pb-4">
                          <ul className="flex flex-col gap-2">
                            {boardStatuses.map(({ label, href, icon: Icon }) => (
                              <li key={label}>
                                <Link
                                  href={href}
                                  className="group flex items-center gap-3 rounded-2xl border border-transparent bg-background/80 px-4 py-3 transition-all hover:-translate-y-px hover:border-border hover:bg-background"
                                  onClick={closeMenu}
                                >
                                  <div className="flex size-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                    <Icon className="size-4" />
                                  </div>
                                  <div className="flex flex-col">
                                    <span className="text-sm font-semibold text-foreground">
                                      {label}
                                    </span>
                                    <span className="text-xs text-muted-foreground">
                                      View board column
                                    </span>
                                  </div>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>

                    <BuildWithHelixQueCard onLinkClick={closeMenu} />
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

const NavBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <MobileHeader isOpen={mobileOpen} setIsOpen={setMobileOpen} />
      <nav className="fixed inset-x-0 top-4 z-55 hidden justify-center px-4 md:flex lg:px-10">
        <div className="w-full max-w-6xl">
          <div
            className={cn(
              "relative flex w-full items-center justify-between gap-4 rounded-2xl border border-border/60 bg-background/90 px-5 py-3.5 shadow-[0_18px_45px_rgba(15,15,15,0.12)] backdrop-blur-xl lg:gap-6 lg:px-6 lg:py-4"
            )}
          >
            <div className="flex-1 flex justify-start">
              <Link href="/" className="cursor-pointer">
                <Logo />
              </Link>
            </div>
            <div className="hidden md:flex justify-center">
              <NavigationMenu viewport={false}>
                <NavigationMenuList className="flex-nowrap gap-2">
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className={navTriggerClasses}>
                      Overview
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid gap-2 md:w-[420px] lg:w-[520px] lg:grid-cols-[.75fr_1fr]">
                        <li className="row-span-3">
                          <NavigationMenuLink asChild>
                            <Link
                              className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-4 no-underline outline-hidden transition-all duration-200 select-none focus:shadow-md md:p-6"
                              href="/"
                            >
                              <div className="mb-2 text-lg font-medium sm:mt-4">
                                HelixQue
                              </div>
                              <p className="text-muted-foreground text-sm leading-tight">
                                Build workflows, launch experiments, and ship
                                polished experiences with our open platform.
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        {docsHighlights.map((item) => (
                          <ListItem
                            key={item.title}
                            href={item.href}
                            title={item.title}
                          >
                            {item.description}
                          </ListItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger className={navTriggerClasses}>
                      Components
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid gap-2 sm:w-[420px] md:w-[520px] md:grid-cols-2 lg:w-[620px]">
                        {componentShowcase.map((component) => (
                          <ListItem
                            key={component.title}
                            title={component.title}
                            href={component.href}
                          >
                            {component.description}
                          </ListItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  {/* <NavigationMenuItem>
                    <NavigationMenuLink
                      asChild
                      className={cn(
                        navigationMenuTriggerStyle(),
                        navTriggerClasses
                      )}
                    >
                      <Link href="/docs">Docs</Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem> */}

                  <NavigationMenuItem className="hidden md:block">
                    <NavigationMenuTrigger className={navTriggerClasses}>
                      Resources
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[320px] gap-4">
                        <li className="space-y-3">
                          {resourceLinks.map((resource) => (
                            <NavigationMenuLink key={resource.heading} asChild>
                              <Link
                                href={resource.href}
                                className="block rounded-md px-3 py-2 transition-colors hover:bg-muted"
                              >
                                <div className="font-medium">
                                  {resource.heading}
                                </div>
                                <div className="text-muted-foreground text-sm">
                                  {resource.description}
                                </div>
                              </Link>
                            </NavigationMenuLink>
                          ))}
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem className="hidden xl:block">
                    <NavigationMenuTrigger className={navTriggerClasses}>
                      Quick Links
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[220px] gap-3">
                        <li className="space-y-2">
                          {quickLinks.map((item) => (
                            <NavigationMenuLink key={item.href} asChild>
                              <Link
                                href={item.href}
                                className="block rounded-md px-3 py-2 text-sm transition-colors hover:bg-muted"
                              >
                                {item.label}
                              </Link>
                            </NavigationMenuLink>
                          ))}
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem className="hidden xl:block">
                    <NavigationMenuTrigger className={navTriggerClasses}>
                      Status
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[260px] gap-3">
                        <li className="space-y-2">
                          {boardStatuses.map(({ label, href, icon: Icon }) => (
                            <NavigationMenuLink asChild key={label}>
                              <Link
                                href={href}
                                className="flex flex-row items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors hover:bg-muted"
                              >
                                <Icon className="size-4" />
                                <span>{label}</span>
                              </Link>
                            </NavigationMenuLink>
                          ))}
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            {/* Right side actions */}
            <div className="flex-1 flex items-center justify-end gap-2">
              {/* Show full star badge on sm+ screens */}
              <div className="hidden sm:block">
                <GitHubStarBadge />
              </div>
              {/* Keep compact icon on very small screens */}
              <div className="sm:hidden">
                <Button variant="ghost" size="sm" asChild>
                  <Link
                    href="https://github.com/HXQLabs/Helixque"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icons.github className="h-4 w-4" />
                  </Link>
                </Button>
                
              </div>
              <Button
                size="sm"
                className="bg-primary text-primary-foreground ring-primary before:from-primary-foreground/20 after:from-primary-foreground/10 relative isolate inline-flex items-center justify-center overflow-hidden rounded-md px-2 text-left text-xs font-medium ring-1 before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:rounded-md before:bg-linear-to-b before:opacity-80 before:transition-opacity before:duration-300 before:ease-[cubic-bezier(0.4,0.36,0,1)] after:pointer-events-none after:absolute after:inset-0 after:-z-10 after:rounded-md after:bg-linear-to-b after:to-transparent after:mix-blend-overlay hover:cursor-pointer h-7 sm:h-8 sm:px-3 sm:text-sm"
                asChild
              >
                <Link className="flex group items-center gap-2" href="/docs">
                  <span>Login</span>
                  <Badge className="bg-accent p-1 text-foreground transition-all duration-200 ease-in-out group-hover:shadow-xl shadow-background/70">
                    <CornerDownLeft className="size-4" />
                  </Badge>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;

// "use client";
// import React, { useState } from "react";
// import { ChevronDown, Menu, X } from "lucide-react";

// type NavItem = {
//   label: string;
//   href?: string;
//   hasDropdown?: boolean;
// };

// const NAV: NavItem[] = [
//   { label: "Product", hasDropdown: true },
//   { label: "Solutions", hasDropdown: true },
//   { label: "Resources", hasDropdown: true },
//   { label: "Pricing", href: "/pricing" },
// ];

// function cn(...parts: Array<string | false | null | undefined>) {
//   return parts.filter(Boolean).join(" ");
// }

// export default function Header() {
//   const [mobileOpen, setMobileOpen] = useState(false);

//   return (
//     <div
//       className="
//         font-regular sticky top-0 z-50
//         backdrop-blur-xl
//         bg-white/55 dark:bg-neutral-900/35
//         border-b border-neutral-200/60 dark:border-neutral-800/50
//         supports-[backdrop-filter]:backdrop-blur-xl
//         supports-[backdrop-filter]:bg-white/50
//         dark:supports-[backdrop-filter]:bg-neutral-900/30
//       "
//     >
//       {/* DESKTOP */}
//       <div className="hidden lg:block">
//         <header className="py-3">
//           <div className="mx-auto w-full px-4 md:max-w-176 lg:max-w-256 xl:max-w-314 2xl:max-w-384">
//             <nav className="flex w-full items-center justify-between">

//               {/* Logo */}
//               <div className="relative w-64">
//                 <a href="/">
//                   <img
//                     alt="Plane"
//                     loading="lazy"
//                     width={120}
//                     height={20}
//                     decoding="async"
//                     className="h-5 w-auto"
//                     src="/logo.svg"
//                   />
//                 </a>
//               </div>

//               {/* Navigation */}
//               <div className="flex items-center justify-center">
//                 <ul
//                   className="text-tertiary flex items-center gap-2"
//                   id="dropdown-menu-wrapper"
//                   role="menubar"
//                 >
//                   {NAV.map((item) => (
//                     <li
//                       className="flex-shrink-0"
//                       key={item.label}
//                       role={item.hasDropdown ? undefined : "menuitem"}
//                     >
//                       {item.href ? (
//                         <a href={item.href}>
//                           <div className="md:whitespace-pre-line text-body-sm text-neutral-primary font-[var(--font-weight-body-regular)]">
//                             <div className="hover:bg-neutral-3 rounded-md px-2 py-1 transition-colors">
//                               {item.label}
//                             </div>
//                           </div>
//                         </a>
//                       ) : (
//                         <div
//                           aria-expanded={false}
//                           aria-haspopup={item.hasDropdown ? true : undefined}
//                           className="cursor-pointer"
//                           tabIndex={0}
//                         >
//                           <div className="hover:bg-neutral-3 flex items-center gap-1 rounded-md px-2 py-1 transition-colors">
//                             <div className="md:whitespace-pre-line text-body-sm text-neutral-primary font-[var(--font-weight-body-regular)]">
//                               {item.label}
//                             </div>
//                             {item.hasDropdown ? (
//                               <ChevronDown className="size-4" />
//                             ) : null}
//                           </div>
//                         </div>
//                       )}
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               {/* CTA Buttons */}
//               <div className="flex w-64 items-center justify-end gap-2">
//                 <a
//                   target="_blank"
//                   rel="noreferrer"
//                   className="font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer text-center text-neutral-secondary hover:text-neutral-primary bg-neutral-3 px-4 py-2 text-body-base"
//                   href="https://app.plane.so/"
//                 >
//                   Login
//                 </a>

//                 <a
//                   target="_blank"
//                   rel="noreferrer"
//                   className="font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer text-center bg-brand-600 text-neutral-white hover:bg-brand-700 px-4 py-2 text-body-base"
//                   href="https://app.plane.so/sign-up"
//                 >
//                   Get started free
//                 </a>
//               </div>
//             </nav>
//           </div>
//         </header>
//       </div>

//       {/* MOBILE */}
//       <div className="relative block lg:hidden">
//         <nav className="relative">
//           <header className="py-2">
//             <div className="mx-auto w-full px-4 md:max-w-176">
//               <div className="flex w-full items-center justify-between">
                
//                 {/* Logo */}
//                 <a href="/">
//                   <img
//                     alt="Plane"
//                     loading="lazy"
//                     height={20}
//                     className="h-5 w-auto"
//                     src="/logo.svg"
//                   />
//                 </a>

//                 {/* Mobile Menu Toggle */}
//                 <button
//                   aria-expanded={mobileOpen}
//                   aria-label={mobileOpen ? "Close menu" : "Open menu"}
//                   onClick={() => setMobileOpen((s) => !s)}
//                   className="
//                     font-medium rounded-md bg-neutral-3
//                     text-neutral-secondary hover:text-neutral-primary
//                     px-4 py-2 text-body-base
//                   "
//                 >
//                   <div className="relative size-6">
//                     <Menu
//                       className={cn(
//                         "absolute inset-0 transition-all duration-300 ease-in-out",
//                         mobileOpen ? "scale-75 -rotate-90 opacity-0" : "scale-100 rotate-0 opacity-100"
//                       )}
//                     />
//                     <X
//                       className={cn(
//                         "absolute inset-0 transition-all duration-300 ease-in-out",
//                         mobileOpen ? "scale-100 rotate-0 opacity-100" : "scale-75 -rotate-90 opacity-0"
//                       )}
//                     />
//                   </div>
//                 </button>
//               </div>
//             </div>
//           </header>

//           {/* Mobile Panel */}
//           {mobileOpen && (
//             <div className="bg-white/70 dark:bg-neutral-900/40 backdrop-blur-xl border-b border-neutral-200/60 dark:border-neutral-800/50">
//               <div className="mx-auto w-full px-4 py-3 md:max-w-176">
//                 <ul className="flex flex-col gap-2">
//                   {NAV.map((item) => (
//                     <li key={item.label}>
//                       {item.href ? (
//                         <a
//                           href={item.href}
//                           className="block rounded-md px-2 py-2 text-body-base text-neutral-primary"
//                         >
//                           {item.label}
//                         </a>
//                       ) : (
//                         <button className="w-full text-left rounded-md px-2 py-2 text-body-base text-neutral-primary">
//                           <div className="flex items-center justify-between">
//                             <span>{item.label}</span>
//                             {item.hasDropdown ? <ChevronDown /> : null}
//                           </div>
//                         </button>
//                       )}
//                     </li>
//                   ))}

//                   {/* Mobile CTA buttons */}
//                   <li className="pt-2 flex gap-2">
//                     <a
//                       target="_blank"
//                       rel="noreferrer"
//                       href="https://app.plane.so/"
//                       className="flex-1 font-medium rounded-md bg-neutral-3 text-neutral-secondary hover:text-neutral-primary px-4 py-2 text-body-base"
//                     >
//                       Login
//                     </a>
//                     <a
//                       target="_blank"
//                       rel="noreferrer"
//                       href="https://app.plane.so/sign-up"
//                       className="flex-1 font-medium rounded-md bg-brand-600 text-neutral-white hover:bg-brand-700 px-4 py-2 text-body-base"
//                     >
//                       Get started free
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           )}
//         </nav>
//       </div>
//     </div>
//   );
// }
