import { useState } from "react";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import EmailCaptureModal from "@/components/EmailCaptureModal";

const plans = [
  {
    name: "Starter",
    performanceFee: "15%",
    subtitle: "Best for early-stage SaaS teams",
    features: [
      "AI-powered cancellation intercept",
      "Intent detection & smart responses",
      "Standard save offers (pause, downgrade, education)",
      "Revenue attribution dashboard",
      "Stripe integration",
    ],
  },
  {
    name: "Growth",
    performanceFee: "20%",
    subtitle: "Best for scaling SaaS businesses",
    popular: true,
    features: [
      "Everything in Starter",
      "Advanced AI optimization",
      "Offer A/B testing",
      "Save-rate analytics",
      "Priority support",
    ],
  },
  {
    name: "Scale",
    performanceFee: "25%",
    subtitle: "Best for high-volume or multi-product teams",
    features: [
      "Everything in Growth",
      "Custom AI logic & workflows",
      "Multi-product support",
      "Dedicated onboarding",
      "Advanced reporting & SLA",
    ],
  },
];

const PricingSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");

  const handleGetStarted = (planName: string) => {
    setSelectedPlan(planName);
    setIsModalOpen(true);
  };

  return (
    <>
      <section id="pricing" className="section-padding bg-background">
        <div className="container-tight">
          <div className="text-center mb-16">
            <h2 className="text-display-md text-foreground mb-4">
              Pay only when churn is saved.
            </h2>
            <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
              PreChurn charges a percentage of verified churn saved. 
              If no revenue is saved, you pay nothing.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl bg-card border p-6 shadow-soft flex flex-col ${
                  plan.popular
                    ? "border-accent ring-2 ring-accent/20"
                    : "border-border"
                }`}
              >
                {plan.popular && (
                  <span className="text-xs font-semibold uppercase tracking-wide text-accent mb-2">
                    Most Popular
                  </span>
                )}
                <h3 className="text-xl font-semibold text-foreground mb-1">
                  {plan.name}
                </h3>
                <div className="mb-2">
                  <span className="text-3xl font-bold text-foreground">
                    {plan.performanceFee}
                  </span>
                  <span className="text-muted-foreground text-sm">
                    {" "}of verified churn saved
                  </span>
                </div>
                <p className="text-body-sm text-muted-foreground mb-4">
                  {plan.subtitle}
                </p>
                <ul className="space-y-2 mb-6 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-body-sm text-foreground">
                      <Check className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <p className="text-body-sm text-accent font-medium mb-4">
                  $0 if no churn is saved
                </p>
                <Button
                  variant={plan.popular ? "hero" : "outline"}
                  size="sm"
                  className="w-full"
                  onClick={() => handleGetStarted(plan.name)}
                >
                  Get Started
                  <ArrowRight className="ml-1 w-4 h-4" />
                </Button>
              </div>
            ))}
          </div>

          <div className="max-w-2xl mx-auto p-6 rounded-xl bg-surface border border-border">
            <p className="text-body-sm text-muted-foreground mb-2 uppercase tracking-wide font-medium">
              How Billing Works
            </p>
            <div className="text-body-md text-foreground space-y-2">
              <p>PreChurn only bills for net-new revenue retained.</p>
              <p>"Saved churn" is verified after a <span className="font-semibold">30-day retention window</span>.</p>
              <p>No contracts. Cancel anytime.</p>
            </div>
          </div>
        </div>
      </section>

      <EmailCaptureModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        source={`pricing-${selectedPlan.toLowerCase()}`}
      />
    </>
  );
};

export default PricingSection;
