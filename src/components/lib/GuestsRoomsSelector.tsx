"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Minus, Plus, Users, Bed } from "lucide-react";

const GuestsRoomsSelector: React.FC = () => {
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);
  const [isOpen, setIsOpen] = useState(false);

  const totalGuests = adults + children;

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className="w-full h-11 text-sm text-gray-900 border-gray-300 hover:border-[#174166] transition-all duration-200 rounded-lg px-3 py-2 flex items-center gap-2 overflow-hidden whitespace-normal break-words text-left"
        >
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <Users className="h-4 w-4 text-gray-500" />
            <span className="truncate">{totalGuests} Guest{totalGuests !== 1 ? 's' : ''}</span>
            <span className="text-gray-400">•</span>
            <Bed className="h-4 w-4 text-gray-500" />
            <span className="truncate">{rooms} Room{rooms !== 1 ? 's' : ''}</span>
          </div>
        </Button>
      </PopoverTrigger>



      <PopoverContent className="w-80 p-4 bg-white border border-gray-200 rounded-lg shadow-lg">
        <div className="space-y-6">
          {/* Adults */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-[#174166]" />
              <div>
                <label className="text-sm font-medium text-gray-700">Adults</label>
                <p className="text-xs text-gray-500">Ages 13 or above</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setAdults(Math.max(1, adults - 1))}
                className="h-8 w-8 p-0 rounded-full border-gray-300 hover:border-[#174166] hover:bg-gray-50"
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="w-8 text-center font-medium text-gray-900">{adults}</span>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setAdults(adults + 1)}
                className="h-8 w-8 p-0 rounded-full border-gray-300 hover:border-[#174166] hover:bg-gray-50"
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Children */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-[#174166]" />
              <div>
                <label className="text-sm font-medium text-gray-700">Children</label>
                <p className="text-xs text-gray-500">Ages 0–12</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setChildren(Math.max(0, children - 1))}
                className="h-8 w-8 p-0 rounded-full border-gray-300 hover:border-[#174166] hover:bg-gray-50"
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="w-8 text-center font-medium text-gray-900">{children}</span>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setChildren(children + 1)}
                className="h-8 w-8 p-0 rounded-full border-gray-300 hover:border-[#174166] hover:bg-gray-50"
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Rooms */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Bed className="h-5 w-5 text-[#174166]" />
              <div>
                <label className="text-sm font-medium text-gray-700">Rooms</label>
                <p className="text-xs text-gray-500">Number of rooms needed</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setRooms(Math.max(1, rooms - 1))}
                className="h-8 w-8 p-0 rounded-full border-gray-300 hover:border-[#174166] hover:bg-gray-50"
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="w-8 text-center font-medium text-gray-900">{rooms}</span>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setRooms(rooms + 1)}
                className="h-8 w-8 p-0 rounded-full border-gray-300 hover:border-[#174166] hover:bg-gray-50"
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Apply Button */}
          <div className="pt-2">
            <Button
              onClick={() => setIsOpen(false)}
              className="w-full bg-[#174166] hover:bg-[#1e4a73] text-white rounded-lg"
            >
              Apply
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default GuestsRoomsSelector;
