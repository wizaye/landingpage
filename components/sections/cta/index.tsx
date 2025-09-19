"use client";
import React from "react";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { CloudOrbitDemo } from "@/components/ui/cloud-orbit-demo";

export function CTANew() {
  return (
    <div className="bg-background dark:bg-black theme-container">
      <section className="bg-background dark:bg-black flex h-full w-full items-center justify-center px-6 py-16 md:px-8">
        <div className="border-border/20 dark:border-white/10 relative mx-auto w-full max-w-6xl overflow-hidden rounded-3xl border shadow-sm dark:shadow-md">
          {/* Background Pattern Overlay */}
          <div className="bg-secondary/30 dark:bg-white/5 pointer-events-none absolute inset-0 h-full w-full bg-[radial-gradient(var(--border)_1px,transparent_1px)] dark:bg-[radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)] mask-[radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)] bg-[length:24px_24px]"></div>
          
          {/* Main Content Container */}
          <div className="flex flex-col items-stretch justify-center gap-12 md:gap-0 lg:flex-row lg:gap-12">
            {/* Left Content Section */}
            <div className="relative z-10 flex h-full w-full flex-col items-center gap-4 p-4 pt-16 pb-0 text-center sm:p-12 md:p-16 lg:w-1/2 lg:items-start lg:pt-20 lg:pr-0 lg:pb-20 lg:pl-14 lg:text-left">
              {/* Logo/Brand Link */}
              <Link href="#home" className="flex items-center gap-2">
                <div className="text-foreground dark:text-white flex gap-2 items-center transition-colors duration-300">
                  <svg
                    width="374"
                    className="w-9 h-10"
                    height="421"
                    viewBox="0 0 374 421"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0.0047092 107.365V28.695C0.0047092 20.8868 3.58018 14.0547 10.7311 8.19858C17.4054 2.73288 25.5098 0 35.0444 0H207.383C218.824 0 228.597 3.31849 236.702 9.95542C244.806 16.5923 248.858 24.4004 248.858 33.3798V62.6604C248.858 70.8589 251.242 78.4719 256.009 85.4992C260.776 92.5265 267.451 97.9922 276.032 101.896C284.136 106.191 293.194 108.533 303.205 108.924H333.239C344.204 108.924 353.739 112.047 361.843 118.293C369.948 124.93 374 132.934 374 142.303V299.501C374 299.846 373.998 300.192 373.995 300.537V391.529C373.995 399.549 370.42 406.565 363.269 412.58C356.595 418.193 348.49 421 338.956 421H166.617C155.176 421 145.403 417.592 137.298 410.776C129.194 403.959 125.142 395.94 125.142 386.718V356.646C125.142 348.226 122.758 340.407 117.991 333.19C113.224 325.973 106.549 320.359 97.9682 316.35C89.8638 311.939 80.8059 309.533 70.7945 309.133H40.7605C29.7957 309.133 20.2611 305.925 12.1566 299.509C4.05221 292.693 0 284.474 0 274.851V108.257C0 107.959 0.00157218 107.662 0.0047092 107.365ZM248.143 304.102V119.465C248.143 116.732 247.19 114.389 245.283 112.437C242.899 110.485 240.039 109.509 236.702 109.509H135.873C132.536 109.509 129.675 110.485 127.292 112.437C126.926 112.737 126.588 113.046 126.278 113.364L125.857 298.307C125.857 301.113 126.81 303.519 128.717 305.524C131.101 307.529 133.961 308.531 137.298 308.531H238.127C241.464 308.531 244.325 307.529 246.708 305.524C247.247 305.07 247.726 304.596 248.143 304.102Z"
                      fill="url(#paint0_radial_3946_30)"
                    />
                    <defs>
                      <radialGradient
                        id="paint0_radial_3946_30"
                        cx="0"
                        cy="0"
                        r="1"
                        gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(187 210.5) rotate(90) scale(210.5 187)"
                      >
                        <stop offset="0.445416" stopColor="#2994FD" />
                        <stop offset="1" stopColor="#1761FF" />
                      </radialGradient>
                    </defs>
                  </svg>
                  <span className="bg-blue-100 text-blue-600 dark:bg-blue-50 dark:text-blue-600 -translate-y-2 uppercase inline-block border-2 text-xs border-blue-600 px-1 font-semibold rounded-md transition-colors duration-300">
                    pro
                  </span>
                </div>
              </Link>

              {/* Main Heading */}
              <div>
                <h2 className="text-foreground mt-8 text-4xl text-[clamp(40px,10vw,44px)] leading-[1.2] font-bold tracking-tighter text-balance sm:text-5xl">
                  Connect the World, Share Without Borders
                </h2>
              </div>

              {/* Description */}
              <div>
                <p className="text-muted-foreground leading-7 font-normal text-pretty sm:max-w-[600px] sm:text-lg">
                  Join thousands of developers who have already discovered the power of our platform.
                </p>
              </div>

              {/* CTA Button */}
              <Link 
                href="#" 
                className="group/cta-button bg-foreground text-background hover:bg-foreground/90 dark:bg-white dark:text-black dark:hover:bg-gray-200 font-medium mt-8 flex h-10 items-center gap-2 rounded-full px-8 text-sm shadow-md hover:shadow-lg transition-all duration-300"
              >
                Get Started
                <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover/cta-button:translate-x-1" />
              </Link>
            </div>

            {/* Right CloudOrbit Section */}
            <div className="relative flex flex-1 items-center justify-center overflow-hidden px-4 pb-4 lg:min-h-[500px] lg:w-1/2 lg:px-0 lg:pb-0">
              <div className="flex h-full w-full items-center justify-center lg:absolute lg:-right-5 lg:top-8 lg:w-[130%]">
                <div className="flex items-center justify-center w-full h-[320px] md:h-[400px] lg:h-[480px] scale-95 md:scale-100 lg:scale-110">
                  <CloudOrbitDemo />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

