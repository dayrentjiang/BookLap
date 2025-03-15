// src/data/mockData.js

// Sports categories data
export const sportsCategories = [
  { name: "Basketball", icon: "🏀", color: "#FFA726" },
  { name: "Tennis", icon: "🎾", color: "#BEED53" },
  { name: "Badminton", icon: "🏸", color: "#90CAF9" },
  { name: "Futsal", icon: "⚽", color: "#66BB6A" },
  { name: "Pickleball", icon: "🏓", color: "#FFD54F" },
  { name: "More", icon: "+", color: "#E8F0FE" }
];

// Popular venues data
export const popularVenues = [
  {
    id: "v1",
    name: "GOR Kelapa Gading",
    sport: "Basketball",
    courts: 4,
    price: 150000,
    rating: 4.2,
    image: "/api/placeholder/300/180",
    location: "North Jakarta",
    amenities: ["Parking", "Changing Rooms", "Showers", "Cafeteria"],
    openingHours: "06:00 - 22:00",
    description:
      "Professional-grade basketball courts with high-quality wooden flooring and regulation equipment."
  },
  {
    id: "v2",
    name: "Alpha Padel Jakarta",
    sport: "Padel",
    courts: 6,
    price: 250000,
    rating: 4.8,
    image: "/api/placeholder/300/180",
    location: "Central Jakarta",
    amenities: ["Parking", "Lounge Area", "Equipment Rental", "Coaching"],
    openingHours: "08:00 - 21:00",
    description:
      "Premium padel courts with the latest artificial turf and professional-grade equipment."
  },
  {
    id: "v3",
    name: "Sekolah Lentera Tennis",
    sport: "Tennis",
    courts: 2,
    price: 200000,
    rating: 4.3,
    image: "/api/placeholder/300/180",
    location: "South Jakarta",
    amenities: ["Parking", "Pro Shop", "Coaching", "Ball Machine"],
    openingHours: "06:00 - 20:00",
    description:
      "Well-maintained clay courts with excellent lighting for evening play."
  },
  {
    id: "v4",
    name: "Senayan Badminton Hall",
    sport: "Badminton",
    courts: 8,
    price: 120000,
    rating: 4.5,
    image: "/api/placeholder/300/180",
    location: "Central Jakarta",
    amenities: ["Parking", "Equipment Rental", "Pro Shop", "Cafeteria"],
    openingHours: "07:00 - 22:00",
    description:
      "Indonesia's premier badminton facility with international standard courts."
  },
  {
    id: "v5",
    name: "Futsal Kingdom",
    sport: "Futsal",
    courts: 3,
    price: 180000,
    rating: 4.0,
    image: "/api/placeholder/300/180",
    location: "West Jakarta",
    amenities: ["Parking", "Changing Rooms", "Floodlights", "Spectator Area"],
    openingHours: "08:00 - 23:00",
    description:
      "Indoor synthetic turf futsal courts with professional goals and markings."
  },
  {
    id: "v6",
    name: "Jakarta Pickleball Club",
    sport: "Pickleball",
    courts: 4,
    price: 140000,
    rating: 4.6,
    image: "/api/placeholder/300/180",
    location: "East Jakarta",
    amenities: ["Parking", "Equipment Rental", "Coaching", "Air Conditioning"],
    openingHours: "09:00 - 20:00",
    description:
      "Dedicated pickleball facility with specially designed courts and equipment rental."
  }
];

// Time slots data
export const timeSlots = [
  { id: 1, time: "07:00", available: true },
  { id: 2, time: "08:00", available: true },
  { id: 3, time: "09:00", available: false },
  { id: 4, time: "10:00", available: false },
  { id: 5, time: "11:00", available: true },
  { id: 6, time: "12:00", available: true },
  { id: 7, time: "13:00", available: true },
  { id: 8, time: "14:00", available: false },
  { id: 9, time: "15:00", available: true },
  { id: 10, time: "16:00", available: true },
  { id: 11, time: "17:00", available: false },
  { id: 12, time: "18:00", available: false },
  { id: 13, time: "19:00", available: true },
  { id: 14, time: "20:00", available: true },
  { id: 15, time: "21:00", available: true }
];

// User mock data
export const userMockData = {
  name: "John Doe",
  email: "john.doe@example.com",
  phone: "+62 812-3456-7890",
  upcomingBookings: [
    {
      id: "b1",
      venueName: "GOR Kelapa Gading",
      sport: "Basketball",
      date: "2025-03-15",
      time: "19:00 - 20:00",
      price: 150000,
      status: "confirmed"
    },
    {
      id: "b2",
      venueName: "Alpha Padel Jakarta",
      sport: "Padel",
      date: "2025-03-20",
      time: "18:00 - 19:00",
      price: 250000,
      status: "confirmed"
    }
  ],
  pastBookings: [
    {
      id: "b3",
      venueName: "Senayan Badminton Hall",
      sport: "Badminton",
      date: "2025-03-05",
      time: "17:00 - 18:00",
      price: 120000,
      status: "completed"
    },
    {
      id: "b4",
      venueName: "Futsal Kingdom",
      sport: "Futsal",
      date: "2025-03-01",
      time: "20:00 - 21:00",
      price: 180000,
      status: "completed"
    },
    {
      id: "b5",
      venueName: "GOR Kelapa Gading",
      sport: "Basketball",
      date: "2025-02-25",
      time: "19:00 - 20:00",
      price: 150000,
      status: "cancelled"
    }
  ],
  favoriteVenues: ["v1", "v3", "v4"]
};

// Reviews data
export const reviewsData = [
  {
    id: "r1",
    venueId: "v1",
    userName: "Sarah L.",
    rating: 5,
    date: "2025-03-01",
    comment: "Great courts, very well maintained. Will definitely come back!"
  },
  {
    id: "r2",
    venueId: "v1",
    userName: "Michael K.",
    rating: 4,
    date: "2025-02-28",
    comment: "Good facilities, but can get crowded during evenings."
  },
  {
    id: "r3",
    venueId: "v2",
    userName: "Jessica R.",
    rating: 5,
    date: "2025-03-05",
    comment:
      "Best padel courts in Jakarta! Professional staff and excellent facilities."
  },
  {
    id: "r4",
    venueId: "v3",
    userName: "David T.",
    rating: 4,
    date: "2025-02-26",
    comment: "Very nice clay courts. Booking was easy through the app."
  },
  {
    id: "r5",
    venueId: "v4",
    userName: "Linda M.",
    rating: 5,
    date: "2025-03-03",
    comment: "World-class badminton courts. Felt like a professional player!"
  }
];

// Featured promotions
export const promotionsData = [
  {
    id: "p1",
    title: "Early Bird Special",
    description: "Book before 8 AM and get 20% off!",
    venues: ["v1", "v3", "v4"],
    validUntil: "2025-04-30"
  },
  {
    id: "p2",
    title: "Weekend Package",
    description:
      "Book 2 hours on weekends and get an additional 30 minutes free",
    venues: ["v2", "v5"],
    validUntil: "2025-05-15"
  },
  {
    id: "p3",
    title: "Group Discount",
    description: "Book for a group of 4 or more and get 15% off",
    venues: ["v1", "v2", "v3", "v4", "v5", "v6"],
    validUntil: "2025-04-15"
  }
];

// City locations
export const locations = [
  "North Jakarta",
  "Central Jakarta",
  "South Jakarta",
  "East Jakarta",
  "West Jakarta",
  "Tangerang",
  "Bekasi",
  "Depok",
  "Bogor"
];
