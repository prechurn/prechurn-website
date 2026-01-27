import DashboardPreview from "@/components/DashboardPreview";
import { Monitor } from "lucide-react";

const DashboardPreviewSection = () => {
  return (
    <section id="dashboard" className="section-padding bg-background">
      <div className="container-wide">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 text-accent mb-6">
            <Monitor className="w-6 h-6" />
          </div>
          <h2 className="text-display-md text-foreground mb-4">
            See exactly what's happening
          </h2>
          <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
            Real-time visibility into churn risk, active interventions, and revenue impact. 
            Everything you need in one dashboard.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <DashboardPreview />
        </div>

        <div className="mt-12 text-center">
          <p className="text-body-sm text-muted-foreground">
            Interactive demo • Live data updates • Full transparency
          </p>
        </div>
      </div>
    </section>
  );
};

export default DashboardPreviewSection;
