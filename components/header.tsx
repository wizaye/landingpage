"use client";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";
// import { FaGithub } from "react-icons/fa";
// import GitHubStarBadge from "./GitHubStarBadge";
// import { Badge } from "../ui/badge";
import { Badge } from "./ui/badge";
import { CornerDownLeft } from "lucide-react";
import { Icons } from "./utils/icons";
import GitHubStarBadge from "./githubstar-badge";

export const Logo = () => {
  return (
    <div className="flex items-center justify-center gap-2">
      <Image
        src="/logo.svg"
        alt="Billing SDK"
        width={28}
        height={28}
      />
      <h1>HelixQue</h1>
      {/* <span className="text-3xl font-display">/</span>
      <Image
        src="/logo/Logo.svg"
        alt="Billing SDK"
        width={120}
        height={120}
      /> */}
    </div>
  );
};

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (current) =>
    setIsScrolled(current >= 10)
  );

  console.log(isScrolled);
  return (
    <nav
      className={cn(
        `fixed  left-0 right-0 max-w-7xl mx-auto z-55 flex justify-center ${
          isScrolled ? "px-2 md:px-20 top-4" : "top-2 px-6 py-4"
        } transition-all duration-300`
      )}
    >
      <div className=" w-full">
        <div
          className={cn(
            `flex items-center w-full justify-between px-2 md:px-4 py-3 transition-all duration-300 ${
              isScrolled &&
              "bg-accent/30 backdrop-blur-lg inset-shadow-sm inset-shadow-white/20 rounded-2xl px-4"
            }`
          )}
        >
          <Link href="/" className="cursor-pointer">
            <Logo />
          </Link>

          {/* Right side actions */}
          <div className="flex items-center gap-2">
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
              className="bg-primary text-primary-foreground ring-primary before:from-primary-foreground/20 after:from-primary-foreground/10 relative isolate inline-flex items-center justify-center overflow-hidden rounded-md px-2 text-left text-xs font-medium ring-1 before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:rounded-md before:bg-gradient-to-b before:opacity-80 before:transition-opacity before:duration-300 before:ease-[cubic-bezier(0.4,0.36,0,1)] after:pointer-events-none after:absolute after:inset-0 after:-z-10 after:rounded-md after:bg-gradient-to-b after:to-transparent after:mix-blend-overlay hover:cursor-pointer h-7 sm:h-8 sm:px-3 sm:text-sm"
              asChild
            >
              <Link className="flex group items-center gap-2" href="/docs">
                <span>Get Started</span>
                <Badge className="bg-accent p-1 text-foreground transition-all duration-200 ease-in-out group-hover:shadow-xl shadow-background/70">
                  <CornerDownLeft className="size-4" />
                </Badge>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
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
