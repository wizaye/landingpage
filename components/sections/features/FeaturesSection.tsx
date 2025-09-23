import React from "react";
import { CursorCard,CursorCardsContainer } from "@/components/ui/cursor-cards";

const notifications = [
  { title: "Your call has been confirmed.", description: "1 hour ago" },
  { title: "You have a new message!", description: "1 hour ago" },
  { title: "Your subscription is expiring soon!", description: "2 hours ago" },
]

const FeaturesSection = () => {
  return (
    <section className="container mx-auto flex w-full max-w-5xl flex-col items-center justify-start !px-4 py-16 text-center md:items-start md:py-32 md:text-left">
      <div className="flex flex-col md:flex-row md:gap-8">
        <div className="flex w-full md:w-1/2 md:items-end">
          <h2 className="leading-tighter font-gilroy max-w-2xl bg-gradient-to-b from-white/80 via-white to-white/60 bg-clip-text text-5xl font-semibold tracking-tight text-pretty text-transparent lg:leading-[1.1] lg:font-semibold xl:text-6xl/[4rem] xl:tracking-tighter">
            Highlight your website in a second
          </h2>
        </div>
        <div className="flex w-full items-end justify-end md:w-1/2">
          <div className="flex flex-col items-center gap-6 text-center md:items-end md:text-right">
            <nav className="border-border bg-secondary relative flex w-fit items-center rounded-full border mt-6 md:mt-0">
              <button className="relative z-[1] px-4 py-2">
                <span className="relative block text-sm tracking-tight transition-colors duration-200 text-muted-foreground">Overview</span>
              </button>
              <button className="relative z-[1] px-4 py-2">
                <span className="relative block text-sm tracking-tight transition-colors duration-200 text-muted-foreground">Components</span>
              </button>
              <button className="relative z-[1] px-4 py-2">
                <span className="relative block text-sm tracking-tight transition-colors duration-200 text-muted-foreground">Benefits</span>
              </button>
            </nav>
            <p className="text-muted-foreground text-base tracking-tight text-balance" style={{ opacity: 1, transform: "none" }}>
              Seamlessly integrate our components into your existing projects. Works with any React setup, from fresh Next.js apps to legacy codebases.
            </p>
          </div>
        </div>
      </div>
      {/* Feature Cards Row 1 */}
      <div className="mt-10 flex w-full flex-col gap-4 md:mt-14">
        <div className="flex flex-col gap-4 md:h-[380px] md:flex-row">
          <div className="h-[380px] md:h-full md:w-[45%]">
            <div className="h-full w-full border border-border bg-secondary/50 rounded-2xl overflow-hidden relative large-accent-shadow">
              <div className="h-full p-7 text-left">
                <div className="bg-secondary/50 border-border absolute right-1.5 bottom-1.5 left-1.5 z-5 rounded-lg border p-4 backdrop-blur-sm">
                  <span className="inline">
                    <span className="font-medium">Lightning-Fast React Components. </span>
                    <span className="text-muted-foreground text-base">Production-optimized. Fits any stack - from fresh Next.js apps to legacy React.</span>
                  </span>
                </div>
                {/* CPU Image/Mockup */}
                <div className="h-[380px] w-full md:h-full">
                  <div className="relative flex h-full w-full items-center justify-center">
                    <div className="cpu-shadow mb-[135px] flex aspect-square w-[170px] items-center justify-center overflow-hidden rounded-[2rem] md:mb-[80px] md:w-[150px]">
                      <div className="absolute inset-0 z-0 h-full w-full rounded-[inherit]" style={{ border: "1px solid rgba(255, 255, 255, 0.1)" }}>
                        <div className="absolute inset-0 rounded-[inherit]" style={{ mask: "linear-gradient(rgb(255, 255, 255) 0px, rgb(255, 255, 255) 0px) content-box exclude, linear-gradient(rgb(255, 255, 255) 0px, rgb(255, 255, 255) 0px)", padding: "1px" }}>
                          <div className="absolute top-1/2 left-1/2 aspect-square w-full" style={{ background: "conic-gradient(transparent 270deg, rgb(120, 118, 197) 1turn, transparent 361deg)", animation: "2s linear 0s infinite normal none running border-beam-rotate", willChange: "transform" }}></div>
                        </div>
                      </div>
                      <div className="accent-shadow absolute aspect-square w-[145px] overflow-hidden rounded-[1.5rem] md:w-[130px]">
                        <div className="absolute inset-0 z-0 h-full w-full rounded-[inherit]" style={{ border: "1px solid rgba(255, 255, 255, 0.1)" }}>
                          <div className="absolute inset-0 rounded-[inherit]" style={{ mask: "linear-gradient(rgb(255, 255, 255) 0px, rgb(255, 255, 255) 0px) content-box exclude, linear-gradient(rgb(255, 255, 255) 0px, rgb(255, 255, 255) 0px)", padding: "1px" }}>
                            <div className="absolute top-1/2 left-1/2 aspect-square w-full" style={{ background: "conic-gradient(transparent 270deg, rgb(120, 118, 197) 1turn, transparent 361deg)", animation: "3s linear 0s infinite normal none running border-beam-rotate", willChange: "transform" }}></div>
                          </div>
                        </div>
                        <img alt="CPU" loading="lazy" decoding="async" className="object-contain opacity-90" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" src="https://cdn.badtz-ui.com//images/home-bento/badtz-cpu.webp" style={{ position: "absolute", height: "100%", width: "100%", inset: 0, color: "transparent" }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[380px] md:h-full md:max-w-[55%]">
            <div className="h-full w-full border border-border bg-secondary/50 rounded-2xl overflow-hidden relative large-accent-shadow">
              <div className="h-full p-7 text-left">
                <div className="bg-secondary/50 border-border absolute right-1.5 bottom-1.5 left-1.5 z-5 rounded-lg border p-4 backdrop-blur-sm">
                  <span className="inline">
                    <span className="font-medium">Copy. Paste. Ship. </span>
                    <span className="text-muted-foreground text-base">Build React apps faster: integrate components via CLI or code snippets. No setup headaches - just plug-and-play components.</span>
                  </span>
                </div>
                {/* Keyboard Mockup */}
                <div className="mb-6 flex h-auto w-full items-center justify-start pt-10 pl-10">
                  <div className="scale-75 origin-top-left">
                    {/* Keyboard keys mockup can be implemented here as needed */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Feature Cards Row 2 */}
        <div className="flex flex-col gap-4 md:h-[380px] md:flex-row">
          <div className="md:w-[55%]">
            <div className="h-full w-full border border-border bg-secondary/50 rounded-2xl overflow-hidden relative large-accent-shadow">
              <div className="h-full p-7 text-left">
                <div className="bg-secondary/50 border-border absolute right-1.5 bottom-1.5 left-1.5 z-5 rounded-lg border p-4 backdrop-blur-sm">
                  <span className="inline">
                    <span className="font-medium">Your Design, Your Rules. </span>
                    <span className="text-muted-foreground text-base">Tailwind-first components with customizable animations. Style every state and breakpoint to match your brand identity.</span>
                  </span>
                </div>
                {/* Animated Card/Chart Mockup */}
                <div className="flex h-[380px] w-full items-center justify-start md:h-full">
                  <div className="z-1 h-full w-full">
                    {/* Insert animated card/chart SVG or component here */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[390px] md:h-full md:w-[45%]">
            <div className="h-full w-full border border-border bg-secondary/50 rounded-2xl overflow-hidden relative large-accent-shadow">
              <div className="h-full p-7 text-left">
                <div className="bg-secondary/50 border-border absolute right-1.5 bottom-1.5 left-1.5 z-5 rounded-lg border p-4 backdrop-blur-sm">
                  <span className="inline">
                    <span className="font-medium">Scale with BadtzUI Pro. </span>
                    <span className="text-muted-foreground text-base">Ready-to-use blocks and templates for your apps, SaaS, AI tools...</span>
                  </span>
                </div>
                {/* Logo grid mockup */}
                <div className="mb-6 flex h-auto w-full items-center justify-start">
                  {/* Insert logo grid or SVGs here */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    <div className="flex flex-col gap-6">
      {/* Row 1: 1/4 + 3/4 */}
      <CursorCardsContainer className="flex flex-col md:flex-row gap-6">
        <CursorCard
          borderColor={"dark" === "dark" ? "#262626" : "#e5e5e5"}
          className="h-auto md:w-1/4 w-full rounded-xl p-6 shadow-md"
        >
          <div className="flex flex-col">
            <h3 className="text-foreground">Notifications</h3>
            <p className="text-muted-foreground mt-0.5 text-sm">
              You have 3 unread messages.
            </p>
            <div className="mt-10 flex items-center space-x-4 rounded-md border bg-neutral-50 p-4 dark:bg-neutral-950">
              {/* <BellRing /> */}
              <div className="flex-1 space-y-1">
                <p className="text-sm leading-none font-medium">
                  Push Notifications
                </p>
                <p className="text-muted-foreground text-sm">
                  Send notifications to device.
                </p>
              </div>
              {/* <Switch /> */}
            </div>
          </div>
        </CursorCard>

        <CursorCard
          borderColor={"dark" === "dark" ? "#262626" : "#e5e5e5"}
          className="h-auto md:w-3/4 w-full rounded-xl p-6 shadow-md"
        >
          <div className="flex h-full flex-col justify-between">
            {notifications.map((notification, index) => (
              <div
                key={index}
                className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
              >
                <span className="flex h-2 w-2 translate-y-1 rounded-full bg-emerald-500" />
                <div className="space-y-1">
                  <p className="text-sm leading-none font-medium">
                    {notification.title}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {notification.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CursorCard>
      </CursorCardsContainer>

      {/* Row 2: 3/4 + 1/4 (reversed) */}
      <CursorCardsContainer className="flex flex-col md:flex-row gap-6">
        <CursorCard
          borderColor={"dark" === "dark" ? "#262626" : "#e5e5e5"}
          className="h-auto md:w-3/4 w-full rounded-xl p-6 shadow-md"
        >
          <h3 className="text-foreground">Large Content Card</h3>
          <p className="text-muted-foreground mt-2 text-sm">
            This is an example of the larger card in the second row.
          </p>
        </CursorCard>

        <CursorCard
          borderColor={"dark" === "dark" ? "#262626" : "#e5e5e5"}
          className="h-auto md:w-1/4 w-full rounded-xl p-6 shadow-md"
        >
          <h3 className="text-foreground">Quick Info</h3>
          <p className="text-muted-foreground mt-2 text-sm">
            Smaller card content here.
          </p>
        </CursorCard>
      </CursorCardsContainer>
    </div>
    </section>
  );
};

export default FeaturesSection;
