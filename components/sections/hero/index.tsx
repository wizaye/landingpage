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
      <div className="grid w-full border-0 border-b md:border relative grid-cols-10">
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
        <Plus size={30} strokeWidth={0.8} className="absolute -top-4 -left-4" />
        <Plus
          size={30}
          strokeWidth={0.8}
          className="absolute -bottom-4 -right-4"
        />
        <div className="md:grid hidden w-full col-span-1">
          {Array.from({ length: 8 }).map((_, idx) => (
            <div
              key={idx}
              className="border-b last:border-0 flex-1 aspect-square"
            />
          ))}
        </div>
        <div className="md:col-span-8 col-span-10">
          <div className="md:flex hidden">
            {Array.from({ length: 8 }).map((_, idx) => (
              <div
                key={idx}
                className="border-l last:border-r flex-1 aspect-square"
              />
            ))}
          </div>
          <div className="relative w-full border -mt-0.5 flex items-center flex-col justify-center  md:h-89 lg:h-116 p-6 md:p-20">
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
          <div className="relative w-full h-full">
            <div className="absolute z-10 top-15 md:top-22 lg:top-29 left-1/2 -translate-x-1/2 -translate-y-1/2">
              {/* <img
                className="size-34 md:size-50 lg:size-66 dark:hidden"
                alt={`Ali's avatar`}
                src={'/vercel-logo-white.svg'}
                fetchPriority="high"
              />
              <img
                className="size-34 md:size-50 lg:size-66 hidden dark:block"
                alt={`Ali's avatar`}
                src={'/vercel-logo-black.svg'}
                fetchPriority="high"
              /> */}
              <VercelOSS/>
            </div>
            <div className="flex">
              {Array.from({ length: 8 }).map((_, idx) => (
                <div
                  key={idx}
                  className="border-l last:border-r border-b flex-1 aspect-square"
                />
              ))}
            </div>
            <div className="flex">
              {Array.from({ length: 8 }).map((_, idx) => (
                <div
                  key={idx}
                  className="border-l border-b last:border-r flex-1 aspect-square"
                />
              ))}
            </div>
            <div className="flex">
              {Array.from({ length: 8 }).map((_, idx) => (
                <div
                  key={idx}
                  className="border-l last:border-r flex-1 aspect-square"
                />
              ))}
            </div>
          </div>
        </div>
        <div className="md:grid hidden col-span-1">
          {Array.from({ length: 8 }).map((_, idx) => (
            <div
              key={idx}
              className="border-b last:border-b-0 flex-1 aspect-square"
            />
          ))}
        </div>
      </div>
    </div>
  );
}