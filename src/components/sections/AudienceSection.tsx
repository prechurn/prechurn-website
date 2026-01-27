import { Cpu, Layers, Code, PlayCircle, CreditCard, Users } from "lucide-react";

const audiences = [
  { icon: Cpu, label: "AI tools" },
  { icon: Layers, label: "Micro-SaaS" },
  { icon: Code, label: "API products" },
  { icon: PlayCircle, label: "Trial-based apps" },
  { icon: CreditCard, label: "Subscription platforms" },
  { icon: Users, label: "Indie founders to growth teams" },
];

const AudienceSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-tight">
        <div className="text-center mb-12">
          <h2 className="text-display-md text-foreground mb-4">
            Built for modern SaaS and AI products.
          </h2>
          <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
            Whether you're an indie founder or a growing team, PreChurn adapts 
            to your product and scales with you.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {audiences.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-3 p-4 rounded-xl bg-surface border border-border hover:border-accent/30 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                <item.icon className="w-5 h-5 text-accent" />
              </div>
              <span className="font-medium text-foreground">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;
