// import React from "react";
// import { CursorCard, CursorCardsContainer } from "@/components/ui/cursor-cards";

// const notifications = [
//   { title: "Your call has been confirmed.", description: "1 hour ago" },
//   { title: "You have a new message!", description: "1 hour ago" },
//   { title: "Your subscription is expiring soon!", description: "2 hours ago" },
// ];

// const FeaturesSection = () => (
//   <section className="container mx-auto flex w-full max-w-5xl flex-col items-center justify-start !px-4 py-16 text-center md:items-start md:py-32 md:text-left bg-neutral-950">
//     <div className="flex flex-col md:flex-row md:gap-8">
//       <div className="flex w-full md:w-1/2 md:items-end">
//         <h2 className="leading-tighter font-gilroy max-w-2xl bg-gradient-to-b from-white/80 via-white to-white/60 bg-clip-text text-5xl font-semibold tracking-tight text-pretty text-transparent lg:leading-[1.1] xl:text-6xl/[4rem] xl:tracking-tighter">
//           Highlight your website in a second
//         </h2>
//       </div>
//       <div className="flex w-full items-end justify-end md:w-1/2">
//         <div className="flex flex-col items-center gap-6 text-center md:items-end md:text-right">
//           <nav className="border-neutral-800 bg-neutral-950 relative flex w-fit items-center rounded-full border mt-6 md:mt-0">
//             <button className="relative z-[1] px-4 py-2">
//               <span className="relative block text-sm tracking-tight text-muted-foreground">Overview</span>
//             </button>
//             <button className="relative z-[1] px-4 py-2">
//               <span className="relative block text-sm tracking-tight text-muted-foreground">Components</span>
//             </button>
//             <button className="relative z-[1] px-4 py-2">
//               <span className="relative block text-sm tracking-tight text-muted-foreground">Benefits</span>
//             </button>
//           </nav>
//           <p className="text-muted-foreground text-base tracking-tight">
//             Seamlessly integrate our components into your existing projects. Works with any React setup, from fresh Next.js apps to legacy codebases.
//           </p>
//         </div>
//       </div>
//     </div>

//     {/* Feature Cards Row 1 */}
//     <div className="mt-10 flex w-full flex-col gap-4 md:mt-14">
//       <CursorCardsContainer className="flex flex-col md:flex-row gap-6 md:h-[380px]">
//         <CursorCard borderColor="#262626" className="h-full md:w-[45%] w-full rounded-xl p-7 shadow-md bg-neutral-950 border-neutral-800">
//           <div className="flex flex-col h-full text-left">
//             <div className="flex flex-1 items-center justify-center" />
//             <div className="mt-auto flex items-center space-x-4 rounded-md border bg-neutral-900 p-4 border-neutral-800">
//               <div className="flex-1 space-y-1">
//                 <p className="text-sm leading-none font-medium">Lightning-Fast React Components</p>
//                 <p className="text-muted-foreground text-sm">Production-optimized. Fits any stack - from fresh Next.js apps to legacy React.</p>
//               </div>
//             </div>
//           </div>
//         </CursorCard>
//         <CursorCard borderColor="#262626" className="h-full md:w-[55%] w-full rounded-xl p-7 shadow-md bg-neutral-950 border-neutral-800">
//           <div className="flex flex-col h-full text-left">
//             <div className="flex flex-1 items-center justify-center" />
//             <div className="mt-auto flex items-center space-x-4 rounded-md border bg-neutral-900 p-4 border-neutral-800">
//               <div className="flex-1 space-y-1">
//                 <p className="text-sm leading-none font-medium">Copy. Paste. Ship.</p>
//                 <p className="text-muted-foreground text-sm">Build React apps faster: integrate via CLI or code snippets. Plug-and-play components, no setup headaches.</p>
//               </div>
//             </div>
//           </div>
//         </CursorCard>
//       </CursorCardsContainer>

