"use client";

import React, { useState } from "react";
import GuestsRoomsSelector from "./lib/GuestsRoomsSelector";
import BookingSteps from "./lib/BookingSteps";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Calendar22 } from "./lib/Calendar22";

const Header = () => {
  const [checkInDate, setCheckInDate] = useState<Date | undefined>(new Date("2025-07-17"));
  const [checkOutDate, setCheckOutDate] = useState<Date | undefined>(new Date("2025-07-18"));

  return (
    <div className="bg-[#174166] text-white py-6 pb-10">
      <div className="max-w-7xl mx-auto px-4">
        {/* Top Row: Logo + Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
          <img
            src="https://skywaresystems.net/HotelImages/Skyware/SkywareLogo2.png"
            alt="Skyware Logo"
            className="h-14 w-auto"
          />

          <div className="flex gap-2">
            <Button className="bg-orange-300 hover:bg-orange-400">
              Sign In
            </Button>
            <Button className="bg-orange-300 hover:bg-orange-400">
              Help
            </Button>
          </div>
        </div>

        {/* Search Form */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <div className="grid grid-cols-1 xl:grid-cols-6 gap-4">
            {/* Where to */}
            <div className="flex flex-col">
              <label className="text-sm text-gray-500 mb-1">Where to</label>
              <Input
                type="text"
                placeholder="Enter destination"
                defaultValue="Delhi"
                className="text-black w-full"
              />
            </div>

            {/* Check-in */}
            <div className="flex flex-col">
              <Calendar22 label="Check-in" value={checkInDate} onChange={setCheckInDate} />
            </div>

            {/* Check-out */}
            <div className="flex flex-col">
              <Calendar22 label="Check-out" value={checkOutDate} onChange={setCheckOutDate} />
            </div>

            {/* Code */}
            <div className="flex flex-col">
              <label className="text-sm text-gray-500 mb-1">Code</label>
              <Input
                type="text"
                placeholder="Enter code"
                className="text-black w-full"
              />
            </div>

            {/* Packages */}
            <div className="flex flex-col">
              <label className="text-sm text-gray-500 mb-1">Packages</label>
              <Select>
                <SelectTrigger className="text-black w-full h-10">
                  <SelectValue placeholder="Select a package" />
                </SelectTrigger>
                <SelectContent className="text-black">
                  <SelectGroup>
                    <SelectItem value="romance">Romance Package</SelectItem>
                    <SelectItem value="golf">Golf Package</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            {/* Guests & Rooms */}
            <div className="flex flex-col">
              <label className="text-sm text-gray-500 mb-1">Guests & Rooms</label>
              <GuestsRoomsSelector />
            </div>
          </div>
        </div>

        <BookingSteps />
      </div>
    </div>
  );
};

export default Header;