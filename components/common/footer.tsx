import Icons from "../global/icons";
import { PulsatingIndicator } from "@/components/utils/pulsating-indicator";
import { ArrowUpRight } from "lucide-react";
// Inline BadtzLogo from badtz-header
const BadtzLogo = () => (
  <div className="text-foreground flex items-end gap-2.5 [&_svg]:h-5">
    <svg 
      width="20" 
      height="20" 
      viewBox="0 0 190 190" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d="M102.256 188.162C97.6186 190.613 92.0647 190.613 87.4273 188.162L11.3881 147.988C6.20803 145.251 2.96875 139.885 2.96875 134.04L2.96875 55.9596C2.96875 50.115 6.20804 44.7487 11.3881 42.0119L87.4273 1.83758C92.0647 -0.612537 97.6186 -0.612537 102.256 1.83758L178.295 42.0119C183.475 44.7487 186.715 50.115 186.715 55.9596L186.715 134.04C186.715 139.885 183.475 145.251 178.295 147.988L102.256 188.162ZM17.2566 130.86C17.2566 133.8 18.9004 136.499 21.5152 137.859L86.6791 171.709C89.3137 173.075 92.4666 171.171 92.4666 168.21L92.4666 100.577C92.4666 97.6363 90.8224 94.9374 88.208 93.5771L23.0442 59.727C20.4089 58.3581 17.2566 60.2643 17.2566 63.2268L17.2566 130.86Z" 
        fill="currentColor"
      />
    </svg>
    <span className="font-heading text-lg leading-none font-semibold">HelixQue</span>
  </div>
);


const StickyFooter = () => {
  return (
    <footer className="border-border bg-background mt-4 w-full border-t" aria-label="Site footer">
      <div className="mx-auto max-w-7xl px-6 pt-12 pb-12 lg:px-8 flex flex-col items-center justify-center">
        <div className="flex flex-col w-full md:flex-row md:justify-between md:items-start gap-8">
          {/* Left: Logo, heading, subtext, status */}
          <div className="flex flex-col items-start gap-2 md:max-w-64 w-full">
            <a href="#home" className="flex items-center gap-2" aria-label="Navigate to homepage">
              <BadtzLogo />
            </a>
            <h3 className="mt-4 font-semibold">Join HelixQue Now!</h3>
            <p className="text-muted-foreground w-full text-balance md:text-sm">Empowering developers with cutting-edge tools and resources.</p>
          </div>
          {/* Right: Useful Links section with social links */}
          <div className="flex flex-col items-start gap-4 md:items-end md:justify-end w-full md:w-auto mt-8 md:mt-0">
            <h3 className="text-foreground mb-2 font-medium text-base md:text-right w-full md:w-auto">Useful Links</h3>
            <a href="https://github.com/your-org" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300 group" aria-label="Visit our GitHub profile" role="listitem" tabIndex={0} target="_blank" rel="noopener noreferrer">
              <Icons.github className="h-5 w-5" />
              <span className="text-sm font-medium">GitHub</span>
              <ArrowUpRight className="h-4 w-4 opacity-70 group-hover:opacity-100" />
            </a>
            <a href="https://discord.gg/your-server" className="flex items-center gap-2 text-muted-foreground hover:text-[#5865F2] transition-colors duration-300 group" aria-label="Join our Discord" role="listitem" tabIndex={0} target="_blank" rel="noopener noreferrer">
              <Icons.discord className="h-5 w-5" />
              <span className="text-sm font-medium">Discord</span>
              <ArrowUpRight className="h-4 w-4 opacity-70 group-hover:opacity-100" />
            </a>
            <a href="https://hacktoberfest.com" className="flex items-center gap-2 text-muted-foreground hover:text-[#FF6B35] transition-colors duration-300 group" aria-label="Hacktoberfest" role="listitem" tabIndex={0} target="_blank" rel="noopener noreferrer">
              <Icons.hacktoberfest className="h-5 w-5" />
              <span className="text-sm font-medium">Hacktoberfest</span>
              <ArrowUpRight className="h-4 w-4 opacity-70 group-hover:opacity-100" />
            </a>
          </div>
        </div>
  {/* Footer bottom row: status and copyright in one line on desktop */}
  <div className="mt-8 w-full flex flex-col items-center gap-2 md:flex-row md:justify-between md:items-center md:mt-4">
          <span className="inline-flex items-center space-x-2 text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 transition-colors duration-200 text-xs font-medium px-3 py-2 border border-green-200 dark:border-green-800 rounded-lg hover:border-green-300 dark:hover:border-green-700">
            <PulsatingIndicator variant="success" size="sm" animate={true} duration={2000} />
            <span>All Systems Operational</span>
          </span>
          <p className="text-muted-foreground text-xs text-center md:text-right">&copy; {new Date().getFullYear()} HXQLabs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default StickyFooter;

