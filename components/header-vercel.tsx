"use client";

import * as React from "react";
import Link from "next/link";
import type { ReactElement } from "react";
import { motion, AnimatePresence } from "motion/react";

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
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import {
  Bot,
  Box,
  Calendar1,
  ChartNoAxesColumnIncreasing,
  Cpu,
  AArrowUp,
  Globe,
  LayoutGrid,
  PenTool,
  ScanText,
  Shield,
  Smile,
  Sparkle,
  BookText,
  BriefcaseBusiness,
  Code,
  Component,
  Codepen,
  Network,
  Sparkles,
  ScreenShare,
  AppWindow,
  Layers,
} from "@aliimam/icons";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { useState } from "react";
import { useEffect } from "react";

const cloud: {
  title: string;
  icon: ReactElement;
  href: string;
  description: string;
}[] = [
  {
    title: "AI SDK",
    href: "#",
    icon: <Box strokeWidth={2} />,
    description: "The AI Toolkit for Typescript",
  },
  {
    title: "AI Gateway",
    href: "#",
    icon: <Sparkle strokeWidth={2} />,
    description: "One endpoint, all your models",
  },
  {
    title: "Vercel Agent",
    href: "#",
    icon: <AArrowUp strokeWidth={2} />,
    description: "An agent that knows your stack",
  },
];

const core: {
  title: string;
  icon: ReactElement;
  href: string;
  description: string;
}[] = [
  {
    title: "CI/CD",
    href: "#",
    icon: <LayoutGrid strokeWidth={2} />,
    description: "Helping teams ship 6× faster",
  },
  {
    title: "Content Delivery",
    href: "#",
    icon: <Globe strokeWidth={2} />,
    description: "Fast, scalable, and reliable",
  },
  {
    title: "Fluid Compute",
    href: "#",
    icon: <Cpu strokeWidth={2} />,
    description: "Servers, in serverless form",
  },
  {
    title: "Observability",
    href: "#",
    icon: <ChartNoAxesColumnIncreasing strokeWidth={2} />,
    description: "Trace every step",
  },
];

const security: {
  title: string;
  icon: ReactElement;
  href: string;
  description: string;
}[] = [
  {
    title: "Bot Management",
    href: "#",
    icon: <Bot strokeWidth={2} />,
    description: "Scalable bot protection",
  },
  {
    title: "BotID",
    href: "#",
    icon: <ScanText strokeWidth={2} />,
    description: "Invisible CAPTCHA",
  },
  {
    title: "Platform Security",
    href: "#",
    icon: <Shield strokeWidth={2} />,
    description: "DDOS Protection, Firewall",
  },
  {
    title: "Web Application Firewall",
    href: "#",
    icon: <Calendar1 strokeWidth={2} />,
    description: "Granular, custom protection",
  },
];

const company: {
  title: string;
  icon: ReactElement;
  href: string;
  description: string;
}[] = [
  {
    title: "Customers",
    href: "#",
    icon: <Smile strokeWidth={2} />,
    description: "Trusted by the best teams",
  },
  {
    title: "Blog",
    href: "#",
    icon: <PenTool strokeWidth={2} />,
    description: "The latest posts and changes",
  },
  {
    title: "Changelog",
    href: "#",
    icon: <BookText strokeWidth={2} />,
    description: "See what shipped",
  },
  {
    title: "Press",
    href: "#",
    icon: <BriefcaseBusiness strokeWidth={2} />,
    description: "Read the latest news",
  },
  {
    title: "Events",
    href: "#",
    icon: <Calendar1 strokeWidth={2} />,
    description: "Join us at an event",
  },
];

const open: {
  title: string;
  icon: ReactElement;
  href: string;
  description: string;
}[] = [
  {
    title: "Next.js",
    href: "#",
    icon: <Code strokeWidth={2} />,
    description: "The native Next.js platform",
  },
  {
    title: "Nuxt",
    href: "#",
    icon: <Component strokeWidth={2} />,
    description: "The progressive web framework",
  },
  {
    title: "Svelte",
    href: "#",
    icon: <Codepen strokeWidth={2} />,
    description: "The web's efficient Ul framework",
  },
  {
    title: "Turborepo",
    href: "#",
    icon: <Network strokeWidth={2} />,
    description: "Speed with Enterprise scale",
  },
];

