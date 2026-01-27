import { Eye, Users, Zap, AlertCircle, DollarSign, TrendingUp } from "lucide-react";

const metrics = [
  { icon: Users, label: "Users at risk" },
  { icon: Zap, label: "Interventions triggered" },
  { icon: AlertCircle, label: "Revenue at risk" },
  { icon: DollarSign, label: "Revenue saved" },
  { icon: TrendingUp, label: "Performance fee breakdown" },
  { icon: Eye, label: "Net ROI" },
];

const TransparencySection = () => {
  return (
    <section className="section-padding bg-surface">
      <div className="container-tight">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 text-accent mb-6">
            <Eye className="w-6 h-6" />
          </div>
          <h2 className="text-display-md text-foreground mb-4">
            No black boxes. Full transparency.
          </h2>
          <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
            See exactly what's happening with your retention efforts. Every metric, 
            every intervention, every dollar — all visible in your dashboard.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {metrics.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border"
            >
              <div className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                <item.icon className="w-4 h-4 text-foreground" />
              </div>
              <span className="text-body-sm font-medium text-foreground">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TransparencySection;
