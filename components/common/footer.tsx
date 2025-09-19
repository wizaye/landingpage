import React from "react"
import ScrambleHover from "@/components/fancy/text/scramble-hover"
import CenterUnderline from "@/components/fancy/text/underline-center"

const StickyFooter: React.FC = () => {
  return (
    <footer className="sticky bottom-0 w-full h-64 sm:h-72 md:h-80 bg-white dark:bg-black z-0">
      <div className="relative overflow-hidden w-full h-full flex flex-col sm:flex-row justify-center sm:justify-end px-4 sm:px-8 md:px-12 text-center sm:text-right items-center sm:items-start py-6 sm:py-8 md:py-12 text-black dark:text-white">
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8 md:space-x-12 lg:space-x-16 xl:space-x-24 text-xs sm:text-sm md:text-lg lg:text-xl z-10">
            <ul className="space-y-1 sm:space-y-2">
              <li className="cursor-pointer">
                <CenterUnderline>
                  <ScrambleHover
                    text="Home"
                    scrambleSpeed={50}
                    maxIterations={8}
                    useOriginalCharsOnly={true}
                  />
                </CenterUnderline>
              </li>
              <li className="cursor-pointer">
                <CenterUnderline>
                  <ScrambleHover
                    text="Docs"
                    scrambleSpeed={50}
                    maxIterations={8}
                    useOriginalCharsOnly={true}
                  />
                </CenterUnderline>
              </li>
              <li className="cursor-pointer">
                <CenterUnderline>
                  <ScrambleHover
                    text="Comps"
                    scrambleSpeed={50}
                    maxIterations={8}
                    useOriginalCharsOnly={true}
                  />
                </CenterUnderline>
              </li>
            </ul>
            <ul className="space-y-1 sm:space-y-2">
              <li className="cursor-pointer">
                <CenterUnderline>
                  <ScrambleHover
                    text="Github"
                    scrambleSpeed={50}
                    maxIterations={8}
                    useOriginalCharsOnly={true}
                  />
                </CenterUnderline>
              </li>
              <li className="cursor-pointer">
                <CenterUnderline>
                  <ScrambleHover
                    text="Instagram"
                    scrambleSpeed={50}
                    maxIterations={8}
                    useOriginalCharsOnly={true}
                  />
                </CenterUnderline>
              </li>
              <li className="cursor-pointer">
                <CenterUnderline>
                  <ScrambleHover
                    text="X(Twitter)"
                    scrambleSpeed={50}
                    maxIterations={8}
                    useOriginalCharsOnly={true}
                  />
                </CenterUnderline>
              </li>
            </ul>
          </div>
          
          {/* Copyright notice */}
          <div className="absolute bottom-2 sm:bottom-4 md:bottom-6 lg:bottom-12 left-1/2 sm:left-auto sm:right-4 md:right-8 lg:right-12 transform -translate-x-1/2 sm:translate-x-0 text-xs sm:text-sm text-black dark:text-white opacity-70 z-10">
            © 2025 HXQLabs. All rights reserved.
          </div>
          
          <h2 className="absolute bottom-0 left-0 translate-y-1/4 sm:translate-y-1/5 text-[40px] xs:text-[60px] sm:text-[80px] md:text-[120px] lg:text-[160px] xl:text-[192px] text-black dark:text-white font-calendas opacity-30 sm:opacity-100 pointer-events-none">
            HelixQue
          </h2>
        </div>
      </footer>
  )
}

export default StickyFooter
