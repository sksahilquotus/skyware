import { RoomCard } from "@/components/room-card/RoomCard";
import React from "react";

export default function RoomsPage() {
  const rooms = [
    {
      title: "Non Smoking King",
      images: [
        "https://www.skywaresystems.net/hotelimages/demo/NSK_1.jpg",
        "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "/non-smoking-king-room-3.jpg",
      ],
      maxGuests: 2,
      beds: 1,
      price: 200,
      total: 222,
    },
    {
      title: "Deluxe Queen Suite",
      images: ["/deluxe-queen-room-1.jpg", "/deluxe-queen-room-2.jpg"],
      maxGuests: 4,
      beds: 2,
      price: 250,
      total: 277.5,
    },
    {
      title: "Executive King Suite",
      images: ["/executive-king-room-1.jpg", "/executive-king-room-2.jpg"],
      maxGuests: 3,
      beds: 1,
      price: 300,
      total: 333,
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 py-10 px-4">
      <h1 className="font-sans text-center text-3xl font-bold mb-8 text-[#174166]">
        Available Rooms
      </h1>

      {rooms.map((room, idx) => (
        <RoomCard key={idx} {...room} />
      ))}
    </main>
  );
}
