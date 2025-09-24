"use client";

import React from "react";
import { CursorCard, CursorCardsContainer } from "@/components/ui/cursor-cards";
import { motion } from "motion/react";
import { ArrowRight, PencilLine } from "lucide-react";

const messageVariants = {
  hidden: { x: -20, opacity: 0 },
  visible: { x: 0, opacity: 1 },
};

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
        <CursorCard borderColor="#262626" className="h-full md:w-[45%] w-full rounded-xl p-7 shadow-md bg-neutral-950 border-neutral-800 overflow-hidden">
          <div className="flex flex-col h-full text-left">
            <div className="flex flex-1 items-center justify-center min-h-0" />
            <div className="mt-auto flex items-center space-x-4 rounded-md border bg-neutral-900 p-4 border-neutral-800">
              <div className="flex-1 space-y-1">
                <p className="text-sm leading-none font-medium">Lightning-Fast React Components</p>
                <p className="text-muted-foreground text-sm">Production-optimized. Fits any stack - from fresh Next.js apps to legacy React.</p>
              </div>
            </div>
          </div>
        </CursorCard>

        <CursorCard borderColor="#262626" className="h-full md:w-[55%] w-full rounded-xl p-7 shadow-md bg-neutral-950 border-neutral-800 overflow-hidden">
          <div className="flex flex-col h-full text-left">
            <div className="flex flex-1 items-center justify-center min-h-0" />
            <div className="mt-auto flex items-center space-x-4 rounded-md border bg-neutral-900 p-4 border-neutral-800">
              <div className="flex-1 space-y-1">
                <p className="text-sm leading-none font-medium">Copy. Paste. Ship.</p>
                <p className="text-muted-foreground text-sm">Build React apps faster: integrate via CLI or code snippets. Plug-and-play components, no setup headaches.</p>
              </div>
            </div>
          </div>
        </CursorCard>
      </CursorCardsContainer>

      {/* Feature Cards Row 2 */}
      <CursorCardsContainer className="flex flex-col md:flex-row gap-6 md:h-[380px]">
        <CursorCard borderColor="#262626" className="h-full md:w-[55%] w-full rounded-xl p-7 shadow-md bg-neutral-950 border-neutral-800 overflow-hidden">
          <div className="flex flex-col h-full text-left">
            <div className="flex flex-1 items-center justify-center min-h-0" />
            <div className="mt-auto flex items-center space-x-4 rounded-md border bg-neutral-900 p-4 border-neutral-800">
              <div className="flex-1 space-y-1">
                <p className="text-sm leading-none font-medium">Your Design, Your Rules</p>
                <p className="text-muted-foreground text-sm">Tailwind-first components with customizable animations. Style every state to match your brand.</p>
              </div>
            </div>
          </div>
        </CursorCard>

        {/* Second row, second card — description above chat, chat fills card with equal spacing */}
        <CursorCard borderColor="#262626" className="h-full md:w-[45%] w-full rounded-xl p-7 shadow-md bg-neutral-950 border-neutral-800 overflow-hidden flex flex-col">
          {/* Description sits above chat, spaced with mb-4 */}
          <div className="flex items-center space-x-4 rounded-md border bg-neutral-900 p-4 border-neutral-800 mb-4">
            <div className="flex-1 space-y-1">
              <p className="text-sm leading-none font-medium">Real Time Chat</p>
              <p className="text-muted-foreground text-sm">Interactive chat preview powered by Motion and Lucide icons.</p>
            </div>
          </div>
          {/* Chat fills the rest of the card */}
          <div className="flex-1 flex items-center justify-center min-h-0">
            <div className="flex w-full h-full flex-col overflow-hidden rounded-xl bg-white dark:bg-neutral-800 shadow-lg min-h-0">
              {/* Messages Area scrolls */}
              <div className="flex-1 min-h-0 space-y-4 p-4 overflow-y-auto">
                {/* Agent message */}
                <motion.div
                  className="mr-auto relative max-w-[80%] rounded-lg bg-gray-100 dark:bg-neutral-700 p-3 text-gray-800 dark:text-gray-200"
                  variants={messageVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.2, duration: 0.4, ease: 'easeOut' }}
                >
                  Hey! I see that your last transaction was a dining purchase, which qualifies for 5x points, but only for Platinum Status Tier members. You are currently in the{' '}
                  <span className="font-semibold text-blue-500 border-b border-dashed border-blue-500">Gold Status Tier</span>
                  , which means you currently earn 3x points on dining transactions.
                  <motion.button
                    className="absolute -bottom-2 right-0 flex items-center gap-1 rounded-full bg-blue-500 px-2 py-1 text-xs text-white shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    initial={{ scale: 0, rotate: 180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.6, duration: 0.3, type: 'spring' }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <PencilLine className="h-3 w-3" />
                    Adjust tone
                  </motion.button>
                </motion.div>

                {/* User message */}
                <motion.div
                  className="ml-auto relative max-w-[80%] rounded-lg bg-blue-500 p-3 text-white"
                  variants={messageVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.35, duration: 0.4, ease: 'easeOut' }}
                >
                  That&apos;s great to know! How can I upgrade to the Platinum Status Tier to get those 5x points on dining?
                </motion.div>
              </div>

              {/* Input row fixed; content above scrolls */}
              <motion.div
                className="flex items-center gap-2 border-t border-gray-200 dark:border-neutral-600 p-4 shrink-0"
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.45, duration: 0.3 }}
              >
                <motion.input
                  type="text"
                  placeholder="Type your message..."
                  className="flex-1 rounded-lg border border-gray-300 dark:border-neutral-600 bg-gray-100 dark:bg-neutral-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <motion.button
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  initial={{ scale: 0, rotate: 180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.55, duration: 0.3, type: 'spring' }}
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ArrowRight className="h-5 w-5" />
                </motion.button>
              </motion.div>
            </div>
          </div>
        </CursorCard>
      </CursorCardsContainer>
    </div>
  </section>
);

