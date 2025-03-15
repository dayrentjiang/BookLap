// src/components/HowItWorks.js
import React from "react";

const HowItWorks = () => {
  const steps = [
    {
      step: 1,
      title: "Find a Court",
      description: "Search by sport or location"
    },
    {
      step: 2,
      title: "Book Online",
      description: "Select time and pay securely"
    },
    {
      step: 3,
      title: "Play!",
      description: "Receive confirmation and enjoy"
    }
  ];

  return (
    <section className="py-8 md:py-12 bg-blue-50">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <h2 className="text-xl md:text-2xl font-bold text-blue-500 text-center mb-8 md:mb-12">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.step} className="flex flex-col items-center">
              <div className="flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-blue-500 text-white text-xl md:text-2xl font-bold rounded-full mb-3 md:mb-4">
                {step.step}
              </div>
              <h3 className="text-base md:text-lg font-bold text-gray-800 mb-1 md:mb-2">
                {step.title}
              </h3>
              <p className="text-sm md:text-base text-gray-600 text-center">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
