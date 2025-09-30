"use client";

import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isExpired: boolean;
}

function EndCountdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isExpired: false,
  });

  useEffect(() => {
    const hacktoberfestEnd = new Date("2025-10-31T23:59:59");
    const tick = () => {
      const now = new Date();
      const diff = hacktoberfestEnd.getTime() - now.getTime();
      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isExpired: true });
        return;
      }
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      setTimeLeft({ days, hours, minutes, seconds, isExpired: false });
    };

    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  if (timeLeft.isExpired) {
    return (
      <div className="text-center">
        <p className="text-lg text-muted-foreground">Hacktoberfest 2025 has ended. See you next year!</p>
      </div>
    );
  }

  return (
    <div className="flex justify-center w-full">
      <div className="flex items-center gap-2 sm:gap-4 md:gap-6 lg:gap-8 w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl">
        <div className="flex flex-col items-center flex-1">
          <div className="relative w-full">
            <div className="bg-black/5 dark:bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg px-2 py-2 sm:px-3 sm:py-3 md:px-4 md:py-3 w-full flex items-center justify-center">
              <div className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-mono font-bold text-foreground tabular-nums tracking-tight text-center">
                {timeLeft.days.toString().padStart(2, "0")}
              </div>
            </div>
            <div className="text-xs sm:text-sm text-muted-foreground font-medium mt-2 text-center uppercase tracking-wider">
              Days
            </div>
          </div>
        </div>

        <div className="text-lg sm:text-2xl md:text-3xl text-muted-foreground/30 font-mono">:</div>

        <div className="flex flex-col items-center flex-1">
          <div className="relative w-full">
            <div className="bg-black/5 dark:bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg px-2 py-2 sm:px-3 sm:py-3 md:px-4 md:py-3 w-full flex items-center justify-center">
              <div className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-mono font-bold text-foreground tabular-nums tracking-tight text-center">
                {timeLeft.hours.toString().padStart(2, "0")}
              </div>
            </div>
            <div className="text-xs sm:text-sm text-muted-foreground font-medium mt-2 text-center uppercase tracking-wider">
              Hours
            </div>
          </div>
        </div>

        <div className="text-lg sm:text-2xl md:text-3xl text-muted-foreground/30 font-mono">:</div>

        <div className="flex flex-col items-center flex-1">
          <div className="relative w-full">
            <div className="bg-black/5 dark:bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg px-2 py-2 sm:px-3 sm:py-3 md:px-4 md:py-3 w-full flex items-center justify-center">
              <div className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-mono font-bold text-foreground tabular-nums tracking-tight text-center">
                {timeLeft.minutes.toString().padStart(2, "0")}
              </div>
            </div>
            <div className="text-xs sm:text-sm text-muted-foreground font-medium mt-2 text-center uppercase tracking-wider">
              Minutes
            </div>
          </div>
        </div>

        <div className="text-lg sm:text-2xl md:text-3xl text-muted-foreground/30 font-mono">:</div>

        <div className="flex flex-col items-center flex-1">
          <div className="relative w-full">
            <div className="bg-black/5 dark:bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg px-2 py-2 sm:px-3 sm:py-3 md:px-4 md:py-3 w-full flex items-center justify-center">
              <div className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-mono font-bold text-foreground tabular-nums tracking-tight text-center">
                {timeLeft.seconds.toString().padStart(2, "0")}
              </div>
            </div>
            <div className="text-xs sm:text-sm text-muted-foreground font-medium mt-2 text-center uppercase tracking-wider">
              Seconds
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HacktoberfestPage() {
  const isHacktoberfestActive = () => {
    const now = new Date();
    const start = new Date("2025-10-01T00:00:00");
    const end = new Date("2025-10-31T23:59:59");
    return now >= start && now <= end;
  };

  return (
    <div className="min-h-screen bg-background relative">
      {/* Page Title Section */}
      <div className="pt-8 pb-16">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4 mt-8">
              <span className="text-2xl">🎃</span>
              <Badge variant="secondary" className="px-3 py-1 text-orange-600 bg-orange-100 dark:bg-orange-900/30 dark:text-orange-400">
                Hacktoberfest 2025
              </Badge>
              <span className="text-2xl">🎃</span>
            </div>
            
            <h1 className="text-foreground text-4xl text-[clamp(40px,10vw,44px)] leading-[1.2] font-bold tracking-tighter text-balance sm:text-5xl mb-4">
              {isHacktoberfestActive() ? "Hacktoberfest is Here!" : "Hacktoberfest Coming Soon"}
            </h1>
            
            {isHacktoberfestActive() ? (
              <p className="text-muted-foreground text-base tracking-tight mt-6 max-w-2xl mx-auto sm:text-lg">
                Hacktoberfest 2025 is live! Contribute now. It ends in:
              </p>
            ) : (
            <p className="text-muted-foreground text-base tracking-tight mt-6 max-w-2xl mx-auto sm:text-lg">
              We understand your eagerness to contribute and we're thankful for that, 
              but you have to wait until the time comes.
            </p>
            )}
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-5xl mx-auto px-6 lg:px-10">
        {/* Countdown Timer */}
          <div className="mb-16 flex justify-center">
          {isHacktoberfestActive() ? <EndCountdown /> : null}
          </div>

        {/* Call to Action */}
        <div className="text-center">
          <p className="text-lg text-muted-foreground mb-8">
            Meanwhile, explore our repositories and get familiar with the codebase.
          </p>
          
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-lg font-medium underline underline-offset-4"
          >
            Browse Our Repositories
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
