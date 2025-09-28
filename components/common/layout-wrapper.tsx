'use client';

import { useEffect, useState } from 'react';
import { Banner } from '@/components/utils/banner';
import { BannerCountdown } from '@/components/utils/banner-countdown';
import BadtzHeader from '@/components/common/badtz-header';
import { ArrowUpRight } from 'lucide-react';

export function LayoutWrapper() {
  const [isBannerClosed, setIsBannerClosed] = useState(false);
  const bannerId = 'ui-layouts-pro-banner';
  const bannerKey = `banner-${bannerId}`;

  useEffect(() => {
    // Check if banner was previously closed in this session
    const bannerClosed = sessionStorage.getItem(bannerKey) === 'true';
    setIsBannerClosed(bannerClosed);

    // Listen for custom event when banner is closed in the same tab
    const handleBannerClose = () => {
      setIsBannerClosed(true);
    };

    window.addEventListener('bannerClosed', handleBannerClose);

    return () => {
      window.removeEventListener('bannerClosed', handleBannerClose);
    };
  }, [bannerKey]);

  return (
    <>
      {/* Fixed Banner */}
      <div className="fixed top-0 left-0 right-0 z-40">
        <Banner
          id={bannerId}
          variant="rainbow"
          className="h-11 md:text-base sm:text-sm text-xs"
          href="/announcements"
          target="_self"
        >
          <div className="flex items-center justify-between w-full max-w-7xl mx-auto">
            {/* Left side - Title */}
            <div className="flex items-center gap-1 group-hover:underline underline-offset-4">
              <picture>
                <source
                  srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/1f680/512.webp"
                  type="image/webp"
                />
                <img
                  src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f680/512.gif"
                  alt="🚀"
                  className="w-6 h-6"
                  width="32"
                  height="32"
                />
              </picture>
              <span className="flex flex-wrap gap-1">
                Ship faster with{' '}
                <span className="font-semibold">UI-Layouts Pro</span>
                <span className="md:inline-block hidden">
                  – 50+ Tailwind & React components for production-ready UIs
                </span>
              </span>
              <ArrowUpRight
                className="size-5 ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 ease-out shrink-0"
                strokeWidth={2}
              />
            </div>
            
            {/* Right side - Countdown */}
            <div className="flex items-center gap-2">
              <BannerCountdown />
            </div>
          </div>
        </Banner>
      </div>

      {/* Fixed Header - dynamically positioned based on banner state */}
      <div 
        className={`fixed left-0 right-0 z-50 transition-all duration-300 ${
          isBannerClosed ? 'top-0' : 'top-11'
        }`}
      >
        <BadtzHeader />
      </div>
    </>
  );
}

export function MainContentWrapper({ children }: { children: React.ReactNode }) {
  const [isBannerClosed, setIsBannerClosed] = useState(false);
  const bannerId = 'ui-layouts-pro-banner';
  const bannerKey = `banner-${bannerId}`;

  useEffect(() => {
    // Check if banner was previously closed in this session
    const bannerClosed = sessionStorage.getItem(bannerKey) === 'true';
    setIsBannerClosed(bannerClosed);

    // Listen for custom event when banner is closed in the same tab
    const handleBannerClose = () => {
      setIsBannerClosed(true);
    };

    window.addEventListener('bannerClosed', handleBannerClose);

    return () => {
      window.removeEventListener('bannerClosed', handleBannerClose);
    };
  }, [bannerKey]);

  return (
    <main 
      className="relative z-10 min-h-screen transition-all duration-300"
      style={{ 
        paddingTop: isBannerClosed ? '4rem' : '6.75rem' // Header height only vs Banner + Header height
      }}
    >
      {children}
    </main>
  );
}
