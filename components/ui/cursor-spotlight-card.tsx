// "use client";

// import React, { useCallback, useEffect, useRef, useState } from "react";
// import { motion, useMotionTemplate, useMotionValue } from "motion/react";
// import { cn } from "@/lib/utils";
// import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";

// /* ------------------------------
//    Pointer tracking utilities
// ------------------------------ */

// function useMousePosition(proximityRange: number) {
//   const wrapperRef = useRef<HTMLDivElement>(null);
//   const [mouseState, setMouseState] = useState({
//     mousePositionX: 0,
//     mousePositionY: 0,
//     isWithinRange: false,
//   });

//   const handlePointerMovement = useCallback(
//     (event: PointerEvent) => {
//       if (!wrapperRef.current) return;

//       const bounds = wrapperRef.current.getBoundingClientRect();
//       const { clientX, clientY } = event;

//       const isInProximity =
//         clientX >= bounds.left - proximityRange &&
//         clientX <= bounds.right + proximityRange &&
//         clientY >= bounds.top - proximityRange &&
//         clientY <= bounds.bottom + proximityRange;

//       setMouseState({
//         mousePositionX: clientX,
//         mousePositionY: clientY,
//         isWithinRange: isInProximity,
//       });
//     },
//     [proximityRange]
//   );

//   useEffect(() => {
//     document.addEventListener("pointermove", handlePointerMovement);
//     return () =>
//       document.removeEventListener("pointermove", handlePointerMovement);
//   }, [handlePointerMovement]);

//   return { wrapperRef, mouseState };
// }

// /* Maps global mouse XY to local card space; toggles active state with proximity */
// function useCardActivation(
//   elementRef: React.RefObject<HTMLDivElement | null>,
//   globalMouseX: number,
//   globalMouseY: number,
//   isWithinRange: boolean,
//   illuminationRadius: number
// ) {
//   const localMouseX = useMotionValue(-illuminationRadius);
//   const localMouseY = useMotionValue(-illuminationRadius);
//   const [isCardActive, setIsCardActive] = useState(false);

//   useEffect(() => {
//     if (!elementRef.current || !isWithinRange) {
//       setIsCardActive(false);
//       localMouseX.set(-illuminationRadius);
//       localMouseY.set(-illuminationRadius);
//       return;
//     }

//     const rect = elementRef.current.getBoundingClientRect();
//     const extendedProximity = 100;

//     const isNearCard =
//       globalMouseX >= rect.left - extendedProximity &&
//       globalMouseX <= rect.right + extendedProximity &&
//       globalMouseY >= rect.top - extendedProximity &&
//       globalMouseY <= rect.bottom + extendedProximity;

//     setIsCardActive(isNearCard);

//     if (isNearCard) {
//       localMouseX.set(globalMouseX - rect.left);
//       localMouseY.set(globalMouseY - rect.top);
//     } else {
//       localMouseX.set(-illuminationRadius);
//       localMouseY.set(-illuminationRadius);
//     }
//   }, [
//     globalMouseX,
//     globalMouseY,
//     isWithinRange,
//     illuminationRadius,
//     localMouseX,
//     localMouseY,
//   ]);

//   return { localMouseX, localMouseY, isCardActive };
// }

// /* ------------------------------
//    Container
// ------------------------------ */

// interface CursorCardsContainerProps {
//   children: React.ReactNode;
//   className?: string;
//   proximityRange?: number;
// }

// export function CursorCardsContainer({
//   children,
//   className,
//   proximityRange = 400,
// }: CursorCardsContainerProps) {
//   const { wrapperRef, mouseState } = useMousePosition(proximityRange);

//   const enhancedChildren = React.Children.map(children, (child) => {
//     if (
//       React.isValidElement(child) &&
//       // Match our export below
//       (child.type as any)?.displayName === "CursorSpotlightCard"
//     ) {
//       return React.cloneElement(child as any, {
//         globalMouseX: mouseState.mousePositionX,
//         globalMouseY: mouseState.mousePositionY,
//         isWithinRange: mouseState.isWithinRange,
//       });
//     }
//     return child;
//   });

//   return (
//     <div ref={wrapperRef} className={cn("relative", className)}>
//       {enhancedChildren}
//     </div>
//   );
// }

// /* ------------------------------
//    Combined Card (border + spotlight)
// ------------------------------ */

// interface CursorSpotlightCardProps
//   extends React.HTMLAttributes<HTMLDivElement> {
//   /* Direction-aware border/illumination */
//   illuminationRadius?: number;
//   illuminationColor?: string;
//   illuminationOpacity?: number;
//   primaryHue?: string;
//   secondaryHue?: string;
//   borderColor?: string;