//       {/* Feature Cards Row 2 */}
//       <CursorCardsContainer className="flex flex-col md:flex-row gap-6 md:h-[380px]">
//         <CursorCard borderColor="#262626" className="h-full md:w-[55%] w-full rounded-xl p-7 shadow-md bg-neutral-950 border-neutral-800">
//           <div className="flex flex-col h-full text-left">
//             <div className="flex flex-1 items-center justify-center" />
//             <div className="mt-auto flex items-center space-x-4 rounded-md border bg-neutral-900 p-4 border-neutral-800">
//               <div className="flex-1 space-y-1">
//                 <p className="text-sm leading-none font-medium">Your Design, Your Rules</p>
//                 <p className="text-muted-foreground text-sm">Tailwind-first components with customizable animations. Style every state to match your brand.</p>
//               </div>
//             </div>
//           </div>
//         </CursorCard>
//         <CursorCard borderColor="#262626" className="h-full md:w-[45%] w-full rounded-xl p-7 shadow-md bg-neutral-950 border-neutral-800">
//           <div className="flex flex-col h-full text-left">
//             <div className="flex flex-1 items-center justify-center" />
//             <div className="mt-auto flex items-center space-x-4 rounded-md border bg-neutral-900 p-4 border-neutral-800">
//               <div className="flex-1 space-y-1">
//                 <p className="text-sm leading-none font-medium">Scale with BadtzUI Pro</p>
//                 <p className="text-muted-foreground text-sm">Ready-to-use blocks and templates for your apps, SaaS, AI tools...</p>
//               </div>
//             </div>
//           </div>
//         </CursorCard>
//       </CursorCardsContainer>

      
//     </div>
//   </section>
// );

// export default FeaturesSection;

/*
  Take Review from jayanth
*/ 
"use client";

import React from "react";
// Use the combined card that includes direction-aware border + spotlight
import {
  CursorCardsContainer,
  CursorSpotlightCard,
} from "@/components/ui/cursor-spotlight-card";

const notifications = [
  { title: "Your call has been confirmed.", description: "1 hour ago" },
  { title: "You have a new message!", description: "1 hour ago" },
  { title: "Your subscription is expiring soon!", description: "2 hours ago" },
];

