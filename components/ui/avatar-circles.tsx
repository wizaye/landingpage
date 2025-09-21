"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";

interface Avatar {
  imageUrl: string;
  profileUrl: string;
  name?: string; // Added for tooltip
}
interface AvatarCirclesProps {
  className?: string;
  numPeople?: number;
  avatarUrls: Avatar[];
}

export const AvatarCircles = ({
  numPeople,
  className,
  avatarUrls,
}: AvatarCirclesProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className={cn("z-10 flex -space-x-4 rtl:space-x-reverse", className)}>
      {avatarUrls.map((avatar, index) => (
        <div
          key={index}
          className="relative"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {/* Simple compact tooltip */}
          {hoveredIndex === index && avatar.name && (
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 z-50 bg-black text-white px-2 py-1 rounded text-xs whitespace-nowrap">
              {avatar.name}
            </div>
          )}
          <a
            href={avatar.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className={`h-10 w-10 rounded-full border-2 transition-colors duration-200 ${
                hoveredIndex === index 
                  ? "border-blue-500" 
                  : "border-white dark:border-gray-800"
              }`}
              src={avatar.imageUrl}
              width={40}
              height={40}
              alt={avatar.name || `Avatar ${index + 1}`}
            />
          </a>
        </div>
      ))}
      {(numPeople ?? 0) > 0 && (
        <a
          className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-black text-center text-xs font-medium text-white hover:bg-gray-600 dark:border-gray-800 dark:bg-white dark:text-black"
          href=""
        >
          +{numPeople}
        </a>
      )}
    </div>
  );
};
