import { Check, X } from "lucide-react";

const ComparisonSection = () => {
  const features = [
    {
      feature: "Churn prediction",
      prechurn: "Predicts churn before cancellation",
      traditional: "Reacts after cancel click",
    },
    {
      feature: "Intervention timing",
      prechurn: "Lifecycle-based interventions",
      traditional: "Limited save offers",
    },
    {
      feature: "User reactivation",
      prechurn: "Full reactivation engine",
      traditional: "Not included",
    },
    {
      feature: "Pricing model",
      prechurn: "Outcome-based pricing",
      traditional: "Flat pricing regardless of results",
    },
    {
      feature: "Focus",
      prechurn: "Built for SaaS & AI tools",
      traditional: "Generic approach",
    },
  ];

  return (
    <section id="comparison" className="section-padding bg-surface">
      <div className="container-wide">
        <div className="text-center mb-16">
          <h2 className="text-display-md text-foreground mb-4">
            Predictive vs reactive retention
          </h2>
          <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
            See how PreChurn compares to traditional churn tools that only react 
            when it's already too late.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl bg-card border border-border overflow-hidden shadow-soft">
            {/* Header */}
            <div className="grid grid-cols-3 gap-4 p-6 bg-secondary/50 border-b border-border">
              <div className="text-body-sm font-medium text-muted-foreground">
                Feature
              </div>
              <div className="text-center">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-accent/10 text-accent font-semibold text-sm">
                  PreChurn
                </span>
              </div>
              <div className="text-center">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-secondary text-muted-foreground font-medium text-sm">
                  Traditional tools
                </span>
              </div>
            </div>

            {/* Rows */}
            {features.map((row, index) => (
              <div
                key={row.feature}
                className={`grid grid-cols-3 gap-4 p-6 ${
                  index !== features.length - 1 ? "border-b border-border" : ""
                }`}
              >
                <div className="font-medium text-foreground">{row.feature}</div>
                <div className="flex items-start gap-2 justify-center text-center">
                  <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-body-sm text-foreground">{row.prechurn}</span>
                </div>
                <div className="flex items-start gap-2 justify-center text-center">
                  <X className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" />
                  <span className="text-body-sm text-muted-foreground">
                    {row.traditional}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
