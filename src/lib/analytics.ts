// Analytics tracking utility
// Supports Google Analytics 4 and custom event tracking

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

export const analytics = {
  // Initialize analytics (called on app load)
  init: () => {
    // Google Analytics initialization happens via script tag in index.html
    // This function can be used for additional setup if needed
    console.log("Analytics initialized");
  },

  // Track page views
  pageView: (path: string) => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("config", "G-XXXXXXXXXX", {
        page_path: path,
      });
    }
  },

  // Track custom events
  event: (eventName: string, params?: Record<string, any>) => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", eventName, params);
    }
  },

  // Predefined event trackers
  trackSignup: (source: string) => {
    analytics.event("generate_lead", {
      event_category: "engagement",
      event_label: source,
      value: 1,
    });
  },

  trackCTAClick: (ctaName: string, location: string) => {
    analytics.event("cta_click", {
      event_category: "engagement",
      cta_name: ctaName,
      cta_location: location,
    });
  },

  trackPricingView: (plan: string) => {
    analytics.event("view_pricing", {
      event_category: "engagement",
      plan_name: plan,
    });
  },

  trackFormSubmit: (formName: string, success: boolean) => {
    analytics.event("form_submit", {
      event_category: "engagement",
      form_name: formName,
      success: success,
    });
  },

  trackOutboundLink: (url: string) => {
    analytics.event("click", {
      event_category: "outbound",
      event_label: url,
    });
  },

  // Track scroll depth
  trackScrollDepth: (percentage: number) => {
    analytics.event("scroll", {
      event_category: "engagement",
      percentage: percentage,
    });
  },
};

export default analytics;
