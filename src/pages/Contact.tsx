import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import EmailCaptureForm from "@/components/EmailCaptureForm";
import { Mail, MessageSquare, Calendar } from "lucide-react";

const Contact = () => {
  return (
    <main className="min-h-screen">
      <Header />
      
      <section className="pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container-tight">
          <div className="text-center mb-16">
            <h1 className="text-display-md text-foreground mb-4">
              Get in Touch
            </h1>
            <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
              Have questions about PreChurn? Want to schedule a demo? We'd love to hear from you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div className="bg-card border border-border rounded-2xl p-8 shadow-soft">
              <EmailCaptureForm inline source="contact-page" />
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-display-sm text-foreground mb-6">Other Ways to Reach Us</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-1">Email Us</h3>
                      <p className="text-body-md text-muted-foreground mb-2">
                        General inquiries and support
                      </p>
                      <a 
                        href="mailto:hello@prechurn.com" 
                        className="text-accent hover:text-accent/80 transition-colors font-medium"
                      >
                        hello@prechurn.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                      <MessageSquare className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-1">Live Chat</h3>
                      <p className="text-body-md text-muted-foreground mb-2">
                        Real-time support during business hours
                      </p>
                      <button 
                        className="text-accent hover:text-accent/80 transition-colors font-medium"
                        onClick={() => {
                          // TODO: Integrate with your chat widget (Intercom, Crisp, etc.)
                          console.log("Open chat widget");
                        }}
                      >
                        Start a conversation
                      </button>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                      <Calendar className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-1">Schedule a Demo</h3>
                      <p className="text-body-md text-muted-foreground mb-2">
                        See PreChurn in action with a personalized walkthrough
                      </p>
                      <a 
                        href="https://calendly.com/prechurn/demo" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-accent hover:text-accent/80 transition-colors font-medium"
                      >
                        Book a time
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-border">
                <h3 className="text-lg font-semibold text-foreground mb-4">Frequently Asked Questions</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-body-md font-medium text-foreground mb-1">
                      How quickly can I get started?
                    </h4>
                    <p className="text-body-sm text-muted-foreground">
                      Most customers are up and running within 24-48 hours after connecting their data sources.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-body-md font-medium text-foreground mb-1">
                      Do you offer enterprise pricing?
                    </h4>
                    <p className="text-body-sm text-muted-foreground">
                      Yes! Contact us for custom pricing and SLAs for high-volume or multi-product teams.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-body-md font-medium text-foreground mb-1">
                      Can I see a demo first?
                    </h4>
                    <p className="text-body-sm text-muted-foreground">
                      Absolutely. Schedule a demo above to see how PreChurn works with your specific use case.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Contact;
