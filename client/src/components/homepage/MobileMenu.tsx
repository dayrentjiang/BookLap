// src/components/MobileMenu.js
import React from "react";
import { Home, Map, HelpCircle } from "lucide-react";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton
} from "@clerk/nextjs";

const MobileMenu = () => {
  return (
    <div className="md:hidden fixed inset-0 bg-white z-40 pt-16 px-4">
      <div className="flex flex-col space-y-4 mt-4">
        <a
          href="#"
          className="flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded"
        >
          <Home size={20} className="mr-3" />
          Book Lapangan
        </a>
        <a
          href="#"
          className="flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded"
        >
          <Map size={20} className="mr-3" />
          Daftar Lapangan
        </a>
        <a
          href="#"
          className="flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded"
        >
          <HelpCircle size={20} className="mr-3" />
          Bantuan
        </a>

        <div className="border-t border-gray-200 my-4 pt-4">
          <SignedOut>
            <button className="w-full py-2 px-4 mb-3 border border-blue-500 text-blue-500 rounded-full">
              <SignInButton />
            </button>
            <button className="w-full py-2 px-4 bg-green-600 text-white rounded-full">
              <SignUpButton />
            </button>
          </SignedOut>
          <SignedIn>
            <div className="flex items-center justify-center mb-3">
              <UserButton />
            </div>
            <a
              href="/bookings"
              className="w-full py-2 px-4 border border-blue-500 text-blue-500 rounded-full block text-center"
            >
              My Bookings
            </a>
          </SignedIn>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
