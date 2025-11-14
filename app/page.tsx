import { HeroSection } from "@/components/sections/hero";
import { FeaturesSection } from "@/components/sections/features";
import { CTASection } from "@/components/sections/cta";
import { OpensourceSection } from "@/components/sections/opensource";
import { PricingSection } from "@/components/pricing-section";
import ContributorsLogoCloud from "@/components/sections/opensource/logo-cloud-contributors";
// import { PricingSection } from "@/components/pricing-section-new";
const PLANS = [
    {
      name: "Basic",
      info: "For most individuals",
      price: { monthly: 7, yearly: Math.round(7 * 12 * (1 - 0.12)) },
      features: [
        { text: "Up to 3 Blog posts" },
        { text: "Up to 3 Transcriptions" },
        { text: "Up to 3 Posts stored" },
        { text: "Markdown support" },
        { text: "Community support" },
        { text: "AI powered suggestions" },
      ],
      locked: ["Priority support", "SEO optimization tools"],
      btn: { text: "Start Free Trial", href: "#" },
    },
    {
      highlighted: true,
      name: "Pro",
      info: "For small businesses",
      price: { monthly: 17, yearly: Math.round(17 * 12 * (1 - 0.12)) },
      features: [
        { text: "Up to 500 Blog Posts" },
        { text: "Up to 500 Transcriptions" },
        { text: "Up to 500 Posts stored" },
        { text: "Unlimited Markdown support" },
        { text: "Priority support" },
        { text: "AI powered suggestions" },
      ],
      locked: ["Team collaboration", "Dedicated manager"],
      btn: { text: "Get Started", href: "#" },
    },
    {
      name: "Business",
      info: "For large orgs",
      price: { monthly: 49, yearly: Math.round(49 * 12 * (1 - 0.12)) },
      features: [
        { text: "Unlimited Blog Posts" },
        { text: "Unlimited Transcriptions" },
        { text: "Unlimited Posts stored" },
        { text: "Advanced SEO optimization" },
        { text: "24/7 Priority support" },
        { text: "Dedicated account manager" },
        { text: "AI powered suggestions" },
        { text: "Team collaboration tools" },
        { text: "Custom integrations" },
        { text: "Onboarding assistance" },
      ],
      locked: [],
      btn: { text: "Contact Sales", href: "#" },
    },
  ];


// "use client";
// import { PricingSection } from "@/components/pricing-section";

// export default function Page() {
  

//   return (
//     <div className="flex min-h-screen flex-col items-center justify-center py-12">
      
//     </div>
//   );
// }

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <FeaturesSection />
      {/* <PricingSection
        heading="Plans that Scale with You"
        description="Whether you're just starting or growing fast, our flexible pricing has you covered — with no hidden costs."
        plans={PLANS}
      /> */}
      <PricingSection/>
      <OpensourceSection/>
      {/* Contributors grid styled like the LogoCloud example */}
      <div className="min-h-screen w-full place-content-center px-4">
        <section className="relative">
          <h2 className="mb-6 text-center font-medium text-lg text-muted-foreground tracking-tight md:text-2xl">
            Contributors who <span className="font-semibold text-primary">collaborate</span> with us.
          </h2>
          <div className="relative mx-auto max-w-3xl">
            <div className="-translate-x-1/2 -top-px pointer-events-none absolute left-1/2 " />
            <ContributorsLogoCloud className="border-y-0" />
            <div className="-translate-x-1/2 -bottom-px pointer-events-none absolute left-1/2" />
          </div>
        </section>
      </div>
      <CTASection />
    </div>
  );
}
