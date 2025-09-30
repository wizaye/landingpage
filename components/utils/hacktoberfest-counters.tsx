"use client";

import { useEffect, useState } from "react";
import NumberFlow from "@number-flow/react";

export default function HacktoberfestCounters() {
  const [visits, setVisits] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);

  useEffect(() => {
    const run = async () => {
      try {
        // Increment visit count once on mount
        const res = await fetch("/api/hacktoberfest/counter", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ type: "visit" }),
        });
        const data = await res.json();
        if (res.ok) setVisits(data.visits ?? 0);
      } finally {
        setLoading(false);
      }
    };
    run();
  }, []);

  // no interested action anymore

  return (
    <div className="mt-6 flex flex-col items-center gap-4">
      <div className="grid grid-cols-1 gap-3">
        <div className="rounded-lg border bg-card px-4 py-3 text-center">
          <div className="text-[11px] uppercase tracking-wide text-muted-foreground">Visitors</div>
          <div className="pt-1 text-2xl font-semibold tabular-nums min-h-7 flex items-center justify-center">
            {loading ? (
              <svg className="animate-spin h-6 w-6 text-muted-foreground" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
              </svg>
            ) : (
              <NumberFlow value={visits ?? 0} format={{ style: "decimal", useGrouping: true }} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}


