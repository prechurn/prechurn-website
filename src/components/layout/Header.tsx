import { useState } from "react";
import { Button } from "@/components/ui/button";
import EmailCaptureModal from "@/components/EmailCaptureModal";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="container-wide flex h-16 items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <span className="text-xl font-semibold tracking-tight text-foreground">
              PreChurn
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#how-it-works"
              className="text-body-sm text-muted-foreground hover:text-foreground transition-colors link-underline"
            >
              How It Works
            </a>
            <a
              href="#pricing"
              className="text-body-sm text-muted-foreground hover:text-foreground transition-colors link-underline"
            >
              Pricing
            </a>
            <a
              href="#calculator"
              className="text-body-sm text-muted-foreground hover:text-foreground transition-colors link-underline"
            >
              ROI Calculator
            </a>
            <a
              href="#faq"
              className="text-body-sm text-muted-foreground hover:text-foreground transition-colors link-underline"
            >
              FAQ
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" className="hidden sm:inline-flex">
              Sign In
            </Button>
            <Button 
              variant="default" 
              size="sm"
              onClick={() => setIsModalOpen(true)}
            >
              Request Access
            </Button>
          </div>
        </div>
      </header>

      <EmailCaptureModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        source="header"
      />
    </>
  );
};

export default Header;
