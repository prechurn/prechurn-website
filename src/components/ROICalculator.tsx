import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calculator, TrendingUp, DollarSign, Percent } from "lucide-react";
import EmailCaptureModal from "@/components/EmailCaptureModal";

const ROICalculator = () => {
  const [monthlyRevenue, setMonthlyRevenue] = useState("50000");
  const [churnRate, setChurnRate] = useState("5");
  const [selectedPlan, setSelectedPlan] = useState<"starter" | "growth" | "scale">("growth");
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const [results, setResults] = useState({
    annualRevenue: 0,
    monthlyChurnedRevenue: 0,
    annualChurnedRevenue: 0,
    potentialSavingsPercentage: 50, // Assume PreChurn saves 50% of at-risk revenue
    monthlySavings: 0,
    annualSavings: 0,
    prechurnCost: 0,
    netSavings: 0,
    roi: 0,
  });

  const plans = {
    starter: { name: "Starter", fee: 0.15 },
    growth: { name: "Growth", fee: 0.20 },
    scale: { name: "Scale", fee: 0.25 },
  };

  useEffect(() => {
    calculateROI();
  }, [monthlyRevenue, churnRate, selectedPlan]);

  const calculateROI = () => {
    const revenue = parseFloat(monthlyRevenue) || 0;
    const churn = parseFloat(churnRate) || 0;

    const annualRevenue = revenue * 12;
    const monthlyChurnedRevenue = revenue * (churn / 100);
    const annualChurnedRevenue = monthlyChurnedRevenue * 12;

    // Assume PreChurn saves 50% of at-risk revenue (conservative estimate)
    const savingsPercentage = 50;
    const monthlySavings = monthlyChurnedRevenue * (savingsPercentage / 100);
    const annualSavings = monthlySavings * 12;

    // Calculate PreChurn cost based on selected plan
    const performanceFee = plans[selectedPlan].fee;
    const prechurnCost = annualSavings * performanceFee;

    const netSavings = annualSavings - prechurnCost;
    const roi = prechurnCost > 0 ? (netSavings / prechurnCost) * 100 : 0;

    setResults({
      annualRevenue,
      monthlyChurnedRevenue,
      annualChurnedRevenue,
      potentialSavingsPercentage: savingsPercentage,
      monthlySavings,
      annualSavings,
      prechurnCost,
      netSavings,
      roi,
    });
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const formatNumber = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="w-full">
      {/* Input Section */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {/* Left Column - Inputs */}
        <div className="space-y-6">
          <div>
            <label htmlFor="revenue" className="block text-sm font-medium text-foreground mb-2">
              Monthly Recurring Revenue (MRR)
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                $
              </span>
              <Input
                id="revenue"
                type="number"
                value={monthlyRevenue}
                onChange={(e) => setMonthlyRevenue(e.target.value)}
                className="pl-7"
                placeholder="50000"
                min="0"
              />
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              Your total monthly recurring revenue
            </p>
          </div>

          <div>
            <label htmlFor="churn" className="block text-sm font-medium text-foreground mb-2">
              Monthly Churn Rate
            </label>
            <div className="relative">
              <Input
                id="churn"
                type="number"
                value={churnRate}
                onChange={(e) => setChurnRate(e.target.value)}
                className="pr-7"
                placeholder="5"
                min="0"
                max="100"
                step="0.1"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                %
              </span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              Percentage of customers churning each month
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-3">
              Select Plan
            </label>
            <div className="grid grid-cols-3 gap-2">
              {Object.entries(plans).map(([key, plan]) => (
                <button
                  key={key}
                  onClick={() => setSelectedPlan(key as any)}
                  className={`p-3 rounded-lg border text-center transition-all ${
                    selectedPlan === key
                      ? "border-accent bg-accent/10 text-accent"
                      : "border-border bg-card text-muted-foreground hover:border-accent/50"
                  }`}
                >
                  <div className="text-xs font-medium mb-1">{plan.name}</div>
                  <div className="text-lg font-bold">{plan.fee * 100}%</div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Quick Stats */}
        <div className="bg-surface rounded-xl p-6 border border-border">
          <h3 className="text-lg font-semibold text-foreground mb-4">Your Current Situation</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-border">
              <span className="text-body-sm text-muted-foreground">Annual Revenue</span>
              <span className="text-body-md font-semibold text-foreground">
                {formatCurrency(results.annualRevenue)}
              </span>
            </div>
            <div className="flex items-center justify-between pb-3 border-b border-border">
              <span className="text-body-sm text-muted-foreground">Monthly Lost Revenue</span>
              <span className="text-body-md font-semibold text-destructive">
                -{formatCurrency(results.monthlyChurnedRevenue)}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-body-sm text-muted-foreground">Annual Lost Revenue</span>
              <span className="text-lg font-bold text-destructive">
                -{formatCurrency(results.annualChurnedRevenue)}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Results Section */}
      <div className="rounded-2xl bg-gradient-to-br from-accent/5 to-accent/10 border-2 border-accent/20 p-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
            <Calculator className="w-6 h-6 text-accent" />
          </div>
          <div>
            <h3 className="text-display-sm text-foreground">Projected Results with PreChurn</h3>
            <p className="text-body-sm text-muted-foreground">
              Conservative estimate: 50% churn reduction
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Revenue Saved */}
          <div className="bg-card rounded-xl p-5 border border-border">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-4 h-4 text-success" />
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                Revenue Saved
              </span>
            </div>
            <div className="text-2xl font-bold text-success mb-1">
              {formatCurrency(results.annualSavings)}
            </div>
            <p className="text-xs text-muted-foreground">
              {formatCurrency(results.monthlySavings)}/month
            </p>
          </div>

          {/* PreChurn Cost */}
          <div className="bg-card rounded-xl p-5 border border-border">
            <div className="flex items-center gap-2 mb-2">
              <DollarSign className="w-4 h-4 text-accent" />
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                PreChurn Cost
              </span>
            </div>
            <div className="text-2xl font-bold text-foreground mb-1">
              {formatCurrency(results.prechurnCost)}
            </div>
            <p className="text-xs text-muted-foreground">
              {plans[selectedPlan].fee * 100}% of saved revenue
            </p>
          </div>

          {/* Net Savings */}
          <div className="bg-card rounded-xl p-5 border border-accent">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-4 h-4 text-accent" />
              <span className="text-xs font-medium text-accent uppercase tracking-wide">
                Net Savings
              </span>
            </div>
            <div className="text-2xl font-bold text-accent mb-1">
              {formatCurrency(results.netSavings)}
            </div>
            <p className="text-xs text-muted-foreground">
              After PreChurn fees
            </p>
          </div>

          {/* ROI */}
          <div className="bg-card rounded-xl p-5 border border-border">
            <div className="flex items-center gap-2 mb-2">
              <Percent className="w-4 h-4 text-foreground" />
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                ROI
              </span>
            </div>
            <div className="text-2xl font-bold text-foreground mb-1">
              {formatNumber(results.roi)}%
            </div>
            <p className="text-xs text-muted-foreground">
              Return on investment
            </p>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 pt-6 border-t border-accent/20 text-center">
          <p className="text-body-md text-foreground mb-4">
            <strong>You could save {formatCurrency(results.netSavings)}/year</strong> while only 
            paying when we actually prevent churn.
          </p>
          <Button 
            variant="hero" 
            size="lg"
            onClick={() => setIsModalOpen(true)}
          >
            Request Early Access
          </Button>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="mt-6 p-4 rounded-lg bg-muted/30 border border-border">
        <p className="text-xs text-muted-foreground leading-relaxed">
          <strong>Note:</strong> These calculations are estimates based on industry averages. 
          Actual results vary by product, market, and implementation. The 50% churn reduction 
          represents a conservative baseline — many customers see higher retention improvements. 
          "Saved churn" is verified after a 30-day retention window.
        </p>
      </div>

      <EmailCaptureModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        source="roi-calculator"
      />
    </div>
  );
};

export default ROICalculator;
