"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";
import { Calendar } from "../ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";

interface Calendar22Props {
  label: string;
  value: Date | undefined;
  onChange: (date: Date | undefined) => void;
}

const Calendar22: React.FC<Calendar22Props> = ({ label, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col">
      <label className="block text-sm font-medium text-gray-600 mb-2">
        {label}
      </label>
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className="w-full justify-start text-left h-11 text-gray-900 border-gray-300 hover:border-[#174166] transition-all duration-200 rounded-lg"
          >
            <CalendarIcon className="mr-2 h-4 w-4 text-gray-500" />
            {value ? format(value, "MMM dd, yyyy") : "Select date"}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0 bg-white border border-gray-200 rounded-lg shadow-lg">
          <Calendar
            mode="single"
            selected={value}
            onSelect={(date) => {
              onChange(date);
              setIsOpen(false);
            }}
            initialFocus
            className="rounded-lg"
          />
        </PopoverContent>
      </Popover>
    </div>
  );
};

export { Calendar22 };