const tools: {
  title: string;
  icon: ReactElement;
  href: string;
  description: string;
}[] = [
  {
    title: "Academy",
    href: "#",
    icon: <Code strokeWidth={2} />,
    description: "Learn the ins and outs of Vercel",
  },
  {
    title: "Marketplace",
    href: "#",
    icon: <Component strokeWidth={2} />,
    description: "Extend and automate workflows",
  },
  {
    title: "Templates",
    href: "#",
    icon: <Codepen strokeWidth={2} />,
    description: "Jumpstart app development",
  },
  {
    title: "Guides",
    href: "#",
    icon: <Network strokeWidth={2} />,
    description: "Find help quickly",
  },
  {
    title: "Partner Finder",
    href: "#",
    icon: <Network strokeWidth={2} />,
    description: "Get help from solution partners",
  },
];

const cases: {
  title: string;
  icon: ReactElement;
  href: string;
  description: string;
}[] = [
  {
    title: "Al Apps",
    href: "#",
    icon: <Sparkles strokeWidth={2} />,
    description: "Deploy at the speed of Al",
  },
  {
    title: "Composable Commerce",
    href: "#",
    icon: <Component strokeWidth={2} />,
    description: "Power storefronts that convert",
  },
  {
    title: "Marketing Sites",
    href: "#",
    icon: <ScreenShare strokeWidth={2} />,
    description: "Jumpstart app development",
  },
  {
    title: "Multi-tenant Platforms",
    href: "#",
    icon: <Network strokeWidth={2} />,
    description: "Scale apps with one codebase",
  },
  {
    title: "Web Apps",
    href: "#",
    icon: <AppWindow strokeWidth={2} />,
    description: "Ship features, not infrastructure",
  },
];

const users: {
  title: string;
  icon: ReactElement;
  href: string;
  description: string;
}[] = [
  {
    title: "Platform Engineers",
    href: "#",
    icon: <Code strokeWidth={2} />,
    description: "Automate away repetition",
  },
  {
    title: "Design Engineers",
    href: "#",
    icon: <Layers strokeWidth={2} />,
    description: "Deploy for every idea",
  },
];

// Logo Component
const HelixQueLogo = () => (
  <Link href="/" className="flex items-center gap-2 transition-opacity duration-200 hover:opacity-80">
    <img 
      src="/logo.svg" 
      width={22} 
      height={22} 
      className="h-6 w-auto" 
      alt="HelixQue Logo" 
    />
    <span className="font-heading text-xl font-semibold">HelixQue</span>
    <Badge variant="secondary" className="text-[8px] px-1 py-0 h-auto">
      Beta
    </Badge>
  </Link>
);