//   /* Spotlight */
//   spotlightRadius?: number;
//   spotlightColor?: string;
//   spotlightOpacity?: number;
//   spotlightReveal?: boolean; // show CanvasRevealEffect dots
//   revealAnimationSpeed?: number;
//   revealDotSize?: number;
//   revealColors?: [number, number, number][];

//   /* injected by container */
//   globalMouseX?: number;
//   globalMouseY?: number;
//   isWithinRange?: boolean;
// }

// export function CursorSpotlightCard({
//   children,
//   className,
//   /* illumination defaults */
//   illuminationRadius = 200,
//   illuminationColor = "#FFFFFF10",
//   illuminationOpacity = 0.8,
//   primaryHue = "#93C5FD", // light blue
//   secondaryHue = "#2563EB", // blue
//   // Make the outer edge blue so the visible ring shows as blue
//   borderColor = "#2563EB",
//   /* spotlight defaults */
//   spotlightRadius = 350,
//   spotlightColor = "#262626",
//   spotlightOpacity = 1,
//   spotlightReveal = true,
//   revealAnimationSpeed = 5,
//   revealDotSize = 3,
//   revealColors = [
//     [59, 130, 246],
//     [139, 92, 246],
//   ],
//   /* injected */
//   globalMouseX = 0,
//   globalMouseY = 0,
//   isWithinRange = false,
//   ...props
// }: CursorSpotlightCardProps) {
//   const elementRef = useRef<HTMLDivElement>(null);

//   const { localMouseX, localMouseY, isCardActive } = useCardActivation(
//     elementRef,
//     globalMouseX,
//     globalMouseY,
//     isWithinRange,
//     illuminationRadius
//   );

//   /* Direction-aware border gradient (follows cursor)
//      Ensure the outermost color is blue so the edge ring appears blue. */
//   const gradientBackground = useMotionTemplate`
//     radial-gradient(
//       ${illuminationRadius}px circle at ${localMouseX}px ${localMouseY}px,
//       ${primaryHue} 0%,
//       ${secondaryHue} 70%,
//       ${borderColor} 100%
//     )
//   `;

//   /* Inner illumination wash */
//   const illuminationBackground = useMotionTemplate`
//     radial-gradient(
//       ${illuminationRadius}px circle at ${localMouseX}px ${localMouseY}px,
//       ${illuminationColor},
//       transparent 100%
//     )
//   `;

//   /* Spotlight mask (reveals with radial gradient at cursor) */
//   const spotlightMask = useMotionTemplate`
//     radial-gradient(
//       ${spotlightRadius}px circle at ${localMouseX}px ${localMouseY}px,
//       white,
//       transparent 80%
//     )
//   `;

//   return (
//     <div
//       ref={elementRef}
//       className={cn(
//         "group relative rounded-2xl overflow-hidden",
//         // Make the native border transparent so it doesn't cover the gradient ring
//         "border border-transparent bg-black dark:border-transparent",
//         className
//       )}
//       {...props}
//     >
//       {/* Direction-aware border lighting backdrop */}
//       <motion.div
//         className="pointer-events-none absolute inset-0 rounded-[inherit]"
//         style={{ background: gradientBackground }}
//       />

//       {/* Base layer — widen inset to expose a visible gradient ring */}
//       <div className="absolute inset-[2px] rounded-[inherit] bg-white dark:bg-black" />

//       {/* Soft illumination that fades in near cursor */}
//       <motion.div
//         className={cn(
//           "pointer-events-none absolute inset-[2px] rounded-[inherit] opacity-0 transition-opacity duration-300",
//           isCardActive && "opacity-100"
//         )}
//         style={{
//           background: illuminationBackground,
//           opacity: isCardActive ? illuminationOpacity : 0,
//         }}
//       />

//       {/* Spotlight layer kept inside inner box so it doesn't cover the ring */}
//       <motion.div
//         className={cn(
//           "pointer-events-none absolute z-0 inset-[2px] rounded-[inherit]",
//           "opacity-0 transition-opacity duration-300",
//           isCardActive && "opacity-100"
//         )}
//         style={{
//           backgroundColor: spotlightColor,
//           opacity: isCardActive ? spotlightOpacity : 0,
//           // Standard and WebKit masks for broader support
//           maskImage: spotlightMask as unknown as string,
//           WebkitMaskImage: spotlightMask as unknown as string,
//         }}
//       >
//         {spotlightReveal && isCardActive && (
//           <CanvasRevealEffect
//             animationSpeed={revealAnimationSpeed}
//             containerClassName="bg-transparent absolute inset-0 pointer-events-none"
//             colors={revealColors}
//             dotSize={revealDotSize}
//           />
//         )}
//       </motion.div>

//       {/* Content */}
//       <div className="relative z-10">{children}</div>
//     </div>
//   );
// }
// CursorSpotlightCard.displayName = "CursorSpotlightCard";