const FeaturesSection = () => (
  <section className="container mx-auto flex w-full max-w-5xl flex-col items-center justify-start !px-4 py-16 text-center md:items-start md:py-32 md:text-left bg-neutral-950">
    <div className="flex flex-col md:flex-row md:gap-8">
      <div className="flex w-full md:w-1/2 md:items-end">
        <h2 className="leading-tighter font-gilroy max-w-2xl bg-gradient-to-b from-white/80 via-white to-white/60 bg-clip-text text-5xl font-semibold tracking-tight text-pretty text-transparent lg:leading-[1.1] xl:text-6xl/[4rem] xl:tracking-tighter">
          Highlight your website in a second
        </h2>
      </div>
      <div className="flex w-full items-end justify-end md:w-1/2">
        <div className="flex flex-col items-center gap-6 text-center md:items-end md:text-right">
          <nav className="border-neutral-800 bg-neutral-950 relative flex w-fit items-center rounded-full border mt-6 md:mt-0">
            <button className="relative z-[1] px-4 py-2">
              <span className="relative block text-sm tracking-tight text-muted-foreground">Overview</span>
            </button>
            <button className="relative z-[1] px-4 py-2">
              <span className="relative block text-sm tracking-tight text-muted-foreground">Components</span>
            </button>
            <button className="relative z-[1] px-4 py-2">
              <span className="relative block text-sm tracking-tight text-muted-foreground">Benefits</span>
            </button>
          </nav>
          <p className="text-muted-foreground text-base tracking-tight">
            Seamlessly integrate our components into your existing projects. Works with any React setup, from fresh Next.js apps to legacy codebases.
          </p>
        </div>
      </div>
    </div>

    {/* Feature Cards Row 1 */}
    <div className="mt-10 flex w-full flex-col gap-4 md:mt-14">
      <CursorCardsContainer className="flex flex-col md:flex-row gap-6 md:h-[380px]">
        <CursorSpotlightCard
          borderColor="#262626"
          className="h-full md:w-[45%] w-full rounded-xl p-7 shadow-md bg-neutral-950 border-neutral-800"
          // optional spotlight tuning:
          spotlightRadius={340}
          spotlightColor="#0a0a0a"
        >
          <div className="flex flex-col h-full text-left">
            <div className="flex flex-1 items-center justify-center" />
            <div className="mt-auto flex items-center space-x-4 rounded-md border bg-neutral-900 p-4 border-neutral-800">
              <div className="flex-1 space-y-1">
                <p className="text-sm leading-none font-medium">Lightning-Fast React Components</p>
                <p className="text-muted-foreground text-sm">
                  Production-optimized. Fits any stack - from fresh Next.js apps to legacy React.
                </p>
              </div>
            </div>
          </div>
        </CursorSpotlightCard>

        <CursorSpotlightCard
          borderColor="#262626"
          className="h-full md:w-[55%] w-full rounded-xl p-7 shadow-md bg-neutral-950 border-neutral-800"
          spotlightRadius={360}
          spotlightColor="#0a0a0a"
        >
          <div className="flex flex-col h-full text-left">
            <div className="flex flex-1 items-center justify-center" />
            <div className="mt-auto flex items-center space-x-4 rounded-md border bg-neutral-900 p-4 border-neutral-800">
              <div className="flex-1 space-y-1">
                <p className="text-sm leading-none font-medium">Copy. Paste. Ship.</p>
                <p className="text-muted-foreground text-sm">
                  Build React apps faster: integrate via CLI or code snippets. Plug-and-play components, no setup headaches.
                </p>
              </div>
            </div>
          </div>
        </CursorSpotlightCard>
      </CursorCardsContainer>

      {/* Feature Cards Row 2 */}
      <CursorCardsContainer className="flex flex-col md:flex-row gap-6 md:h-[380px]">
        <CursorSpotlightCard
          borderColor="#262626"
          className="h-full md:w-[55%] w-full rounded-xl p-7 shadow-md bg-neutral-950 border-neutral-800"
          spotlightRadius={340}
          spotlightColor="#0a0a0a"
        >
          <div className="flex flex-col h-full text-left">
            <div className="flex flex-1 items-center justify-center" />
            <div className="mt-auto flex items-center space-x-4 rounded-md border bg-neutral-900 p-4 border-neutral-800">
              <div className="flex-1 space-y-1">
                <p className="text-sm leading-none font-medium">Your Design, Your Rules</p>
                <p className="text-muted-foreground text-sm">
                  Tailwind-first components with customizable animations. Style every state to match your brand.
                </p>
              </div>
            </div>
          </div>
        </CursorSpotlightCard>

        <CursorSpotlightCard
          borderColor="#262626"
          className="h-full md:w-[45%] w-full rounded-xl p-7 shadow-md bg-neutral-950 border-neutral-800"
          spotlightRadius={320}
          spotlightColor="#0a0a0a"
        >
          <div className="flex flex-col h-full text-left">
            <div className="flex flex-1 items-center justify-center" />
            <div className="mt-auto flex items-center space-x-4 rounded-md border bg-neutral-900 p-4 border-neutral-800">
              <div className="flex-1 space-y-1">
                <p className="text-sm leading-none font-medium">Scale with BadtzUI Pro</p>
                <p className="text-muted-foreground text-sm">
                  Ready-to-use blocks and templates for your apps, SaaS, AI tools...
                </p>
              </div>
            </div>
          </div>
        </CursorSpotlightCard>
      </CursorCardsContainer>
    </div>
  </section>
);

export default FeaturesSection;


