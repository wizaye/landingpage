// "use client";

// import React, { useEffect, useState, useMemo } from "react";
// import { PlusIcon } from "lucide-react";
// import { cn } from "@/lib/utils";
// import { fetchAll, ContributorAPI as GhContributor } from "@/lib/github";

// export function ContributorsLogoCloud({ className, ...props }: React.ComponentProps<"div">) {
//   const [contributors, setContributors] = useState<GhContributor[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     let mounted = true;
//     (async () => {
//       try {
//         setLoading(true);
//         setError(null);
//         const token = process.env.NEXT_PUBLIC_GH_TOKEN;
//         const { contributors: c } = await fetchAll(token);
//         if (!mounted) return;
//         const top = [...c]
//           .sort((a, b) => b.contributions - a.contributions)
//           .slice(0, 20);
//         setContributors(top);
//       } catch (e: any) {
//         if (e?.name !== "AbortError") {
//           setError(e?.message || "Failed to load contributors");
//         }
//       } finally {
//         if (mounted) setLoading(false);
//       }
//     })();
//     return () => {
//       mounted = false;
//     };
//   }, []);

//   const cells = useMemo(() => {
//     if (loading) {
//       return Array.from({ length: 8 }).map((_, i) => (
//         <div
//           key={`sk-${i}`}
//           className="flex items-center justify-center bg-secondary/40 dark:bg-neutral-800/40 rounded-none animate-pulse"
//         />
//       ));
//     }
//     return contributors.map((c, idx) => (
//       <ContributorCard key={c.login + idx} contributor={c} />
//     ));
//   }, [contributors, loading]);

//   return (
//     <div className={cn("relative", className)} {...props}>
//       <div
//         className={cn(
//           "grid grid-cols-2 md:grid-cols-4 overflow-hidden border border-neutral-200 dark:border-neutral-800",
//           // ✅ remove divide utilities and use single-border separation
//           "[&>*:not(:nth-child(4n))]:border-r [&>*:nth-child(n+5)]:border-t",
//           "border-neutral-200 dark:border-neutral-800"
//         )}
//       >
//         {error ? (
//           <div className="col-span-full p-6 text-sm text-red-500">
//             Error loading contributors: {error}
//           </div>
//         ) : (
//           cells
//         )}
//       </div>

//       {/* Decorative PlusIcons — outer only */}
//       {["-top-[12.5px] -left-[12.5px]", "-top-[12.5px] -right-[12.5px]", "-bottom-[12.5px] -left-[12.5px]", "-bottom-[12.5px] -right-[12.5px]"].map(
//         (pos, i) => (
//           <PlusIcon
//             key={i}
//             className={cn(
//               "absolute z-10 size-6 text-neutral-400 dark:text-neutral-600",
//               pos
//             )}
//             strokeWidth={1}
//             aria-hidden
//           />
//         )
//       )}
//     </div>
//   );
// }

// interface ContributorCardProps {
//   contributor: GhContributor;
// }

// function ContributorCard({ contributor }: ContributorCardProps) {
//   return (
//     <a
//       href={contributor.html_url}
//       target="_blank"
//       rel="noopener noreferrer"
//       className={cn(
//         "relative flex items-center justify-center bg-background px-4 py-8 md:p-8 group",
//         "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
//       )}
//       title={`${contributor.login} • ${contributor.contributions} contributions`}
//     >
//       <img
//         src={contributor.avatar_url}
//         alt={contributor.login}
//         className="pointer-events-none h-14 w-14 rounded-full ring-1 ring-neutral-300 dark:ring-neutral-700 object-cover transition-transform duration-200 group-hover:scale-105"
//         loading="lazy"
//       />
//       <span className="absolute bottom-2 left-2 text-[10px] font-medium px-1.5 py-0.5 rounded bg-neutral-900/80 text-white dark:bg-white/80 dark:text-neutral-900 backdrop-blur-sm">
//         {contributor.login}
//       </span>
//       <span className="absolute bottom-2 right-2 text-[10px] font-medium px-1.5 py-0.5 rounded bg-purple-600/80 text-white backdrop-blur-sm">
//         {contributor.contributions}
//       </span>
//     </a>
//   );
// }

// export default ContributorsLogoCloud;

"use client";

