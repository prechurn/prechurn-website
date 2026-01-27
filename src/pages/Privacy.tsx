import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Privacy = () => {
  return (
    <main className="min-h-screen">
      <Header />
      
      <article className="pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container-tight max-w-3xl">
          <h1 className="text-display-md text-foreground mb-4">Privacy Policy</h1>
          <p className="text-body-md text-muted-foreground mb-12">
            Last updated: January 2026
          </p>

          <div className="prose prose-slate max-w-none">
            <section className="mb-8">
              <h2 className="text-display-sm text-foreground mb-4">Introduction</h2>
              <p className="text-body-md text-muted-foreground mb-4">
                PreChurn ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our churn prevention service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-display-sm text-foreground mb-4">Information We Collect</h2>
              
              <h3 className="text-lg font-semibold text-foreground mb-3 mt-6">Account Information</h3>
              <p className="text-body-md text-muted-foreground mb-4">
                When you sign up for PreChurn, we collect:
              </p>
              <ul className="list-disc pl-6 text-body-md text-muted-foreground mb-4 space-y-2">
                <li>Email address</li>
                <li>Company name</li>
                <li>Billing information</li>
                <li>Authentication credentials</li>
              </ul>

              <h3 className="text-lg font-semibold text-foreground mb-3 mt-6">Customer Data</h3>
              <p className="text-body-md text-muted-foreground mb-4">
                To provide our churn prevention service, we process:
              </p>
              <ul className="list-disc pl-6 text-body-md text-muted-foreground mb-4 space-y-2">
                <li>User behavior and usage patterns</li>
                <li>Subscription and payment data</li>
                <li>Product interaction metrics</li>
                <li>Communication preferences</li>
              </ul>

              <h3 className="text-lg font-semibold text-foreground mb-3 mt-6">Technical Information</h3>
              <ul className="list-disc pl-6 text-body-md text-muted-foreground mb-4 space-y-2">
                <li>IP address</li>
                <li>Browser type and version</li>
                <li>Device information</li>
                <li>Log data and analytics</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-display-sm text-foreground mb-4">How We Use Your Information</h2>
              <p className="text-body-md text-muted-foreground mb-4">
                We use the collected information to:
              </p>
              <ul className="list-disc pl-6 text-body-md text-muted-foreground mb-4 space-y-2">
                <li>Provide and maintain our churn prevention service</li>
                <li>Predict and prevent customer churn using AI</li>
                <li>Process payments and verify saved churn</li>
                <li>Send service-related communications</li>
                <li>Improve our algorithms and service quality</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-display-sm text-foreground mb-4">Data Security</h2>
              <p className="text-body-md text-muted-foreground mb-4">
                We implement industry-standard security measures to protect your data:
              </p>
              <ul className="list-disc pl-6 text-body-md text-muted-foreground mb-4 space-y-2">
                <li>Encryption in transit and at rest</li>
                <li>Regular security audits</li>
                <li>Access controls and authentication</li>
                <li>Secure data centers</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-display-sm text-foreground mb-4">Data Retention</h2>
              <p className="text-body-md text-muted-foreground mb-4">
                We retain your information only as long as necessary to provide our services and comply with legal obligations. You may request deletion of your data at any time.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-display-sm text-foreground mb-4">Third-Party Services</h2>
              <p className="text-body-md text-muted-foreground mb-4">
                We may use third-party services for:
              </p>
              <ul className="list-disc pl-6 text-body-md text-muted-foreground mb-4 space-y-2">
                <li>Payment processing (Stripe)</li>
                <li>Analytics and monitoring</li>
                <li>Cloud infrastructure</li>
                <li>Email delivery</li>
              </ul>
              <p className="text-body-md text-muted-foreground mb-4">
                These services have their own privacy policies and we encourage you to review them.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-display-sm text-foreground mb-4">Your Rights</h2>
              <p className="text-body-md text-muted-foreground mb-4">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 text-body-md text-muted-foreground mb-4 space-y-2">
                <li>Access your personal data</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your data</li>
                <li>Object to processing</li>
                <li>Export your data</li>
                <li>Withdraw consent</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-display-sm text-foreground mb-4">Cookies and Tracking</h2>
              <p className="text-body-md text-muted-foreground mb-4">
                We use cookies and similar tracking technologies to analyze usage patterns and improve our service. You can control cookies through your browser settings.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-display-sm text-foreground mb-4">GDPR & CCPA Compliance</h2>
              <p className="text-body-md text-muted-foreground mb-4">
                We comply with GDPR (for EU users) and CCPA (for California residents). If you are located in these jurisdictions, you have additional rights regarding your personal data.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-display-sm text-foreground mb-4">Changes to This Policy</h2>
              <p className="text-body-md text-muted-foreground mb-4">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-display-sm text-foreground mb-4">Contact Us</h2>
              <p className="text-body-md text-muted-foreground mb-4">
                If you have questions about this Privacy Policy or how we handle your data, please contact us at:
              </p>
              <p className="text-body-md text-foreground mb-2">
                <strong>Email:</strong> privacy@prechurn.com
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

export default Privacy;
