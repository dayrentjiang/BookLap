// src/components/CTASection.js
import React from "react";

const CTASection = () => {
  return (
    <section className="py-6 md:py-8">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="bg-blue-500 rounded-lg p-6 md:p-8 text-center">
          <h2 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">
            Ready to book your court?
          </h2>
          <button className="bg-white text-blue-500 font-bold py-2 md:py-3 px-6 md:px-8 rounded-full hover:bg-blue-50 transition-colors text-sm md:text-base">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
