"use client";

import React, { useEffect, useState } from "react";
import GuestsRoomsSelector from "./lib/GuestsRoomsSelector";
import BookingSteps from "./lib/BookingSteps";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import CalendarRange from "./lib/Calendar22";
import { HelpCircle, User } from "lucide-react";
import { useRouter } from "next/navigation";
import { DateRange } from "react-day-picker";
import { format } from "date-fns/format";
import { useDispatch } from "react-redux";
import { setCheckInDate, setCheckOutDate } from "@/store/slices/counterSlice";

const Header = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [dateRange, setDateRange] = useState<DateRange>({
    from: new Date("2025-07-18"),
    to: new Date("2025-07-31"),
  });

  useEffect(() => {
    console.log("Date Range Changed:", dateRange);
    if (dateRange?.from && dateRange?.to) {
      const formattedCheckIn = format(new Date(dateRange.from), "EEE dd"); // e.g., "Fri 18"
      const formattedCheckOut = format(new Date(dateRange.to), "EEE dd");  // e.g., "Tue 23"

      dispatch(setCheckInDate({ date: formattedCheckIn }));
      dispatch(setCheckOutDate({ date: formattedCheckOut }));
    }
  
  }, [dateRange, dispatch])
  

  return (
    <div className="md:sticky md:top-0 md:z-50 bg-gradient-to-b from-[#174166] to-[#1e4a73] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Navigation */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 py-2">
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
              onClick={() => router.push("/help-desk")}
            >
              <HelpCircle className="h-4 w-4" />
              Help
            </Button>
          </div>
        </div>

        {/* Search Form */}
        <div className="pb-4">
          <div className="bg-white rounded-xl shadow-md p-4 border-t-4 border-yellow-400">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4">
              
              {/* Date Range Selector */}
              <div className="xl:col-span-1">
                <CalendarRange value={dateRange} onChange={setDateRange} />
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
                  <SelectTrigger className="text-gray-900 border border-gray-300 focus:border-[#174166] focus:ring-[#174166] rounded-lg transition-all duration-200 h-11 min-h-[2.75rem] flex items-center w-[100%]">
                    <SelectValue placeholder="Select package" />
                  </SelectTrigger>
                  <SelectContent className="text-gray-900">
                    <SelectGroup>
                      <SelectItem value="romance">Romance Package</SelectItem>
                      <SelectItem value="golf">Golf Package</SelectItem>
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
        <div className="pb-2">
          <BookingSteps />
        </div>
      </div>
    </div>
  );
};

export default Header;