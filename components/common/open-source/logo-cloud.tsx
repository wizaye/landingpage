"use client";

import { PlusIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type Logo = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

type LogoCloudProps = React.ComponentProps<"div"> & {
  logo?: Logo;
};

export function LogoCloud({
  className,
  logo = {
    src: "https://vercel.com/oss/program-badge.svg",
    alt: "Vercel OSS Logo",
  },
  ...props
}: LogoCloudProps) {
  return (
    <div
      className={cn(
        "relative flex items-center justify-center bg-secondary/40 dark:bg-secondary/20 p-6 sm:p-8 md:p-10",
        className
      )}
      {...props}
    >
      {/* Plus icons placed like the original Logo Cloud intersections */}
      <PlusIcon
        className="absolute -top-[12.5px] -left-[12.5px] z-10 size-6 text-muted-foreground/80"
        strokeWidth={1}
      />
      <PlusIcon
        className="absolute -top-[12.5px] -right-[12.5px] z-10 size-6 text-muted-foreground/80"
        strokeWidth={1}
      />
      <PlusIcon
        className="absolute -bottom-[12.5px] -left-[12.5px] z-10 size-6 text-muted-foreground/80"
        strokeWidth={1}
      />
      <PlusIcon
        className="absolute -bottom-[12.5px] -right-[12.5px] z-10 size-6 text-muted-foreground/80"
        strokeWidth={1}
      />
      <a
        href="https://vercel.com/oss"
        target="_blank"
        rel="noopener noreferrer"
      >

      {/* Center logo */}
      <img
        alt={logo.alt}
        className="pointer-events-none w-auto max-w-full select-none dark:brightness-0 dark:invert h-6 sm:h-7 md:h-8 lg:h-9"
        src={logo.src}
      />
      </a>
    </div>
  );
}

// "use client";
// import { PlusIcon } from "lucide-react";
// import { cn } from "@/lib/utils";

// type Logo = {
//   src: string;
//   alt: string;
//   width?: number;
//   height?: number;
// };

// type LogoCloudProps = React.ComponentProps<"div"> & {
//   logo?: Logo;
// };

// export function LogoCloud({
//   className,
//   logo = {
//     src: "https://vercel.com/oss/program-badge.svg",
//     alt: "Vercel OSS Program",
//   },
//   ...props
// }: LogoCloudProps) {
//   return (
//     <div
//       className={cn(
//         "relative flex items-center justify-center border-x border-y rounded-xl bg-secondary/40 dark:bg-secondary/20 p-10 shadow-md backdrop-blur-md",
//         className
//       )}
//       {...props}
//     >
//       {/* Four plus icons in corners */}
//       <PlusIcon
//         className="absolute top-2 left-2 size-5 text-muted-foreground/70"
//         strokeWidth={1}
//       />
//       <PlusIcon
//         className="absolute top-2 right-2 size-5 text-muted-foreground/70"
//         strokeWidth={1}
//       />
//       <PlusIcon
//         className="absolute bottom-2 left-2 size-5 text-muted-foreground/70"
//         strokeWidth={1}
//       />
//       <PlusIcon
//         className="absolute bottom-2 right-2 size-5 text-muted-foreground/70"
//         strokeWidth={1}
//       />

//       {/* Logo Center */}
//       <a
//         href="https://vercel.com/oss"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         <img
//           alt={logo.alt}
//           className="pointer-events-none h-8 w-auto select-none dark:brightness-0 dark:invert"
//           src={logo.src}
//         />
//       </a>
//     </div>
//   );
// }
