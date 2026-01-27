import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Terms = () => {
  return (
    <main className="min-h-screen">
      <Header />
      
      <article className="pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container-tight max-w-3xl">
          <h1 className="text-display-md text-foreground mb-4">Terms of Service</h1>
          <p className="text-body-md text-muted-foreground mb-12">
            Last updated: January 2026
          </p>

          <div className="prose prose-slate max-w-none">
            <section className="mb-8">
              <h2 className="text-display-sm text-foreground mb-4">1. Acceptance of Terms</h2>
              <p className="text-body-md text-muted-foreground mb-4">
                By accessing and using PreChurn ("Service"), you accept and agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, do not use our Service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-display-sm text-foreground mb-4">2. Description of Service</h2>
              <p className="text-body-md text-muted-foreground mb-4">
                PreChurn is an AI-powered churn prevention platform that:
              </p>
              <ul className="list-disc pl-6 text-body-md text-muted-foreground mb-4 space-y-2">
                <li>Predicts customer churn before it happens</li>
                <li>Triggers automated retention interventions</li>
                <li>Tracks and verifies revenue saved from churn prevention</li>
                <li>Provides analytics and reporting on churn metrics</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-display-sm text-foreground mb-4">3. Pricing and Payment</h2>
              
              <h3 className="text-lg font-semibold text-foreground mb-3 mt-6">Performance-Based Pricing</h3>
              <p className="text-body-md text-muted-foreground mb-4">
                PreChurn operates on an outcome-based pricing model:
              </p>
              <ul className="list-disc pl-6 text-body-md text-muted-foreground mb-4 space-y-2">
                <li><strong>Starter:</strong> 15% of verified saved churn</li>
                <li><strong>Growth:</strong> 20% of verified saved churn</li>
                <li><strong>Scale:</strong> 25% of verified saved churn</li>
              </ul>

              <h3 className="text-lg font-semibold text-foreground mb-3 mt-6">Verification Period</h3>
              <p className="text-body-md text-muted-foreground mb-4">
                "Saved churn" is calculated and verified after a 30-day retention window. You are only billed for revenue that is successfully retained after this verification period.
              </p>

              <h3 className="text-lg font-semibold text-foreground mb-3 mt-6">No Base Fees</h3>
              <p className="text-body-md text-muted-foreground mb-4">
                There are no monthly fees, setup fees, or minimum commitments. If no churn is saved, you pay $0.
              </p>

              <h3 className="text-lg font-semibold text-foreground mb-3 mt-6">Billing</h3>
              <p className="text-body-md text-muted-foreground mb-4">
                Invoices are generated monthly based on verified saved churn from the previous period. Payment is due within 30 days of invoice date.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-display-sm text-foreground mb-4">4. Account Requirements</h2>
              <p className="text-body-md text-muted-foreground mb-4">
                To use PreChurn, you must:
              </p>
              <ul className="list-disc pl-6 text-body-md text-muted-foreground mb-4 space-y-2">
                <li>Provide accurate account information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Notify us immediately of any unauthorized access</li>
                <li>Be at least 18 years old or have parental consent</li>
                <li>Operate a legitimate SaaS or subscription business</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-display-sm text-foreground mb-4">5. Data Access and Integration</h2>
              
              <h3 className="text-lg font-semibold text-foreground mb-3 mt-6">Required Permissions</h3>
              <p className="text-body-md text-muted-foreground mb-4">
                To provide our Service, PreChurn requires access to:
              </p>
              <ul className="list-disc pl-6 text-body-md text-muted-foreground mb-4 space-y-2">
                <li>User behavior and usage data</li>
                <li>Subscription and billing information</li>
                <li>Customer communication preferences</li>
              </ul>

              <h3 className="text-lg font-semibold text-foreground mb-3 mt-6">Data Processing</h3>
              <p className="text-body-md text-muted-foreground mb-4">
                You grant PreChurn permission to process customer data solely for the purpose of providing churn prevention services. We will not use your data for any other purpose without your consent.
              </p>

              <h3 className="text-lg font-semibold text-foreground mb-3 mt-6">Your Responsibilities</h3>
              <p className="text-body-md text-muted-foreground mb-4">
                You are responsible for:
              </p>
              <ul className="list-disc pl-6 text-body-md text-muted-foreground mb-4 space-y-2">
                <li>Obtaining necessary customer consent for data processing</li>
                <li>Ensuring compliance with applicable privacy laws</li>
                <li>Maintaining accurate integration configurations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-display-sm text-foreground mb-4">6. Service Level and Availability</h2>
              <p className="text-body-md text-muted-foreground mb-4">
                We strive to maintain high availability but do not guarantee uninterrupted service. Scheduled maintenance will be communicated in advance when possible.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-display-sm text-foreground mb-4">7. Acceptable Use</h2>
              <p className="text-body-md text-muted-foreground mb-4">
                You agree not to:
              </p>
              <ul className="list-disc pl-6 text-body-md text-muted-foreground mb-4 space-y-2">
                <li>Violate any laws or regulations</li>
                <li>Attempt to reverse engineer our AI models</li>
                <li>Use the Service to spam or harass customers</li>
                <li>Share your account credentials</li>
                <li>Interfere with the Service's operation</li>
                <li>Use the Service for fraudulent purposes</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-display-sm text-foreground mb-4">8. Intellectual Property</h2>
              <p className="text-body-md text-muted-foreground mb-4">
                PreChurn retains all rights to our Service, including our AI models, algorithms, software, and documentation. You retain ownership of your customer data.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-display-sm text-foreground mb-4">9. Termination</h2>
              
              <h3 className="text-lg font-semibold text-foreground mb-3 mt-6">By You</h3>
              <p className="text-body-md text-muted-foreground mb-4">
                You may cancel your account at any time with no penalty or cancellation fees. You will only be billed for churn saved before the cancellation date.
              </p>

              <h3 className="text-lg font-semibold text-foreground mb-3 mt-6">By Us</h3>
              <p className="text-body-md text-muted-foreground mb-4">
                We may suspend or terminate your account if you violate these Terms, engage in fraudulent activity, or pose a risk to our Service or other users.
              </p>

              <h3 className="text-lg font-semibold text-foreground mb-3 mt-6">Effect of Termination</h3>
              <p className="text-body-md text-muted-foreground mb-4">
                Upon termination, we will:
              </p>
              <ul className="list-disc pl-6 text-body-md text-muted-foreground mb-4 space-y-2">
                <li>Stop all retention interventions</li>
                <li>Provide a final invoice for verified saved churn</li>
                <li>Delete or return your data as requested</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-display-sm text-foreground mb-4">10. Warranties and Disclaimers</h2>
              <p className="text-body-md text-muted-foreground mb-4">
                The Service is provided "as is" without warranties of any kind. While we work to improve churn rates, we cannot guarantee specific results or revenue outcomes.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-display-sm text-foreground mb-4">11. Limitation of Liability</h2>
              <p className="text-body-md text-muted-foreground mb-4">
                PreChurn's total liability shall not exceed the amount you paid us in the 12 months preceding the claim. We are not liable for indirect, incidental, or consequential damages.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-display-sm text-foreground mb-4">12. Indemnification</h2>
              <p className="text-body-md text-muted-foreground mb-4">
                You agree to indemnify PreChurn from claims arising from your use of the Service, violation of these Terms, or violation of any third-party rights.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-display-sm text-foreground mb-4">13. Changes to Terms</h2>
              <p className="text-body-md text-muted-foreground mb-4">
                We may modify these Terms at any time. We will notify you of material changes via email or through the Service. Continued use after changes constitutes acceptance.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-display-sm text-foreground mb-4">14. Governing Law</h2>
              <p className="text-body-md text-muted-foreground mb-4">
                These Terms are governed by the laws of [Your Jurisdiction]. Any disputes shall be resolved in the courts of [Your Jurisdiction].
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-display-sm text-foreground mb-4">15. Contact</h2>
              <p className="text-body-md text-muted-foreground mb-4">
                For questions about these Terms, contact us at:
              </p>
              <p className="text-body-md text-foreground mb-2">
                <strong>Email:</strong> legal@prechurn.com
              </p>
              <p className="text-body-md text-foreground">
                <strong>Address:</strong> [Your Company Address]
              </p>
            </section>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
};

export default Terms;
