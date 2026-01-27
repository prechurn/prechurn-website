import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "How is 'saved churn' verified?",
    answer:
      "Saved churn is calculated after a 30-day retention window. When PreChurn intervenes with an at-risk user, we track whether they remain subscribed 30 days later. If they stay, that revenue counts as 'saved.' You only pay for users who were flagged as at-risk, received an intervention, and remained active subscribers.",
  },
  {
    question: "What if a user was going to stay anyway?",
    answer:
      "Our AI model is trained to identify genuine churn risk based on behavioral signals like usage decay, inactivity patterns, failed onboarding, and feature avoidance. We don't count users who show strong engagement patterns. However, our pricing model means you only pay for verified saves — if we didn't actually prevent churn, you don't pay.",
  },
  {
    question: "How long does implementation take?",
    answer:
      "Most customers are up and running within 24-48 hours. Implementation involves connecting your data sources (typically Stripe for billing and your product analytics), configuring intervention triggers, and testing the flows. Our team guides you through the entire setup process.",
  },
  {
    question: "Do I need to change my current cancel flow?",
    answer:
      "No. PreChurn works alongside your existing systems. We intervene before users even reach your cancel flow by identifying at-risk behavior early. If a user does click 'cancel,' PreChurn can also enhance that experience with smart save offers, but it's not required.",
  },
  {
    question: "What data do you need access to?",
    answer:
      "PreChurn needs access to: (1) subscription/billing data (typically via Stripe), (2) product usage metrics (activity, feature usage, login frequency), and (3) basic user information (email, account creation date). We use this data solely to predict churn risk and trigger retention interventions.",
  },
  {
    question: "Is my customer data secure?",
    answer:
      "Yes. We take security seriously with encryption in transit and at rest, regular security audits, SOC 2 compliance (in progress), and strict access controls. We only access the data necessary to provide our service, and we never share or sell your customer data to third parties.",
  },
  {
    question: "What if I want to cancel?",
    answer:
      "You can cancel anytime with no penalty or cancellation fees. There are no contracts or minimum commitments. You'll only be billed for churn saved before your cancellation date (verified after the 30-day retention window).",
  },
  {
    question: "How do you calculate the performance fee?",
    answer:
      "The performance fee is a percentage of the monthly recurring revenue (MRR) that was saved. For example, if we prevent a $100/month customer from churning on the Growth plan (20% fee), you'd pay $20 for that save. If we save $10,000 in MRR that month, you'd pay $2,000. If we save $0, you pay $0.",
  },
  {
    question: "Can PreChurn work with my tech stack?",
    answer:
      "PreChurn integrates with common SaaS tools including Stripe (for billing), Segment, Mixpanel, Amplitude (for analytics), Intercom, and direct API access. If you use a different stack, we offer custom integrations for Scale plan customers. Contact us to discuss your specific setup.",
  },
  {
    question: "What's the typical ROI?",
    answer:
      "Most customers see 3-5x ROI within the first 6 months. For example, on the Growth plan (20% fee), if we save $100,000 in annual churn, you'd pay $20,000 and keep $80,000 — a 4x return. Results vary by product, market, and churn patterns, but our outcome-based model means you only succeed when you succeed.",
  },
  {
    question: "Do you offer a free trial?",
    answer:
      "We're currently in early access with no free trial, but our pricing model is inherently low-risk: you only pay for results. If PreChurn doesn't save any churn, your cost is $0. Many customers consider this better than a traditional trial since you pay nothing unless we deliver value.",
  },
  {
    question: "What kind of support do you provide?",
    answer:
      "All plans include email support with 24-hour response times. Growth and Scale plans include priority support with faster response times. Scale plan customers also receive dedicated onboarding, a customer success manager, and SLA guarantees.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section-padding bg-surface">
      <div className="container-tight">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 text-accent mb-6">
            <HelpCircle className="w-6 h-6" />
          </div>
          <h2 className="text-display-md text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about how PreChurn works, pricing, and getting started.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-xl bg-card border border-border overflow-hidden transition-all hover:border-accent/30"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-surface/50 transition-colors"
              >
                <span className="text-body-md font-semibold text-foreground pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-200 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-6 pb-5 pt-2">
                  <p className="text-body-md text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Still have questions CTA */}
        <div className="mt-12 text-center">
          <p className="text-body-md text-muted-foreground mb-4">
            Still have questions?
          </p>
          <a
            href="/contact"
            className="text-accent hover:text-accent/80 transition-colors font-medium"
          >
            Get in touch with our team →
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