// Mobile menu configuration - flattened structure
const mobileMenuConfig = {
  products: [...cloud, ...core, ...security],
  resources: [...company, ...open, ...tools],
  solutions: [...cases, ...users],
  singleLinks: [
    { title: "Enterprise", href: "#" },
    { title: "Docs", href: "#" },
    { title: "Pricing", href: "#" },
  ],
};

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`flex sticky px-4 z-50 top-0 w-full bg-background items-center h-16 justify-between transition-border duration-300 ${
        scrolled ? "border-b" : "border-b-0"
      }`}
    >
      <div className="flex items-center justify-between w-full mx-auto max-w-7xl">
        <div className="flex h-14 justify-center items-center">
          <HelixQueLogo />
          {/* Desktop Navigation */}
          <NavigationMenu className="ml-8 hidden md:flex" viewport={true}>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  Products
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-background">
                  <ul className="grid w-[400px] pt-2 grid-cols-3 md:w-[800px]">
                    <div>
                      <span className="p-4 text-muted-foreground">
                        AI Cloud
                      </span>
                      {cloud.map((component) => (
                        <ListItem
                          key={component.title}
                          title={component.title}
                          icon={component.icon}
                          href={component.href}
                        >
                          {component.description}
                        </ListItem>
                      ))}
                    </div>
                    <div>
                      <span className="p-4 text-muted-foreground">
                        Core Platform
                      </span>
                      {core.map((component) => (
                        <ListItem
                          key={component.title}
                          title={component.title}
                          icon={component.icon}
                          href={component.href}
                        >
                          {component.description}
                        </ListItem>
                      ))}
                    </div>
                    <div>
                      <span className="p-4 text-muted-foreground">
                        Security
                      </span>
                      {security.map((component) => (
                        <ListItem
                          key={component.title}
                          title={component.title}
                          icon={component.icon}
                          href={component.href}
                        >
                          {component.description}
                        </ListItem>
                      ))}
                    </div>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "rounded-full h-7.5 font-normal text-muted-foreground"
                  )}
                >
                  Resources
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-background">
                  <ul className="grid w-[400px] pt-2 grid-cols-3 md:w-[800px]">
                    <div>
                      <span className="p-4 text-muted-foreground">Company</span>
                      {company.map((component) => (
                        <ListItem
                          key={component.title}
                          title={component.title}
                          icon={component.icon}
                          href={component.href}
                        >
                          {component.description}
                        </ListItem>
                      ))}
                    </div>
                    <div>
                      <span className="p-4 text-muted-foreground">
                        Open Source
                      </span>
                      {open.map((component) => (
                        <ListItem
                          key={component.title}
                          title={component.title}
                          icon={component.icon}
                          href={component.href}
                        >
                          {component.description}
                        </ListItem>
                      ))}
                    </div>
                    <div>
                      <span className="p-4 text-muted-foreground">Tools</span>
                      {tools.map((component) => (
                        <ListItem
                          key={component.title}
                          title={component.title}
                          icon={component.icon}
                          href={component.href}
                        >
                          {component.description}
                        </ListItem>
                      ))}
                    </div>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "rounded-full h-7.5 font-normal text-muted-foreground"
                  )}
                >
                  Solutions
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-background">
                  <ul className="grid w-[400px] pt-2 grid-cols-2 md:w-[550px]">
                    <div>
                      <span className="p-4 text-muted-foreground">
                        Use Cases
                      </span>
                      {cases.map((component) => (
                        <ListItem
                          key={component.title}
                          title={component.title}
                          icon={component.icon}
                          href={component.href}
                        >
                          {component.description}
                        </ListItem>
                      ))}
                    </div>
                    <div>
                      <span className="p-4 text-muted-foreground">Users</span>
                      {users.map((component) => (
                        <ListItem
                          key={component.title}
                          title={component.title}
                          icon={component.icon}
                          href={component.href}
                        >
                          {component.description}
                        </ListItem>
                      ))}
                    </div>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "rounded-full h-7.5 font-normal text-muted-foreground"
                  )}
                >
                  <Link href="#">Enterprise</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "rounded-full h-7.5 font-normal text-muted-foreground"
                  )}
                >
                  <Link href="#">Docs</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "rounded-full h-7.5 font-normal text-muted-foreground"
                  )}
                >
                  <Link href="#">Pricing</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        {/* Desktop Buttons */}
        <div className="hidden md:flex gap-2">
          <Button variant={"outline"} size={"sm"}>
            Contact
          </Button>
          <Button variant={"outline"} size={"sm"}>
            Dashboard
          </Button>
        </div>
        {/* Mobile Menu Toggle Button */}
        <motion.button
          className="md:hidden p-1.5 rounded-md hover:bg-accent transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="relative w-6 h-6 flex items-center justify-center">
            <motion.span
              className="absolute block h-0.5 w-5 bg-current"
              initial={{ rotate: 0, y: -4, opacity: 1 }}
              animate={{
                rotate: mobileMenuOpen ? 45 : 0,
                y: mobileMenuOpen ? 0 : -4,
                opacity: mobileMenuOpen ? 1 : 1,
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            />
            <motion.span
              className="absolute block h-0.5 w-5 bg-current"
              initial={{ rotate: 0, y: 4, opacity: 1 }}
              animate={{
                rotate: mobileMenuOpen ? -45 : 0,
                y: mobileMenuOpen ? 0 : 4,
                opacity: mobileMenuOpen ? 1 : 1,
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            />
          </div>
        </motion.button>
      </div>
      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 top-16 z-40 md:hidden"
              onClick={() => setMobileMenuOpen(false)}
              aria-hidden="true"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
            />
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="Mobile menu"
              className="md:hidden absolute top-16 left-0 right-0 z-[60] bg-background border-b max-h-[calc(100vh-4rem)] overflow-y-auto"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 25,
                mass: 0.5,
              }}
            >
              <div className="px-4 py-4">
                <Accordion type="multiple" className="w-full">
                  {/* Products Accordion */}
                  <AccordionItem value="products" className="border-b-0">
                    <AccordionTrigger>Products</AccordionTrigger>
                    <AccordionContent>
                      <div className="flex flex-col space-y-1">
                        {mobileMenuConfig.products.map((item) => (
                          <Link
                            key={item.title}
                            href={item.href}
                            className="block text-sm font-medium py-2 px-4 rounded-md transition-all duration-200 hover:bg-muted/50 text-muted-foreground hover:text-foreground"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {item.title}
                          </Link>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  {/* Resources Accordion */}
                  <AccordionItem value="resources" className="border-b-0">
                    <AccordionTrigger>Resources</AccordionTrigger>
                    <AccordionContent>
                      <div className="flex flex-col space-y-1">
                        {mobileMenuConfig.resources.map((item) => (
                          <Link
                            key={item.title}
                            href={item.href}
                            className="block text-sm font-medium py-2 px-4 rounded-md transition-all duration-200 hover:bg-muted/50 text-muted-foreground hover:text-foreground"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {item.title}
                          </Link>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  {/* Solutions Accordion */}
                  <AccordionItem value="solutions" className="border-b-0">
                    <AccordionTrigger>Solutions</AccordionTrigger>
                    <AccordionContent>
                      <div className="flex flex-col space-y-1">
                        {mobileMenuConfig.solutions.map((item) => (
                          <Link
                            key={item.title}
                            href={item.href}
                            className="block text-sm font-medium py-2 px-4 rounded-md transition-all duration-200 hover:bg-muted/50 text-muted-foreground hover:text-foreground"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {item.title}
                          </Link>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                {/* Single Links */}
                <div className="flex flex-col">
                  {mobileMenuConfig.singleLinks.map((link) => (
                    <Link
                      key={link.title}
                      href={link.href}
                      className="flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.title}
                    </Link>
                  ))}
                </div>
                {/* Mobile Buttons */}
                <div className="flex flex-row gap-2 mt-4 pt-4 border-t">
                  <Button variant={"outline"} size={"sm"} className="flex-1">
                    Contact
                  </Button>
                  <Button variant={"outline"} size={"sm"} className="flex-1">
                    Dashboard
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

function ListItem({
  title,
  icon,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & {
  href: string;
  icon: ReactElement;
}) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild className="hover:bg-transparent">
        <Link href={href}>
          <div className="flex gap-3 items-start rounded-md p-2">
            <div className="border rounded-sm p-2 icon-container">{icon}</div>
            <div className="text-container">
              <div className="text-sm font-medium leading-none">{title}</div>
              <p className="text-muted-foreground line-clamp-2 pt-1 text-xs leading-snug">
                {children}
              </p>
            </div>
          </div>
        </Link>
      </NavigationMenuLink>

      <style jsx>{`
        li:hover .icon-container {
          background-color: var(--foreground);
          color: var(--background);
          transform: scale(1.05);
          transition: all 0.2s ease;
        }

        li:hover .text-container .text-sm {
          color: var(--foreground); /* Change title color on hover */
          transition: color 0.2s ease;
        }

        li:hover .text-container p {
          color: var(--foreground); /* Change description color on hover */
          transition: color 0.2s ease;
        }
      `}</style>
    </li>
  );
}