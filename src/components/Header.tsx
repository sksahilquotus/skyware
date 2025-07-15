"use client";

import React, { useState } from "react";
import GuestsRoomsSelector from "./lib/GuestsRoomsSelector";
import BookingSteps from "./lib/BookingSteps";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Calendar22 } from "./lib/Calendar22";
import { HelpCircle, User } from "lucide-react";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  const [checkInDate, setCheckInDate] = useState<Date | undefined>(new Date("2025-07-17"));
  const [checkOutDate, setCheckOutDate] = useState<Date | undefined>(new Date("2025-07-18"));

  return (
    <div className="bg-gradient-to-b from-[#174166] to-[#1e4a73] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Navigation */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-4">
          <div className="flex items-center">
            <img
              src="https://skywaresystems.net/HotelImages/Skyware/SkywareLogo2.png"
              alt="Skyware Logo"
              className="h-12 w-auto"
            />
          </div>

          <div className="flex items-center gap-3">
            <Button 
              size="sm"
              className="bg-yellow-400 hover:bg-yellow-500 text-[#174166] font-medium px-4 py-2 rounded-lg transition-all duration-200 flex items-center gap-2 shadow-md hover:shadow-lg"
              onClick={() => router.push("/sign-in")}
            >
              <User className="h-4 w-4" />
              Sign In
            </Button>
            <Button 
              size="sm"
              variant="outline"
              className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-[#174166] font-medium px-4 py-2 rounded-lg transition-all duration-200 flex items-center gap-2"
            >
              <HelpCircle className="h-4 w-4" />
              Help
            </Button>
          </div>
        </div>

        {/* Search Form */}
        <div className="pb-8">
          <div className="bg-white rounded-2xl shadow-xl p-6 border-t-4 border-yellow-400">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 gap-4">
              {/* Destination */}
              <div className="xl:col-span-1">
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Destination
                </label>
                <Input
                  type="text"
                  placeholder="Enter destination"
                  defaultValue="Delhi"
                  className="text-gray-900 border-gray-300 focus:border-[#174166] focus:ring-[#174166] rounded-lg h-11 transition-all duration-200"
                />
              </div>

              {/* Check-in */}
              <div className="xl:col-span-1">
                <Calendar22 label="Check-in" value={checkInDate} onChange={setCheckInDate} />
              </div>

              {/* Check-out */}
              <div className="xl:col-span-1">
                <Calendar22 label="Check-out" value={checkOutDate} onChange={setCheckOutDate} />
              </div>

              {/* Promo Code */}
              <div className="xl:col-span-1">
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Promo Code
                </label>
                <Input
                  type="text"
                  placeholder="Enter code"
                  className="text-gray-900 border-gray-300 focus:border-[#174166] focus:ring-[#174166] rounded-lg h-11 transition-all duration-200"
                />
              </div>

              {/* Packages */}
              <div className="xl:col-span-1">
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Packages
                </label>
                <Select>
                  <SelectTrigger className="text-gray-900 border border-gray-300 focus:border-[#174166] focus:ring-[#174166] rounded-lg transition-all duration-200 h-11 min-h-[2.75rem] flex items-center">
                    <SelectValue placeholder="Select package" />
                  </SelectTrigger>
                  <SelectContent className="text-gray-900">
                    <SelectGroup>
                      <SelectItem value="romance">Romance Package</SelectItem>
                      <SelectItem value="golf">Golf Package</SelectItem>
                      {/* <SelectItem value="business">Business Package</SelectItem>
                      <SelectItem value="family">Family Package</SelectItem> */}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              {/* Guests & Rooms */}
              <div className="xl:col-span-1">
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Guests & Rooms
                </label>
                <GuestsRoomsSelector />
              </div>
            </div>

            {/* Search Button */}
            {/* <div className="mt-6 flex justify-center">
              <Button 
                size="lg"
                className="bg-[#174166] hover:bg-[#1e4a73] text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 shadow-md hover:shadow-lg min-w-[200px]"
              >
                <Search className="h-5 w-5" />
                Search Hotels
              </Button>
            </div> */}
          </div>
        </div>

        {/* Booking Steps */}
        <div className="pb-6">
          <BookingSteps />
        </div>
      </div>
    </div>
  );
};

export default Header;