// src/components/HeroSection.js
import React, { useState } from "react";
import { Search, Calendar, MapPin, ArrowRight } from "lucide-react";
import { sportsCategories } from "./mockData";

const HeroSection = ({ isMobile }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSport, setSelectedSport] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  // Enhanced search functionality
  const handleSearchFocus = () => setIsSearchFocused(true);
  const handleSearchBlur = () => {
    // Small delay to allow clicking on the dropdown items
    setTimeout(() => setIsSearchFocused(false), 150);
  };

  return (
    <section className="bg-blue-500 relative min-h-[60vh] md:min-h-[70vh] flex items-center pt-4">
      <div className="absolute inset-0 opacity-10 bg-pattern-court"></div>
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-16 w-full">
        <div className="max-w-4xl">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 md:mb-6">
            Book your court online, anytime, anywhere!
          </h1>
          <p className="text-white text-base sm:text-lg md:text-xl mb-6 md:mb-10">
            Find and book sports facilities across Indonesia with our
            easy-to-use platform.
          </p>

          {/* Enhanced Single Search Bar */}
          <div
            className={`relative bg-white rounded-full shadow-lg transition-all duration-300 ${
              isSearchFocused ? "ring-4 ring-blue-300" : ""
            }`}
          >
            <div className="flex items-center p-2">
              <Search className="ml-2 md:ml-3 text-blue-500" size={18} />
              <input
                type="text"
                placeholder={
                  isMobile
                    ? "Search venues..."
                    : "Search for sports venues, location, or sport type..."
                }
                className="w-full py-2 md:py-3 px-2 md:px-3 bg-transparent border-none focus:outline-none text-gray-700 text-sm md:text-base"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={handleSearchFocus}
                onBlur={handleSearchBlur}
              />
              <button className="bg-green-600 text-white px-3 md:px-6 py-2 md:py-3 rounded-full font-bold flex items-center text-sm md:text-base">
                {isMobile ? "" : "Search"}
                <ArrowRight
                  size={isMobile ? 18 : 16}
                  className={isMobile ? "" : "ml-2"}
                />
              </button>
            </div>

            {/* Quick Filters (show when search is focused) */}
            {isSearchFocused && (
              <div className="absolute top-full left-0 right-0 bg-white mt-2 p-3 rounded-lg shadow-lg z-10 max-h-[300px] overflow-y-auto">
                <div className="flex flex-wrap gap-2">
                  {sportsCategories.slice(0, isMobile ? 3 : 5).map((sport) => (
                    <button
                      key={sport.name}
                      className={`px-3 py-1 rounded-full text-xs md:text-sm ${
                        selectedSport === sport.name
                          ? "bg-blue-100 text-blue-500"
                          : "bg-gray-100 text-gray-700"
                      } hover:bg-blue-100 hover:text-blue-500 transition-colors`}
                      onClick={() => setSelectedSport(sport.name)}
                    >
                      {sport.icon} {sport.name}
                    </button>
                  ))}
                  <div className="flex items-center ml-auto space-x-2 md:space-x-3 mt-2 md:mt-0">
                    <button className="flex items-center px-2 md:px-3 py-1 rounded-full bg-gray-100 text-gray-700 hover:bg-blue-100 hover:text-blue-500 transition-colors text-xs md:text-sm">
                      <Calendar size={12} className="mr-1" />
                      Date
                    </button>
                    <button className="flex items-center px-2 md:px-3 py-1 rounded-full bg-gray-100 text-gray-700 hover:bg-blue-100 hover:text-blue-500 transition-colors text-xs md:text-sm">
                      <MapPin size={12} className="mr-1" />
                      Location
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
