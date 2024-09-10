import { CheckIcon } from "@heroicons/react/24/solid";
import { Button } from "./ui/button";

const plansData = [
  {
    name: "Basic",
    price: "$19/month",
    description: "Perfect for individuals or small teams.",
    features: [
      "5 Projects",
      "Basic Analytics",
      "Email Support",
      "10GB Storage",
    ],
    buttonText: "Get Started",
  },
  {
    name: "Pro",
    price: "$49/month",
    description: "Ideal for growing teams and businesses.",
    features: [
      "Unlimited Projects",
      "Advanced Analytics",
      "Priority Email Support",
      "100GB Storage",
    ],
    buttonText: "Upgrade Now",
    mostPopular: true, // Highlight this plan
  },
  {
    name: "Enterprise",
    price: "Contact Us",
    description: "Custom solutions for large enterprises.",
    features: [
      "Dedicated Support",
      "Custom Analytics",
      "Unlimited Storage",
      "Onboarding Assistance",
    ],
    buttonText: "Contact Sales",
  },
];

const PricingPlans = () => {
  return (
    <section className="py-16" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold tracking-tight text-center">
          Choose the <span className="text-red-500">Plan </span>
          That <span className="text-red-500">Suits</span> You
        </h2>
        <p className="mb-12 mt-2">Find the right solution for your needs.</p>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plansData.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8  rounded-lg shadow-lg ${
                plan.mostPopular ? "border-4 border-red-500" : ""
              }`}
            >
              {/* Most Popular Ribbon */}
              {plan.mostPopular && (
                <span className="absolute top-0 right-0 px-4 py-1 bg-red-500 text-xs font-semibold rounded-bl-lg text-white">
                  Most Popular
                </span>
              )}

              {/* Plan Info */}
              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
              <p className=" mb-8">{plan.description}</p>
              <div className="text-3xl font-extrabold mb-4">{plan.price}</div>

              {/* Plan Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center justify-center">
                    <CheckIcon className="h-6 w-6 text-green-500 mr-3" />
                    <span className="">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Call to Action */}
              <Button
                className={`w-full py-3 text-sm font-semibold rounded-lg ${
                  plan.mostPopular ? "" : "bg-gray-800 hover:bg-gray-900"
                }`}
              >
                {plan.buttonText}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
