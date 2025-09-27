"use client"
import StickyFooter from "@/components/common/footer";
import { Banner } from "@/components/utils/banner";
import { ArrowUpRight } from "lucide-react";
import OpensourceSection from "@/components/sections/opensource";
import { CTANew } from "@/components/sections/cta";
import Hero from "@/components/sections/hero/Hero";
import FeaturesSection from "@/components/sections/features/FeaturesSection";
import BadtzHeader from "@/components/common/badtz-header";
// import { Countdown } from "@/components/utils/countdown";

export default function Home() {
  return (
    <>
      {/* Fixed Banner */}
      <div className="fixed top-0 left-0 right-0 z-40">
        <Banner
              variant="rainbow"
              className="h-11 md:text-base sm:text-sm text-xs"
        >
          <p className="group-hover:underline underline-offset-4 flex flex-wrap gap-1 items-center">
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
                Ship faster with{" "}
                <span className="font-semibold">UI-Layouts Pro</span>
                <span className="md:inline-block hidden">
                  – 50+ Tailwind & React components for production-ready UIs
                </span>
              </p>
              <ArrowUpRight
                className="size-5 ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 ease-out shrink-0"
                strokeWidth={2}
              />
              {/* <Countdown/> */}
        </Banner>
      </div>

      {/* Fixed Header */}
      <div className="fixed top-11 left-0 right-0 z-60">
        <BadtzHeader/>
      </div>
      
      
      
      {/* Main content section with relative positioning and higher z-index */}
      <main className="relative z-10 min-h-screen flex flex-col pt-27">
          <Hero/>
          <FeaturesSection/>
          <OpensourceSection/>
          <CTANew/>

      </main>
      
      <StickyFooter/>
    </>
  );
}
