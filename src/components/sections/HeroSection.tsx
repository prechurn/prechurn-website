import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import EmailCaptureModal from "@/components/EmailCaptureModal";

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="hero-gradient pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container-tight text-center">
          <div className="animate-fade-in-up" style={{ animationDelay: "0ms" }}>
            <span className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-1.5 text-body-sm font-medium text-accent mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              Early Access Now Open
            </span>
          </div>

          <h1
            className="text-display-lg md:text-display-xl text-foreground mb-6 text-balance animate-fade-in-up"
            style={{ animationDelay: "100ms" }}
          >
            Prevent churn before it starts.
            <br />
            <span className="text-muted-foreground">Pay only for revenue we save.</span>
          </h1>

          <p
            className="text-body-lg text-muted-foreground max-w-2xl mx-auto mb-10 text-balance animate-fade-in-up"
            style={{ animationDelay: "200ms" }}
          >
            PreChurn uses AI to identify users at risk, trigger smart retention flows, and bring customers back — before they cancel.
          </p>

          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up"
            style={{ animationDelay: "300ms" }}
          >
            <Button 
              variant="default" 
              size="xl"
              onClick={() => setIsModalOpen(true)}
            >
              Request Early Access
              <ArrowRight className="ml-1" />
            </Button>
            <Button 
              variant="outline" 
              size="xl"
              onClick={() => {
                document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              See How It Works
            </Button>
          </div>

          <p
            className="mt-8 text-body-sm text-muted-foreground animate-fade-in-up"
            style={{ animationDelay: "400ms" }}
          >
            No credit card required. Built for SaaS & AI tools.
          </p>
        </div>
      </section>

      <EmailCaptureModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        source="hero"
      />
    </>
  );
};

export default HeroSection;
