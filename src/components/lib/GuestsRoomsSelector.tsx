"use client";

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Minus, Plus } from "lucide-react";
import React, { useState } from "react";

const GuestsRoomsSelector = () => {
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);
  const [petFriendly, setPetFriendly] = useState(false);

  const reset = () => {
    setAdults(2);
    setChildren(0);
    setRooms(1);
    setPetFriendly(false);
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className="w-full justify-start text-left font-medium text-black whitespace-normal break-words"
        >
          {`${adults} Adult${adults > 1 ? "s" : ""}, ${children} Child${
            children !== 1 ? "ren" : ""
          }, ${rooms} Room${rooms > 1 ? "s" : ""}`}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[280px] sm:w-[300px] p-4 space-y-4">
        {/* Adults */}
        <div className="flex items-center justify-between">
          <span>Adults</span>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setAdults(Math.max(1, adults - 1))}
            >
              <Minus className="w-4 h-4" />
            </Button>
            <span>{adults}</span>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setAdults(adults + 1)}
            >
              <Plus className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Children */}
        <div className="flex items-center justify-between">
          <span>Children</span>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setChildren(Math.max(0, children - 1))}
            >
              <Minus className="w-4 h-4" />
            </Button>
            <span>{children}</span>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setChildren(children + 1)}
            >
              <Plus className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Rooms */}
        <div className="flex items-center justify-between">
          <span>Rooms</span>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setRooms(Math.max(1, rooms - 1))}
            >
              <Minus className="w-4 h-4" />
            </Button>
            <span>{rooms}</span>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setRooms(rooms + 1)}
            >
              <Plus className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Pet Friendly */}
        <div className="border-t pt-2 space-y-1">
          <div className="flex items-center space-x-2">
            <Checkbox
              checked={petFriendly}
              onCheckedChange={(val) => setPetFriendly(!!val)}
            />
            <div className="text-sm">
              <div className="font-medium">Pet-friendly</div>
              <div className="text-gray-500 text-xs">
                Only show stays that allow pets
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between pt-2 border-t mt-2">
          <Button variant="ghost" size="sm" onClick={reset}>
            Reset
          </Button>
          <Button size="sm" className="bg-blue-600 text-white hover:bg-blue-700">
            Apply
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default GuestsRoomsSelector;