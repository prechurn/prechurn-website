import ROICalculator from "@/components/ROICalculator";

const ROICalculatorSection = () => {
  return (
    <section id="calculator" className="section-padding bg-background">
      <div className="container-wide">
        <div className="text-center mb-12">
          <h2 className="text-display-md text-foreground mb-4">
            Calculate your potential savings
          </h2>
          <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
            See how much revenue you could save with PreChurn — and exactly what it would cost you.
          </p>
        </div>

        <ROICalculator />
      </div>
    </section>
  );
};

export default ROICalculatorSection;
