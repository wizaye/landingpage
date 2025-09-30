'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { useTheme } from 'next-themes';
import { Users, Heart, ArrowRight, CheckCircle } from 'lucide-react';

export const MatchMingleThrive = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % 4);
    }, 2000);

    return () => clearInterval(interval);
  }, [mounted]);

  if (!mounted) {
    return null;
  }

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-2 sm:p-4 rounded-lg">
      {/* Header with status */}
      <div className="flex items-center gap-2 mb-4 sm:mb-6">
        <div className="flex items-center gap-2 text-gray-900 dark:text-white">
          <div
            className={`w-2 h-2 rounded-full ${
              currentStep >= 3 ? "bg-green-500" : currentStep >= 2 ? "bg-orange-500" : currentStep >= 1 ? "bg-blue-500" : "bg-neutral-500"
            }`}
          />
          <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-neutral-300">
            {currentStep === 0 ? "Analyzing..." : currentStep === 1 ? "Matching..." : currentStep === 2 ? "Found Match!" : "Connected!"}
          </span>
        </div>
      </div>

      {/* Users and central system */}
      <div className="flex items-center justify-center w-full mb-4 sm:mb-6">
        {/* User 1 */}
        <div className="relative w-20 sm:w-28 h-28 sm:h-36 bg-gray-100 dark:bg-neutral-800 rounded-lg border border-gray-300 dark:border-neutral-700 overflow-hidden flex flex-col">
          {/* Avatar section */}
          <div className="h-14 sm:h-20 bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center relative">
            <div className="w-8 sm:w-10 h-8 sm:h-10 bg-white/20 rounded-full flex items-center justify-center">
              <span className="text-white text-sm sm:text-base font-semibold">A</span>
            </div>
            {/* Status indicator */}
            <div className="absolute top-1 sm:top-2 right-1 sm:right-2">
              <motion.div
                className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-green-500"
                animate={{
                  scale: currentStep >= 3 ? [1, 1.2, 1] : 1,
                }}
                transition={{
                  duration: 2,
                  repeat: currentStep >= 3 ? Infinity : 0,
                }}
              />
            </div>
          </div>

          {/* User info */}
          <div className="px-1 sm:px-2 py-1 sm:py-1.5 text-center bg-gray-100 dark:bg-neutral-800 flex-1 flex flex-col justify-center">
            <div className="text-xs sm:text-xs text-gray-700 dark:text-neutral-300 font-medium truncate">
              Alex Chen
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400 truncate">
              PM
            </div>
          </div>

          {/* Interest tags */}
          <div className="p-1 sm:p-2 flex justify-center gap-1 bg-gray-100 dark:bg-neutral-800 border-t border-gray-300 dark:border-neutral-700">
            <span className="px-1 py-0.5 text-xs bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded text-center">
              AI/ML
            </span>
          </div>
        </div>

        {/* Central System */}
        <div className="relative mx-3 sm:mx-6">
          <motion.div
            className={`w-16 sm:w-24 h-16 sm:h-24 rounded-xl border-2 flex items-center justify-center relative ${
              currentStep >= 1
                ? "border-purple-500 bg-purple-900/20 dark:bg-purple-900/20"
                : "border-gray-400 dark:border-neutral-600 bg-gray-200 dark:bg-neutral-800"
            }`}
            animate={{
              borderColor: currentStep >= 1 ? "#8b5cf6" : theme === "dark" ? "#525252" : "#9ca3af",
              backgroundColor: currentStep >= 1 ? "rgba(139, 92, 246, 0.1)" : theme === "dark" ? "#262626" : "#e5e7eb",
            }}
            transition={{ duration: 0.5 }}
          >
            {/* Central logo/icon */}
            <motion.div
              className={`w-6 sm:w-8 h-6 sm:h-8 rounded-lg flex items-center justify-center ${
                currentStep >= 1 ? "bg-purple-600" : "bg-gray-500 dark:bg-neutral-600"
              }`}
              animate={{
                scale: currentStep >= 1 ? [1, 1.1, 1] : 1,
                backgroundColor: currentStep >= 1 ? "#7c3aed" : theme === "dark" ? "#525252" : "#6b7280",
              }}
              transition={{
                scale: { duration: 2, repeat: currentStep >= 1 ? Infinity : 0 },
                backgroundColor: { duration: 0.5 },
              }}
            >
              <Heart className="w-3 sm:w-4 h-3 sm:h-4 text-white" />
            </motion.div>

            {/* Match indicator */}
            <motion.div
              className="absolute -top-2 -right-2"
              animate={{
                scale: currentStep >= 2 ? 1 : 0,
                opacity: currentStep >= 2 ? 1 : 0,
              }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-4 h-4 bg-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">!</span>
              </div>
            </motion.div>

            {/* System label */}
            <div className="absolute -bottom-5 sm:-bottom-6 left-1/2 transform -translate-x-1/2">
              <div className="text-xs text-gray-600 dark:text-neutral-400 font-medium whitespace-nowrap">
                Match
              </div>
            </div>
          </motion.div>

          {/* Connection lines to users */}
          <div className="absolute top-1/2 -left-3 sm:-left-6 w-3 sm:w-6 h-px">
            <motion.div
              className="w-full h-px bg-purple-500"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: currentStep >= 1 ? 1 : 0 }}
              transition={{ duration: 0.8 }}
            />
          </div>

          <div className="absolute top-1/2 -right-3 sm:-right-6 w-3 sm:w-6 h-px">
            <motion.div
              className="w-full h-px bg-purple-500"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: currentStep >= 1 ? 1 : 0 }}
              transition={{ duration: 0.8 }}
            />
          </div>
        </div>

        {/* User 2 */}
        <motion.div 
          className="relative w-20 sm:w-28 h-28 sm:h-36 bg-gray-100 dark:bg-neutral-800 rounded-lg border border-gray-300 dark:border-neutral-700 overflow-hidden flex flex-col"
          animate={{
            x: currentStep >= 1 ? 0 : 20,
            opacity: currentStep >= 1 ? 1 : 0.4,
          }}
          transition={{ duration: 0.5 }}
        >
          {/* Avatar section */}
          <div className="h-14 sm:h-20 bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center relative">
            <div className="w-8 sm:w-10 h-8 sm:h-10 bg-white/20 rounded-full flex items-center justify-center">
              <span className="text-white text-sm sm:text-base font-semibold">S</span>
            </div>
            {/* Status indicator */}
            <div className="absolute top-1 sm:top-2 right-1 sm:right-2">
              <motion.div
                className={`w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full ${
                  currentStep >= 3 ? "bg-green-500" : currentStep >= 2 ? "bg-yellow-500" : "bg-neutral-500"
                }`}
                animate={{
                  scale: currentStep >= 3 ? [1, 1.2, 1] : 1,
                }}
                transition={{
                  duration: 2,
                  repeat: currentStep >= 3 ? Infinity : 0,
                }}
              />
            </div>
          </div>

          {/* User info */}
          <div className="px-1 sm:px-2 py-1 sm:py-1.5 text-center bg-gray-100 dark:bg-neutral-800 flex-1 flex flex-col justify-center">
            <div className="text-xs sm:text-xs text-gray-700 dark:text-neutral-300 font-medium truncate">
              Sarah Kim
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400 truncate">
              VC
            </div>
          </div>

          {/* Interest tags */}
          <div className="p-1 sm:p-2 flex justify-center gap-1 bg-gray-100 dark:bg-neutral-800 border-t border-gray-300 dark:border-neutral-700">
            <span className="px-1 py-0.5 text-xs bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded text-center">
              AI/ML
            </span>
          </div>
        </motion.div>
      </div>

      {/* Bottom stats */}
      <div className="flex items-center justify-center gap-4 text-xs text-gray-500 dark:text-gray-400">
        <div className="flex items-center gap-1">
          <Users className="w-3 h-3" />
          <span>2,847 matches</span>
        </div>
        <div className="flex items-center gap-1">
          <span>Zero bias</span>
          <ArrowRight className="w-3 h-3" />
        </div>
      </div>
    </div>
  );
};
