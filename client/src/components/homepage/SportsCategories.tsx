// src/components/SportsCategories.js
import React from "react";

const SportsCategories = ({ sportsCategories, isMobile }) => {
  return (
    <section className="py-8 md:py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6 md:mb-8">
          Browse by Sport
        </h2>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-3 md:gap-6">
          {sportsCategories.map((sport) => (
            <div key={sport.name} className="flex flex-col items-center">
              <div
                className="flex items-center justify-center w-16 h-16 md:w-24 md:h-24 rounded-full mb-2 md:mb-4 border-2 border-blue-500 transition-transform hover:scale-105"
                style={{
                  backgroundColor:
                    sport.name === "More" ? "#E8F0FE" : sport.color + "20"
                }}
              >
                <span className="text-xl md:text-3xl">{sport.icon}</span>
              </div>
              <span className="font-semibold text-blue-500 text-xs md:text-sm text-center">
                {sport.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SportsCategories;
