// src/components/VenueCard.js
import React from "react";
import { Star } from "lucide-react";

const VenueCard = ({ venue }) => {
  const formatPrice = (price) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:translate-y-[-4px]">
      <div className="relative">
        <img
          src={venue.image}
          alt={venue.name}
          className="w-full h-40 md:h-48 object-cover"
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-20"></div>
      </div>
      <div className="p-4 md:p-6">
        <div className="flex justify-between items-start">
          <h3 className="text-base md:text-lg font-bold text-gray-800">
            {venue.name}
          </h3>
          <div className="flex items-center bg-blue-50 text-blue-500 px-2 py-1 rounded-full text-xs md:text-sm">
            <Star size={12} fill="#4285F4" className="mr-1" />
            {venue.rating}
          </div>
        </div>
        <p className="text-sm md:text-base text-gray-600 mt-2">
          {venue.sport} • {venue.courts} Courts
        </p>
        <p className="text-sm md:text-base text-gray-800 font-bold mt-3 md:mt-4">
          {formatPrice(venue.price)} / hour
        </p>
        <button className="mt-3 md:mt-4 bg-green-600 text-white font-bold py-2 px-5 md:px-6 rounded-full hover:bg-green-700 transition-colors text-sm md:text-base">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default VenueCard;
