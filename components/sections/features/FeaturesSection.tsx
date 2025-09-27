'use client';

import React from 'react';
import { CursorCard, CursorCardsContainer } from '@/components/ui/cursor-cards';
import { motion } from 'motion/react';
import { ArrowRight, Activity } from 'lucide-react';
import HelixqueConnection from '@/components/ui/helixque-connection';
import { DottedMap } from '@/components/ui/dotted-map';

// ----- Dotted Map Component -----
const MapComponent = () => {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-lg flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-radial from-transparent to-background to-70%" />
      <div className="w-full h-full min-h-[200px]">
        <DottedMap
          markers={[
            {
              lat: 40.7128,
              lng: -74.006,
              size: 0.5,
            }, // New York
            {
              lat: 34.0522,
              lng: -118.2437,
              size: 0.5,
            }, // Los Angeles
            {
              lat: 51.5074,
              lng: -0.1278,
              size: 0.5,
            }, // London
            {
              lat: -33.8688,
              lng: 151.2093,
              size: 0.5,
            }, // Sydney
          ]}
        />
      </div>
    </div>
  );
};

const FeaturesSection = () => (
  <section className="container mx-auto flex w-full max-w-5xl flex-col items-center justify-start !px-4 py-16 text-center md:py-32">
    <div className="flex flex-col items-center text-center">
      <h2 className="leading-tighter font-gilroy max-w-2xl bg-gradient-to-b from-white/80 via-white to-white/60 bg-clip-text text-5xl font-semibold tracking-tight text-pretty text-transparent lg:leading-[1.1] xl:text-6xl/[4rem] xl:tracking-tighter">
        Highlight your website in a second
      </h2>
      <p className="text-muted-foreground text-base tracking-tight mt-4 max-w-2xl">
        Seamlessly integrate our components into your existing projects. Works with any React setup, from fresh Next.js apps to legacy codebases.
      </p>
    </div>

    {/* Feature Cards Row 1 */}
    <div className="mt-10 flex w-full flex-col gap-4 md:mt-14">
      <CursorCardsContainer className="flex flex-col md:flex-row gap-6 md:h-[380px]">
        {/* Card 1: Copy. Paste. Ship. */}
        <CursorCard borderColor="#262626" className="h-full md:w-[45%] w-full rounded-xl p-7 shadow-md bg-neutral-950 border-neutral-800 overflow-hidden">
          <div className="h-full flex flex-col">
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-white mb-2">Copy. Paste. Ship.</h3>
              <p className="text-muted-foreground text-sm">
                Build React apps faster: integrate via CLI or code snippets. Plug-and-play components, no setup headaches.
              </p>
            </div>
            <div className="flex-1 flex items-center justify-center bg-neutral-950 rounded-lg border border-neutral-800 relative">
              <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-neutral-950 to-transparent z-10 pointer-events-none" />
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-neutral-800 rounded-lg flex items-center justify-center">
                  <Activity className="h-8 w-8 text-blue-500" />
                </div>
                <div className="text-white text-sm font-medium">Ready to Use</div>
                <div className="text-muted-foreground text-xs mt-1">No setup required</div>
              </div>
            </div>
          </div>
        </CursorCard>

        {/* Card 2: Map visual with more width */}
        <CursorCard borderColor="#262626" className="h-full md:w-[55%] w-full rounded-xl p-7 shadow-md bg-neutral-950 border-neutral-800 overflow-hidden">
          <div className="h-full flex flex-col">
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-white mb-2">Lightning-Fast React Components</h3>
              <p className="text-muted-foreground text-sm">
                Production-optimized. Fits any stack — from fresh Next.js apps to legacy React.
              </p>
            </div>
            <div className="flex-1 relative overflow-hidden rounded-lg">
              <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-neutral-950 to-transparent z-10 pointer-events-none" />
              <MapComponent />
            </div>
          </div>
        </CursorCard>
      </CursorCardsContainer>

      {/* Feature Cards Row 2 */}
      <CursorCardsContainer className="flex flex-col md:flex-row gap-6 md:h-[380px]">
        {/* Card 3: Helixque Anonymous Connection */}
        <CursorCard borderColor="#262626" className="h-full md:w-[55%] w-full rounded-xl p-7 shadow-md bg-neutral-950 border-neutral-800 overflow-hidden">
          <div className="h-full flex flex-col">
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-white mb-2">Helixque Anonymous Connections</h3>
              <p className="text-muted-foreground text-sm">
                Connect anonymous users instantly with chat, video calls, audio calls, and skip functionality - just like Omegle but better.
              </p>
            </div>
            <div className="flex-1 relative overflow-hidden rounded-lg min-h-[200px] bg-black">
              <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-neutral-950 to-transparent z-10 pointer-events-none" />
              <HelixqueConnection />
            </div>
          </div>
        </CursorCard>

        {/* Card 4: Interactive Chat Component */}
        <CursorCard borderColor="#262626" className="h-full md:w-[45%] w-full rounded-xl p-7 shadow-md bg-neutral-950 border-neutral-800 overflow-hidden">
          <div className="h-full flex flex-col">
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-white mb-2">Real Time Chat</h3>
              <p className="text-muted-foreground text-sm">Interactive chat preview with smooth animations.</p>
            </div>
            <div className="flex-1 flex flex-col bg-black rounded-lg border border-neutral-800 overflow-hidden relative">
              <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-neutral-950 to-transparent z-10 pointer-events-none" />
              <div className="flex-1 p-4 space-y-4 overflow-y-auto min-h-0">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.4 }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-white text-xs font-medium">Anonymous</span>
                    <span className="text-muted-foreground text-xs">2:30 PM</span>
                  </div>
                  <div className="rounded-lg bg-neutral-800 w-4/5 border border-neutral-700 p-3 text-xs text-white">
                    Hey, I'm having trouble with my account.
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                >
                  <div className="rounded-lg mb-1 ml-auto w-4/5 bg-blue-600 p-3 text-xs text-white">
                    I'd be happy to help you with your account. What specific issue are you experiencing?
                  </div>
                  <div className="flex items-center justify-end gap-2">
                    <span className="text-white text-xs font-medium">Me</span>
                    <span className="text-muted-foreground text-xs">2:31 PM</span>
                  </div>
                </motion.div>
              </div>

              <motion.div
                className="flex items-center gap-2 border-t border-neutral-700 p-3 shrink-0"
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.3 }}
              >
                <motion.input
                  type="text"
                  placeholder="Type your message..."
                  className="flex-1 rounded-lg border border-neutral-600 bg-neutral-800 text-white placeholder-neutral-400 px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <motion.button
                  className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  initial={{ scale: 0, rotate: 180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.6, duration: 0.3, type: 'spring' }}
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ArrowRight className="h-4 w-4" />
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
