import React from "react";
import { Search, FileText, Users, Check } from "lucide-react";
import { Fade } from "react-awesome-reveal"; // animation import

const steps = [
  {
    title: "Create Your Profile",
    description:
      "Sign up and create a detailed profile with your preferences, lifestyle habits, and what you're looking for in a roommate.",
    icon: FileText,
    color: "bg-purple-500",
  },
  {
    title: "Browse Listings",
    description:
      "Search through available roommate listings based on location, budget, and compatibility with your lifestyle.",
    icon: Search,
    color: "bg-blue-500",
  },
  {
    title: "Connect & Chat",
    description:
      "Connect with potential roommates, chat within our secure platform, and find your ideal roommate match.",
    icon: Users,
    color: "bg-green-500",
  },
  {
    title: "Find Your Match",
    description:
      "Arrange to meet in person or virtually, discuss details, and finalize your perfect roommate arrangement.",
    icon: Check,
    color: "bg-orange-500",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-16 md:px-3">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl text-primary font-bold mb-2">How It Works</h2>
          <p className="max-w-2xl text-primary mx-auto">
            Finding your perfect roommate is easy with our simple step-by-step
            process
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Fade direction="up" triggerOnce cascade damping={0.1} key={index}>
              <div className="border border-primary rounded-lg shadow-sm p-6 flex flex-col items-center text-center group hover:shadow-md transition-shadow w-11/12 mx-auto">
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 text-white ${step.color}`}
                >
                  <step.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary group-hover:text-primary transition-colors">
                  {step.title}
                </h3>
                <p className="">{step.description}</p>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
