import { useState, useEffect } from "react";
import { TrendingUp, TrendingDown, Users, Zap, DollarSign, AlertCircle, ArrowUpRight } from "lucide-react";

interface Metric {
  label: string;
  value: string;
  change: string;
  trend: "up" | "down";
  icon: any;
  color: string;
}

const DashboardPreview = () => {
  const [activeTab, setActiveTab] = useState<"overview" | "interventions" | "revenue">("overview");

  const metrics: Metric[] = [
    {
      label: "Users at Risk",
      value: "47",
      change: "-12% from last month",
      trend: "down",
      icon: AlertCircle,
      color: "text-destructive",
    },
    {
      label: "Active Interventions",
      value: "23",
      change: "+8% from last month",
      trend: "up",
      icon: Zap,
      color: "text-accent",
    },
    {
      label: "Revenue Saved (30d)",
      value: "$12,450",
      change: "+24% from last month",
      trend: "up",
      icon: DollarSign,
      color: "text-success",
    },
    {
      label: "Save Rate",
      value: "68%",
      change: "+5% from last month",
      trend: "up",
      icon: TrendingUp,
      color: "text-success",
    },
  ];

  const recentInterventions = [
    {
      user: "sarah@example.com",
      riskLevel: "High",
      intervention: "Feature adoption prompt",
      status: "Active",
      mrr: "$99",
    },
    {
      user: "mike@company.io",
      riskLevel: "Medium",
      intervention: "Pause offer",
      status: "Converted",
      mrr: "$249",
    },
    {
      user: "alex@startup.com",
      riskLevel: "High",
      intervention: "Check-in email",
      status: "Active",
      mrr: "$149",
    },
    {
      user: "emma@saas.co",
      riskLevel: "Low",
      intervention: "Educational content",
      status: "Active",
      mrr: "$49",
    },
  ];

  const savedRevenue = [
    { month: "Nov", amount: 8200 },
    { month: "Dec", amount: 9800 },
    { month: "Jan", amount: 12450 },
  ];

  return (
    <div className="w-full">
      {/* Dashboard Header */}
      <div className="mb-6 p-4 bg-surface border border-border rounded-xl flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-1">PreChurn Dashboard</h3>
          <p className="text-body-sm text-muted-foreground">
            Real-time churn prevention metrics and insights
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-muted-foreground">Last updated:</span>
          <span className="text-xs font-medium text-foreground">2 minutes ago</span>
        </div>
      </div>

      {/* Tabs */}
      <div className="mb-6 flex gap-2 p-1 bg-surface rounded-xl border border-border">
        {[
          { id: "overview", label: "Overview" },
          { id: "interventions", label: "Interventions" },
          { id: "revenue", label: "Revenue Impact" },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`flex-1 px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
              activeTab === tab.id
                ? "bg-card text-foreground shadow-soft"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Overview Tab */}
      {activeTab === "overview" && (
        <div className="space-y-6 animate-fade-in">
          {/* Metrics Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {metrics.map((metric, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-4 hover:border-accent/30 transition-colors"
              >
                <div className="flex items-center justify-between mb-3">
                  <metric.icon className={`w-5 h-5 ${metric.color}`} />
                  {metric.trend === "up" ? (
                    <TrendingUp className="w-4 h-4 text-success" />
                  ) : (
                    <TrendingDown className="w-4 h-4 text-success" />
                  )}
                </div>
                <div className="text-2xl font-bold text-foreground mb-1">{metric.value}</div>
                <div className="text-xs text-muted-foreground mb-2">{metric.label}</div>
                <div className="text-xs text-success">{metric.change}</div>
              </div>
            ))}
          </div>

          {/* Recent Activity */}
          <div className="bg-card border border-border rounded-xl p-6">
            <h4 className="text-lg font-semibold text-foreground mb-4">Recent Interventions</h4>
            <div className="space-y-3">
              {recentInterventions.map((intervention, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-surface rounded-lg hover:bg-surface-hover transition-colors"
                >
                  <div className="flex items-center gap-4 flex-1">
                    <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                      <Users className="w-4 h-4 text-accent" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-foreground">{intervention.user}</div>
                      <div className="text-xs text-muted-foreground">{intervention.intervention}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span
                      className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                        intervention.riskLevel === "High"
                          ? "bg-destructive/10 text-destructive"
                          : intervention.riskLevel === "Medium"
                          ? "bg-orange-500/10 text-orange-500"
                          : "bg-accent/10 text-accent"
                      }`}
                    >
                      {intervention.riskLevel} Risk
                    </span>
                    <span className="text-sm font-semibold text-foreground min-w-[60px] text-right">
                      {intervention.mrr}
                    </span>
                    <span
                      className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                        intervention.status === "Converted"
                          ? "bg-success/10 text-success"
                          : "bg-accent/10 text-accent"
                      }`}
                    >
                      {intervention.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Interventions Tab */}
      {activeTab === "interventions" && (
        <div className="space-y-6 animate-fade-in">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="text-3xl font-bold text-foreground mb-2">156</div>
              <div className="text-sm text-muted-foreground mb-1">Total Interventions</div>
              <div className="text-xs text-success">This month</div>
            </div>
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="text-3xl font-bold text-success mb-2">68%</div>
              <div className="text-sm text-muted-foreground mb-1">Success Rate</div>
              <div className="text-xs text-success">+5% from last month</div>
            </div>
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="text-3xl font-bold text-accent mb-2">23</div>
              <div className="text-sm text-muted-foreground mb-1">Currently Active</div>
              <div className="text-xs text-muted-foreground">Real-time monitoring</div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl p-6">
            <h4 className="text-lg font-semibold text-foreground mb-4">Intervention Types Performance</h4>
            <div className="space-y-3">
              {[
                { type: "Feature adoption prompts", sent: 45, success: 32, rate: 71 },
                { type: "Pause/downgrade offers", sent: 28, success: 19, rate: 68 },
                { type: "Educational check-ins", sent: 38, success: 24, rate: 63 },
                { type: "Onboarding recovery", sent: 23, success: 16, rate: 70 },
                { type: "Win-back campaigns", sent: 22, success: 15, rate: 68 },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-foreground">{item.type}</span>
                      <span className="text-sm text-muted-foreground">
                        {item.success}/{item.sent} saved
                      </span>
                    </div>
                    <div className="w-full bg-surface rounded-full h-2">
                      <div
                        className="bg-accent rounded-full h-2 transition-all duration-500"
                        style={{ width: `${item.rate}%` }}
                      />
                    </div>
                  </div>
                  <div className="text-lg font-bold text-accent min-w-[60px] text-right">
                    {item.rate}%
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Revenue Tab */}
      {activeTab === "revenue" && (
        <div className="space-y-6 animate-fade-in">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-xl p-6">
              <h4 className="text-lg font-semibold text-foreground mb-4">Revenue Saved (30d)</h4>
              <div className="text-4xl font-bold text-success mb-2">$12,450</div>
              <div className="text-sm text-muted-foreground mb-4">
                106 customers retained • Average: $117.45/customer
              </div>
              <div className="flex items-center gap-2 text-sm text-success">
                <ArrowUpRight className="w-4 h-4" />
                <span>+24% from last month</span>
              </div>
            </div>

            <div className="bg-card border border-border rounded-xl p-6">
              <h4 className="text-lg font-semibold text-foreground mb-4">Your Investment</h4>
              <div className="text-4xl font-bold text-foreground mb-2">$2,490</div>
              <div className="text-sm text-muted-foreground mb-4">
                20% performance fee (Growth plan)
              </div>
              <div className="flex items-center gap-2 text-sm text-accent">
                <TrendingUp className="w-4 h-4" />
                <span>5x ROI this month</span>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl p-6">
            <h4 className="text-lg font-semibold text-foreground mb-6">Revenue Trend (Last 3 Months)</h4>
            <div className="flex items-end justify-between gap-4 h-48">
              {savedRevenue.map((item, index) => (
                <div key={index} className="flex-1 flex flex-col items-center gap-2">
                  <div className="w-full flex items-end justify-center h-full">
                    <div
                      className="w-full bg-accent rounded-t-lg transition-all duration-500 hover:bg-accent/80"
                      style={{
                        height: `${(item.amount / 15000) * 100}%`,
                      }}
                    />
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-semibold text-foreground">
                      ${(item.amount / 1000).toFixed(1)}k
                    </div>
                    <div className="text-xs text-muted-foreground">{item.month}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-accent/10 to-success/10 border border-accent/20 rounded-xl p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                <DollarSign className="w-6 h-6 text-accent" />
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-semibold text-foreground mb-2">Net Impact</h4>
                <p className="text-body-md text-muted-foreground mb-3">
                  After PreChurn fees, you've kept <strong className="text-foreground">$9,960</strong> in 
                  revenue that would have churned this month. That's money back in your business.
                </p>
                <div className="text-sm text-accent font-medium">
                  Projected annual savings: $119,520 • Your cost: $29,880 • Net gain: $89,640
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardPreview;
