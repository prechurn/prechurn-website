import { TrendingDown } from "lucide-react";

const ProblemSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-tight">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-destructive/10 text-destructive mb-6">
            <TrendingDown className="w-6 h-6" />
          </div>
          
          <h2 className="text-display-md text-foreground mb-6">
            Most churn tools react too late.
          </h2>
          
          <p className="text-body-lg text-muted-foreground leading-relaxed">
            Traditional retention tools only act when a user clicks "cancel" — by then, 
            their intent is set, your leverage is gone, and the best you can do is offer a desperate discount.
          </p>
          
          <div className="mt-10 p-6 rounded-2xl bg-surface border border-border">
            <p className="text-body-md text-foreground font-medium mb-2">
              The truth is:
            </p>
            <p className="text-body-lg text-muted-foreground">
              Churn starts weeks or months before the cancel button is ever clicked. 
              Usage drops, engagement fades, features go ignored — and most tools see none of it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
