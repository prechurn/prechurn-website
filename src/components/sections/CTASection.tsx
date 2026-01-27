import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import EmailCaptureModal from "@/components/EmailCaptureModal";

const CTASection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="section-padding bg-background">
        <div className="container-tight">
          <div className="rounded-3xl bg-primary p-10 md:p-16 text-center">
            <h2 className="text-display-md text-primary-foreground mb-4">
              Stop losing users silently.
            </h2>
            <p className="text-body-lg text-primary-foreground/80 max-w-xl mx-auto mb-10">
              Start predicting churn and paying only for results. 
              Join the early access program today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                variant="accent" 
                size="xl"
                onClick={() => setIsModalOpen(true)}
              >
                Request Early Access
                <ArrowRight className="ml-1" />
              </Button>
              <Button
                variant="hero-secondary"
                size="xl"
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20"
                onClick={() => {
                  document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                View Pricing
              </Button>
            </div>
          </div>
        </div>
      </section>

      <EmailCaptureModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        source="cta-section"
      />
    </>
  );
};

export default CTASection;
