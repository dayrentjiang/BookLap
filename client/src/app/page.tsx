// File: src/pages/index.js or src/app/page.js (depends on your Next.js setup)
"use client";
import React, { useState, useEffect } from "react";
import Header from "../components/homepage/Header";
import MobileMenu from "../components/homepage/MobileMenu";
import HeroSection from "../components/homepage/HeroSection";
import SportsCategories from "../components/homepage/SportsCategories";
import VenueCard from "../components/homepage/VenueCard";
import HowItWorks from "../components/homepage/HowItWorks";
import CTASection from "../components/homepage/CTASection";
import Footer from "../components/homepage/Footer";
import MobileNavigation from "../components/homepage/MobileNavigation";
import {
  sportsCategories,
  popularVenues
} from "../components/homepage/mockData";

const BookLapLandingPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if we're on mobile for conditional rendering
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Set initial value
    checkIsMobile();

    // Add event listener
    window.addEventListener("resize", checkIsMobile);

    // Clean up
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  // Mobile menu toggle
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 min-w-[320px] overflow-x-hidden">
      <Header
        toggleMobileMenu={toggleMobileMenu}
        mobileMenuOpen={mobileMenuOpen}
      />

      {mobileMenuOpen && <MobileMenu />}

      <HeroSection isMobile={isMobile} />

      <SportsCategories
        sportsCategories={sportsCategories}
        isMobile={isMobile}
      />

      <section className="py-8 md:py-12 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6 md:mb-8">
            Popular Venues
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {popularVenues.map((venue) => (
              <VenueCard key={venue.name} venue={venue} />
            ))}
          </div>
          <div className="text-center mt-6 md:mt-8">
            <button className="text-blue-500 border border-blue-500 font-bold py-2 px-6 md:px-8 rounded-full hover:bg-blue-50 transition-colors text-sm md:text-base">
              View All Venues
            </button>
          </div>
        </div>
      </section>

      <HowItWorks />

      <CTASection />

      <Footer isMobile={isMobile} />

      {isMobile && <MobileNavigation />}
    </div>
  );
};

export default BookLapLandingPage;
