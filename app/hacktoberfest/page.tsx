import { Badge } from "@/components/ui/badge";
import { CleanCountdown } from "@/components/utils/clean-countdown";
import HacktoberfestCounters from "@/components/utils/hacktoberfest-counters";

export default function HacktoberfestPage() {
  const isHacktoberfestActive = () => {
    const now = new Date();
    const start = new Date("2025-10-01");
    const end = new Date("2025-10-31");
    return now >= start && now <= end;
  };
  const active = isHacktoberfestActive();

  return (
    <div className="bg-background relative overflow-x-hidden">
      {/* Page Title Section */}
      <div className={active ? "pt-8 pb-12" : "pt-8 pb-8"}>
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4 mt-8">
              <span className="text-2xl">🎃</span>
              <Badge variant="secondary" className="px-3 py-1 text-orange-600 bg-orange-100 dark:bg-orange-900/30 dark:text-orange-400">
                Coming Soon
              </Badge>
              <span className="text-2xl">🎃</span>
            </div>
            
            <h1 className="text-foreground text-3xl sm:text-5xl text-[clamp(28px,9vw,44px)] leading-[1.1] font-bold tracking-tighter sm:whitespace-nowrap mb-3">
              Helixque is participating in Hacktoberfest 2025
            </h1>
            
            <p className="text-muted-foreground text-base tracking-tight mt-6 max-w-2xl mx-auto sm:text-lg">
              We understand your eagerness to contribute and we're thankful for that, 
              but you have to wait until the time comes.
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-5xl mx-auto px-6 lg:px-10">
        {/* Countdown Timer */}
        {!active && (
          <div className="mb-16 flex justify-center">
            <CleanCountdown />
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center">
          <p className="text-lg text-muted-foreground mb-8">
            Meanwhile, explore our work and get ready to contribute.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <a
              href="https://github.com/HXQLabs/HelixQue"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm sm:text-[13.5px] hover:bg-muted transition-colors"
            >
              Browse our repositories
            </a>

            <a
              href="https://github.com/HXQLabs/HelixQue/blob/main/CONTRIBUTING.md"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm sm:text-[13.5px] hover:bg-muted transition-colors"
            >
              See contributing guidelines
            </a>

            <a
              href="https://github.com/search?q=org%3AHXQLabs+state%3Aopen&type=Issues"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm sm:text-[13.5px] hover:bg-muted transition-colors"
            >
              Find issues
            </a>
          </div>
{/* 
          <p className="mt-6 text-sm sm:text-base text-muted-foreground">
            Gear up your issues, sharpen those PRs, and let the commits roll in! ⚡️
          </p> */}
        </div>
          {/* <HacktoberfestCounters /> */}
      </div>
    </div>
  );
}
