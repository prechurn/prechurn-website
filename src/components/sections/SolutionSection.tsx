import { Brain, Zap, RefreshCcw, BadgeDollarSign } from "lucide-react";

const solutions = [
  {
    icon: Brain,
    title: "Predict churn early",
    description:
      "AI analyzes usage decay, inactivity, failed onboarding, feature avoidance, and sentiment to flag high-risk users before they decide to leave.",
  },
  {
    icon: Zap,
    title: "Intervene automatically",
    description:
      "Trigger onboarding nudges, feature adoption prompts, check-ins, pause/downgrade offers, and personalized retention messages at the right moment.",
  },
  {
    icon: RefreshCcw,
    title: "Reactivate lost users",
    description:
      "Run automated reactivation campaigns for inactive or drifting users, bringing them back before they officially churn.",
  },
  {
    icon: BadgeDollarSign,
    title: "Only pay for results",
    description:
      "Zero base fees. Only pay a percentage of verified revenue saved. If we don't save your revenue, you pay $0.",
  },
];

const SolutionSection = () => {
  return (
    <section id="how-it-works" className="section-padding bg-surface">
      <div className="container-wide">
        <div className="text-center mb-16">
          <h2 className="text-display-md text-foreground mb-4">
            PreChurn prevents churn before it starts.
          </h2>
          <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
            A complete system for identifying at-risk users, intervening intelligently, 
            and recovering revenue — all powered by predictive AI.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((solution, index) => (
            <div
              key={solution.title}
              className="group p-6 rounded-2xl bg-card border border-border card-hover"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 text-accent mb-5 group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
                <solution.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {solution.title}
              </h3>
              <p className="text-body-sm text-muted-foreground leading-relaxed">
                {solution.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
