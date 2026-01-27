import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X, Loader2, CheckCircle2 } from "lucide-react";

interface EmailCaptureFormProps {
  onClose?: () => void;
  inline?: boolean;
  source?: string;
}

const EmailCaptureForm = ({ onClose, inline = false, source = "general" }: EmailCaptureFormProps) => {
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email.trim()) {
      setError("Email is required");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);

    try {
      // TODO: Replace with your actual email service integration
      // Options: ConvertKit, Mailchimp, Loops, Resend, or custom backend
      
      // Simulated API call
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          company,
          source, // Track where the signup came from
          timestamp: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit");
      }

      setIsSuccess(true);
      
      // Track conversion event
      if (typeof window !== "undefined" && (window as any).gtag) {
        (window as any).gtag("event", "generate_lead", {
          event_category: "engagement",
          event_label: source,
        });
      }

      // Reset form after 3 seconds
      setTimeout(() => {
        setEmail("");
        setCompany("");
        setIsSuccess(false);
        if (onClose) {
          onClose();
        }
      }, 3000);
    } catch (err) {
      setError("Something went wrong. Please try again or email us at hello@prechurn.com");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="text-center py-8">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-success/10 text-success mb-4">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-semibold text-foreground mb-2">You're on the list!</h3>
        <p className="text-body-md text-muted-foreground">
          We'll be in touch soon with early access details.
        </p>
      </div>
    );
  }

  return (
    <div className={inline ? "" : "relative"}>
      {!inline && onClose && (
        <button
          onClick={onClose}
          className="absolute top-0 right-0 p-2 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>
      )}

      <div className={inline ? "" : "pt-8"}>
        <h3 className="text-display-sm text-foreground mb-2">Request Early Access</h3>
        <p className="text-body-md text-muted-foreground mb-6">
          Join the waitlist and be among the first to prevent churn with AI.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
              Work Email *
            </label>
            <Input
              id="email"
              type="email"
              placeholder="you@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full"
              disabled={isSubmitting}
              required
            />
          </div>

          <div>
            <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
              Company Name (Optional)
            </label>
            <Input
              id="company"
              type="text"
              placeholder="Your Company"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="w-full"
              disabled={isSubmitting}
            />
          </div>

          {error && (
            <div className="p-3 rounded-lg bg-destructive/10 border border-destructive/20">
              <p className="text-sm text-destructive">{error}</p>
            </div>
          )}

          <Button
            type="submit"
            variant="hero"
            size="lg"
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Submitting...
              </>
            ) : (
              "Request Access"
            )}
          </Button>

          <p className="text-xs text-muted-foreground text-center">
            No credit card required. We respect your privacy.
          </p>
        </form>
      </div>
    </div>
  );
};

export default EmailCaptureForm;
