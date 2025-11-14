"use client";
import React from "react";
import NumberFlow from "@number-flow/react";
import { CheckCircle2, XCircleIcon, Users, Briefcase, Building } from "lucide-react";
import * as PricingCard from "@/components/pricing-card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { FrequencyToggle, type FREQUENCY } from "@/components/frequency-toggle";

export type Plan = {
  name: string;
  info: string;
  price: { monthly: number; yearly: number };
  features: { text: string; tooltip?: string }[];
  locked?: string[];
  btn: { text: string; href: string };
  highlighted?: boolean;
};

interface PricingSectionProps {
  heading: string;
  description?: string;
  plans: Plan[];
}

export function PricingSection({ heading, description, plans }: PricingSectionProps) {
  const [frequency, setFrequency] = React.useState<FREQUENCY>("monthly");

  const getIcon = (name: string) => {
    switch (name) {
      case "Basic":
        return <Users className="h-4 w-4" />;
      case "Pro":
        return <Briefcase className="h-4 w-4" />;
      case "Business":
        return <Building className="h-4 w-4" />;
      default:
        return <Users className="h-4 w-4" />;
    }
  };

  return (
    <section className="flex w-full flex-col items-center space-y-10 p-4">
      <div className="max-w-2xl text-center space-y-2">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{heading}</h2>
        {description && <p className="text-muted-foreground">{description}</p>}
      </div>

      <FrequencyToggle frequency={frequency} setFrequency={setFrequency} />

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {plans.map((plan) => (
          <PricingCard.Card
            key={plan.name}
            className={cn(
              "transition-all duration-300 hover:scale-[1.02]",
              plan.highlighted && "border-primary/50 shadow-lg scale-105"
            )}
          >
            <PricingCard.Header>
              <PricingCard.Plan>
                <PricingCard.PlanName>
                  {getIcon(plan.name)}
                  <span>{plan.name}</span>
                </PricingCard.PlanName>
                <PricingCard.Badge>{plan.info}</PricingCard.Badge>
              </PricingCard.Plan>

              <PricingCard.Price>
                <PricingCard.MainPrice
                  aria-label={`$${plan.price[frequency]}${plan.name !== "Free" ? ` per ${frequency === "monthly" ? "month" : "year"}` : ""}`}
                >
                  <span className="mr-0.5">$</span>
                  <NumberFlow
                    value={plan.price[frequency]}
                    locales="en-IN"
                    format={{ maximumFractionDigits: 0 }}
                  />
                </PricingCard.MainPrice>
                {plan.name !== "Free" && (
                  <PricingCard.Period>
                    / {frequency === "monthly" ? "month" : "year"}
                  </PricingCard.Period>
                )}
                {frequency === "yearly" && (
                  <PricingCard.OriginalPrice>
                    ${(plan.price.monthly * 12).toFixed(0)}
                  </PricingCard.OriginalPrice>
                )}
              </PricingCard.Price>

              <Button
                asChild
                className={cn(
                  "w-full font-semibold text-white",
                  plan.highlighted
                    ? "bg-gradient-to-b from-orange-500 to-orange-600 shadow-[0_10px_25px_rgba(255,115,0,0.3)]"
                    : "bg-muted text-foreground hover:bg-muted/70"
                )}
              >
                <a href={plan.btn.href}>{plan.btn.text}</a>
              </Button>
            </PricingCard.Header>

            <PricingCard.Body>
              <PricingCard.List>
                {plan.features.map((feat, i) => (
                  <PricingCard.ListItem key={`f-${i}`}>
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    <span>{feat.text}</span>
                  </PricingCard.ListItem>
                ))}
              </PricingCard.List>

              {plan.locked && plan.locked.length > 0 && (
                <>
                  <PricingCard.Separator>Pro features</PricingCard.Separator>
                  <PricingCard.List>
                    {plan.locked.map((lock, i) => (
                      <PricingCard.ListItem key={`l-${i}`} className="opacity-75">
                        <XCircleIcon className="h-4 w-4 text-destructive" />
                        <span>{lock}</span>
                      </PricingCard.ListItem>
                    ))}
                  </PricingCard.List>
                </>
              )}
            </PricingCard.Body>
          </PricingCard.Card>
        ))}
      </div>
    </section>
  );
}
