"use client";
import { useState, useRef } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";

interface BadtzHeaderProps {
  className?: string;
}

export default function BadtzHeader({ className }: BadtzHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [pillStyle, setPillStyle] = useState({ left: 0, width: 0 });
  const navItemsRef = useRef<(HTMLLIElement | null)[]>([]);

  const updatePillPosition = (index: number) => {
    const element = navItemsRef.current[index];
    if (element) {
      const rect = element.getBoundingClientRect();
      const parentRect = element.parentElement?.getBoundingClientRect();
      if (parentRect) {
        setPillStyle({
          left: rect.left - parentRect.left,
          width: rect.width,
        });
      }
    }
  };

  const BadtzLogo = () => (
    <div className="text-foreground flex items-end gap-2.5 [&_svg]:h-5">
      <svg 
        width="20" 
        height="20" 
        viewBox="0 0 190 190" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          fillRule="evenodd" 
          clipRule="evenodd" 
          d="M102.256 188.162C97.6186 190.613 92.0647 190.613 87.4273 188.162L11.3881 147.988C6.20803 145.251 2.96875 139.885 2.96875 134.04L2.96875 55.9596C2.96875 50.115 6.20804 44.7487 11.3881 42.0119L87.4273 1.83758C92.0647 -0.612537 97.6186 -0.612537 102.256 1.83758L178.295 42.0119C183.475 44.7487 186.715 50.115 186.715 55.9596L186.715 134.04C186.715 139.885 183.475 145.251 178.295 147.988L102.256 188.162ZM17.2566 130.86C17.2566 133.8 18.9004 136.499 21.5152 137.859L86.6791 171.709C89.3137 173.075 92.4666 171.171 92.4666 168.21L92.4666 100.577C92.4666 97.6363 90.8224 94.9374 88.208 93.5771L23.0442 59.727C20.4089 58.3581 17.2566 60.2643 17.2566 63.2268L17.2566 130.86Z" 
          fill="currentColor"
        />
      </svg>
      <span className="font-heading text-lg leading-none font-semibold">HelixQue</span>
    </div>
  );

  const navigationItems = [
    { href: "/docs", label: "Documentation" },
    { href: "/changelog", label: "Changelog" },
    { href: "/announcements", label: "Announcements" },
    { href: "/resources", label: "Resources" }
  ];

  return (
    <div className={cn("bg-background theme-container", className)}>
      <div className="bg-background/70 sticky top-0 z-40 w-full backdrop-blur-sm">
        <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 backdrop-blur-xs">
          {/* Desktop Logo */}
          <motion.div 
            className="hidden md:flex"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Link href="/" className="transition-opacity duration-200 hover:opacity-80">
              <BadtzLogo />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.nav 
            className="absolute left-1/2 hidden -translate-x-1/2 transform md:flex" 
            aria-label="Main navigation"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          >
            <ul className="border-border/70 relative flex w-fit rounded-full border p-1 px-1">
              {navigationItems.map((item, index) => (
                <motion.li 
                  key={item.href}
                  ref={(el) => {
                    navItemsRef.current[index] = el;
                  }}
                  className="hover:text-foreground text-muted-foreground z-10 block cursor-pointer px-3 py-1.5 text-sm font-medium tracking-tight transition-all duration-300 ease-out"
                  onMouseEnter={() => {
                    setHoveredIndex(index);
                    updatePillPosition(index);
                  }}
                  onMouseLeave={() => setHoveredIndex(null)}
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 + index * 0.05 }}
                >
                  <Link 
                    href={item.href} 
                    className="text-[13.5px] text-muted-foreground hover:text-foreground transition-all duration-300 ease-out relative"
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}
              {/* Animated pill background */}
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
                    : {
                        opacity: 0,
                        scale: 0.8,
                      }
                }
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 30,
                  mass: 0.8,
                }}
              />
            </ul>
          </motion.nav>

          {/* Mobile Menu */}
          <motion.div 
            className="flex md:hidden"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="flex items-center gap-3">
              <motion.button 
                className="flex items-center [&_svg]:size-5 transition-opacity duration-200 hover:opacity-70" 
                aria-label="Open menu" 
                aria-expanded={isMenuOpen}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <motion.div
                  animate={{ rotate: isMenuOpen ? 90 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={22} />
                </motion.div>
                <span className="sr-only">Toggle Menu</span>
              </motion.button>
              <Link href="/" className="transition-opacity duration-200 hover:opacity-80">
                <BadtzLogo />
              </Link>
            </div>
          </motion.div>

          {/* Auth Buttons */}
          
          <motion.nav 
            className="flex items-center gap-3 text-sm font-medium" 
            aria-label="Authentication"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          >
          
            <button 
              className="inline-flex items-center justify-center gap-2 font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-secondary text-secondary-foreground hover:bg-secondary/80 py-2 has-[>svg]:px-3 h-8 rounded-lg px-4 text-[13.5px] whitespace-nowrap shadow-[inset_0_1px_0_0_#FFFFFF20]"
            >
              Sign Up
            </button>
            <button 
              className="inline-flex items-center justify-center gap-2 font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground hover:bg-primary/90 py-2 has-[>svg]:px-3 h-8 rounded-lg px-4 text-[13.5px] whitespace-nowrap shadow-[inset_0_1px_0_0_#FFFFFF20]"
            >
              Sign In
            </button>
            
          </motion.nav>
        </div>
      </div>

      {/* Mobile Menu Overlay and Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div 
              className="fixed inset-0 z-50 bg-black/50 md:hidden"
              onClick={() => setIsMenuOpen(false)}
              aria-hidden="true"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            />
            
            {/* Mobile Menu Drawer */}
            <motion.div
              role="dialog"
              id="mobile-menu"
              aria-modal="true"
              aria-label="Mobile menu"
              className="fixed inset-y-0 left-0 z-50 h-full w-3/4 max-w-72 border-r border-border bg-background shadow-xl md:hidden"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
                mass: 0.8,
              }}
            >
              {/* Header with Close Button */}
              <motion.div 
                className="relative flex items-center justify-between p-4 border-b border-border"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.3 }}
              >
                <div className="flex items-center">
                  <Link href="/" onClick={() => setIsMenuOpen(false)}>
                    <BadtzLogo />
                  </Link>
                </div>
                
                {/* Close Button */}
                <motion.button
                  type="button"
                  className="rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:outline-none disabled:pointer-events-none ring-offset-background"
                  onClick={() => setIsMenuOpen(false)}
                  aria-label="Close menu"
                  whileHover={{ rotate: 90 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                >
                  <X className="size-6" />
                  <span className="sr-only">Close</span>
                </motion.button>
              </motion.div>

              {/* Navigation Content */}
              <div className="pt-2 pb-4 px-0">
                <div className="flex flex-col space-y-1 items-stretch">
                  {navigationItems.map((item) => (
                    <Link 
                      key={item.href}
                      href={item.href}
                      className="text-muted-foreground py-2 text-base hover:text-foreground transition-all duration-200 rounded-lg px-4 hover:bg-muted/50 text-left"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Hidden accessibility headers */}
              <div className="sr-only">
                <h2 className="text-foreground font-semibold">Main Menu</h2>
                <p className="text-muted-foreground text-sm">
                  Use the options below to navigate the application.
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}