// src/components/MobileNavigation.js
import React from "react";
import { Home, MapPin, Calendar, User } from "lucide-react";

const MobileNavigation = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-2 px-4 flex justify-around z-40">
      <a href="#" className="flex flex-col items-center text-blue-500">
        <Home size={20} />
        <span className="text-xs mt-1">Home</span>
      </a>
      <a href="#" className="flex flex-col items-center text-gray-600">
        <MapPin size={20} />
        <span className="text-xs mt-1">Venues</span>
      </a>
      <a href="#" className="flex flex-col items-center text-gray-600">
        <Calendar size={20} />
        <span className="text-xs mt-1">Bookings</span>
      </a>
      <a href="#" className="flex flex-col items-center text-gray-600">
        <User size={20} />
        <span className="text-xs mt-1">Profile</span>
      </a>
    </div>
  );
};

export default MobileNavigation;
