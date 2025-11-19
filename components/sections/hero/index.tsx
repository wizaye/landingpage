"use client";
/*
  Previous Hero implementation commented out per request.
  (See original exports and layout preserved here for reference.)
  Original code replaced by new Hero layout below.
*/

import Link from "next/link";
import { Button } from "@/components/ui/button";
import VercelOSS from "@/components/common/open-source/vercel-oss";
import { DrawLineText } from "@/components/gsap/draw-line-text";

// Local placeholder components for Vercel logo and Plus icon (original external packages not found)
const Vercel = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-label="Vercel logo"
    className="mr-2"
  >
    <path d="M12 2l11 20H1L12 2z" />
  </svg>
);

const Plus = ({ size = 30, strokeWidth = 1, className = "" }: { size?: number; strokeWidth?: number; className?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-label="Plus icon"
  >
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

// New Hero layout
export function HeroSection() {
  return (
    <div className="pt-10 px-4 lg:px-0 flex mx-auto max-w-6xl flex-col items-center justify-center text-center">
      {/* Main Container for the Grid System */}
      <div className="w-full relative flex flex-col">
        {/* Background Gradient Mask */}
        <div
          className="absolute inset-0 -z-20"
          style={{
            background: "none",
            WebkitMaskImage:
              "linear-gradient(to top, black 0%, transparent 60%)",
            maskImage:
              "linear-gradient(to top, black 0%, transparent 60%)",
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
          }}
        />

        {/* Plus Icons */}
        <Plus size={30} strokeWidth={0.8} className="absolute -top-4 -left-4 z-10" />
        <Plus
          size={30}
          strokeWidth={0.8}
          className="absolute -bottom-4 -right-4 z-10"
        />

        {/* Row 1: Top Grid Lines */}
        <div className="grid grid-cols-10 w-full">
          {Array.from({ length: 10 }).map((_, idx) => (
            <div
              key={`row1-${idx}`}
              className={`border-b ${idx === 0 ? 'border-r' : idx === 9 ? 'border-l' : 'border-x'} border-border/50 h-12 md:h-24 w-full ${idx === 0 || idx === 9 ? 'hidden md:block' : ''}`}
            />
          ))}
        </div>

        {/* Row 2: Main Hero Content */}
        <div className="grid grid-cols-10 w-full">
          {/* Left Spacer */}
          <div className="hidden md:block col-span-1 border-r border-b border-border/50" />

          {/* Main Content */}
          <div className="col-span-10 md:col-span-8 border-b border-border/50 p-6 md:p-20 flex flex-col items-center justify-center min-h-[300px] md:min-h-[400px]">
            <h1 className="flex flex-col text-center text-3xl leading-none font-semibold tracking-tight lg:text-5xl">
              Build and deploy on the AI Cloud.
            </h1>
            <p className="md:text-md text-muted-foreground py-6 lg:text-lg">
              Vercel provides the developer tools and cloud infrastructure <br />
              to build, scale, and secure a faster, more personalized web.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <Link href={'/'}>
                <Button
                  className="cursor-pointer rounded-full w-46 h-12"
                  variant="default"
                >
                  <Vercel />
                  Start Deploying
                </Button>
              </Link>
              <Link href={'https://cal.com/aliimam/30min'} target="_blank">
                <Button
                  className="cursor-pointer rounded-full w-46 h-12"
                  variant="outline"
                >
                  Get a Demo
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Spacer */}
          <div className="hidden md:block col-span-1 border-l border-b border-border/50" />
        </div>

        {/* Row 3: Spacer Grid Lines */}
        <div className="grid grid-cols-10 w-full">
          {Array.from({ length: 10 }).map((_, idx) => (
            <div
              key={`row3-${idx}`}
              className={`border-b ${idx === 0 ? 'border-r' : idx === 9 ? 'border-l' : 'border-x'} border-border/50 h-12 md:h-24 w-full ${idx === 0 || idx === 9 ? 'hidden md:block' : ''}`}
            />
          ))}
        </div>

        {/* Row 4: Backed by Vercel Section */}
        <div className="grid grid-cols-10 w-full">
          {/* Left Spacer */}
          <div className="hidden md:block col-span-1 border-r border-b border-border/50" />

          {/* Vercel OSS Content */}
          <div className="col-span-10 md:col-span-8 border-b border-border/50 p-10 flex flex-col items-center justify-center">
            <VercelOSS />
          </div>

          {/* Right Spacer */}
          <div className="hidden md:block col-span-1 border-l border-b border-border/50" />
        </div>

        {/* Row 5: Bottom Grid Lines */}
        <div className="grid grid-cols-10 w-full">
          {Array.from({ length: 10 }).map((_, idx) => (
            <div
              key={`row5-${idx}`}
              className={`${idx === 0 ? 'border-r' : idx === 9 ? 'border-l' : 'border-x'} border-border/50 h-12 md:h-24 w-full ${idx === 0 || idx === 9 ? 'hidden md:block' : ''}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}