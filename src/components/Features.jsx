"use client";
import React from "react";
import {
  CogIcon,
  ChartBarIcon,
  UsersIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";
import FeatureImage from "../../public/images/file.png";
import { Button } from "./ui/button";
import FeatureCard from "./FeatureCard";

const Features = () => {
  const featureCardsData = [
    {
      title: "Task Automation Simplified",
      description:
        "Automate repetitive tasks with a few clicks and improve productivity.",
      icon: CogIcon,
    },
    {
      title: "Real-Time Analytics",
      description:
        "Access actionable insights to make informed business decisions instantly.",
      icon: ChartBarIcon,
    },
    {
      title: "Collaboration Tools",
      description:
        "Enable seamless communication and file sharing among your team members.",
      icon: UsersIcon,
    },
  ];

  return (
    <section className="py-16" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold tracking-tight text-center">
          Why Choose <span className="text-red-500">StreamlinePro?</span>
        </h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 items-center gap-16">
          {/* Content Column */}
          <div className="flex flex-col">
            {/* Feature 1 */}
            {featureCardsData.map((card, index) => (
              <FeatureCard
                key={index}
                title={card.title}
                description={card.description}
                Icon={card.icon}
              />
            ))}

            <div>
              <Button>
                Get Started
                <ArrowRightIcon className="ml-2 h-5 w-5" aria-hidden="true" />
              </Button>
            </div>
          </div>

          {/* Image Column */}
          <div className="hidden md:flex md:flex-col">
            {/* Add an image that you want to display for all content columns */}
            <img
              src={FeatureImage.src}
              alt="Section Image"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
