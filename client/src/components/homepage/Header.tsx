// src/components/Header.js
import React from "react";
import { Menu, X } from "lucide-react";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton
} from "@clerk/nextjs";

const Header = ({ toggleMobileMenu, mobileMenuOpen }) => {
  return (
    <header className="bg-white border-b border-gray-200 py-3 px-4 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <div className="bg-blue-500 text-white font-bold py-1 px-3 rounded text-base">
            BookLap
          </div>
          <nav className="hidden md:flex ml-10 space-x-8">
            <a href="#" className="text-gray-700 hover:text-blue-500">
              Book Lapangan
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-500">
              Daftar Lapangan
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-500">
              Bantuan
            </a>
          </nav>
        </div>

        {/* Desktop buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <SignedOut>
            <button className="border border-blue-500 text-blue-500 px-4 py-1 rounded-full">
              <SignInButton />
            </button>
            <button className="bg-green-600 text-white px-4 py-1 rounded-full">
              <SignUpButton />
            </button>
          </SignedOut>
          <SignedIn>
            <button className="text-gray-700 hover:text-blue-500">
              Bookings
            </button>
            <UserButton />
          </SignedIn>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex items-center p-1"
          onClick={toggleMobileMenu}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
};

export default Header;
