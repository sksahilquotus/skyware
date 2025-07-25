"use client";

import * as React from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Calendar } from "../ui/calendar";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils"; // or your own `classnames` helper
import { DateRange } from "react-day-picker";


interface CalendarRangeProps {
  value: DateRange;
  onChange: (range: DateRange) => void;
}

const CalendarRange: React.FC<CalendarRangeProps> = ({ value, onChange }) => {
  const [open, setOpen] = React.useState(false);

  const formatted =
    value.from && value.to
      ? `${format(value.from, "EEE dd MMM")} — ${format(value.to, "EEE dd MMM")}`
      : "Select date range";

  return (
    <div className="flex flex-col">
      <label className="block text-sm font-medium text-gray-600 mb-2">
        Dates
      </label>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className={cn(
              "w-full justify-start text-left h-11 text-gray-900 border-gray-300 hover:border-[#174166] transition-all duration-200 rounded-lg"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4 text-gray-500" />
            {formatted}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0 bg-white border border-gray-200 rounded-lg shadow-lg">
          <Calendar
            mode="range"
            showOutsideDays={false}
            selected={value}
            // onSelect={(range) => range && onChange(range)}
            onSelect={(range, selectedDay) => {
              if (!value.from && !value.to) {
                // No date selected, start new selection
                onChange({ from: selectedDay, to: undefined });
              } else if (value.from && !value.to) {
                // Selecting the second date to complete range
                if (selectedDay && selectedDay.getTime() === value.from.getTime()) {
                  // Same day clicked again, reset
                  onChange({ from: undefined, to: undefined });
                } else {
                  // Set as range
                  onChange({ from: value.from, to: selectedDay });
                }
              } else if (value.from && value.to) {
                // Both from and to are already selected — reset to new 'from'
                onChange({ from: selectedDay, to: undefined });
              }
            }}
            numberOfMonths={2}
            initialFocus
            className="rounded-lg"
          />
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default CalendarRange;