export default FeaturesSection;



// /*
//   Take Review from jayanth
// */ 
// "use client";

// import React from "react";
// // Use the combined card that includes direction-aware border + spotlight
// import {
//   CursorCardsContainer,
//   CursorSpotlightCard,
// } from "@/components/ui/cursor-spotlight-card";

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
//         <CursorSpotlightCard
//           borderColor="#262626"
//           className="h-full md:w-[45%] w-full rounded-xl p-7 shadow-md bg-neutral-950 border-neutral-800"
//           // optional spotlight tuning:
//           spotlightRadius={340}
//           spotlightColor="#0a0a0a"
//         >
//           <div className="flex flex-col h-full text-left">
//             <div className="flex flex-1 items-center justify-center" />
//             <div className="mt-auto flex items-center space-x-4 rounded-md border bg-neutral-900 p-4 border-neutral-800">
//               <div className="flex-1 space-y-1">
//                 <p className="text-sm leading-none font-medium">Lightning-Fast React Components</p>
//                 <p className="text-muted-foreground text-sm">
//                   Production-optimized. Fits any stack - from fresh Next.js apps to legacy React.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </CursorSpotlightCard>

//         <CursorSpotlightCard
//           borderColor="#262626"
//           className="h-full md:w-[55%] w-full rounded-xl p-7 shadow-md bg-neutral-950 border-neutral-800"
//           spotlightRadius={360}
//           spotlightColor="#0a0a0a"
//         >
//           <div className="flex flex-col h-full text-left">
//             <div className="flex flex-1 items-center justify-center" />
//             <div className="mt-auto flex items-center space-x-4 rounded-md border bg-neutral-900 p-4 border-neutral-800">
//               <div className="flex-1 space-y-1">
//                 <p className="text-sm leading-none font-medium">Copy. Paste. Ship.</p>
//                 <p className="text-muted-foreground text-sm">
//                   Build React apps faster: integrate via CLI or code snippets. Plug-and-play components, no setup headaches.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </CursorSpotlightCard>
//       </CursorCardsContainer>

//       {/* Feature Cards Row 2 */}
//       <CursorCardsContainer className="flex flex-col md:flex-row gap-6 md:h-[380px]">
//         <CursorSpotlightCard
//           borderColor="#262626"
//           className="h-full md:w-[55%] w-full rounded-xl p-7 shadow-md bg-neutral-950 border-neutral-800"
//           spotlightRadius={340}
//           spotlightColor="#0a0a0a"
//         >
//           <div className="flex flex-col h-full text-left">
//             <div className="flex flex-1 items-center justify-center" />
//             <div className="mt-auto flex items-center space-x-4 rounded-md border bg-neutral-900 p-4 border-neutral-800">
//               <div className="flex-1 space-y-1">
//                 <p className="text-sm leading-none font-medium">Your Design, Your Rules</p>
//                 <p className="text-muted-foreground text-sm">
//                   Tailwind-first components with customizable animations. Style every state to match your brand.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </CursorSpotlightCard>

//         <CursorSpotlightCard
//           borderColor="#262626"
//           className="h-full md:w-[45%] w-full rounded-xl p-7 shadow-md bg-neutral-950 border-neutral-800"
//           spotlightRadius={320}
//           spotlightColor="#0a0a0a"
//         >
//           <div className="flex flex-col h-full text-left">
//             <div className="flex flex-1 items-center justify-center" />
//             <div className="mt-auto flex items-center space-x-4 rounded-md border bg-neutral-900 p-4 border-neutral-800">
//               <div className="flex-1 space-y-1">
//                 <p className="text-sm leading-none font-medium">Scale with BadtzUI Pro</p>
//                 <p className="text-muted-foreground text-sm">
//                   Ready-to-use blocks and templates for your apps, SaaS, AI tools...
//                 </p>
//               </div>
//             </div>
//           </div>
//         </CursorSpotlightCard>
//       </CursorCardsContainer>
//     </div>
//   </section>
// );

// export default FeaturesSection;


