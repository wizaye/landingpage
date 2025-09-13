import React from "react"
import ScrambleHover from "@/components/fancy/text/scramble-hover"
import CenterUnderline from "@/components/fancy/text/underline-center"

const StickyFooter: React.FC = () => {
  return (
    <footer className="sticky bottom-0 w-full h-80 bg-white dark:bg-black z-0">
      <div className="relative overflow-hidden w-full h-full flex justify-end px-12 text-right items-start py-12 text-black dark:text-white">
          <div className="flex flex-row space-x-12 sm:space-x-16 md:space-x-24 text-sm sm:text-lg md:text-xl">
            <ul>
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
            <ul>
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
          <div className="absolute bottom-12 right-12 text-xs sm:text-sm text-black dark:text-white opacity-70">
            © 2025 helixque. All rights reserved.
          </div>
          
          <h2 className="absolute bottom-0 left-0 translate-y-1/5 sm:text-[192px] text-[80px] text-black dark:text-white font-calendas">
            HelixQue
          </h2>
        </div>
      </footer>
  )
}

export default StickyFooter
