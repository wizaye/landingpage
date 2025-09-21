import React from "react";
import { cn } from "@/lib/utils";

interface LogoProps {
  url?: string;
  children: React.ReactNode;
  className?: string;
}

interface LogoImageProps {
  src?: string;
  alt: string;
  title: string;
  className?: string;
}

interface LogoTextProps {
  children: React.ReactNode;
  className?: string;
}

const Logo = ({ url, children, className }: LogoProps) => {
  const Component = url ? "a" : "div";
  const props = url ? { href: url } : {};
  
  return (
    <Component 
      {...props} 
      className={cn("flex items-center gap-2", className)}
    >
      {children}
    </Component>
  );
};

const LogoImage = ({ src, alt, title, className }: LogoImageProps) => {
  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        title={title}
        className={cn("h-8 w-8", className)}
      />
    );
  }
  
  // Fallback to icon if no src provided
  return (
    <div className={cn("h-8 w-8 bg-black dark:bg-white rounded", className)} />
  );
};

const LogoText = ({ children, className }: LogoTextProps) => {
  return (
    <span className={cn("font-semibold text-black dark:text-white", className)}>
      {children}
    </span>
  );
};

export { Logo, LogoImage, LogoText };