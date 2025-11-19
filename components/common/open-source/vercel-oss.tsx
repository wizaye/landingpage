import { LogoCloud } from "@/components/common/open-source/logo-cloud";

export default function VercelOSS({ className = "" }: { className?: string }) {
  return (
    <section className={`relative ${className}`}>
      <h2 className="mb-6 text-center font-medium text-lg text-muted-foreground tracking-tight md:text-2xl">
        We're proudly{" "}
        <span className="font-semibold text-primary">backed</span> by
      </h2>
      <div className="relative mx-auto max-w-sm">
        <div className="-translate-x-1/2 -top-px pointer-events-none absolute left-1/2" />
        <LogoCloud className="border-y-0" />
        <div className="-translate-x-1/2 -bottom-px pointer-events-none absolute left-1/2" />
      </div>
    </section>
  );
}