import React, { useEffect, useState, useMemo } from "react";
import { PlusIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { fetchAll, ContributorAPI as GhContributor } from "@/lib/github";

export function ContributorsLogoCloud({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [contributors, setContributors] = useState<GhContributor[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        setLoading(true);
        setError(null);
        const token = process.env.NEXT_PUBLIC_GH_TOKEN;
        const { contributors: c } = await fetchAll(token);
        if (!mounted) return;
        const top = [...c]
          .sort((a, b) => b.contributions - a.contributions)
          .slice(0, 20);
        setContributors(top);
      } catch (e: any) {
        if (e?.name !== "AbortError") {
          setError(e?.message || "Failed to load contributors");
        }
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);

  const cells = useMemo(() => {
    if (loading) {
      return Array.from({ length: 8 }).map((_, i) => (
        <div
          key={`sk-${i}`}
          className="h-32 md:h-36 bg-neutral-200/50 dark:bg-neutral-800/50 animate-pulse"
        />
      ));
    }
    return contributors.map((c, idx) => (
      <ContributorCard key={c.login + idx} contributor={c} index={idx} />
    ));
  }, [contributors, loading]);

  return (
    <div className={cn("relative", className)} {...props}>
      <div
        className={cn(
          "grid grid-cols-2 md:grid-cols-4 overflow-hidden border border-neutral-200 dark:border-neutral-800",
          "[&>*:not(:nth-child(4n))]:border-r [&>*:nth-child(n+5)]:border-t",
          "border-neutral-200 dark:border-neutral-800"
        )}
      >
        {error ? (
          <div className="col-span-full p-6 text-sm text-red-500">
            Error loading contributors: {error}
          </div>
        ) : (
          cells
        )}
      </div>

      {/* Decorative PlusIcons */}
      {[
        "-top-[12.5px] -left-[12.5px]",
        "-top-[12.5px] -right-[12.5px]",
        "-bottom-[12.5px] -left-[12.5px]",
        "-bottom-[12.5px] -right-[12.5px]",
      ].map((pos, i) => (
        <PlusIcon
          key={i}
          className={cn(
            "absolute z-10 size-6 text-neutral-400 dark:text-neutral-600",
            pos
          )}
          strokeWidth={1}
          aria-hidden
        />
      ))}
    </div>
  );
}

interface ContributorCardProps {
  contributor: GhContributor;
  index?: number;
}

function ContributorCard({ contributor }: ContributorCardProps) {
  return (
    <a
      href={contributor.html_url}
      target="_blank"
      rel="noopener noreferrer"
      title={`${contributor.login} • ${contributor.contributions} contributions`}
      className={cn(
        "relative flex items-center justify-center bg-background px-4 py-8 md:p-8 group",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      )}
    >
      <img
        src={contributor.avatar_url}
        alt={contributor.login}
        className="pointer-events-none h-14 w-14 rounded-full ring-1 ring-neutral-300 dark:ring-neutral-700 object-cover transition-transform duration-200 group-hover:scale-105"
        loading="lazy"
      />


      {/* Hover Info */}
      <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-[2px]">
        <div className="bg-black/40 px-3 py-2 rounded-lg border border-white/10 backdrop-blur-sm">
          <span className="block text-xs font-semibold">{contributor.login}</span>
          <span className="block text-[10px] text-white/80">
            {contributor.contributions} contributions
          </span>
        </div>
      </div>
    </a>
  );
}

export default ContributorsLogoCloud;




// "use client";

// import React, { useEffect, useState, useMemo } from "react";
// import { PlusIcon } from "lucide-react";
// import { cn } from "@/lib/utils";
// import { fetchAll, ContributorAPI as GhContributor } from "@/lib/github";

// // Shows a grid similar to the provided LogoCloud, but replaces logos with the top 20 contributors
// // to the Helixque repository. Each cell displays their avatar; decorative PlusIcons emulate
// // the original design accents. Cells are animated in with simple fade/scale.

// export function ContributorsLogoCloud({ className, ...props }: React.ComponentProps<"div">) {
//   const [contributors, setContributors] = useState<GhContributor[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     let mounted = true;
//     (async () => {
//       try {
//         setLoading(true);
//         setError(null);
//         const token = process.env.NEXT_PUBLIC_GH_TOKEN; // public token (optional)
//         const { contributors: c } = await fetchAll(token);
//         if (!mounted) return;
//         const top = [...c]
//           .sort((a, b) => b.contributions - a.contributions)
//           .slice(0, 20);
//         setContributors(top);
//       } catch (e: any) {
//         if (e?.name !== "AbortError") {
//           setError(e?.message || "Failed to load contributors");
//         }
//       } finally {
//         if (mounted) setLoading(false);
//       }
//     })();
//     return () => {
//       mounted = false;
//     };
//   }, []);

//   const cells = useMemo(() => {
//     if (loading) {
//       // Skeleton placeholders
//       return Array.from({ length: 8 }).map((_, i) => (
//         <div
//           key={`sk-${i}`}
//           className="h-28 md:h-32 bg-secondary/50 dark:bg-neutral-800/50 animate-pulse"
//         />
//       ));
//     }
//     return contributors.map((c, idx) => (
//       <ContributorCard key={c.login + idx} contributor={c} index={idx} />
//     ));
//   }, [contributors, loading]);

//   return (
//     <div
//       className={cn(
//         "relative border-neutral-200 dark:border-neutral-800",
//         className
//       )}
//       {...props}
//     >
//       <div
//         className={cn(
//           // auto-fit to adapt when fewer than 20 contributors
//           "grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))]",
//           // Use outline using drop-shadow instead of inner ring/divides collision
//           "[&>*]:relative [&>*]:z-0",
//           // Only vertical divides on md+ to avoid tight double lines on small screens
//           "divide-y md:divide-y-0 md:divide-x",
//           "divide-neutral-200 dark:divide-neutral-800"
//         )}
//       >
//         {error ? (
//           <div className="col-span-full p-6 text-sm text-red-500">
//             Error loading contributors: {error}
//           </div>
//         ) : (
//           cells
//         )}
//       </div>

//       {/* Four decorative PlusIcons at the outer corners of the grid */}
//       <PlusIcon
//         className="pointer-events-none absolute -top-[12.5px] -left-[12.5px] z-10 size-6 text-neutral-400 dark:text-neutral-600"
//         strokeWidth={1}
//         aria-hidden
//       />
//       <PlusIcon
//         className="pointer-events-none absolute -top-[12.5px] -right-[12.5px] z-10 size-6 text-neutral-400 dark:text-neutral-600"
//         strokeWidth={1}
//         aria-hidden
//       />
//       <PlusIcon
//         className="pointer-events-none absolute -bottom-[12.5px] -left-[12.5px] z-10 size-6 text-neutral-400 dark:text-neutral-600"
//         strokeWidth={1}
//         aria-hidden
//       />
//       <PlusIcon
//         className="pointer-events-none absolute -bottom-[12.5px] -right-[12.5px] z-10 size-6 text-neutral-400 dark:text-neutral-600"
//         strokeWidth={1}
//         aria-hidden
//       />
//     </div>
//   );
// }

// interface ContributorCardProps {
//   contributor: GhContributor;
//   index?: number;
// }

// function ContributorCard({ contributor }: ContributorCardProps) {
//   // Inner lines handled by parent via divide utilities
//   return (
//     <a
//       href={contributor.html_url}
//       target="_blank"
//       rel="noopener noreferrer"
//       className={cn(
//         "group relative isolate h-28 w-full md:h-32 overflow-hidden",
//         "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
//       )}
//       title={`${contributor.login} • ${contributor.contributions} contributions`}
//     >
//       {/* Background image fills the tile */}
//       <img
//         src={contributor.avatar_url}
//         alt={contributor.login}
//         className="absolute inset-0 h-full w-full object-cover select-none transition-transform duration-300 group-hover:scale-105 filter grayscale-[40%] contrast-110 group-hover:grayscale-0"
//         loading="lazy"
//       />

//       {/* Full-screen hover overlay */}
//       <div className="absolute inset-0 bg-neutral-950/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

//       {/* Hover details centered */}
//       <div className="pointer-events-none absolute inset-0 grid place-items-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
//   <div className="flex flex-col items-center gap-1 border border-white/15 bg-black/40 px-3 py-2 text-center text-white backdrop-blur-sm">
//           <span className="text-xs font-medium">{contributor.login}</span>
//           <span className="text-[10px] text-white/80">
//             {contributor.contributions} contributions
//           </span>
//         </div>
//       </div>

//       {/* subtle inner ring for definition without double borders */}
//       {/* Removed inner ring to prevent perceived double borders with divide lines */}
//     </a>
//   );
// }

// export default ContributorsLogoCloud;
