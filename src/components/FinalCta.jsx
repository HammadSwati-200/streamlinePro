import { Button } from "./ui/button"; // Assuming you have a Button component

const FinalCTA = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-4">
          Ready to Streamline Your Workflow?
        </h2>
        <p className="text-lg mb-8">
          Join over <span className="font-semibold text-red-500">5,000</span>{" "}
          businesses who trust{" "}
          <span className="text-red-500 font-semibold">StreamlinePro</span> to
          optimize their operations.
        </p>

        {/* Call to Action Buttons */}
        <div className="flex justify-center space-x-4">
          <Button variant="outline">Get Started Now</Button>
          <Button>Start Free Trial</Button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
